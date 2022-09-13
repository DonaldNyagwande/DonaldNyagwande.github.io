"use strict";

let sum = (array) => array.reduce((x, y) => x + y, 0);
let multiply = (array) => array.reduce((e, t) => e * t, 1);
let reverse = (stringX) => [...stringX].reverse().join("");
let filterLongWords = (w, i) => w.filter(p => p.length > i);