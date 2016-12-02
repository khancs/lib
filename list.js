/*
  list.js 
  Originally created on 11/29/16 by KhanCS (https://github.com/khancs).
*/

(function(context) {
    if (typeof context.ka === 'undefined') {
        context.ka = {};
    }
    var ka = context.ka;
    ka._libRoot = "https://cdn.rawgit.com/khancs/lib/" + ka._version + "/lib/";
    ka.libraries = {
        "pjs/gui": {
            name: "Processing.js GUI Creator",
            desc: "A library to allow simple production of GUIs in the Khan Academy Processing.js environment",
            src:  "khancs/pjs-gui.js"
        },
        "webpage/pjs": {
            name: "Khan Academy Processing.js",
            desc: "A library to produce environments to emulate the Khan Academy Processing.js environment",
            src:  "khancs/webpage-pjs.js"
        }
    };
})(this);
