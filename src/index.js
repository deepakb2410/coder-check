/*
 * This main function to read the file and generate the output
 * after computing the data.
 * 
 * @author: Deepak Bammi
 * 
 */
import { computeClicksSubset } from './computeClicksData.js';
import { readFile } from 'fs';
import { saveFile } from './saveFileToJSON.js';

// considering the input as a JSON object
readFile('lib/clicks.json', (err, data) => {
  if (err)
    throw err;
  let clicksObject = JSON.parse(data);
  
  // for storing the final result set
  const result = computeClicksSubset(clicksObject);

  // Save the final computed result into a new file 
  saveFile(result);

});
