/*
  load.js 
  Originally created on 11/29/16 by KhanCS (https://github.com/khancs).
*/

(function(context) {
    var ka = {
        _root: "https://cdn.rawgit.com/khancs/lib/v0.0.1/"
    };
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
         * @throws           An error if the library cannot be found
         */
        ka.load = function(libraryID) {
            var lib = getInfo(libraryID);
            if (typeof lib === 'undefined' || typeof lib.src === 'undefined') {
                throw 'KALib/load.js: No library with ID "' + libraryID + '" exists.';
            }
            loadScript(ka._libRoot + lib.src);
        };
    });
})(this);
