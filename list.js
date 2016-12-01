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
        "pjs": {
            name: "Khan Academy Processing.js",
            desc: "A library to produce environments to emulate the Khan Academy Processing.js environment",
            src: "khancs/pjs.js"
        }
    };
})(this);
