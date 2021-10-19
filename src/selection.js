import { globals as api } from './globals';
import { Events } from '@playcanvas/observer';

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
                this._selection.set(previousSelection.map(item => item.latest()).filter(item => !!item), {
                    history: false
                });
            },
            redo: () => {
                // set new selection making sure every item still exists
                this._selection.set(newSelection.map(item => item.latest()).filter(item => !!item), {
                    history: false
                });
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
     * @param {object} options - Options
     * @param {boolean} options.history - Whether to record a history action. Defaults to true.
     * @example
     * ```javascript
     * // add root entity to selection
     * editor.selection.add(editor.entities.root);
     * ```
     */
    add(item, options = {}) {
        if (!this.enabled) return;
        if (this.has(item)) return;

        if (options.history === undefined) {
            options.history = true;
        }

        const history = this._history.enabled;
        if (!options.history) {
            this._history.enabled = false;
        }
        this._history.wrapAction('select', () => {
            if (this._items[0] && this._items[0].constructor !== item.constructor) {
                this.clear();
            }

            this._items.push(item);
            this.emit('add', item);
            this._deferChangeEvt();
        });
        this._history.enabled = history;
    }

    /**
     * Remove item from selection
     *
     * @param {any} item - The item
     * @param {object} options - Options
     * @param {boolean} options.history - Whether to record a history action. Defaults to true.
     * * @example
     * ```javascript
     * // remove root entity from selection
     * editor.selection.remove(editor.entities.root);
     * ```
     */
    remove(item, options = {}) {
        if (!this.enabled) return;

        if (options.history === undefined) {
            options.history = true;
        }

        const index = this._items.indexOf(item);
        if (index !== -1) {

            const history = this._history.enabled;
            if (!options.history) {
                this._history.enabled = false;
            }
            this._history.wrapAction('deselect', () => {
                this._items.splice(index, 1);
                this.emit('remove', item);
                this._deferChangeEvt();
            });
            this._history.enabled = history;
        }
    }

    /**
     * Toggle item selection
     *
     * @param {any} item - The item
     * @param {object} options - Options
     * @param {boolean} options.history - Whether to record a history action. Defaults to true.
     * @example
     * ```javascript
     * // toggle root entity selection
     * editor.selection.toogle(editor.entities.root);
     * ```
     */
    toggle(item, options = {}) {
        if (!this.enabled) return;

        if (options.history === undefined) {
            options.history = true;
        }

        const history = this._history.enabled;
        if (!options.history) {
            this._history.enabled = false;
        }
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

        this._history.enabled = history;
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
     * @param {object} options - Options
     * @param {boolean} options.history - Whether to record a history action. Defaults to true.
     * @example
     * ```javascript
     * editor.selection.clear();
     * ```
     */
    clear(options = {}) {
        if (!this.enabled) return;

        const length = this._items.length;
        if (!length) return;

        if (options.history === undefined) {
            options.history = true;
        }

        const history = this._history.enabled;
        if (!options.history) {
            this._history.enabled = false;
        }
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
        this._history.enabled = history;
    }

    /**
     * Sets current selection
     *
     * @param {any[]} items - The items to select
     * @param {object} options - Options
     * @param {boolean} options.history - Whether to record a history action. Defaults to true.
     * @type {any[]}
     * @example
     * ```javascript
     * // select root entity
     * editor.selection.set([editor.entities.root]);
     * ```
     */
    set(items, options = {}) {
        if (!this.enabled) return;

        if (options.history === undefined) {
            options.history = true;
        }

        const history = this._history.enabled;
        if (!options.history) {
            this._history.enabled = false;
        }
        this._history.wrapAction('modify selection', () => {
            // remove items no longer selected
            const removed = this._items.filter(item => !items.includes(item));
            removed.forEach(item => {
                this.remove(item);
            });

            // add new items
            items.forEach(item => this.add(item));
        });
        this._history.enabled = history;
    }

    /**
     * Gets the selected items. This creates a new array every time it is called.
     *
     * @type {any[]}
     * * @example
     * ```javascript
     * editor.selection.items.add(editor.entities.root);
     * const selectedEntities = editor.selection.items;
     * ```
     */
    get items() {
        return this._items.slice();
    }

    /**
     * Gets the first selected item. Short for this.items[0].
     *
     * @type {any[]}
     */
    get item() {
        return this._items[0];
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
