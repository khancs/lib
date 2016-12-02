/*
 Originally created on 11/29/16 by KhanCS
*/
(function(context) {
    // Load the Processing.js script from CDNJS
    context.ka.loadScript('https://cdnjs.cloudflare.com/ajax/libs/processing.js/1.6.3/processing.min.js').addEventListener('load',
     function() {
        /**
         * Runs specified KA/Processing.js code within the specified canvas
         * @param canvas      The canvas in which to evaluate the code
         * @param scriptText  The text of the Khan Academy-style Processing.js code
         */
        var runPJS = function(canvas, scriptText) {
            var instance = new context.Processing(canvas, function(env) {
                env.ka = context.ka; // Add the ka library loader to the PJS environment
                with (env) {
                    context.eval(scriptText); // Evaluate the script text - MAKE SURE it is trusted code!
                }
            });
        };
        var scripts = context.document.querySelectorAll('script[type="text/ka-pjs"]');
        var selector, canvas;
        for (var i = 0; i < scripts.length; i++) {
            selector = scripts[i].getAttribute('data-canvas');
            if (typeof selector !== 'string') {
                throw 'KA/webpage/pjs: Could not find attribute "data-canvas" on element "script[type=text/ka-pjs]".';
            }
            canvas = document.querySelectorAll(selector);
            if (canvas.length === 0) {
                throw 'KA/webpage/pjs: Could not find canvas "' + selector + '" in document.';
            }
            for (var ii = 0; ii < canvas.length; ii++) {
                runPJS(canvas[ii], scripts[i].innerHTML);
            }
        }
        context.document.currentScript._ka_loaded({
            runPJS: runPJS
        });
    });
})(window);
