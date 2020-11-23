"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * This function shall be responsible for computing the data as per
 * given condition.
 * 
 * @author: Deepak Bammi
 * 
 */
var getClicksSubset = function getClicksSubset(clicks) {
  var generatedResultSet = {};
  var resultCounter = {};
  var filterResultSet = [];
  var prevTimePeriod = -1;
  var prevDatePeriod = -1;
  var outputResultSet = [];
  // iterating over each occurrence of the clicks object
  clicks.forEach(function (element) {
    // function which returns hours and date from the given timestamp
    var timestamp = getTimeStamp(element);
    // finding out the selected element's hours
    var time_period = timestamp.time_period_hours;
    // finding out the selected element's date
    var currentDatePeriod = timestamp.date_period;

    if (prevDatePeriod != -1 && prevDatePeriod != currentDatePeriod) {
      //check for different dates
      filterResultSet = filterResultSet.concat(Object.values(generatedResultSet));
      filterResultSet = removeGreaterThanTenIP(filterResultSet, resultCounter);
      outputResultSet = outputResultSet.concat(filterResultSet);
      // concatenate the final result into one array
      filterResultSet = [];
      resultCounter = {};
      generatedResultSet = {};
      prevTimePeriod = -1;
      prevDatePeriod = -1;
      generatedResultSet = getResultObject(generatedResultSet, resultCounter, element);
    } else {
      if (prevTimePeriod == -1 || time_period == prevTimePeriod) {
        generatedResultSet = getResultObject(generatedResultSet, resultCounter, element);
      } else {
        filterResultSet = filterResultSet.concat(Object.values(generatedResultSet));
        generatedResultSet = {};
        generatedResultSet = getResultObject(generatedResultSet, resultCounter, element);
      }
      prevTimePeriod = time_period;
    }
    prevDatePeriod = currentDatePeriod;
  });
  filterResultSet = filterResultSet.concat(Object.values(generatedResultSet));
  filterResultSet = removeGreaterThanTenIP(filterResultSet, resultCounter);
  outputResultSet = outputResultSet.concat(filterResultSet);
  // the final subset of given input set
  return outputResultSet;
};

// function for removing those IPs whose count is greater than 10
var removeGreaterThanTenIP = function removeGreaterThanTenIP(filterResultSet, resultCounter) {
  var updatedResultSet = [];
  for (var i = 0; i < filterResultSet.length; i++) {
    var IP = filterResultSet[i].ip;
    var count = resultCounter[IP];
    if (count <= 10) {
      updatedResultSet.push(filterResultSet[i]);
    }
  }
  return updatedResultSet;
};

/*
 * This function checks whether the given IP exists in the final counter array.
 * If yes, then it updates the count of that IP. If no, it adds the IP to the counter array
 */
var getResultObject = function getResultObject(generatedResultSet, resultCounter, element) {
  var isInIpCount = resultCounter.hasOwnProperty(element.ip);
  if (isInIpCount) {
    var count = ++resultCounter[element.ip];
    resultCounter[element.ip] = count;
  } else {
    resultCounter[element.ip] = 1;
  }
  if (!generatedResultSet.hasOwnProperty(element.ip)) {
    generatedResultSet[element.ip] = element;
  } else {
    // checking if the amount of the current IP click more than the existing click. If yes then it replaces the existing click object for the given IP
    if (generatedResultSet[element.ip].amount < element.amount) {
      generatedResultSet[element.ip] = element;
    } else if (generatedResultSet[element.ip].amount == element.amount) {
      //checking if the amount is same then the click with earlier timestamp should be recorded.
      if (new Date(element.timestamp) < new Date(generatedResultSet[element.ip].timestamp)) {
        generatedResultSet[element.ip] = element;
      }
    }
  }
  return generatedResultSet;
};

/* 
 * function for returning the hours and time period
 *
 */
var getTimeStamp = function getTimeStamp(element) {
  var time_period_hours = new Date(element.timestamp).getHours();
  var date_period = new Date(element.timestamp).toLocaleDateString();
  return {
    time_period_hours: time_period_hours, date_period: date_period
  };
};

var computeClicksSubset = exports.computeClicksSubset = getClicksSubset;