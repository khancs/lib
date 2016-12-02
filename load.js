/*
  load.js 
  Originally created on 11/29/16 by KhanCS (https://github.com/khancs).
*/

(function(context) {
    var loadListeners = []; // Functions to call once the library loader is loaded
    var ka = {
        _version: "v0.0.1.1"
    };
    ka._root = "https://cdn.rawgit.com/khancs/lib/" + ka._version + "/";
    context.ka = ka;

    var loadScript = function(src) {
        var el = context.document.createElement('script');
        el.setAttribute('src', src);
        context.document.body.appendChild(el);
        return el;
    };
    
    loadScript(ka._root + "list.js").addEventListener('load', function() {
        if (typeof ka.libraries !== 'object' || typeof ka._libRoot !== 'string') {
            throw 'KALib/load.js: Could not load file "list.js" from "' + ka._root + '"';
        }
        /**
         * Gets the basic information, including name, description, and relative source URL, about a library
         * @param libraryID  The ID of the library for which to obtain basic information
         * @return           An object with basic information about the library\
         */
        var getInfo = function(libraryID) {
            return ka.libraries[libraryID];
        };

        /**
         * Loads a library from the Khan Academy database of libraries
         * @param libraryID  The ID of the library to load
         * @param callback   The function to be called when the library is loaded. Called with the new library as a parameter.
         * @throws           An error if the library cannot be found
         */
        ka.load = function(libraryID, callback) {
            var lib = getInfo(libraryID);
            if (typeof lib === 'undefined' || typeof lib.src === 'undefined') {
                throw 'KALib/load.js: No library with ID "' + libraryID + '" exists.';
            }
            if (typeof callback !== 'function') {
                throw 'KALib/load.js: Invalid callback specified for library with ID "' + libraryID + '".';
            }
            loadScript(ka._libRoot + lib.src)._ka_loaded = function(result) {
                callback(result);
            }
        };

        /**
         * Loads a JavaScript file based on a src parameter
         * @param src  The src attribute of the JS file to load
         */
        ka.loadScript = loadScript;

        for (var i = 0; i < loadListeners.length; i++) {
            loadListeners[i](ka);
        }
        loadListeners = null;
    });

    /**
     * Adds a listener to call when the library-loading interface is ready
     * @param listener  The function to call when the library-loading interface is ready. Called with `ka` as a parameter
     */
    ka.ready = function(listener) {
        if (loadListeners !== null) {
          loadListeners.push(listener);
        }
        else {
          listener(ka);
        }
    };
})(this);
