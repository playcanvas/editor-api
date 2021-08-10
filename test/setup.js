import { Observer, ObserverList, ObserverHistory } from '/base/node_modules/@playcanvas/pcui/pcui-binding.mjs';

// move chai methods to window
for (const member in chai) {
    window[member] = chai[member];
}

// create pcui namespace
window.pcui = {};
window.Observer = Observer;
window.ObserverList = ObserverList;
window.ObserverHistory = ObserverHistory;

// create pc namespace
window.pc = {};

// guid functions
pc.guid = {
    create: function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0;
            const v = (c === 'x') ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
};
