"use strict";
exports.__esModule = true;
exports.otherThing = exports.cThing = void 0;
var a_1 = require("./a");
var b_1 = require("./b");
exports.cThing = (0, b_1.bThing)();
var otherThing = function () { return (0, a_1.aThing)(); };
exports.otherThing = otherThing;
