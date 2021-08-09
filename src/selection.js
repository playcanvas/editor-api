import { globals as api } from './globals';
import { Events } from './pcui';

/**
 * Enables undo / redo of selection changes
 */
class SelectionHistory {
    /**
     * Constructor
     *
     * @param {Selection} selection - The selection API
     * @category Internal
     */
    constructor(selection) {
        this._selection = selection;
        this._enabled = true;
        this._executingAction = false;
    }

    /**
     * Disables / enables selection undo / redo
     *
     * @type {boolean}
     */
    get enabled() {
        return this._enabled;
    }

    set enabled(value) {
        this._enabled = value;
    }

    /**
     * Record history action after executing function.
     * The history action will restore the previous selection.
     *
     * @param {string} name - The history action name
     * @param {Function} fn - The function to execute
     * @private
     */
    wrapAction(name, fn) {
        if (!this._enabled || !api.history || this._executingAction) {
            fn();
            return;
        }

        this._executingAction = true;
        const previousSelection = this._selection.items;
        fn();
        const newSelection = this._selection.items;
        this._executingAction = false;

        api.history.add({
            name: name,
            undo: () => {
                // set previous selection making sure every item still exists
                const enabled = this._enabled;
                this._enabled = false;
                this._selection.items = previousSelection.map(item => item.latest()).filter(item => !!item);
                this._enabled = enabled;
            },
            redo: () => {
                // set new selection making sure every item still exists
                const enabled = this._enabled;
                this._enabled = false;
                this._selection.items = newSelection.map(item => item.latest()).filter(item => !!item);
                this._enabled = enabled;
            }
        });
    }
}

/**
 * Selection API. Allows selecting Entities, Assets etc.
 */
class Selection extends Events {
    /**
     * Constructor
     *
     * @category Internal
     */
    constructor() {
        super();

        this._history = new SelectionHistory(this);
        this._items = [];
        this._enabled = true;
        this._timeoutChange = null;
    }

    /**
     * Fire 'change' event in timeout
     *
     * @private
     */
    _deferChangeEvt() {
        if (this._timeoutChange) return;
        this._timeoutChange = setTimeout(() => {
            this._timeoutChange = null;
            this.emit('change', this.items);
        });
    }

    /**
     * Add item to selection
     *
     * @param {any} item - The item
     * @example
     * ```javascript
     * // add root entity to selection
     * editor.selection.add(editor.entities.root);
     * ```
     */
    add(item) {
        if (!this.enabled) return;
        if (this.has(item)) return;

        this._history.wrapAction('select', () => {
            if (this._items[0] && this._items[0].constructor !== item.constructor) {
                this.clear();
            }

            this._items.push(item);
            this.emit('add', item);
            this._deferChangeEvt();
        });
    }

    /**
     * Remove item from selection
     *
     * @param {any} item - The item
     * * @example
     * ```javascript
     * // remove root entity from selection
     * editor.selection.remove(editor.entities.root);
     * ```
     */
    remove(item) {
        if (!this.enabled) return;

        const index = this._items.indexOf(item);
        if (index !== -1) {
            this._history.wrapAction('deselect', () => {
                this._items.splice(index, 1);
                this.emit('remove', item);
                this._deferChangeEvt();
            });;
        }
    }

    /**
     * Toggle item selection
     *
     * @param {any} item
     * @example
     * ```javascript
     * // toggle root entity selection
     * editor.selection.toogle(editor.entities.root);
     * ```
     */
    toggle(item) {
        if (!this.enabled) return;

        this._history.wrapAction('toggle selection', () => {
            if (this._items[0] && this._items[0].constructor !== item.constructor) {
                this.clear();
            }

            if (this.has(item)) {
                this.remove(item);
            } else {
                this.add(item);
            }
        });
    }

    /**
     * Checks if item is in selection
     *
     * @param {any} item - The item
     * @returns {boolean} If item is in selection
     * @example
     * ```javascript
     * const isRootSelected = editor.selection.has(editor.entities.root);
     * ```
     */
    has(item) {
        return this._items.includes(item);
    }

    /**
     * Clears selection
     *
     * @example
     * ```javascript
     * editor.selection.clear();
     * ```
     */
    clear() {
        if (!this.enabled) return;

        const length = this._items.length;
        if (!length) return;

        this._history.wrapAction('deselect', () => {
            let i = length;
            const changed = (i > 0);
            while (i--) {
                const item = this._items[i];
                this._items.splice(i, 1);
                this.emit('remove', item);
            }

            if (changed) {
                this._deferChangeEvt();
            }
        });
    }

    /**
     * Gets / sets the selected items
     *
     * @type {any[]}
     * @example
     * ```javascript
     * editor.selection.items.add(editor.entities.root);
     * const selectedEntities = editor.selection.items;
     * ```
     */
    get items() {
        return this._items.slice();
    }

    set items(value) {
        if (!this.enabled) return;

        this._history.wrapAction('modify selection', () => {
            // remove items no longer selected
            const removed = this._items.filter(item => !value.includes(item));
            removed.forEach(item => {
                this.remove(item);
            });

            // add new items
            value.forEach(item => this.add(item));
        });
    }

    /**
     * Enables / disables the selection methods
     *
     * @type {boolean}
     */
    get enabled() {
        return this._enabled;
    }

    set enabled(value) {
        this._enabled = value;
    }

    /**
     * Gets the number of selected items
     *
     * @type {number}
     */
    get count() {
        return this._items.length;
    }

    /**
     * Gets the selection history
     *
     * @type {SelectionHistory}
     */
    get history() {
        return this._history;
    }
}

export { Selection, SelectionHistory };
