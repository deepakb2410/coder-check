/*
 * This shall be responsible for saving the data in the
 * expected file and placed in lib directory.
 * 
 * @author: Deepak Bammi
 * 
 */
import { writeFile } from 'fs';

const saveToJSON = result => {
    let jsonData= JSON.stringify(result);
    writeFile("src/resultset.json",jsonData, error => {
        if(error) {
            console.log("Showing the ERROR! :", error);
        } else {
            console.log("The expected file is successfully generated.");
        }
    });
}

export const saveFile = saveToJSON;