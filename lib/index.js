'use strict';

var _computeClicksData = require('./computeClicksData.js');

var _fs = require('fs');

var _saveFileToJSON = require('./saveFileToJSON.js');

// considering the input as a JSON object
(0, _fs.readFile)('lib/clicks.json', function (err, data) {
  if (err) throw err;
  var clicksObject = JSON.parse(data);

  // for storing the final result set
  var result = (0, _computeClicksData.computeClicksSubset)(clicksObject);

  // Save the final computed result into a new file 
  (0, _saveFileToJSON.saveFile)(result);
}); /*
     * This main function to read the file and generate the output
     * after computing the data.
     * 
     * @author: Deepak Bammi
     * 
     */