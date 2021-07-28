(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.api = {}));
}(this, (function (exports) { 'use strict';

    if (!Array.prototype.equals) {
        Object.defineProperty(Array.prototype, 'equals', {
            enumerable: false,
            value: function(array) {
                if (! array)
                    return false;

                if (this.length !== array.length)
                    return false;

                for (var i = 0, l = this.length; i < l; i++) {
                    if (this[i] instanceof Array && array[i] instanceof Array) {
                        if (! this[i].equals(array[i]))
                            return false;
                    } else if (this[i] !== array[i]) {
                        return false;
                    }
                }
                return true;
            }
        });
    }

    /**
     * Global variables
     */
    class globals {

        /**
         * @private
         */
        constructor() { }

        /**
         * The history API
         *
         * @type {import("./history").History}
         */
        static history;

        /**
         * The selection API
         *
         * @type {import("./selection").Selection}
         */
        static selection;

        /**
         * The schema API
         *
         * @type {import("./schema").Schema}
         */
        static schema;

        /**
         * The realtime API
         *
         * @type {import("./realtime").Realtime}
         */
        static realtime;

        /**
         * Global URLs
         *
         * @type {object}
         * @property {string} realtime - The realtime server URL
         */
        static url = {
            realtime: null
        };

        /**
         * The user's access token
         *
         * @type {string}
         */
        static accessToken;

        /**
         * The current project id
         *
         * @type {number}
         */
        static projectId;

        /**
         * The current branch id
         *
         * @type {string}
         */
        static branchId;
    }

    /**
     * Contains various utility methods
     */
    class utils {
        /**
         * @private
         */
        constructor() {

        }

        /**
         * Deep copy an object
         *
         * @param {object} data - The data to copy
         * @returns {object} A copy of the data
         */
        static deepCopy(data) {
            if (data == null || typeof(data) !== 'object')
                return data;

            if (data instanceof Array) {
                var arr = [];
                for (let i = 0; i < data.length; i++) {
                    arr[i] = this.deepCopy(data[i]);
                }
                return arr;
            }

            const obj = {};
            for (const key in data) {
                if (data.hasOwnProperty(key))
                    obj[key] = this.deepCopy(data[key]);
            }
            return obj;
        }
    }

    /******/ var __webpack_modules__ = ({

    /***/ 3896:
    /***/ (function(module) {

    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */

    /* eslint-disable no-unused-vars */

    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;

    function toObject(val) {
      if (val === null || val === undefined) {
        throw new TypeError('Object.assign cannot be called with null or undefined');
      }

      return Object(val);
    }

    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        } // Detect buggy property enumeration order in older V8 versions.
        // https://bugs.chromium.org/p/v8/issues/detail?id=4118


        var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

        test1[5] = 'de';

        if (Object.getOwnPropertyNames(test1)[0] === '5') {
          return false;
        } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


        var test2 = {};

        for (var i = 0; i < 10; i++) {
          test2['_' + String.fromCharCode(i)] = i;
        }

        var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
          return test2[n];
        });

        if (order2.join('') !== '0123456789') {
          return false;
        } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


        var test3 = {};
        'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
          test3[letter] = letter;
        });

        if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
          return false;
        }

        return true;
      } catch (err) {
        // We don't expect any of the above to throw, but better to be safe.
        return false;
      }
    }

    module.exports = shouldUseNative() ? Object.assign : function (target, source) {
      var from;
      var to = toObject(target);
      var symbols;

      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);

        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }

        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);

          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }

      return to;
    };

    /***/ }),

    /***/ 1563:
    /***/ (function(__unused_webpack_module, exports, __webpack_require__) {
    /** @license React v16.14.0
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */


    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

    var l = __webpack_require__(3896);

    function C(a) {
      for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) {
        b += "&args[]=" + encodeURIComponent(arguments[c]);
      }

      return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }

    var D = {
      isMounted: function isMounted() {
        return !1;
      },
      enqueueForceUpdate: function enqueueForceUpdate() {},
      enqueueReplaceState: function enqueueReplaceState() {},
      enqueueSetState: function enqueueSetState() {}
    },
        E = {};

    function F(a, b, c) {
      this.props = a;
      this.context = b;
      this.refs = E;
      this.updater = c || D;
    }

    F.prototype.isReactComponent = {};

    F.prototype.setState = function (a, b) {
      if ("object" !== _typeof(a) && "function" !== typeof a && null != a) throw Error(C(85));
      this.updater.enqueueSetState(this, a, b, "setState");
    };

    F.prototype.forceUpdate = function (a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };

    function G() {}

    G.prototype = F.prototype;

    function H(a, b, c) {
      this.props = a;
      this.context = b;
      this.refs = E;
      this.updater = c || D;
    }

    var I = H.prototype = new G();
    I.constructor = H;
    l(I, F.prototype);
    I.isPureReactComponent = !0;

    /***/ }),

    /***/ 8709:
    /***/ (function(module, __unused_webpack_exports, __webpack_require__) {



    {
      /* unused reexport */ __webpack_require__(1563);
    }

    /***/ }),

    /***/ 9006:
    /***/ (function(__unused_webpack_module, __webpack_exports__) {

    /**
     * @callback HandleEvent
     * @description Callback used by {@link Events} and {@link EventHandle} functions. Note the callback is limited to 8 arguments.
     * @param {*} [arg1] - First argument that is passed from caller.
     * @param {*} [arg2] - Second argument that is passed from caller.
     * @param {*} [arg3] - Third argument that is passed from caller.
     * @param {*} [arg4] - Fourth argument that is passed from caller.
     * @param {*} [arg5] - Fifth argument that is passed from caller.
     * @param {*} [arg6] - Sixth argument that is passed from caller.
     * @param {*} [arg7] - Seventh argument that is passed from caller.
     * @param {*} [arg8] - Eighth argument that is passed from caller.
     */

    /**
     * @class
     * @name Events
     */
    function Events() {
      // _world
      Object.defineProperty(this, '_events', {
        enumerable: false,
        configurable: false,
        writable: true,
        value: {}
      });
      this._suspendEvents = false;
      Object.defineProperty(this, 'suspendEvents', {
        get: function get() {
          return this._suspendEvents;
        },
        set: function set(value) {
          this._suspendEvents = !!value;
        }
      });
    }
    /**
     * @name Events#on
     * @param {string} name - Name
     * @param {HandleEvent} fn - Callback function
     * @returns {EventHandle} EventHandle
     */


    Events.prototype.on = function (name, fn) {
      var events = this._events[name];

      if (events === undefined) {
        this._events[name] = [fn];
      } else {
        if (events.indexOf(fn) === -1) events.push(fn);
      }

      return new EventHandle(this, name, fn);
    };
    /**
     * @name Events#once
     * @param {string} name - Name
     * @param {HandleEvent} fn - Callback function
     * @returns {EventHandle} EventHandle
     */


    Events.prototype.once = function (name, fn) {
      var self = this;
      var evt = this.on(name, function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
        fn.call(self, arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7);
        evt.unbind();
      });
      return evt;
    };
    /**
     * @name Events#emit
     * @param {string} name - Name
     * @param {any} arg0 - First argument
     * @param {any} arg1 - Second argument
     * @param {any} arg2 - Third argument
     * @param {any} arg3 - Fourth argument
     * @param {any} arg4 - Fifth argument
     * @param {any} arg5 - Sixth argument
     * @param {any} arg6 - Seventh argument
     * @param {any} arg7 - Eights argument
     * @returns {Events} Self for chaining.
     */


    Events.prototype.emit = function (name, arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
      if (this._suspendEvents) return;
      var events = this._events[name];
      if (!events) return this;
      events = events.slice(0);

      for (var i = 0; i < events.length; i++) {
        if (!events[i]) continue;

        try {
          events[i].call(this, arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7);
        } catch (ex) {
          console.info('%c%s %c(event error)', 'color: #06f', name, 'color: #f00');
          console.log(ex.stack);
        }
      }

      return this;
    };
    /**
     * @name Events#unbind
     * @param {string} name - Name
     * @param {HandleEvent} fn - Callback function
     * @returns {Events} - This
     */


    Events.prototype.unbind = function (name, fn) {
      if (name) {
        var events = this._events[name];
        if (!events) return this;

        if (fn) {
          var i = events.indexOf(fn);

          if (i !== -1) {
            if (events.length === 1) {
              delete this._events[name];
            } else {
              events.splice(i, 1);
            }
          }
        } else {
          delete this._events[name];
        }
      } else {
        this._events = {};
      }

      return this;
    };
    /**
     * @class
     * @name EventHandle
     * @param {Events} owner - Owner
     * @param {string} name - Name
     * @param {HandleEvent} fn - Callback function
     */


    function EventHandle(owner, name, fn) {
      this.owner = owner;
      this.name = name;
      this.fn = fn;
    }
    /**
     * @name EventHandle#unbind
     */


    EventHandle.prototype.unbind = function () {
      if (!this.owner) return;
      this.owner.unbind(this.name, this.fn);
      this.owner = null;
      this.name = null;
      this.fn = null;
    };
    /**
     * @name EventHandle#call
     */


    EventHandle.prototype.call = function () {
      if (!this.fn) return;
      this.fn.call(this.owner, arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7]);
    };
    /**
     * @name EventHandle#on
     * @param {string} name - Name
     * @param {HandleEvent} fn - Callback function
     * @returns {EventHandle} - EventHandle
     */


    EventHandle.prototype.on = function (name, fn) {
      return this.owner.on(name, fn);
    };

    /* harmony default export */ __webpack_exports__["Z"] = (Events);

    /***/ })

    /******/ });
    /************************************************************************/
    /******/ // The module cache
    /******/ var __webpack_module_cache__ = {};
    /******/ 
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
    /******/ 	// Check if module is in cache
    /******/ 	var cachedModule = __webpack_module_cache__[moduleId];
    /******/ 	if (cachedModule !== undefined) {
    /******/ 		return cachedModule.exports;
    /******/ 	}
    /******/ 	// Create a new module (and put it into the cache)
    /******/ 	var module = __webpack_module_cache__[moduleId] = {
    /******/ 		// no module.id needed
    /******/ 		// no module.loaded needed
    /******/ 		exports: {}
    /******/ 	};
    /******/ 
    /******/ 	// Execute the module function
    /******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/ 
    /******/ 	// Return the exports of the module
    /******/ 	return module.exports;
    /******/ }
    /******/ 
    /************************************************************************/
    /******/ /* webpack/runtime/define property getters */
    /******/ !function() {
    /******/ 	// define getter functions for harmony exports
    /******/ 	__webpack_require__.d = function(exports, definition) {
    /******/ 		for(var key in definition) {
    /******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
    /******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
    /******/ 			}
    /******/ 		}
    /******/ 	};
    /******/ }();
    /******/ 
    /******/ /* webpack/runtime/hasOwnProperty shorthand */
    /******/ !function() {
    /******/ 	__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); };
    /******/ }();
    /******/ 
    /************************************************************************/
    var __webpack_exports__ = {};
    // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
    !function() {

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      "Oj": function() { return /* reexport */ binding_base; },
      "Ce": function() { return /* reexport */ binding_element_observers; },
      "RC": function() { return /* reexport */ binding_observers_element; },
      "Kx": function() { return /* reexport */ binding_two_way; },
      "zW": function() { return /* reexport */ events/* default */.Z; },
      "Ay": function() { return /* reexport */ binding_history; },
      "Qj": function() { return /* reexport */ observer; },
      "ki": function() { return /* reexport */ observer_history; },
      "B3": function() { return /* reexport */ observer_list; }
    });

    // EXTERNAL MODULE: ./src/binding/events.js
    var events = __webpack_require__(9006);
    // EXTERNAL MODULE: ./node_modules/react/index.js
    __webpack_require__(8709);

    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



    /**
     * @class
     * @name Observer
     * @param {any} data - Data
     * @param {any} options - Options
     */

    function Observer(data, options) {
      events/* default.call */.Z.call(this);
      options = options || {};
      this._destroyed = false;
      this._path = '';
      this._keys = [];
      this._data = {}; // array paths where duplicate entries are allowed - normally
      // we check if an array already has a value before inserting it
      // but if the array path is in here we'll allow it

      this._pathsWithDuplicates = null;

      if (options.pathsWithDuplicates) {
        this._pathsWithDuplicates = {};

        for (var i = 0; i < options.pathsWithDuplicates.length; i++) {
          this._pathsWithDuplicates[options.pathsWithDuplicates[i]] = true;
        }
      }

      this.patch(data);
      this._parent = options.parent || null;
      this._parentPath = options.parentPath || '';
      this._parentField = options.parentField || null;
      this._parentKey = options.parentKey || null;
      this._latestFn = options.latestFn || null;
      this._silent = false;

      var propagate = function propagate(evt) {
        return function (path, arg1, arg2, arg3) {
          if (!this._parent) return;
          var key = this._parentKey;

          if (!key && this._parentField instanceof Array) {
            key = this._parentField.indexOf(this);
            if (key === -1) return;
          }

          path = this._parentPath + '.' + key + '.' + path;
          var state;
          if (this._silent) state = this._parent.silence();

          this._parent.emit(path + ':' + evt, arg1, arg2, arg3);

          this._parent.emit('*:' + evt, path, arg1, arg2, arg3);

          if (this._silent) this._parent.silenceRestore(state);
        };
      }; // propagate set


      this.on('*:set', propagate('set'));
      this.on('*:unset', propagate('unset'));
      this.on('*:insert', propagate('insert'));
      this.on('*:remove', propagate('remove'));
      this.on('*:move', propagate('move'));
    } // cache calls to path.split(path, '.')
    // as they take considerable time especially during loading
    // if there are a lot of observers like entities, assets etc.


    Observer._splitPathsCache = {};

    Observer._splitPath = function (path) {
      var cache = Observer._splitPathsCache;
      var result = cache[path];

      if (!result) {
        result = path.split('.');
        cache[path] = result;
      } else {
        result = result.slice();
      }

      return result;
    };

    Observer.prototype = Object.create(events/* default.prototype */.Z.prototype);

    Observer.prototype.silence = function () {
      this._silent = true; // history hook to prevent array values to be recorded

      var historyState = this.history && this.history.enabled;
      if (historyState) this.history.enabled = false; // sync hook to prevent array values to be recorded as array root already did

      var syncState = this.sync && this.sync.enabled;
      if (syncState) this.sync.enabled = false;
      return [historyState, syncState];
    };

    Observer.prototype.silenceRestore = function (state) {
      this._silent = false;
      if (state[0]) this.history.enabled = true;
      if (state[1]) this.sync.enabled = true;
    };

    Observer.prototype._prepare = function (target, key, value, silent, remote) {
      var i;
      var state;
      var path = (target._path ? target._path + '.' : '') + key;

      var type = _typeof(value);

      target._keys.push(key);

      if (type === 'object' && value instanceof Array) {
        target._data[key] = value.slice(0);

        for (i = 0; i < target._data[key].length; i++) {
          if (_typeof(target._data[key][i]) === 'object' && target._data[key][i] !== null) {
            if (target._data[key][i] instanceof Array) {
              target._data[key][i].slice(0);
            } else {
              target._data[key][i] = new Observer(target._data[key][i], {
                parent: this,
                parentPath: path,
                parentField: target._data[key],
                parentKey: null
              });
            }
          } else {
            state = this.silence();
            this.emit(path + '.' + i + ':set', target._data[key][i], null, remote);
            this.emit('*:set', path + '.' + i, target._data[key][i], null, remote);
            this.silenceRestore(state);
          }
        }

        if (silent) state = this.silence();
        this.emit(path + ':set', target._data[key], null, remote);
        this.emit('*:set', path, target._data[key], null, remote);
        if (silent) this.silenceRestore(state);
      } else if (type === 'object' && value instanceof Object) {
        if (_typeof(target._data[key]) !== 'object') {
          target._data[key] = {
            _path: path,
            _keys: [],
            _data: {}
          };
        }

        for (i in value) {
          if (_typeof(value[i]) === 'object') {
            this._prepare(target._data[key], i, value[i], true, remote);
          } else {
            state = this.silence();
            target._data[key]._data[i] = value[i];

            target._data[key]._keys.push(i);

            this.emit(path + '.' + i + ':set', value[i], null, remote);
            this.emit('*:set', path + '.' + i, value[i], null, remote);
            this.silenceRestore(state);
          }
        }

        if (silent) state = this.silence(); // passing undefined as valueOld here
        // but we should get the old value to be consistent

        this.emit(path + ':set', value, undefined, remote);
        this.emit('*:set', path, value, undefined, remote);
        if (silent) this.silenceRestore(state);
      } else {
        if (silent) state = this.silence();
        target._data[key] = value;
        this.emit(path + ':set', value, undefined, remote);
        this.emit('*:set', path, value, undefined, remote);
        if (silent) this.silenceRestore(state);
      }

      return true;
    };

    Observer.prototype.set = function (path, value, silent, remote, force) {
      var _this = this;

      var i;
      var valueOld;

      var keys = Observer._splitPath(path);

      var length = keys.length;
      var key = keys[length - 1];
      var node = this;
      var nodePath = '';
      var obj = this;
      var state;

      for (i = 0; i < length - 1; i++) {
        if (node instanceof Array) {
          node = node[keys[i]];

          if (node instanceof Observer) {
            path = keys.slice(i + 1).join('.');
            obj = node;
          }
        } else {
          if (i < length && _typeof(node._data[keys[i]]) !== 'object') {
            if (node._data[keys[i]]) obj.unset((node.__path ? node.__path + '.' : '') + keys[i]);
            node._data[keys[i]] = {
              _path: path,
              _keys: [],
              _data: {}
            };

            node._keys.push(keys[i]);
          }

          if (i === length - 1 && node.__path) nodePath = node.__path + '.' + keys[i];
          node = node._data[keys[i]];
        }
      }

      if (node instanceof Array) {
        var ind = parseInt(key, 10);
        if (node[ind] === value && !force) return;
        valueOld = node[ind];

        if (valueOld instanceof Observer) {
          valueOld = valueOld.json();
        } else {
          valueOld = obj.json(valueOld);
        }

        node[ind] = value;

        if (value instanceof Observer) {
          value._parent = obj;
          value._parentPath = nodePath;
          value._parentField = node;
          value._parentKey = null;
        }

        if (silent) state = obj.silence();
        obj.emit(path + ':set', value, valueOld, remote);
        obj.emit('*:set', path, value, valueOld, remote);
        if (silent) obj.silenceRestore(state);
        return true;
      } else if (node._data && !node._data.hasOwnProperty(key)) {
        if (_typeof(value) === 'object') {
          return obj._prepare(node, key, value, false, remote);
        }

        node._data[key] = value;

        node._keys.push(key);

        if (silent) state = obj.silence();
        obj.emit(path + ':set', value, null, remote);
        obj.emit('*:set', path, value, null, remote);
        if (silent) obj.silenceRestore(state);
        return true;
      }

      if (_typeof(value) === 'object' && value instanceof Array) {
        if (value.equals(node._data[key]) && !force) return false;
        valueOld = node._data[key];
        if (!(valueOld instanceof Observer)) valueOld = obj.json(valueOld);

        if (node._data[key] && node._data[key].length === value.length) {
          state = obj.silence(); // handle new array instance

          if (value.length === 0) {
            node._data[key] = value;
          }

          for (i = 0; i < node._data[key].length; i++) {
            if (node._data[key][i] instanceof Observer) {
              node._data[key][i].patch(value[i], true);
            } else if (node._data[key][i] !== value[i]) {
              node._data[key][i] = value[i];
              obj.emit(path + '.' + i + ':set', node._data[key][i], valueOld && valueOld[i] || null, remote);
              obj.emit('*:set', path + '.' + i, node._data[key][i], valueOld && valueOld[i] || null, remote);
            }
          }

          obj.silenceRestore(state);
        } else {
          node._data[key] = [];
          value.forEach(function (val) {
            _this._doInsert(node, key, val);
          });
          state = obj.silence();

          for (i = 0; i < node._data[key].length; i++) {
            obj.emit(path + '.' + i + ':set', node._data[key][i], valueOld && valueOld[i] || null, remote);
            obj.emit('*:set', path + '.' + i, node._data[key][i], valueOld && valueOld[i] || null, remote);
          }

          obj.silenceRestore(state);
        }

        if (silent) state = obj.silence();
        obj.emit(path + ':set', value, valueOld, remote);
        obj.emit('*:set', path, value, valueOld, remote);
        if (silent) obj.silenceRestore(state);
        return true;
      } else if (_typeof(value) === 'object' && value instanceof Object) {
        var changed = false;
        valueOld = node._data[key];
        if (!(valueOld instanceof Observer)) valueOld = obj.json(valueOld);
        keys = Object.keys(value);

        if (!node._data[key] || !node._data[key]._data) {
          if (node._data[key]) {
            obj.unset((node.__path ? node.__path + '.' : '') + key);
          } else {
            changed = true;
          }

          node._data[key] = {
            _path: path,
            _keys: [],
            _data: {}
          };
        }

        var c;

        for (var n in node._data[key]._data) {
          if (!value.hasOwnProperty(n)) {
            c = obj.unset(path + '.' + n, true);
            if (c) changed = true;
          } else if (node._data[key]._data.hasOwnProperty(n)) {
            if (!obj._equals(node._data[key]._data[n], value[n])) {
              c = obj.set(path + '.' + n, value[n], true);
              if (c) changed = true;
            }
          } else {
            c = obj._prepare(node._data[key], n, value[n], true, remote);
            if (c) changed = true;
          }
        }

        for (i = 0; i < keys.length; i++) {
          if (value[keys[i]] === undefined && node._data[key]._data.hasOwnProperty(keys[i])) {
            c = obj.unset(path + '.' + keys[i], true);
            if (c) changed = true;
          } else if (_typeof(value[keys[i]]) === 'object') {
            if (node._data[key]._data.hasOwnProperty(keys[i])) {
              c = obj.set(path + '.' + keys[i], value[keys[i]], true);
              if (c) changed = true;
            } else {
              c = obj._prepare(node._data[key], keys[i], value[keys[i]], true, remote);
              if (c) changed = true;
            }
          } else if (!obj._equals(node._data[key]._data[keys[i]], value[keys[i]])) {
            if (_typeof(value[keys[i]]) === 'object') {
              c = obj.set(node._data[key]._path + '.' + keys[i], value[keys[i]], true);
              if (c) changed = true;
            } else if (node._data[key]._data[keys[i]] !== value[keys[i]]) {
              changed = true;
              if (node._data[key]._keys.indexOf(keys[i]) === -1) node._data[key]._keys.push(keys[i]);
              node._data[key]._data[keys[i]] = value[keys[i]];
              state = obj.silence();
              obj.emit(node._data[key]._path + '.' + keys[i] + ':set', node._data[key]._data[keys[i]], null, remote);
              obj.emit('*:set', node._data[key]._path + '.' + keys[i], node._data[key]._data[keys[i]], null, remote);
              obj.silenceRestore(state);
            }
          }
        }

        if (changed) {
          if (silent) state = obj.silence();
          var val = obj.json(node._data[key]);
          obj.emit(node._data[key]._path + ':set', val, valueOld, remote);
          obj.emit('*:set', node._data[key]._path, val, valueOld, remote);
          if (silent) obj.silenceRestore(state);
          return true;
        }

        return false;
      }

      var data;

      if (!node.hasOwnProperty('_data') && node.hasOwnProperty(key)) {
        data = node;
      } else {
        data = node._data;
      }

      if (data[key] === value && !force) return false;
      if (silent) state = obj.silence();
      valueOld = data[key];
      if (!(valueOld instanceof Observer)) valueOld = obj.json(valueOld);
      data[key] = value;
      obj.emit(path + ':set', value, valueOld, remote);
      obj.emit('*:set', path, value, valueOld, remote);
      if (silent) obj.silenceRestore(state);
      return true;
    };

    Observer.prototype.has = function (path) {
      var keys = Observer._splitPath(path);

      var node = this;

      for (var i = 0, len = keys.length; i < len; i++) {
        if (node == undefined) return undefined;

        if (node._data) {
          node = node._data[keys[i]];
        } else {
          node = node[keys[i]];
        }
      }

      return node !== undefined;
    };

    Observer.prototype.get = function (path, raw) {
      var keys = Observer._splitPath(path);

      var node = this;

      for (var i = 0; i < keys.length; i++) {
        if (node == undefined) return undefined;

        if (node._data) {
          node = node._data[keys[i]];
        } else {
          node = node[keys[i]];
        }
      }

      if (raw) return node;

      if (node == null) {
        return null;
      }

      return this.json(node);
    };

    Observer.prototype.getRaw = function (path) {
      return this.get(path, true);
    };

    Observer.prototype._equals = function (a, b) {
      if (a === b) {
        return true;
      } else if (a instanceof Array && b instanceof Array && a.equals(b)) {
        return true;
      }

      return false;
    };

    Observer.prototype.unset = function (path, silent, remote) {
      var i;

      var keys = Observer._splitPath(path);

      var key = keys[keys.length - 1];
      var node = this;
      var obj = this;

      for (i = 0; i < keys.length - 1; i++) {
        if (node instanceof Array) {
          node = node[keys[i]];

          if (node instanceof Observer) {
            path = keys.slice(i + 1).join('.');
            obj = node;
          }
        } else {
          node = node._data[keys[i]];
        }
      }

      if (!node._data || !node._data.hasOwnProperty(key)) return false;
      var valueOld = node._data[key];
      if (!(valueOld instanceof Observer)) valueOld = obj.json(valueOld); // recursive

      if (node._data[key] && node._data[key]._data) {
        // do this in reverse order because node._data[key]._keys gets
        // modified as we loop
        for (i = node._data[key]._keys.length - 1; i >= 0; i--) {
          obj.unset(path + '.' + node._data[key]._keys[i], true);
        }
      }

      node._keys.splice(node._keys.indexOf(key), 1);

      delete node._data[key];
      var state;
      if (silent) state = obj.silence();
      obj.emit(path + ':unset', valueOld, remote);
      obj.emit('*:unset', path, valueOld, remote);
      if (silent) obj.silenceRestore(state);
      return true;
    };

    Observer.prototype.remove = function (path, ind, silent, remote) {
      var keys = Observer._splitPath(path);

      var key = keys[keys.length - 1];
      var node = this;
      var obj = this;

      for (var i = 0; i < keys.length - 1; i++) {
        if (node instanceof Array) {
          node = node[parseInt(keys[i], 10)];

          if (node instanceof Observer) {
            path = keys.slice(i + 1).join('.');
            obj = node;
          }
        } else if (node._data && node._data.hasOwnProperty(keys[i])) {
          node = node._data[keys[i]];
        } else {
          return;
        }
      }

      if (!node._data || !node._data.hasOwnProperty(key) || !(node._data[key] instanceof Array)) return;
      var arr = node._data[key];
      if (arr.length < ind) return;
      var value = arr[ind];

      if (value instanceof Observer) {
        value._parent = null;
      } else {
        value = obj.json(value);
      }

      arr.splice(ind, 1);
      var state;
      if (silent) state = obj.silence();
      obj.emit(path + ':remove', value, ind, remote);
      obj.emit('*:remove', path, value, ind, remote);
      if (silent) obj.silenceRestore(state);
      return true;
    };

    Observer.prototype.removeValue = function (path, value, silent, remote) {
      var keys = Observer._splitPath(path);

      var key = keys[keys.length - 1];
      var node = this;
      var obj = this;

      for (var i = 0; i < keys.length - 1; i++) {
        if (node instanceof Array) {
          node = node[parseInt(keys[i], 10)];

          if (node instanceof Observer) {
            path = keys.slice(i + 1).join('.');
            obj = node;
          }
        } else if (node._data && node._data.hasOwnProperty(keys[i])) {
          node = node._data[keys[i]];
        } else {
          return;
        }
      }

      if (!node._data || !node._data.hasOwnProperty(key) || !(node._data[key] instanceof Array)) return;
      var arr = node._data[key];
      var ind = arr.indexOf(value);

      if (ind === -1) {
        return;
      }

      if (arr.length < ind) return;
      value = arr[ind];

      if (value instanceof Observer) {
        value._parent = null;
      } else {
        value = obj.json(value);
      }

      arr.splice(ind, 1);
      var state;
      if (silent) state = obj.silence();
      obj.emit(path + ':remove', value, ind, remote);
      obj.emit('*:remove', path, value, ind, remote);
      if (silent) obj.silenceRestore(state);
      return true;
    };

    Observer.prototype.insert = function (path, value, ind, silent, remote) {
      var keys = Observer._splitPath(path);

      var key = keys[keys.length - 1];
      var node = this;
      var obj = this;

      for (var i = 0; i < keys.length - 1; i++) {
        if (node instanceof Array) {
          node = node[parseInt(keys[i], 10)];

          if (node instanceof Observer) {
            path = keys.slice(i + 1).join('.');
            obj = node;
          }
        } else if (node._data && node._data.hasOwnProperty(keys[i])) {
          node = node._data[keys[i]];
        } else {
          return;
        }
      }

      if (!node._data || !node._data.hasOwnProperty(key) || !(node._data[key] instanceof Array)) return;
      var arr = node._data[key];
      value = obj._doInsert(node, key, value, ind);

      if (ind === undefined) {
        ind = arr.length - 1;
      }

      var state;
      if (silent) state = obj.silence();
      obj.emit(path + ':insert', value, ind, remote);
      obj.emit('*:insert', path, value, ind, remote);
      if (silent) obj.silenceRestore(state);
      return true;
    };

    Observer.prototype._doInsert = function (node, key, value, ind) {
      var arr = node._data[key];

      if (_typeof(value) === 'object' && !(value instanceof Observer) && value !== null) {
        if (value instanceof Array) {
          value = value.slice(0);
        } else {
          value = new Observer(value);
        }
      }

      var path = node._path ? "".concat(node._path, ".").concat(key) : key;

      if (value !== null && (!this._pathsWithDuplicates || !this._pathsWithDuplicates[path])) {
        if (arr.indexOf(value) !== -1) {
          return;
        }
      }

      if (ind === undefined) {
        arr.push(value);
      } else {
        arr.splice(ind, 0, value);
      }

      if (value instanceof Observer) {
        value._parent = this;
        value._parentPath = path;
        value._parentField = arr;
        value._parentKey = null;
      } else {
        value = this.json(value);
      }

      return value;
    };

    Observer.prototype.move = function (path, indOld, indNew, silent, remote) {
      var keys = Observer._splitPath(path);

      var key = keys[keys.length - 1];
      var node = this;
      var obj = this;

      for (var i = 0; i < keys.length - 1; i++) {
        if (node instanceof Array) {
          node = node[parseInt(keys[i], 10)];

          if (node instanceof Observer) {
            path = keys.slice(i + 1).join('.');
            obj = node;
          }
        } else if (node._data && node._data.hasOwnProperty(keys[i])) {
          node = node._data[keys[i]];
        } else {
          return;
        }
      }

      if (!node._data || !node._data.hasOwnProperty(key) || !(node._data[key] instanceof Array)) return;
      var arr = node._data[key];
      if (arr.length < indOld || arr.length < indNew || indOld === indNew) return;
      var value = arr[indOld];
      arr.splice(indOld, 1);
      if (indNew === -1) indNew = arr.length;
      arr.splice(indNew, 0, value);
      if (!(value instanceof Observer)) value = obj.json(value);
      var state;
      if (silent) state = obj.silence();
      obj.emit(path + ':move', value, indNew, indOld, remote);
      obj.emit('*:move', path, value, indNew, indOld, remote);
      if (silent) obj.silenceRestore(state);
      return true;
    };

    Observer.prototype.patch = function (data, removeMIssingKeys) {
      var key;
      if (_typeof(data) !== 'object') return;

      for (key in data) {
        if (_typeof(data[key]) === 'object' && !this._data.hasOwnProperty(key)) {
          this._prepare(this, key, data[key]);
        } else if (this._data[key] !== data[key]) {
          this.set(key, data[key]);
        }
      }

      if (removeMIssingKeys) {
        for (key in this._data) {
          if (!data.hasOwnProperty(key)) {
            this.unset(key);
          }
        }
      }
    };

    Observer.prototype.json = function (target) {
      var key, n;
      var obj = {};
      var node = target === undefined ? this : target;
      var len, nlen;

      if (node instanceof Object && node._keys) {
        len = node._keys.length;

        for (var i = 0; i < len; i++) {
          key = node._keys[i];
          var value = node._data[key];

          var type = _typeof(value);

          if (type === 'object' && value instanceof Array) {
            obj[key] = value.slice(0);
            nlen = obj[key].length;

            for (n = 0; n < nlen; n++) {
              if (_typeof(obj[key][n]) === 'object') obj[key][n] = this.json(obj[key][n]);
            }
          } else if (type === 'object' && value instanceof Object) {
            obj[key] = this.json(value);
          } else {
            obj[key] = value;
          }
        }
      } else {
        if (node === null) {
          return null;
        } else if (_typeof(node) === 'object' && node instanceof Array) {
          obj = node.slice(0);
          len = obj.length;

          for (n = 0; n < len; n++) {
            obj[n] = this.json(obj[n]);
          }
        } else if (_typeof(node) === 'object') {
          for (key in node) {
            if (node.hasOwnProperty(key)) obj[key] = node[key];
          }
        } else {
          obj = node;
        }
      }

      return obj;
    };

    Observer.prototype.forEach = function (fn, target, path) {
      var node = target || this;
      path = path || '';

      for (var i = 0; i < node._keys.length; i++) {
        var key = node._keys[i];
        var value = node._data[key];

        var type = this.schema && this.schema.has(path + key) && this.schema.get(path + key).type.name.toLowerCase() || _typeof(value);

        if (type === 'object' && value instanceof Array) {
          fn(path + key, 'array', value, key);
        } else if (type === 'object' && value instanceof Object) {
          fn(path + key, 'object', value, key);
          this.forEach(fn, value, path + key + '.');
        } else {
          fn(path + key, type, value, key);
        }
      }
    };
    /**
     * Returns the latest observer instance. This is important when
     * dealing with undo / redo where the observer might have been deleted
     * and/or possibly re-created.
     *
     * @returns {Observer} The latest instance of the observer.
     */


    Observer.prototype.latest = function () {
      return this._latestFn ? this._latestFn() : this;
    };

    Observer.prototype.destroy = function () {
      if (this._destroyed) return;
      this._destroyed = true;
      this.emit('destroy');
      this.unbind();
    };

    Object.defineProperty(Observer.prototype, 'latestFn', {
      get: function get() {
        return this._latestFn;
      },
      set: function set(value) {
        this._latestFn = value;
      }
    });
    /* harmony default export */ var observer = (Observer);
    function binding_base_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { binding_base_typeof = function _typeof(obj) { return typeof obj; }; } else { binding_base_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return binding_base_typeof(obj); }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

    function _possibleConstructorReturn(self, call) { if (call && (binding_base_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




    /**
     * @name BindingBase
     * @class
     * @classdesc Base class for data binding between IBindable Elements and Observers.
     * @property {Element} element The element
     * @property {Observer[]} observers The linked observers
     * @property {string[]} paths The linked paths
     * @property {boolean} applyingChange Whether the binding is currently applying a change either to the observers or the element.
     * @property {boolean} linked Whether the binding is linked to observers.
     * @property {boolean} historyCombine If a history module is used whether to combine history actions when applying changes to observers.
     * @property {string} historyName The name of the history action when applying changes to observers.
     * @property {string} historyPrefix A string to prefix the historyName with.
     * @property {string} historyPostfix A string to postfix the historyName with.
     */

    var BindingBase = /*#__PURE__*/function (_Events) {
      _inherits(BindingBase, _Events);

      var _super = _createSuper(BindingBase);

      /**
       * Creates a new binding.
       *
       * @param {object} args - The arguments.
       * @param {IBindable} [args.element] - The IBindable element.
       * @param {History} [args.history] - The history object which will be used to record undo / redo actions.
       * If none is provided then no history will be recorded.
       * @param {string} [args.historyPrefix] - A prefix that will be used for the name of every history action.
       * @param {string} [args.historyPostfix] - A postfix that will be used for the name of every history action.
       * @param {string} [args.historyName] - The name of each history action.
       * @param {boolean} [args.historyCombine] - Whether to combine history actions.
       */
      function BindingBase(args) {
        var _this;

        _classCallCheck(this, BindingBase);

        _this = _super.call(this);
        if (!args) args = {}; // the observers we are binding to

        _this._observers = null; // the paths to use for the observers

        _this._paths = null;
        _this._applyingChange = false;
        _this._element = args.element || null;
        _this._history = args.history || null;
        _this._historyPrefix = args.historyPrefix || null;
        _this._historyPostfix = args.historyPostfix || null;
        _this._historyName = args.historyName || null;
        _this._historyCombine = args.historyCombine || false;
        _this._linked = false;
        return _this;
      } // Returns the path at the specified index
      // or the path at the first index if it doesn't exist.


      _createClass(BindingBase, [{
        key: "_pathAt",
        value: function _pathAt(paths, index) {
          return paths[index] || paths[0];
        }
        /**
         * @name BindingBase#link
         * @description Links the specified observers to the specified paths.
         * @param {Observer[]|Observer} observers - The observer(s).
         * @param {string[]|string} paths - The path(s). The behaviour of the binding depends on how many paths are passed.
         * If an equal amount of paths and observers are passed then the binding will map each path to each observer at each index.
         * If more observers than paths are passed then the path at index 0 will be used for all observers.
         * If one observer and multiple paths are passed then all of the paths will be used for the observer (e.g. for curves).
         */

      }, {
        key: "link",
        value: function link(observers, paths) {
          if (this._observers) {
            this.unlink();
          }

          this._observers = Array.isArray(observers) ? observers : [observers];
          this._paths = Array.isArray(paths) ? paths : [paths];
          this._linked = true;
        }
        /**
         * @name BindingBase#unlink
         * @description Unlinks the observers and paths.
         */

      }, {
        key: "unlink",
        value: function unlink() {
          this._observers = null;
          this._paths = null;
          this._linked = false;
        }
        /**
         * @name BindingBase#clone
         * @description Clones the binding. To be implemented by derived classes.
         */

      }, {
        key: "clone",
        value: function clone() {
          throw new Error('pcui.BindingBase#clone: Not implemented');
        }
        /**
         * @name BindingBase#setValue
         * @description Sets a value to the linked observers at the linked paths.
         * @param {*} value - The value
         */

      }, {
        key: "setValue",
        value: function setValue(value) {}
        /**
         * @name BindingBase#setValues
         * @description Sets an array of values to the linked observers at the linked paths.
         * @param {Array<*>} values - The values
         */

      }, {
        key: "setValues",
        value: function setValues(values) {}
        /**
         * @name BindingBase#addValue
         * @description Adds (inserts) a value to the linked observers at the linked paths.
         * @param {*} value - The value
         */

      }, {
        key: "addValue",
        value: function addValue(value) {}
        /**
         * @name BindingBase#addValues
         * @description Adds (inserts) multiple values to the linked observers at the linked paths.
         * @param {Array<*>} values - The values
         */

      }, {
        key: "addValues",
        value: function addValues(values) {}
        /**
         * @name BindingBase#removeValue
         * @description Removes a value from the linked observers at the linked paths.
         * @param {*} value - The value
         */

      }, {
        key: "removeValue",
        value: function removeValue(value) {}
        /**
         * @name BindingBase#removeValues
         * @description Removes multiple values from the linked observers from the linked paths.
         * @param {Array<*>} values - The values
         */

      }, {
        key: "removeValues",
        value: function removeValues(values) {}
      }, {
        key: "element",
        get: function get() {
          return this._element;
        },
        set: function set(value) {
          this._element = value;
        }
      }, {
        key: "applyingChange",
        get: function get() {
          return this._applyingChange;
        },
        set: function set(value) {
          if (this._applyingChange === value) return;
          this._applyingChange = value;
          this.emit('applyingChange', value);
        }
      }, {
        key: "linked",
        get: function get() {
          return this._linked;
        }
      }, {
        key: "historyCombine",
        get: function get() {
          return this._historyCombine;
        },
        set: function set(value) {
          this._historyCombine = value;
        }
      }, {
        key: "historyName",
        get: function get() {
          return this._historyName;
        },
        set: function set(value) {
          this._historyName = value;
        }
      }, {
        key: "historyPrefix",
        get: function get() {
          return this._historyPrefix;
        },
        set: function set(value) {
          this._historyPrefix = value;
        }
      }, {
        key: "historyPostfix",
        get: function get() {
          return this._historyPostfix;
        },
        set: function set(value) {
          this._historyPostfix = value;
        }
      }, {
        key: "observers",
        get: function get() {
          return this._observers;
        }
      }, {
        key: "paths",
        get: function get() {
          return this._paths;
        }
      }]);

      return BindingBase;
    }(events/* default */.Z);

    /* harmony default export */ var binding_base = (BindingBase);
    function binding_element_observers_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { binding_element_observers_typeof = function _typeof(obj) { return typeof obj; }; } else { binding_element_observers_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return binding_element_observers_typeof(obj); }

    function binding_element_observers_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function binding_element_observers_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

    function binding_element_observers_createClass(Constructor, protoProps, staticProps) { if (protoProps) binding_element_observers_defineProperties(Constructor.prototype, protoProps); if (staticProps) binding_element_observers_defineProperties(Constructor, staticProps); return Constructor; }

    function binding_element_observers_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) binding_element_observers_setPrototypeOf(subClass, superClass); }

    function binding_element_observers_setPrototypeOf(o, p) { binding_element_observers_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return binding_element_observers_setPrototypeOf(o, p); }

    function binding_element_observers_createSuper(Derived) { var hasNativeReflectConstruct = binding_element_observers_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = binding_element_observers_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = binding_element_observers_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return binding_element_observers_possibleConstructorReturn(this, result); }; }

    function binding_element_observers_possibleConstructorReturn(self, call) { if (call && (binding_element_observers_typeof(call) === "object" || typeof call === "function")) { return call; } return binding_element_observers_assertThisInitialized(self); }

    function binding_element_observers_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

    function binding_element_observers_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

    function binding_element_observers_getPrototypeOf(o) { binding_element_observers_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return binding_element_observers_getPrototypeOf(o); }


    /**
     * @name BindingElementToObservers
     * @class
     * @classdesc Provides one way binding between an IBindable element and Observers. Any changes from the element
     * will be propagated to the observers.
     * @augments BindingBase
     */

    var BindingElementToObservers = /*#__PURE__*/function (_BindingBase) {
      binding_element_observers_inherits(BindingElementToObservers, _BindingBase);

      var _super = binding_element_observers_createSuper(BindingElementToObservers);

      function BindingElementToObservers() {
        binding_element_observers_classCallCheck(this, BindingElementToObservers);

        return _super.apply(this, arguments);
      }

      binding_element_observers_createClass(BindingElementToObservers, [{
        key: "clone",
        value: function clone() {
          return new BindingElementToObservers({
            history: this._history,
            historyPrefix: this._historyPrefix,
            historyPostfix: this._historyPostfix,
            historyName: this._historyName,
            historyCombine: this._historyCombine
          });
        }
      }, {
        key: "_getHistoryActionName",
        value: function _getHistoryActionName(paths) {
          return "".concat(this._historyPrefix || '').concat(this._historyName || paths[0]).concat(this._historyPostfix || '');
        } // Sets the value (or values of isArrayOfValues is true)
        // to the observers

      }, {
        key: "_setValue",
        value: function _setValue(value, isArrayOfValues) {
          var _this = this;

          if (this.applyingChange) return;
          if (!this._observers) return;
          this.applyingChange = true; // make copy of observers if we are using history
          // so that we can undo on the same observers in the future

          var observers = this._observers.slice();

          var paths = this._paths.slice();

          var execute = function execute() {
            _this._setValueToObservers(observers, paths, value, isArrayOfValues);
          };

          if (this._history) {
            var previousValues = [];

            if (observers.length === 1 && paths.length > 1) {
              previousValues = paths.map(function (path) {
                return observers[0].has(path) ? observers[0].get(path) : undefined;
              });
            } else {
              previousValues = observers.map(function (observer, i) {
                var path = _this._pathAt(paths, i);

                return observer.has(path) ? observer.get(path) : undefined;
              });
            }

            this._history.add({
              name: this._getHistoryActionName(paths),
              redo: execute,
              combine: this._historyCombine,
              undo: function undo() {
                _this._setValueToObservers(observers, paths, previousValues, true);
              }
            });
          }

          execute();
          this.applyingChange = false;
        }
      }, {
        key: "_setValueToObservers",
        value: function _setValueToObservers(observers, paths, value, isArrayOfValues) {
          // special case for 1 observer with multiple paths (like curves)
          // in that case set each value for each path
          if (observers.length === 1 && paths.length > 1) {
            for (var i = 0; i < paths.length; i++) {
              var latest = observers[0].latest();
              if (!latest) continue;
              var history = false;

              if (latest.history) {
                history = latest.history.enabled;
                latest.history.enabled = false;
              }

              var path = paths[i];
              var val = value[i];

              if (value !== undefined) {
                latest.set(path, val);
              } else {
                latest.unset(path);
              }

              if (history) {
                latest.history.enabled = true;
              }
            }

            return;
          }

          for (var _i = 0; _i < observers.length; _i++) {
            var _latest = observers[_i].latest();

            if (!_latest) continue;
            var _history = false;

            if (_latest.history) {
              _history = _latest.history.enabled;
              _latest.history.enabled = false;
            }

            var _path = this._pathAt(paths, _i);

            var _val = isArrayOfValues ? value[_i] : value;

            if (value !== undefined) {
              _latest.set(_path, _val);
            } else {
              _latest.unset(_path);
            }

            if (_history) {
              _latest.history.enabled = true;
            }
          }
        }
      }, {
        key: "_addValues",
        value: function _addValues(values) {
          var _this2 = this;

          if (this.applyingChange) return;
          if (!this._observers) return;
          this.applyingChange = true; // make copy of observers if we are using history
          // so that we can undo on the same observers in the future

          var observers = this._observers.slice();

          var paths = this._paths.slice();

          var records = [];

          var _loop = function _loop(i) {
            var path = _this2._pathAt(paths, i);

            var observer = observers[i];
            values.forEach(function (value) {
              if (observer.get(path).indexOf(value) === -1) {
                records.push({
                  observer: observer,
                  path: path,
                  value: value
                });
              }
            });
          };

          for (var i = 0; i < observers.length; i++) {
            _loop(i);
          }

          var execute = function execute() {
            for (var _i2 = 0; _i2 < records.length; _i2++) {
              var latest = records[_i2].observer.latest();

              if (!latest) continue;
              var path = records[_i2].path;
              var history = false;

              if (latest.history) {
                history = latest.history.enabled;
                latest.history.enabled = false;
              }

              latest.insert(path, records[_i2].value);

              if (history) {
                latest.history.enabled = true;
              }
            }
          };

          if (this._history && records.length) {
            this._history.add({
              name: this._getHistoryActionName(paths),
              redo: execute,
              combine: this._historyCombine,
              undo: function undo() {
                for (var _i3 = 0; _i3 < records.length; _i3++) {
                  var latest = records[_i3].observer.latest();

                  if (!latest) continue;
                  var path = records[_i3].path;
                  var history = false;

                  if (latest.history) {
                    history = latest.history.enabled;
                    latest.history.enabled = false;
                  }

                  latest.removeValue(path, records[_i3].value);

                  if (history) {
                    latest.history.enabled = true;
                  }
                }
              }
            });
          }

          execute();
          this.applyingChange = false;
        }
      }, {
        key: "_removeValues",
        value: function _removeValues(values) {
          var _this3 = this;

          if (this.applyingChange) return;
          if (!this._observers) return;
          this.applyingChange = true; // make copy of observers if we are using history
          // so that we can undo on the same observers in the future

          var observers = this._observers.slice();

          var paths = this._paths.slice();

          var records = [];

          var _loop2 = function _loop2(i) {
            var path = _this3._pathAt(paths, i);

            var observer = observers[i];
            values.forEach(function (value) {
              var ind = observer.get(path).indexOf(value);

              if (ind !== -1) {
                records.push({
                  observer: observer,
                  path: path,
                  value: value,
                  index: ind
                });
              }
            });
          };

          for (var i = 0; i < observers.length; i++) {
            _loop2(i);
          }

          var execute = function execute() {
            for (var _i4 = 0; _i4 < records.length; _i4++) {
              var latest = records[_i4].observer.latest();

              if (!latest) continue;
              var path = records[_i4].path;
              var history = false;

              if (latest.history) {
                history = latest.history.enabled;
                latest.history.enabled = false;
              }

              latest.removeValue(path, records[_i4].value);

              if (history) {
                latest.history.enabled = true;
              }
            }
          };

          if (this._history && records.length) {
            this._history.add({
              name: this._getHistoryActionName(paths),
              redo: execute,
              combine: this._historyCombine,
              undo: function undo() {
                for (var _i5 = 0; _i5 < records.length; _i5++) {
                  var latest = records[_i5].observer.latest();

                  if (!latest) continue;
                  var path = records[_i5].path;
                  var history = false;

                  if (latest.history) {
                    history = latest.history.enabled;
                    latest.history.enabled = false;
                  }

                  if (latest.get(path).indexOf(records[_i5].value) === -1) {
                    latest.insert(path, records[_i5].value, records[_i5].index);
                  }

                  if (history) {
                    latest.history.enabled = true;
                  }
                }
              }
            });
          }

          execute();
          this.applyingChange = false;
        }
      }, {
        key: "setValue",
        value: function setValue(value) {
          this._setValue(value, false);
        }
      }, {
        key: "setValues",
        value: function setValues(values) {
          // make sure we deep copy arrays because they will not be cloned when set to the observers
          values = values.slice().map(function (val) {
            return Array.isArray(val) ? val.slice() : val;
          });

          this._setValue(values, true);
        }
      }, {
        key: "addValue",
        value: function addValue(value) {
          this._addValues([value]);
        }
      }, {
        key: "addValues",
        value: function addValues(values) {
          this._addValues(values);
        }
      }, {
        key: "removeValue",
        value: function removeValue(value) {
          this._removeValues([value]);
        }
      }, {
        key: "removeValues",
        value: function removeValues(values) {
          this._removeValues(values);
        }
      }]);

      return BindingElementToObservers;
    }(binding_base);

    /* harmony default export */ var binding_element_observers = (BindingElementToObservers);
    function binding_observers_element_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { binding_observers_element_typeof = function _typeof(obj) { return typeof obj; }; } else { binding_observers_element_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return binding_observers_element_typeof(obj); }

    var _excluded = ["customUpdate"];

    function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

    function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

    function binding_observers_element_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function binding_observers_element_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

    function binding_observers_element_createClass(Constructor, protoProps, staticProps) { if (protoProps) binding_observers_element_defineProperties(Constructor.prototype, protoProps); if (staticProps) binding_observers_element_defineProperties(Constructor, staticProps); return Constructor; }

    function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

    function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = binding_observers_element_getPrototypeOf(object); if (object === null) break; } return object; }

    function binding_observers_element_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) binding_observers_element_setPrototypeOf(subClass, superClass); }

    function binding_observers_element_setPrototypeOf(o, p) { binding_observers_element_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return binding_observers_element_setPrototypeOf(o, p); }

    function binding_observers_element_createSuper(Derived) { var hasNativeReflectConstruct = binding_observers_element_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = binding_observers_element_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = binding_observers_element_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return binding_observers_element_possibleConstructorReturn(this, result); }; }

    function binding_observers_element_possibleConstructorReturn(self, call) { if (call && (binding_observers_element_typeof(call) === "object" || typeof call === "function")) { return call; } return binding_observers_element_assertThisInitialized(self); }

    function binding_observers_element_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

    function binding_observers_element_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

    function binding_observers_element_getPrototypeOf(o) { binding_observers_element_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return binding_observers_element_getPrototypeOf(o); }


    /**
     * @name BindingObserversToElement
     * @class
     * @classdesc Provides one way binding between Observers and an IBindable element and Observers. Any changes from the observers
     * will be propagated to the element.
     * @augments BindingBase
     */

    var BindingObserversToElement = /*#__PURE__*/function (_BindingBase) {
      binding_observers_element_inherits(BindingObserversToElement, _BindingBase);

      var _super = binding_observers_element_createSuper(BindingObserversToElement);

      /**
       * Creates a new BindingObserversToElement instance.
       *
       * @param {Function} customUpdate - Custom update function.
       * @param {object} args - The arguments.
       */
      function BindingObserversToElement() {
        var _this;

        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            customUpdate = _ref.customUpdate,
            args = _objectWithoutProperties(_ref, _excluded);

        binding_observers_element_classCallCheck(this, BindingObserversToElement);

        _this = _super.call(this, args);
        _this._customUpdate = customUpdate;
        _this._events = [];
        _this._updateElementHandler = _this._updateElement.bind(binding_observers_element_assertThisInitialized(_this));
        _this._updateTimeout = null;
        return _this;
      }

      binding_observers_element_createClass(BindingObserversToElement, [{
        key: "_linkObserver",
        value: function _linkObserver(observer, path) {
          this._events.push(observer.on(path + ':set', this._deferUpdateElement.bind(this)));

          this._events.push(observer.on(path + ':unset', this._deferUpdateElement.bind(this)));

          this._events.push(observer.on(path + ':insert', this._deferUpdateElement.bind(this)));

          this._events.push(observer.on(path + ':remove', this._deferUpdateElement.bind(this)));
        }
      }, {
        key: "_deferUpdateElement",
        value: function _deferUpdateElement() {
          if (this.applyingChange) return;
          this.applyingChange = true;
          this._updateTimeout = setTimeout(this._updateElementHandler);
        }
      }, {
        key: "_updateElement",
        value: function _updateElement() {
          var _this2 = this;

          if (this._updateTimeout) {
            clearTimeout(this._updateTimeout);
            this._updateTimeout = null;
          }

          this._updateTimeout = null;
          this.applyingChange = true;

          if (typeof this._customUpdate === 'function') {
            this._customUpdate(this._element, this._observers, this._paths);
          } else if (this._observers.length === 1) {
            if (this._paths.length > 1) {
              // if using multiple paths for the single observer (e.g. curves)
              // then return an array of values for each path
              this._element.value = this._paths.map(function (path) {
                return _this2._observers[0].has(path) ? _this2._observers[0].get(path) : undefined;
              });
            } else {
              this._element.value = this._observers[0].has(this._paths[0]) ? this._observers[0].get(this._paths[0]) : undefined;
            }
          } else {
            this._element.values = this._observers.map(function (observer, i) {
              var path = _this2._pathAt(_this2._paths, i);

              return observer.has(path) ? observer.get(path) : undefined;
            });
          }

          this.applyingChange = false;
        }
      }, {
        key: "link",
        value: function link(observers, paths) {
          _get(binding_observers_element_getPrototypeOf(BindingObserversToElement.prototype), "link", this).call(this, observers, paths); // don't render changes when we link


          var renderChanges = this._element.renderChanges;

          if (renderChanges) {
            this._element.renderChanges = false;
          }

          this._updateElement();

          if (renderChanges) {
            this._element.renderChanges = renderChanges;
          }

          if (this._observers.length === 1) {
            if (this._paths.length > 1) {
              for (var i = 0; i < this._paths.length; i++) {
                this._linkObserver(this._observers[0], this._paths[i]);
              }

              return;
            }
          }

          for (var _i = 0; _i < this._observers.length; _i++) {
            this._linkObserver(this._observers[_i], this._pathAt(this._paths, _i));
          }
        }
      }, {
        key: "unlink",
        value: function unlink() {
          for (var i = 0; i < this._events.length; i++) {
            this._events[i].unbind();
          }

          this._events.length = 0;

          if (this._updateTimeout) {
            clearTimeout(this._updateTimeout);
            this._updateTimeout = null;
          }

          _get(binding_observers_element_getPrototypeOf(BindingObserversToElement.prototype), "unlink", this).call(this);
        }
      }, {
        key: "clone",
        value: function clone() {
          return new BindingObserversToElement();
        }
      }]);

      return BindingObserversToElement;
    }(binding_base);

    /* harmony default export */ var binding_observers_element = (BindingObserversToElement);
    function binding_two_way_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { binding_two_way_typeof = function _typeof(obj) { return typeof obj; }; } else { binding_two_way_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return binding_two_way_typeof(obj); }

    function binding_two_way_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function binding_two_way_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

    function binding_two_way_createClass(Constructor, protoProps, staticProps) { if (protoProps) binding_two_way_defineProperties(Constructor.prototype, protoProps); if (staticProps) binding_two_way_defineProperties(Constructor, staticProps); return Constructor; }

    function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = binding_two_way_superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }

    function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

    function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

    function binding_two_way_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { binding_two_way_get = Reflect.get; } else { binding_two_way_get = function _get(target, property, receiver) { var base = binding_two_way_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return binding_two_way_get(target, property, receiver || target); }

    function binding_two_way_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = binding_two_way_getPrototypeOf(object); if (object === null) break; } return object; }

    function binding_two_way_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) binding_two_way_setPrototypeOf(subClass, superClass); }

    function binding_two_way_setPrototypeOf(o, p) { binding_two_way_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return binding_two_way_setPrototypeOf(o, p); }

    function binding_two_way_createSuper(Derived) { var hasNativeReflectConstruct = binding_two_way_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = binding_two_way_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = binding_two_way_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return binding_two_way_possibleConstructorReturn(this, result); }; }

    function binding_two_way_possibleConstructorReturn(self, call) { if (call && (binding_two_way_typeof(call) === "object" || typeof call === "function")) { return call; } return binding_two_way_assertThisInitialized(self); }

    function binding_two_way_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

    function binding_two_way_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

    function binding_two_way_getPrototypeOf(o) { binding_two_way_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return binding_two_way_getPrototypeOf(o); }




    /**
     * @name BindingTwoWay
     * @class
     * @classdesc Provides two way data binding between Observers and IBindable elements. This means
     * that when the value of the Observers changes the IBindable will be updated and vice versa.
     * @augments BindingBase
     */

    var BindingTwoWay = /*#__PURE__*/function (_BindingBase) {
      binding_two_way_inherits(BindingTwoWay, _BindingBase);

      var _super = binding_two_way_createSuper(BindingTwoWay);

      /**
       * Creates a new BindingTwoWay instance.
       *
       * @param {object} args - The arguments.
       */
      function BindingTwoWay(args) {
        var _this;

        binding_two_way_classCallCheck(this, BindingTwoWay);

        if (!args) args = {};
        _this = _super.call(this, args);
        _this._bindingElementToObservers = args.bindingElementToObservers || new binding_element_observers(args);
        _this._bindingObserversToElement = args.bindingObserversToElement || new binding_observers_element(args);
        _this._applyingChange = false;

        _this._bindingElementToObservers.on('applyingChange', function (value) {
          _this.applyingChange = value;
        });

        _this._bindingObserversToElement.on('applyingChange', function (value) {
          _this.applyingChange = value;
        });

        return _this;
      }

      binding_two_way_createClass(BindingTwoWay, [{
        key: "link",
        value: function link(observers, paths) {
          binding_two_way_get(binding_two_way_getPrototypeOf(BindingTwoWay.prototype), "link", this).call(this, observers, paths);

          this._bindingElementToObservers.link(observers, paths);

          this._bindingObserversToElement.link(observers, paths);
        }
      }, {
        key: "unlink",
        value: function unlink() {
          this._bindingElementToObservers.unlink();

          this._bindingObserversToElement.unlink();

          binding_two_way_get(binding_two_way_getPrototypeOf(BindingTwoWay.prototype), "unlink", this).call(this);
        }
      }, {
        key: "clone",
        value: function clone() {
          return new BindingTwoWay({
            bindingElementToObservers: this._bindingElementToObservers.clone(),
            bindingObserversToElement: this._bindingObserversToElement.clone()
          });
        }
      }, {
        key: "setValue",
        value: function setValue(value) {
          this._bindingElementToObservers.setValue(value);
        }
      }, {
        key: "setValues",
        value: function setValues(values) {
          this._bindingElementToObservers.setValues(values);
        }
      }, {
        key: "addValue",
        value: function addValue(value) {
          this._bindingElementToObservers.addValue(value);
        }
      }, {
        key: "addValues",
        value: function addValues(values) {
          this._bindingElementToObservers.addValues(values);
        }
      }, {
        key: "removeValue",
        value: function removeValue(value) {
          this._bindingElementToObservers.removeValue(value);
        }
      }, {
        key: "removeValues",
        value: function removeValues(values) {
          this._bindingElementToObservers.removeValues(values);
        }
      }, {
        key: "element",
        get: function get() {
          return this._element;
        },
        set: function set(value) {
          this._element = value;
          this._bindingElementToObservers.element = value;
          this._bindingObserversToElement.element = value;
        }
      }, {
        key: "applyingChange",
        get: function get() {
          return binding_two_way_get(binding_two_way_getPrototypeOf(BindingTwoWay.prototype), "applyingChange", this);
        },
        set: function set(value) {
          if (binding_two_way_get(binding_two_way_getPrototypeOf(BindingTwoWay.prototype), "applyingChange", this) === value) return;
          this._bindingElementToObservers.applyingChange = value;
          this._bindingObserversToElement.applyingChange = value;

          _set(binding_two_way_getPrototypeOf(BindingTwoWay.prototype), "applyingChange", value, this, true);
        }
      }, {
        key: "historyCombine",
        get: function get() {
          return this._bindingElementToObservers.historyCombine;
        },
        set: function set(value) {
          this._bindingElementToObservers.historyCombine = value;
        }
      }, {
        key: "historyPrefix",
        get: function get() {
          return this._bindingElementToObservers.historyPrefix;
        },
        set: function set(value) {
          this._bindingElementToObservers.historyPrefix = value;
        }
      }, {
        key: "historyPostfix",
        get: function get() {
          return this._bindingElementToObservers.historyPostfix;
        },
        set: function set(value) {
          this._bindingElementToObservers.historyPostfix = value;
        }
      }]);

      return BindingTwoWay;
    }(binding_base);

    /* harmony default export */ var binding_two_way = (BindingTwoWay);
    function history_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { history_typeof = function _typeof(obj) { return typeof obj; }; } else { history_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return history_typeof(obj); }

    function history_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function history_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

    function history_createClass(Constructor, protoProps, staticProps) { if (protoProps) history_defineProperties(Constructor.prototype, protoProps); if (staticProps) history_defineProperties(Constructor, staticProps); return Constructor; }

    function history_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) history_setPrototypeOf(subClass, superClass); }

    function history_setPrototypeOf(o, p) { history_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return history_setPrototypeOf(o, p); }

    function history_createSuper(Derived) { var hasNativeReflectConstruct = history_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = history_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = history_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return history_possibleConstructorReturn(this, result); }; }

    function history_possibleConstructorReturn(self, call) { if (call && (history_typeof(call) === "object" || typeof call === "function")) { return call; } return history_assertThisInitialized(self); }

    function history_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

    function history_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

    function history_getPrototypeOf(o) { history_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return history_getPrototypeOf(o); }


    /**
     * @name HistoryAction
     * @class
     * @classdesc A history action
     * @property {string} name The name of the action
     * @property {Function} undo The undo function
     * @property {Function} redo The redo function
     * @property {boolean} combine Whether to combine with the previous action with the same name.
     * The effect of combining is merely changing the redo function to be the redo function of this action.
     * The original undo function is not modified.
     */

    /**
     * @name History
     * @class
     * @classdesc Manages history actions for undo / redo operations.
     * @property {HistoryAction} currentAction Returns the current history action
     * @property {HistoryAction} lastAction Returns the last history action
     * @property {boolean} canUndo Whether we can undo at this time.
     * @property {boolean} canRedo Whether we can redo at this time.
     * @augments Events
     */

    var History = /*#__PURE__*/function (_Events) {
      history_inherits(History, _Events);

      var _super = history_createSuper(History);

      /**
       * Creates a new pcui.History.
       */
      function History() {
        var _this;

        history_classCallCheck(this, History);

        _this = _super.call(this);
        _this._actions = [];
        _this._currentActionIndex = -1;
        _this._canUndo = false;
        _this._canRedo = false;
        return _this;
      }
      /**
       * @name History#add
       * @description Adds a new history action
       * @param {HistoryAction} action - The action
       */


      history_createClass(History, [{
        key: "add",
        value: function add(action) {
          if (!action.name) {
            console.error('Trying to add history action without name');
            return;
          }

          if (!action.undo) {
            console.error('Trying to add history action without undo method', action.name);
            return;
          }

          if (!action.redo) {
            console.error('Trying to add history action without redo method', action.name);
            return;
          } // if we are adding an action
          // but we have undone some actions in the meantime
          // then we should erase the actions that come after our
          // last action before adding this


          if (this._currentActionIndex !== this._actions.length - 1) {
            this._actions = this._actions.slice(0, this._currentActionIndex + 1);
          } // if combine is true then replace the redo of the current action
          // if it has the same name


          if (action.combine && this.currentAction && this.currentAction.name === action.name) {
            this.currentAction.redo = action.redo;
          } else {
            var length = this._actions.push(action);

            this._currentActionIndex = length - 1;
          }

          this.emit('add', action.name);
          this.canUndo = true;
          this.canRedo = false;
        }
        /**
         * @name History#undo
         * @description Undo the last history action
         */

      }, {
        key: "undo",
        value: function undo() {
          if (!this.canUndo) return;
          var name = this.currentAction.name;

          try {
            this.currentAction.undo();
          } catch (ex) {
            console.info('%c(pcui.History#undo)', 'color: #f00');
            console.log(ex.stack);
            return;
          }

          this._currentActionIndex--;
          this.emit('undo', name);

          if (this._currentActionIndex < 0) {
            this.canUndo = false;
          }

          this.canRedo = true;
        }
        /**
         * @name History#redo
         * @description Redo the current history action
         */

      }, {
        key: "redo",
        value: function redo() {
          if (!this.canRedo) return;
          this._currentActionIndex++;

          try {
            this.currentAction.redo();
          } catch (ex) {
            console.info('%c(pcui.History#redo)', 'color: #f00');
            console.log(ex.stack);
            return;
          }

          this.emit('redo', this.currentAction.name);
          this.canUndo = true;

          if (this._currentActionIndex === this._actions.length - 1) {
            this.canRedo = false;
          }
        }
        /**
         * @name History#clear
         * @description Clears all history actions.
         */

      }, {
        key: "clear",
        value: function clear() {
          if (!this._actions.length) return;
          this._actions.length = 0;
          this._currentActionIndex = -1;
          this.canUndo = false;
          this.canRedo = false;
        }
      }, {
        key: "currentAction",
        get: function get() {
          return this._actions[this._currentActionIndex] || null;
        }
      }, {
        key: "lastAction",
        get: function get() {
          return this._actions[this._actions.length - 1] || null;
        }
      }, {
        key: "canUndo",
        get: function get() {
          return this._canUndo;
        },
        set: function set(value) {
          if (this._canUndo === value) return;
          this._canUndo = value;
          this.emit('canUndo', value);
        }
      }, {
        key: "canRedo",
        get: function get() {
          return this._canRedo;
        },
        set: function set(value) {
          if (this._canRedo === value) return;
          this._canRedo = value;
          this.emit('canRedo', value);
        }
      }]);

      return History;
    }(events/* default */.Z);

    /* harmony default export */ var binding_history = (History);


    /**
     * @class
     * @name ObserverHistory
     * @param {any} args - Arguments
     */

    function ObserverHistory(args) {
      events/* default.call */.Z.call(this);
      args = args || {};
      this.item = args.item;
      this._history = args.history;
      this._enabled = args.enabled || true;
      this._prefix = args.prefix || '';
      this._combine = args.combine || false;
      this._events = [];

      this._initialize();
    }

    ObserverHistory.prototype = Object.create(events/* default.prototype */.Z.prototype);

    ObserverHistory.prototype._initialize = function () {
      var self = this;

      this._events.push(this.item.on('*:set', function (path, value, valueOld) {
        if (!self._enabled || !self._history) return; // need jsonify

        if (value instanceof observer) value = value.json(); // action

        var action = {
          name: self._prefix + path,
          combine: self._combine,
          undo: function undo() {
            var item = self.item.latest();
            if (!item) return;
            item.history.enabled = false;

            if (valueOld === undefined) {
              item.unset(path);
            } else {
              item.set(path, valueOld);
            }

            item.history.enabled = true;
          },
          redo: function redo() {
            var item = self.item.latest();
            if (!item) return;
            item.history.enabled = false;

            if (value === undefined) {
              item.unset(path);
            } else {
              item.set(path, value);
            }

            item.history.enabled = true;
          }
        };

        self._history.add(action);
      }));

      this._events.push(this.item.on('*:unset', function (path, valueOld) {
        if (!self._enabled || !self._history) return; // action

        var action = {
          name: self._prefix + path,
          combine: self._combine,
          undo: function undo() {
            var item = self.item.latest();
            if (!item) return;
            item.history.enabled = false;
            item.set(path, valueOld);
            item.history.enabled = true;
          },
          redo: function redo() {
            var item = self.item.latest();
            if (!item) return;
            item.history.enabled = false;
            item.unset(path);
            item.history.enabled = true;
          }
        };

        self._history.add(action);
      }));

      this._events.push(this.item.on('*:insert', function (path, value, ind) {
        if (!self._enabled || !self._history) return; // need jsonify
        // if (value instanceof Observer)
        //     value = value.json();
        // action

        var action = {
          name: self._prefix + path,
          combine: self._combine,
          undo: function undo() {
            var item = self.item.latest();
            if (!item) return;
            item.history.enabled = false;
            item.removeValue(path, value);
            item.history.enabled = true;
          },
          redo: function redo() {
            var item = self.item.latest();
            if (!item) return;
            item.history.enabled = false;
            item.insert(path, value, ind);
            item.history.enabled = true;
          }
        };

        self._history.add(action);
      }));

      this._events.push(this.item.on('*:remove', function (path, value, ind) {
        if (!self._enabled || !self._history) return; // need jsonify
        // if (value instanceof Observer)
        //     value = value.json();
        // action

        var action = {
          name: self._prefix + path,
          combine: self._combine,
          undo: function undo() {
            var item = self.item.latest();
            if (!item) return;
            item.history.enabled = false;
            item.insert(path, value, ind);
            item.history.enabled = true;
          },
          redo: function redo() {
            var item = self.item.latest();
            if (!item) return;
            item.history.enabled = false;
            item.removeValue(path, value);
            item.history.enabled = true;
          }
        };

        self._history.add(action);
      }));

      this._events.push(this.item.on('*:move', function (path, value, ind, indOld) {
        if (!self._enabled || !self._history) return; // action

        var action = {
          name: self._prefix + path,
          combine: self._combine,
          undo: function undo() {
            var item = self.item.latest();
            if (!item) return;
            item.history.enabled = false;
            item.move(path, ind, indOld);
            item.history.enabled = true;
          },
          redo: function redo() {
            var item = self.item.latest();
            if (!item) return;
            item.history.enabled = false;
            item.move(path, indOld, ind);
            item.history.enabled = true;
          }
        };

        self._history.add(action);
      }));
    };

    ObserverHistory.prototype.destroy = function () {
      this._events.forEach(function (evt) {
        evt.unbind();
      });

      this._events.length = 0;
      this.item = null;
    };

    Object.defineProperty(ObserverHistory.prototype, 'enabled', {
      get: function get() {
        return this._enabled;
      },
      set: function set(value) {
        this._enabled = !!value;
      }
    });
    Object.defineProperty(ObserverHistory.prototype, 'prefix', {
      get: function get() {
        return this._prefix;
      },
      set: function set(value) {
        this._prefix = value || '';
      }
    });
    Object.defineProperty(ObserverHistory.prototype, 'combine', {
      get: function get() {
        return this._combine;
      },
      set: function set(value) {
        this._combine = !!value;
      }
    });
    /* harmony default export */ var observer_history = (ObserverHistory);


    /**
     * @class
     * @name ObserverList
     * @param {any} options - Options
     */

    function ObserverList(options) {
      events/* default.call */.Z.call(this);
      options = options || {};
      this.data = [];
      this._indexed = {};
      this.sorted = options.sorted || null;
      this.index = options.index || null;
    }

    ObserverList.prototype = Object.create(events/* default.prototype */.Z.prototype);
    Object.defineProperty(ObserverList.prototype, 'length', {
      get: function get() {
        return this.data.length;
      }
    });

    ObserverList.prototype.get = function (index) {
      if (this.index) {
        return this._indexed[index] || null;
      }

      return this.data[index] || null;
    };

    ObserverList.prototype.set = function (index, value) {
      if (this.index) {
        this._indexed[index] = value;
      } else {
        this.data[index] = value;
      }
    };

    ObserverList.prototype.indexOf = function (item) {
      if (this.index) {
        var index = item instanceof observer && item.get(this.index) || item[this.index];
        return this._indexed[index] && index || null;
      }

      var ind = this.data.indexOf(item);
      return ind !== -1 ? ind : null;
    };

    ObserverList.prototype.position = function (b, fn) {
      var l = this.data;
      var min = 0;
      var max = l.length - 1;
      var cur;
      var a, i;
      fn = fn || this.sorted;

      while (min <= max) {
        cur = Math.floor((min + max) / 2);
        a = l[cur];
        i = fn(a, b);

        if (i === 1) {
          max = cur - 1;
        } else if (i === -1) {
          min = cur + 1;
        } else {
          return cur;
        }
      }

      return -1;
    };

    ObserverList.prototype.positionNextClosest = function (b, fn) {
      var l = this.data;
      var min = 0;
      var max = l.length - 1;
      var cur;
      var a, i;
      fn = fn || this.sorted;
      if (l.length === 0) return -1;
      if (fn(l[0], b) === 0) return 0;

      while (min <= max) {
        cur = Math.floor((min + max) / 2);
        a = l[cur];
        i = fn(a, b);

        if (i === 1) {
          max = cur - 1;
        } else if (i === -1) {
          min = cur + 1;
        } else {
          return cur;
        }
      }

      if (fn(a, b) === 1) return cur;
      if (cur + 1 === l.length) return -1;
      return cur + 1;
    };

    ObserverList.prototype.has = function (item) {
      if (this.index) {
        var index = item instanceof observer && item.get(this.index) || item[this.index];
        return !!this._indexed[index];
      }

      return this.data.indexOf(item) !== -1;
    };

    ObserverList.prototype.add = function (item) {
      if (this.has(item)) return null;
      var index = this.data.length;

      if (this.index) {
        index = item instanceof observer && item.get(this.index) || item[this.index];
        this._indexed[index] = item;
      }

      var pos = 0;

      if (this.sorted) {
        pos = this.positionNextClosest(item);

        if (pos !== -1) {
          this.data.splice(pos, 0, item);
        } else {
          this.data.push(item);
        }
      } else {
        this.data.push(item);
        pos = this.data.length - 1;
      }

      this.emit('add', item, index, pos);
      return pos;
    };

    ObserverList.prototype.move = function (item, pos) {
      var ind = this.data.indexOf(item);
      this.data.splice(ind, 1);

      if (pos === -1) {
        this.data.push(item);
      } else {
        this.data.splice(pos, 0, item);
      }

      this.emit('move', item, pos);
    };

    ObserverList.prototype.remove = function (item) {
      if (!this.has(item)) return;
      var ind = this.data.indexOf(item);
      var index = ind;

      if (this.index) {
        index = item instanceof observer && item.get(this.index) || item[this.index];
        delete this._indexed[index];
      }

      this.data.splice(ind, 1);
      this.emit('remove', item, index);
    };

    ObserverList.prototype.removeByKey = function (index) {
      var item;

      if (this.index) {
        item = this._indexed[index];
        if (!item) return;
        var ind = this.data.indexOf(item);
        this.data.splice(ind, 1);
        delete this._indexed[index];
        this.emit('remove', item, ind);
      } else {
        if (this.data.length < index) return;
        item = this.data[index];
        this.data.splice(index, 1);
        this.emit('remove', item, index);
      }
    };

    ObserverList.prototype.removeBy = function (fn) {
      var i = this.data.length;

      while (i--) {
        if (!fn(this.data[i])) continue;

        if (this.index) {
          delete this._indexed[this.data[i][this.index]];
        }

        this.data.splice(i, 1);
        this.emit('remove', this.data[i], i);
      }
    };

    ObserverList.prototype.clear = function () {
      var items = this.data.slice(0);
      this.data = [];
      this._indexed = {};
      var i = items.length;

      while (i--) {
        this.emit('remove', items[i], i);
      }
    };

    ObserverList.prototype.forEach = function (fn) {
      for (var i = 0; i < this.data.length; i++) {
        fn(this.data[i], this.index && this.data[i][this.index] || i);
      }
    };

    ObserverList.prototype.find = function (fn) {
      var items = [];

      for (var i = 0; i < this.data.length; i++) {
        if (!fn(this.data[i])) continue;
        var index = i;
        if (this.index) index = this.data[i][this.index];
        items.push([index, this.data[i]]);
      }

      return items;
    };

    ObserverList.prototype.findOne = function (fn) {
      for (var i = 0; i < this.data.length; i++) {
        if (!fn(this.data[i])) continue;
        var index = i;
        if (this.index) index = this.data[i][this.index];
        return [index, this.data[i]];
      }

      return null;
    };

    ObserverList.prototype.map = function (fn) {
      return this.data.map(fn);
    };

    ObserverList.prototype.sort = function (fn) {
      this.data.sort(fn);
    };

    ObserverList.prototype.array = function () {
      return this.data.slice(0);
    };

    ObserverList.prototype.json = function () {
      var items = this.array();

      for (var i = 0; i < items.length; i++) {
        if (items[i] instanceof observer) {
          items[i] = items[i].json();
        }
      }

      return items;
    };

    /* harmony default export */ var observer_list = (ObserverList);










    }();
    __webpack_exports__.Oj;
    __webpack_exports__.Ce;
    __webpack_exports__.RC;
    __webpack_exports__.Kx;
    var __webpack_exports__Events = __webpack_exports__.zW;
    var __webpack_exports__History = __webpack_exports__.Ay;
    var __webpack_exports__Observer = __webpack_exports__.Qj;
    var __webpack_exports__ObserverHistory = __webpack_exports__.ki;
    var __webpack_exports__ObserverList = __webpack_exports__.B3;

    /**
     * Represents an Entity
     */
    class Entity {
        /** @typedef {import("./entities").Entities} Entities */

        /**
         * Creates new Entity
         *
         * @param {Entities} entitiesApi - The Entities API
         * @param {object} [data] - Optional entity data
         */
        constructor(entitiesApi, data = {}) {
            this._entitiesApi = entitiesApi;

            this._history = {};

            this._observer = new __webpack_exports__Observer({
                name: data.name || 'New Entity',
                tags: data.tags || [],
                enabled: data.enabled || true,
                resource_id: data.resource_id || pc.guid.create(),
                parent: typeof data.parent === 'string' ? data.parent : null,
                children: [],
                position: data.position || [0, 0, 0],
                rotation: data.rotation || [0, 0, 0],
                scale: data.scale || [1, 1, 1],
                components: {}
            });

            const id = this._observer.get('resource_id');

            this._history = new __webpack_exports__ObserverHistory({
                item: this._observer,
                prefix: 'entity.' + id + '.',
                history: globals.history
            });
            this._observer.history = this._history;

            this._observer.latestFn = () => {
                const latest = this._entitiesApi.get(id);
                return latest && latest._observer;
            };

            this._observer.apiEntity = this;

            if (data.components) {
                for (const component in data.components) {
                    this.addComponent(component, data.components[component]);
                }
            }
        }

        /**
         * Checks if path exists
         *
         * @param {string} path - The path
         * @returns {boolean} True if path exists
         */
        has(path) {
            return this._observer.has(path);
        }

        /**
         * Gets value at path
         *
         * @param {string} path - The path
         * @returns {any} The value
         */
        get(path) {
            return this._observer.get(path);
        }

        /**
         * Sets value at path
         *
         * @param {string} path - The path
         * @param {any} value - The value
         * @returns {boolean} Whether the value was set
         */
        set(path, value) {
            return this._observer.set(path, value);
        }

        /**
         * Unsets value at path
         *
         * @param {string} path - The path
         * @returns {boolean} Whether the value was unset
         */
        unset(path) {
            return this._observer.unset(path);
        }

        /**
         * Inserts value in array at path, at specified index
         *
         * @param {string} path - The path
         * @param {any} value - The value
         * @param {number} index - The index (if undefined the value will be inserted in the end)
         * @returns {boolean} Whether the value was inserted
         */
        insert(path, value, index) {
            return this._observer.insert(path, value, index);
        }

        /**
         * Remove value from array at path.
         *
         * @param {string} path - The path
         * @param {any} value - The value
         * @returns {boolean} Whether the value was removed
         */
        removeValue(path, value) {
            return this._observer.removeValue(path, value);
        }

        /**
         * Returns JSON representation of entity data
         *
         * @returns {object} - The data
         */
        json() {
            return this._observer.json();
        }

        /**
         * Finds first entity by name using depth-first search
         *
         * @param {string} name - The name
         * @returns {Entity} The entity
         */
        findByName(name) {
            if (this.get('name') === name) {
                return this;
            }

            const children = this.children;
            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                if (child) {
                    const found = child.findByName(name);
                    if (found) {
                        return found;
                    }
                }
            }

            return null;
        }

        /**
         * Finds all entities with specified tags
         *
         * @param  {...string|...string[]} tags - The tags. If multiple tags are specified then entities that contain ANY of the specified
         * tags will be included. If an argument is an array of tags then entities that contain ALL of the tags in the array will be included.
         * @returns {Entity[]} The entities
         */
        listByTag(...tags) {
            return this.filter(entity => {
                const t = entity.get('tags');
                for (let i = 0; i < tags.length; i++) {
                    if (Array.isArray(tags[i])) {
                        let countTags = 0;
                        for (let j = 0; j < tags[i].length; j++) {
                            if (t.includes(tags[i][j])) {
                                countTags++;
                            } else {
                                break;
                            }
                        }

                        if (countTags === tags[i].length) {
                            return true;
                        }
                    } else {
                        if (t.includes(tags[i])) {
                            return true;
                        }
                    }
                }

                return false;
            });
        }

        /**
         * Returns the entity and children that satisfy the function
         *
         * @param {Function} fn - A function that takes an Entity and returns whether it should be included
         * in the result
         * @returns {Entity[]} The result
         */
        filter(fn) {
            let result = [];

            if (fn(this)) {
                result.push(this);
            }

            const children = this.children;
            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                if (child) {
                    result = result.concat(child.filter(fn));
                }
            }

            return result;
        }

        /**
         * Executes function for this entity and its children
         * in depth first order.
         *
         * @param {Function} fn - A function that takes an entity as an argument
         */
        depthFirst(fn) {
            fn(this);

            const children = this.children;
            children.forEach(child => {
                child.depthFirst(fn);
            });
        }

        /**
         * Adds a component to this Entity
         *
         * @param {string} component - The component name
         * @param {object} [data] - Default component data
         */
        addComponent(component, data) {
            const defaultData = globals.schema.components.getDefaultData(component);
            const componentData = Object.assign(defaultData, data);
            this.set(`components.${component}`, componentData);
        }

        /**
         * Removes a component from this Entity
         *
         * @param {string} component - The component name
         */
        removeComponent(component) {
            this.unset(`components.${component}`);
        }

        /**
         * Adds entity as a child
         *
         * @param {Entity} entity - The entity
         * @returns {boolean} Whether the child was added
         */
        addChild(entity) {
            return this.insertChild(entity);
        }

        /**
         * Inserts entity as a child at specified index.
         *
         * @param {Entity} entity - The entity
         * @param {number} [index] - The index. If undefined the child will be added in the end.
         * @returns {boolean} Whether the child was added
         */
        insertChild(entity, index) {
            let history = this.history.enabled;
            this.history.enabled = false;
            const result = this.insert('children', entity.get('resource_id'), index);
            this.history.enabled = history;

            if (result) {
                history = entity.history.enabled;
                entity.history.enabled = false;
                entity.set('parent', this.get('resource_id'));
                entity.history.enabled = history;
                return true;
            }

            console.error(`Cannot add duplicate child ${entity.get('resource_id')} under parent ${this.get('resource_id')}`);
            return false;
        }

        /**
         * Removes entity from children
         *
         * @param {Entity} entity - The entity
         */
        removeChild(entity) {
            let history = entity.history.enabled;
            entity.history.enabled = false;
            entity._observer.set('parent', null, true); // silent set otherwise we run into C3 error
            entity.history.enabled = history;

            history = this.history.enabled;
            this.history.enabled = false;
            this.removeValue('children', entity.get('resource_id'));
            this.history.enabled = history;
        }

        /**
         * Deletes entity (and its children)
         *
         * @param {object} [options] - Options
         * @param {boolean} [options.history] - Whether to record a history action. Defaults to true.
         */
        delete(options = {}) {
            this._entitiesApi.delete([this], options);
        }

        /**
         * Reparents entity under new parent
         *
         * @param {Entity} parent - The new parent
         * @param {number} [index] - The desired index. If undefined the entity will be added at the end of the parent's children.
         * @param {object} [options] - Options
         * @param {boolean} [options.history] - Whether to record a history action. Defaults to true.
         * @param {boolean} [options.preserverTransform] - Whether to preserve the original transform after reparenting
         */
        reparent(parent, index, options = {}) {
            this._entitiesApi.reparent([{
                entity: this,
                parent: parent,
                index: index
            }], options);
        }

        /**
         * Returns the latest version of the Entity from the Entities API.
         *
         * @returns {Entity} The entity
         */
        latest() {
            return this._entitiesApi.get(this._observer.get('resource_id'));
        }

        /**
         * @type {Entity}
         * @description The parent entity
         */
        get parent() {
            const id = this.get('parent');
            return id ? this._entitiesApi.get(id) : null;
        }

        /**
         * @type {Entity[]}
         * @description The children entities. Warning: this creates a new array every time it's called.
         */
        get children() {
            return this.get('children').map(id => this._entitiesApi.get(id));
        }

        /**
         * @type {ObserverHistory}
         * @description The history object for this entity
         */
        get history() {
            return this._history;
        }

        /**
         * @type {pc.Entity}
         * @description The entity in the 3D viewport of the Editor
         */
        get viewportEntity() {
            return this._observer ? this._observer.entity : null;
        }
    }

    /**
     * Data to reparent an entity under a new parent
     *
     * @typedef {object} ReparentArguments
     * @property {Entity} entity - The entity to reparent
     * @property {Entity} parent - The new parent for the entity
     * @property {number} index - The child index of the entity under the new parent
     */

    /**
     * The entities editor API
     */
    class Entities extends __webpack_exports__Events {
        /**
         * Creates new API instance
         */
        constructor() {
            super();

            this._root = null;

            this._entities = new __webpack_exports__ObserverList({
                index: 'resource_id'
            });
        }

        /**
         * Return a map of all entity reference properties in the graph. This will
         * include references of the entity and also references of its children
         *
         * @private
         * @param {Entity} entity - The entity
         * @returns {object} The entity references
         */
        _findReferences(entity) {
            const result = {};

            const entityFieldsCache = {};

            entity.depthFirst(entity => {
                const componentNames = Object.keys(entity.get('components') || {});
                componentNames.forEach(component => {
                    if (!entityFieldsCache[component]) {
                        entityFieldsCache[component] = globals.schema.components.getFieldsOfType(component, 'entity');
                    }

                    entityFieldsCache[component].forEach(field => {
                        const path = `components.${component}.${field}`;
                        const id = entity.get(path);
                        if (!result[id]) {
                            result[id] = [];
                        }
                        result[id].push({
                            entityId: entity.get('resource_id'),
                            path: path
                        });
                    });
                });
            });

            return result;
        }

        /**
         * Updates entity references to the old entity to point to the new entity
         *
         * @private
         * @param {object} entityReferences - A map of entity references
         * @param {string} oldValue - The entity id that we want to replace
         * @param {string} newValue - The new entity id that we want our references to point to
         */
        _updateReferences(entityReferences, oldValue, newValue) {
            const referencesToEntity = entityReferences[oldValue];
            if (!referencesToEntity) return;

            referencesToEntity.forEach(reference => {
                const entity = this.get(reference.entityId);
                if (entity) {
                    entity.set(reference.path, newValue);
                }
            });
        }

        /**
         * Gets entity by resource id
         *
         * @param {string} id - The entity's resource id
         * @returns {Entity} The entity
         */
        get(id) {
            const e = this._entities.get(id);
            return e ? e.apiEntity : null;
        }

        /**
         * Returns array of all entities
         *
         * @returns {Entity[]} The entities
         */
        list() {
            return this._entities.array().map(e => e.apiEntity);
        }

        /**
         * Adds entity to list
         *
         * @param {Entity} entity - The entity
         */
        add(entity) {
            const id = entity.get('resource_id');

            if (this.get(id)) {
                console.error(`Cannot add duplicate Entity ${id}`);
                return;
            }

            this._entities.add(entity._observer);
            if (!entity.get('parent')) {
                if (this._root) {
                    console.error(`More than one root entities in Scene. Current root is Entity "${this._root.get('name')}" [${this._root.get('resource_id')}] but Entity "${entity.get('name')}" [${id}] also has a null parent`);
                } else {
                    this._root = entity;
                }
            }

            this.emit('add', entity, this._root === entity);
        }

        /**
         * Called when an entity is added from the server
         *
         * @param {object} entityData - The entity data
         */
        serverAdd(entityData) {
            const entity = new Entity(this, entityData);
            entity.set('parent', entityData.parent);
            entity.set('children', entityData.children);
            this.add(entity);
        }

        /**
         * Removes entity from the list
         *
         * @param {Entity} entity - The entity
         * @param {object} [entityReferences] - A map of entity references to nullify
         * when this entity is removed
         */
        remove(entity, entityReferences) {
            if (entityReferences) {
                this._updateReferences(entityReferences, entity.get('resource_id'), null);
            }

            // remove children first
            entity.children.forEach(child => {
                this.remove(child, entityReferences);
            });

            // remove from selection
            if (globals.selection && globals.selection.has(entity)) {
                const history = globals.selection.history.enabled;
                globals.selection.history.enabled = false;
                globals.selection.remove(entity);
                globals.selection.history.enabled = history;
            }

            // remove from parent
            if (entity.parent) {
                entity.parent.removeChild(entity);
            }

            // remove from observer list
            this._entities.remove(entity._observer);
            entity._observer.destroy();

            // reset root
            if (this._root === entity) {
                this._root = null;
            }

            // sharedb
            if (globals.realtime && globals.realtime.scenes.current) {
                globals.realtime.scenes.current.removeEntity(entity);
            }

            this.emit('remove', entity);
        }

        /**
         * Called when an entity is removed from the server
         *
         * @param {Entity} entity - The entity
         */
        serverRemove(entity) {
            if (globals.selection && globals.selection.has(entity)) {
                const history = globals.selection.history.enabled;
                globals.selection.history.enabled = false;
                globals.selection.remove(entity);
                globals.selection.history.enabled = history;
            }

            this._entities.remove(entity._observer);
            entity._observer.destroy();

            if (this._root === entity) {
                this._root = null;
            }

            this.emit('remove', entity);
        }

        /**
         * Removes all entities from the list
         */
        clear() {
            this._root = null;
            const entities = this.list();
            this._entities.clear();

            if (globals.selection) {
                if (globals.selection.items[0] instanceof Entity)  {
                    const history = globals.selection.history.enabled;
                    globals.selection.history.enabled = false;
                    globals.selection.clear();
                    globals.selection.history.enabled = history;
                }
            }

            entities.forEach(entity => {
                entity._observer.destroy();
                this.emit('remove', entity);
            });

            this.emit('clear');
        }

        /**
         * Creates new entity and adds it to the hierarchy
         *
         * @param {object} [data] - Optional initial data for the entity
         * @param {object} [options] - Options
         * @param {boolean} [options.history] - Whether to record a history action. Defaults to true.
         * @param {boolean} [options.select] - Whether to select new Entity. Defaults to false.
         * @returns {Entity} The new entity
         */
        create(data, options = {}) {
            data = data || {};

            if (options.history === undefined) {
                options.history = true;
            }

            if (!data.parent) {
                data.parent = this._root ? this._root.get('resource_id') : null;
            }

            if (data.parent instanceof Entity) {
                data.parent = data.parent.get('resource_id');
            }


            if (data.parent && !this.get(data.parent)) {
                console.error(`Cannot create entity because parent ${data.parent} was not found`);
                return null;
            }

            let entity = new Entity(this, data);

            this.add(entity);

            // sharedb
            if (globals.realtime && globals.realtime.scenes.current) {
                globals.realtime.scenes.current.addEntity(entity);
            }

            const parent = this.get(data.parent);
            if (parent) {
                parent.addChild(entity);
            }

            // use same resource id in redo's
            data.resource_id = entity.get('resource_id');

            // add children
            if (data.children) {
                data.children.forEach(childData => {
                    childData.parent = entity;
                    const child = this.create(childData, {
                        history: false,
                        select: false
                    });

                    // use same resource_id in subsequent redo's
                    childData.resource_id = child.get('resource_id');
                });
            }

            let prevSelection;

            // remember previous selection
            if (options.history && globals.history) {
                if (options.select && globals.selection) {
                    prevSelection = globals.selection.items;
                }
            }

            // select new entity
            if (options.select && globals.selection) {
                const history = globals.selection.history.enabled;
                globals.selection.history.enabled = false;
                globals.selection.items = [entity];
                globals.selection.history.enabled = history;
            }

            if (options.history && globals.history) {
                globals.history.add({
                    name: 'new entity ' + entity.get('resource_id'),
                    // undo new entity
                    undo: () => {
                        entity = entity.latest();
                        if (!entity) return;

                        this.delete([entity], {
                            history: false
                        });

                        if (prevSelection) {
                            const history = globals.selection.history.enabled;
                            globals.selection.history.enabled = false;
                            globals.selection.items = prevSelection;
                            globals.selection.history.enabled = history;
                        }
                    },
                    // redo new entity
                    redo: () => {
                        entity = this.create(data, {
                            history: false,
                            select: options.select
                        });
                    }
                });
            }

            // TODO: post creation callaback

            return entity;
        }

        /**
         * Delete specified entities
         *
         * @param {Entity[]|Entity} entities - The entities
         * @param {object} [options] - Options
         * @param {boolean} [options.history] - Whether to record a history action. Defaults to true.
         */
        delete(entities, options = {}) {
            if (options.history === undefined) {
                options.history = true;
            }

            if (!Array.isArray(entities)) {
                entities = [entities];
            }

            // first only gather top level entities
            const ids = new Set();
            entities.forEach(entity => ids.add(entity.get('resource_id')));

            entities = entities.filter(entity => {
                entity = entity.latest();
                if (!entity) return false;

                let parent = entity.parent;
                let parentInSelection = false;
                while (parent) {
                    if (ids.has(parent.get('resource_id'))) {
                        parentInSelection = true;
                        break;
                    }
                    parent = parent.parent;
                }

                return !parentInSelection;
            });

            // TODO: if we have a lot of entities delete in backend

            // remember previous entities
            let previous;
            if (options.history && globals.history) {
                previous = {};
                entities.forEach(entity => {
                    entity.depthFirst(e => {
                        previous[e.get('resource_id')] = e.json();
                    });
                });
            }

            // find entity references
            const entityReferences = this._findReferences(this.root);

            entities.forEach(entity => {
                this.remove(entity, entityReferences);
            });

            if (previous) {
                globals.history.add({
                    name: 'delete entities',
                    undo: () => {
                        function recreateEntityData(data) {
                            data = Object.assign({}, data);
                            data.children = data.children.map(id => recreateEntityData(previous[id]));
                            return data;
                        }

                        entities = entities.map(entity => {
                            const data = recreateEntityData(previous[entity.get('resource_id')]);
                            entity = this.create(data, {
                                history: false
                            });

                            return entity;
                        });

                        entities.forEach(entity => {
                            this._updateReferences(entityReferences, entity.get('resource_id'), entity.get('resource_id'));

                        });

                        if (globals.selection) {
                            const history = globals.selection.history.enabled;
                            globals.selection.history.enabled = false;
                            globals.selection.items = entities;
                            globals.selection.history.enabled = history;
                        }

                        previous = null;
                    },
                    redo: () => {
                        previous = {};
                        entities = entities.map(e => e.latest()).filter(e => !!e);

                        entities.forEach(entity => {
                            entity.depthFirst(e => {
                                previous[e.get('resource_id')] = e.json();
                            });
                        });

                        this.delete(entities, {
                            history: false
                        });
                    }
                });
            }
        }

        /**
         * Reparents entities under new parent.
         *
         * @param {ReparentArguments[]} data - The reparenting data
         * @param {object} [options] - Options
         * @param {boolean} [options.preserverTransform] - Whether to preserve the transform of the entities
         * @param {boolean} [options.history] - Whether to record history. Defaults to true
         */
        reparent(data, options = {}) {
            if (options.history === undefined) {
                options.history = true;
            }

            const records = data.map(entry => {
                const parentOld = entry.entity.parent;
                const indexOld = parentOld.get('children').indexOf(entry.entity.get('resource_id'));
                const record = {
                    entity: entry.entity,
                    resourceId: entry.entity.get('resource_id'),
                    parentOld: parentOld,
                    indOld: indexOld,
                    parent: entry.parent,
                    indNew: entry.index !== undefined && entry.index !== null ? entry.index : entry.parent.get('children').length
                };

                if (options.preserveTransform) {
                    record.position = record.entity.viewportEntity.getPosition().clone();
                    record.rotation = record.entity.viewportEntity.getRotation().clone();
                }

                return record;
            });

            const doReparent = (entity, parent, indNew, parentOld, indOld, recordIndex, position, rotation) => {
                const resourceId = entity.get('resource_id');
                if (parentOld.get('children').indexOf(resourceId) === -1 || (parent.get('children').indexOf(resourceId) !== -1 && parent !== parentOld))
                    return false;

                // check if not reparenting to own child
                let deny = false;
                let checkParent = parent.parent;
                while (checkParent) {
                    if (checkParent === entity) {
                        deny = true;
                        checkParent = null;
                        break;
                    }

                    checkParent = checkParent.parent;
                }

                if (deny)
                    return false;

                parentOld.history.enabled = false;
                parentOld.removeValue('children', resourceId);
                parentOld.history.enabled = true;

                parent.history.enabled = false;
                let off = parent !== parentOld ? 0 : ((indNew > indOld) ? (records.length - 1 - recordIndex) : 0);
                parent.insert('children', resourceId, indNew + off);
                parent.history.enabled = true;

                entity.history.enabled = false;
                entity.set('parent', parent.get('resource_id'));

                if (options.preserveTransform && position && entity.viewportEntity) {
                    entity.viewportEntity.setPosition(position);
                    entity.viewportEntity.setRotation(rotation);

                    var localPosition = entity.viewportEntity.getLocalPosition();
                    var localRotation = entity.viewportEntity.getLocalEulerAngles();
                    entity.set('position', [localPosition.x, localPosition.y, localPosition.z]);
                    entity.set('rotation', [localRotation.x, localRotation.y, localRotation.z]);
                }

                entity.history.enabled = true;

                return true;
            };

            const redo = () => {
                let dirty = false;
                records.forEach((record, i) => {
                    const entity = record.entity.latest();
                    if (!entity) return;

                    const parent = record.parent.latest();
                    const parentOld = entity.parent;
                    if (!parentOld || !parent) return;

                    if (doReparent(entity, parent, record.indNew, parentOld, record.indOld, i, record.position, record.rotation)) {
                        dirty = true;
                    }
                });

                return dirty;
            };

            let dirty = redo();
            if (dirty && options.history && globals.history) {
                const undo = () => {
                    records.forEach((record, i) => {
                        const entity = record.entity.latest();
                        if (! entity) return;

                        const parent = entity.parent;
                        if (!parent) return;

                        const parentOld = record.parentOld.latest();
                        if (!parentOld) return;

                        doReparent(entity, parentOld, record.indOld, parent, record.indNew, i, record.position, record.rotation);
                    });
                };

                globals.history.add({
                    name: 'reparent entities',
                    undo: undo,
                    redo: redo
                });
            }
        }

        /**
         * @type {Entity}
         * Gets the root Entity
         */
        get root() {
            return this._root;
        }
    }

    /**
     * A history action
     *
     * @typedef {object} HistoryAction
     * @property {string} name - The action name
     * @property {Function} undo - The undo function
     * @property {Function} redo - The redo function
     */

    /**
     * The history API responsible for undo / redo.
     */
    class History extends __webpack_exports__Events {
        /**
         * Creates new instance of the API
         */
        constructor() {
            super();
            this._history = new __webpack_exports__History();
            this._history.on('add', name => this.emit('add', name));
            this._history.on('undo', name => this.emit('undo', name));
            this._history.on('redo', name => this.emit('redo', name));
            this._history.on('canUndo', value => this.emit('canUndo', value));
            this._history.on('canRedo', value => this.emit('canRedo', value));
        }

        /**
         * Adds history action
         *
         * @param {HistoryAction} action - The action
         */
        add(action) {
            this._history.add(action);
        }

        /**
         * Undo last action
         */
        undo() {
            this._history.undo();
        }

        /**
         * Redo last action
         */
        redo() {
            this._history.redo();
        }

        /**
         * Clear history
         */
        clear() {
            this._history.clear();
        }

        /**
         * Gets the current action
         *
         * @type {HistoryAction}
         */
        get currentAction() {
            return this._history.currentAction;
        }

        /**
         * Gets the last action
         *
         * @type {HistoryAction}
         */
        get lastAction() {
            return this._history.lastAction;
        }

        /**
         * Whether there are any actions to undo
         *
         * @type {boolean}
         */
        get canUndo() {
            return this._history.canUndo;
        }

        set canUndo(value) {
            this._history.canUndo = value;
        }

        /**
         * Whether there are actions to redo
         *
         * @type {boolean}
         */
        get canRedo() {
            return this._history.canRedo;
        }

        set canRedo(value) {
            this._history.canRedo = value;
        }
    }

    /**
     * Enables undo / redo of selection changes
     */
    class SelectionHistory {
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
            if (!this._enabled || !globals.history || this._executingAction) {
                fn();
                return;
            }

            this._executingAction = true;
            const previousSelection = this._selection.items;
            fn();
            const newSelection = this._selection.items;
            this._executingAction = false;

            globals.history.add({
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
    class Selection extends __webpack_exports__Events {
        /**
         * Creates new instance of API
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
         */
        remove(item) {
            if (!this.enabled) return;

            const index = this._items.indexOf(item);
            if (index !== -1) {
                this._history.wrapAction('deselect', () => {
                    this._items.splice(index, 1);
                    this.emit('remove', item);
                    this._deferChangeEvt();
                });        }
        }

        /**
         * Toggle item selection
         *
         * @param {any} item
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
         */
        has(item) {
            return this._items.includes(item);
        }

        /**
         * Clears selection
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

    /**
     * Provides methods to access the components schema
     */
    class ComponentSchema {
        /** @typedef {import("../schema").Schema} Schema */

        /**
         * Creates new instance of API
         *
         * @param {Schema} schema - The schema API
         */
        constructor(schema) {
            this._schema = schema.scene.entities.$of.components;
        }

        _resolveLazyDefaults(defaults) {
            // Any functions in the default property set are used to provide
            // lazy resolution, to handle cases where the values are not known
            // at startup time.
            Object.keys(defaults).forEach(key => {
                const value = defaults[key];

                if (typeof value === 'function') {
                    defaults[key] = value();
                }
            });
        }

        /**
         * Gets default data for a component
         *
         * @param {string} component - The component name
         * @returns {object} The default data
         */
        getDefaultData(component) {
            const result = {};
            for (const fieldName in this._schema[component]) {
                if (fieldName.startsWith('$')) continue;
                const field = this._schema[component][fieldName];
                if (field.hasOwnProperty('$default')) {
                    result[fieldName] = utils.deepCopy(field.$default);
                }
            }

            this._resolveLazyDefaults(result);

            return result;
        }

        /**
         * Gets a list of fields of a particular type for a component
         *
         * @param {string} componentName - The component name
         * @param {string} type - The desired type
         * @returns {string[]} A list of fields
         */
        getFieldsOfType(componentName, type) {
            const result = [];

            for (const field in this._schema[componentName]) {
                if (this._schema[componentName][field].$editorType === type) {
                    result.push(field);
                }
            }

            return result;
        }
    }

    /**
     * Provides methods to access the Editor schema.
     */
    class Schema {
        /**
         * Creates new instance of API
         *
         * @param {object} schema - The Editor schema object
         */
        constructor(schema) {
            this._schema = schema;
            this._componentSchema = new ComponentSchema(schema);
        }

        /**
         * Gets the component schema
         *
         * @type {ComponentSchema}
         */
        get components() {
            return this._componentSchema;
        }
    }

    const RECONNECT_INTERVAL = 3;
    const MAX_ATTEMPTS = 3;

    /**
     * Handles connecting and communicating with the Realtime server.
     */
    class RealtimeConnection extends __webpack_exports__Events {
        /** @typedef {import("../realtime").Realtime} Realtime */

        /**
         * Constructor
         *
         * @param {Realtime} realtime - The realtime API
         *
         */
        constructor(realtime) {
            super();
            this._realtime = realtime;
            this._socket = null;
            this._sharedb = null;
            this._reconnectAttempts = 0;
            this._reconnectInterval = RECONNECT_INTERVAL;
            this._connected = false;
            this._authenticated = false;
            this._domEvtVisibilityChange = this._onVisibilityChange.bind(this);
        }

        /**
         * Connect to the realtime server
         */
        connect() {
            if (this._reconnectAttempts > MAX_ATTEMPTS) {
                this._realtime.emit('cannotConnect');
                return;
            }

            this._reconnectAttempts++;
            this._realtime.emit('connecting', this._reconnectAttempts);

            // create new socket
            this._socket = new WebSocket(globals.url.realtime);
            // create new sharedb connection
            this._sharedb = new share.Connection(this._socket);

            this._sharedb.on('connected', this._onConnect.bind(this));
            this._sharedb.on('error', this._onError.bind(this));
            this._sharedb.on('bs error', this._onBulkSubscribeError.bind(this));

            const onmessage = this._socket.onmessage;
            this._socket.onmessage = (msg) => {
                if (!this._onMessage(msg)) {
                    onmessage(msg);
                }
            };

            const onclose = this._socket.onclose;
            this._socket.onclose = (reason) => {
                this._onClose(reason, onclose);
            };

            document.addEventListener('visibilitychange', this._domEvtVisibilityChange);
        }

        /**
         * Disconnect from the server
         */
        disconnect() {
            if (this._socket) {
                this._socket.close();
            }

            document.removeEventListener('visibilitychange', this._domEvtVisibilityChange);
        }

        /**
         * Send message to server
         *
         * @param {string} name - The message name
         * @param {object} data - The message data
         */
        sendMessage(name, data) {
            this.send(name + JSON.stringify(data));
        }

        /**
         * Sends a string to the server
         *
         * @param {string} data - The message data
         */
        send(data) {
            if (this._socket && this._socket.readyState === 1) {
                this._socket.send(data);
            }
        }

        /**
         * Gets a sharedb document
         *
         * @param {string} collection - The collection name
         * @param {string} id - The document id
         * @returns {object} The sharedb document
         */
        getDocument(collection, id) {
            return this._sharedb.get(collection, id.toString());
        }

        /**
         * Start bulk subscribing to documents
         */
        startBulkSubscribe() {
            this._sharedb.startBulk();
        }

        /**
         * Stop bulk subscribing to documents
         */
        endBulkSubscribe() {
            this._sharedb.endBulk();
        }

        _onVisibilityChange() {
            if (document.hidden) return;
            if (!this.connected) {
                this.connect();
            }
        }

        _onConnect() {
            this._connected = true;
            this._reconnectAttempts = 0;
            this._reconnectInterval = RECONNECT_INTERVAL;
            this._sendAuth();
            this._realtime.emit('connected');
        }

        _onError(msg) {
            if (this._sharedb.state === 'connected') return;
            this._realtime.emit('error', msg);
        }

        _onBulkSubscribeError(msg) {
            this._realtime.emit('error:bs', msg);
        }

        _onClose(reason, originalOnClose) {
            this._connected = false;
            this._authenticated = false;

            this._realtime.emit('disconnect', reason);
            originalOnClose();

            this._realtime.emit('nextAttempt', this._reconnectInterval);

            if (!document.hidden) {
                setTimeout(() => {
                    this.connect();
                }, this._reconnectInterval * 1000);
            }
        }

        _onMessage(msg) {
            try {
                if (msg.data.startsWith('auth')) {
                    return this._onMessageAuth(msg);
                } else if (msg.data.startsWith('whoisonline:')) {
                    return this._onMessageWhoIsOnline(msg);
                } else if (msg.data.startsWith('chat:')) {
                    return this._onMessageChat(msg);
                }  else if (msg.data.startsWith('selection')) {
                    return this._onMessageSelection(msg);
                }

                return false;
            } catch (err) {
                console.error(err);
            }
        }

        _onMessageAuth(msg) {
            if (!this._authenticated) {
                this._authenticated = true;
                this._realtime.emit('authenticated');
            }

            return true;
        }

        _onMessageWhoIsOnline(msg) {
            const parts = msg.data.split(':');
            if (parts.length === 5 && parts[1] === 'scene') {
                let data;
                const op = parts[3];
                if (op === 'set') {
                    data = JSON.parse(parts[4]);
                } else if (op === 'add' || op === 'remove') {
                    data = parseInt(parts[4], 10);
                }
                this._realtime.emit('whoisonline', op, data);
            }

            return true;
        }

        _onMessageChat(msg) {
            data = msg.data.slice('chat:'.length);

            const ind = data.indexOf(':');
            if (ind !== -1) {
                const op = data.slice(0, ind);
                data = JSON.parse(data.slice(ind + 1));

                if (op === 'typing') {
                    this._realtime.emit('chat:typing', data);
                } else if (op === 'msg') {
                    this._realtime.emit('chat:msg', data);
                }
            }

            return true;
        }

        _onMessageSelection(msg) {
            const data = msg.data.slice('selection:'.length);
            this._realtime.emit('selection', data);
            return true;
        }

        _onMessageFs(msg) {
            data = msg.data.slice('fs:'.length);
            const ind = data.indexOf(':');
            if (ind !== -1) {
                const op = data.slice(0, ind);
                if (op === 'paths') {
                    data = JSON.parse(data.slice(ind + 1));
                    this._realtime.emit('fs:paths', data);
                }

                return true;
            }

            return false;
        }

        _sendAuth() {
            this.sendMessage('auth', {
                accessToken: globals.accessToken
            });
        }


        /**
         * Whether the user is connected to the server
         *
         * @type {boolean}
         */
        get connected() {
            return this._connected;
        }

        /**
         * Whether the server has authenticated the user
         *
         * @type {boolean}
         */
        get authenticated() {
            return this._authenticated;
        }

        /**
         * Gets the sharedb instance
         *
         * @type {object}
         */
        get sharedb() {
            return this._sharedb;
        }
    }

    /**
     * Represents a scene in sharedb
     */
    class RealtimeScene extends __webpack_exports__Events {
        /** @typedef {import("../entity").Entity} Entity */
        /** @typedef {import("../realtime").Realtime} Realtime */
        /** @typedef {import("./connection").RealtimeConnection} RealtimeConnection */

        /**
         * Constructor
         *
         * @param {number} uniqueId - The unique scene id
         * @param {Realtime} realtime - The realtime API
         * @param {RealtimeConnection} connection - The realtime connection
         */
        constructor(uniqueId, realtime, connection) {
            super();
            this._uniqueId = uniqueId;
            this._realtime = realtime;
            this._connection = connection;
            this._document = null;
            this._loaded = false;

            this._evtConnection = null;
        }

        /**
         * Loads scene from sharedb and subscribes to changes.
         */
        load() {
            if (this._document) return;

            this._document = this._connection.getDocument('scenes', this._uniqueId);
            this._document.on('error', this._onError.bind(this));
            this._document.on('load', this._onLoad.bind(this));

            this._evtConnection = this._realtime.on('disconnect', this.unload.bind(this));

            this._document.subscribe();
        }

        /**
         * Unloads scene from sharedb and unsubscribes from changes.
         */
        unload() {
            if (!this._document) return;

            this._document.unsubscribe();
            this._document.destroy();
            this._document = null;
            this._loaded = false;

            this._connection.send('close:scene:' + this._uniqueId);

            this._evtConnection.unbind();
            this._evtConnection = null;

            this.emit('unload');
        }

        /**
         * Add entity to scene
         *
         * @param {Entity} entity - The entity
         */
        addEntity(entity) {
            this.submitOp({
                p: ['entities', entity.get('resource_id')],
                oi: entity.json()
            });
        }

        /**
         * Removes entity from scene (not from children of another entity)
         *
         * @param {Entity} entity - The entity
         */
        removeEntity(entity) {
            this.submitOp({
                p: ['entities', entity.get('resource_id')],
                od: {}
            });
        }

        /**
         * Submits sharedb operation
         *
         * @param {object} op - The operation
         */
        submitOp(op) {
            if (!this._loaded) return;

            try {
                this._document.submitOp([op]);
            } catch (err) {
                console.error(err);
                this._realtime.emit('error:scene', err, this._uniqueId);
            }
        }

        /**
         * Calls the callback when there are no changes pending to be
         * sent to the server
         *
         * @param {Function} callback - The callback
         */
        whenNothingPending(callback) {
            if (this._document) {
                this._document.whenNothingPending(callback);
            }
        }

        _onError(err) {
            this._realtime.emit('error:scene', err, this._uniqueId);
        }

        _onLoad() {
            // notify of operations
            this._document.on('op', this._onOp.bind(this));
            this._loaded = true;
            this.emit('load');
        }

        _onOp(ops, local) {
            if (local) return;

            for (let i = 0; i < ops.length; i++) {
                if (ops[i].p[0]) {
                    this._realtime.emit('scene:op', ops[i].p[0], ops[i]);
                }
            }
        }

        /**
         * Whether the scene is loaded
         *
         * @type {boolean}
         */
        get loaded() {
            return this._loaded;
        }

        /**
         * The scene data
         *
         * @type {object}
         */
        get data() {
            return this._loaded?._document?.data || null;
        }

        /**
         * The scene id - used in combination with the branch id
         *
         * @type {number}
         */
        get id() {
            return this.data?.item_id;
        }

        /**
         * The scene's unique id
         *
         * @type {number}
         */
        get uniqueId() {
            return this._uniqueId;
        }
    }

    /**
     * Provides methods to load scenes from sharedb
     */
    class RealtimeScenes extends __webpack_exports__Events {
        /** @typedef {import("../realtime").Realtime} Realtime */
        /** @typedef {import("./connection").RealtimeConnection} RealtimeConnection */

        /**
         * Constructor
         *
         * @param {Realtime} realtime - The realtime API
         * @param {RealtimeConnection} connection - The realtime connection
         */
        constructor(realtime, connection) {
            super();
            this._realtime = realtime;
            this._connection = connection;
            this._scenes = {};
            this._currentScene = null;
        }

        /**
         * Loads a scene
         *
         * @param {number} sceneId - The scene id
         * @returns {RealtimeScene} The scene
         */
        load(sceneId) {
            this._currentScene = this._scenes[sceneId];

            if (!this._currentScene) {
                this._currentScene = new RealtimeScene(sceneId, this._realtime, this._connection);
                this._scenes[sceneId] = this._currentScene;
            }

            if (!this._currentScene.loaded) {
                this._currentScene.load();
                this._currentScene.once('load', () => {
                    this._realtime.emit('load:scene', this._currentScene);
                });
            }

            return this._currentScene;
        }

        /**
         * Unloads a scene
         *
         * @param {number} sceneId - The scene id
         */
        unload(sceneId) {
            if (this._scenes[sceneId]) {
                this._scenes[sceneId].unload();
                if (this._currentScene === this._scenes[sceneId]) {
                    this._currentScene = null;
                }

                delete this._scenes[sceneId];
            }
        }

        /**
         * The current scene
         *
         * @type {RealtimeScene}
         */
        get current() {
            return this._currentScene;
        }
    }

    /**
     * Provides methods to communicate and load / save data to the realtime server
     */
    class Realtime extends __webpack_exports__Events {
        constructor() {
            super();
            this._connection = new RealtimeConnection(this);
            this._scenes = new RealtimeScenes(this, this.connection);
        }

        /**
         * Gets the realtime connection
         *
         * @type {RealtimeConnection}
         */
        get connection() {
            return this._connection;
        }

        /**
         * Gets the realtime scenes API
         *
         * @type {RealtimeScenes}
         */
        get scenes() {
            return this._scenes;
        }
    }

    exports.ComponentSchema = ComponentSchema;
    exports.Entities = Entities;
    exports.Entity = Entity;
    exports.History = History;
    exports.Realtime = Realtime;
    exports.RealtimeConnection = RealtimeConnection;
    exports.RealtimeScene = RealtimeScene;
    exports.RealtimeScenes = RealtimeScenes;
    exports.Schema = Schema;
    exports.Selection = Selection;
    exports.SelectionHistory = SelectionHistory;
    exports.globals = globals;
    exports.utils = utils;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
