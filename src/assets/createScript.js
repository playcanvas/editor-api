const VALID_FILENAME = /^([^0-9.#<>$+%!`&='{}@\\/:*?"<>|\n])([^#<>$+%!`&='{}@\\/:*?"<>|\n])*$/i;

/**
 * Creates filename and script content from provided arguments.
 *
 * @param {string} name - The desired script name.
 * @param {string} filename - The desired filename.
 * @param {string} text - The desired contents of the script. If not provided boilerplate code will be used.
 * @returns {object} The filename and content of the script
 */
function createScript(name, filename, text) {
    let className = '';
    let scriptName = '';

    // tokenize filename
    const tokens = [];
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

    const content = text || createBoilerplate(className, scriptName);

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

// swap method called for script hot-reloading
// inherit your script state here
// ${className}.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/
    `.trim();
}

export { createScript };
