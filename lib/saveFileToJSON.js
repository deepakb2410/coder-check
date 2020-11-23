"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.saveFile = undefined;

var _fs = require("fs");

var saveToJSON = function saveToJSON(result) {
    var jsonData = JSON.stringify(result);
    (0, _fs.writeFile)("src/resultset.json", jsonData, function (error) {
        if (error) {
            console.log("Showing the ERROR! :", error);
        } else {
            console.log("The expected file is successfully generated.");
        }
    });
}; /*
    * This shall be responsible for saving the data in the
    * expected file and placed in lib directory.
    * 
    * @author: Deepak Bammi
    * 
    */
var saveFile = exports.saveFile = saveToJSON;