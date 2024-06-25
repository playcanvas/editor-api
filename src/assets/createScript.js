const VALID_FILENAME = /^([^0-9.#<>$+%!`&='{}@\\/:*?"<>|\n])([^#<>$+%!`&='{}@\\/:*?"<>|\n])*$/i;

/**
 * Creates filename and script content from provided arguments. If the provide filename contains a '.mjs'
 * suffix, it will generate an ESM based class syntax.
 *
 * @param {string} filename - The desired filename.
 * @param {string} text - The desired contents of the script. If not provided boilerplate code will be used.
 * @returns {object} The filename and content of the script
 */
function createScript(filename, text) {
    let className = '';
    let scriptName = '';

    // tokenize filename
    const tokens = [];
    const name = filename.slice(0, -3);
    const str = name.replace(/([^A-Z])([A-Z][^A-Z])/g, '$1 $2').replace(/([A-Z0-9]{2,})/g, ' $1');
    const parts = str.split(/(\s|\-|_|\.)/g);

    // filter valid tokens
    for (let i = 0; i < parts.length; i++) {
        parts[i] = parts[i].toLowerCase().trim();
        if (parts[i] && parts[i] !== '-' && parts[i] !== '_' && parts[i] !== '.')
            tokens.push(parts[i]);
    }

    if (tokens.length) {
        scriptName = tokens[0];

        for (let i = 1; i < tokens.length; i++) {
            scriptName += tokens[i].charAt(0).toUpperCase() + tokens[i].slice(1);
        }

        for (let i = 0; i < tokens.length; i++) {
            className += tokens[i].charAt(0).toUpperCase() + tokens[i].slice(1);
        }
    } else {
        className = 'Script';
        scriptName = 'script';
    }

    if (!VALID_FILENAME.test(className)) {
        className = 'Script';
    }

    if (!filename) {
        filename = scriptName + '.js';
    }

    if (!/.js$/i.test(filename)) {
        filename += '.js';
    }
    const isEsm = filename.endsWith('.mjs');
    const boilerPlateGenerator = isEsm ? createEsmBoilerplate : createBoilerplate;
    const content = text || boilerPlateGenerator(className, scriptName);

    return {
        filename,
        content
    };
}

function createBoilerplate(className, scriptName) {
    return `
var ${className} = pc.createScript('${scriptName}');

// initialize code called once per entity
${className}.prototype.initialize = function() {

};

// update code called every frame
${className}.prototype.update = function(dt) {

};

// uncomment the swap method to enable hot-reloading for this script
// update the method body to copy state from the old instance
// ${className}.prototype.swap = function(old) { };

// learn more about scripting here:
// https://developer.playcanvas.com/user-manual/scripting/
`.trim();
}

function createEsmBoilerplate(className, scriptName) {
    return `
import { Script } from 'playcanvas';

/**
 * The 'Script' class is the fundamental base class for all scripts within PlayCanvas. It provides
 * the minimal interface required for a script to be compatible with both the Engine and the
 * Editor.
 * 
 * Learn more about script {@link https://developer.playcanvas.com/user-manual/scripting/}
 */
export class ${className} extends Script {
    /**
     * Called when the script is about to run for the first time.
     */
    initialize() {
    }

    /**
     * Called for enabled (running state) scripts on each tick.
     * 
     * @param {number} dt - The delta time in seconds since the last frame.
     */
    update(dt) {
    }

    /**
     * Called when a script that already exists in the registry gets redefined. If the new script
     * has a `swap` method in its prototype, then it will be executed to perform hot-reload at
     * runtime. Uncomment the method to enable hot-reloading for this script.
     * 
     * @param {${className}} old - The old script instance.
     */
    // swap(old) {
    // }
}
`.trim();
}

export { createScript };
