'use strict';

var _assert = require('assert');

var _testData = require('./testData.js');

var _computeData = require('./computeData.js');

describe('While creating subset', function () {
    context('have no input arguments', function () {
        it('should return an error', function () {
            (0, _assert.throws)(function () {
                return (0, _computeData.computeClicksSubset)();
            }, 'No Input!');
        });
    });
    context('have invalid input arguments', function () {
        it('show thorw an error', function () {
            (0, _assert.throws)(function () {
                return (0, _computeData.computeClicksSubset)({ abc: 9011 });
            }, "Invalid Arguments");
        });
    });
    context('with valid arguments', function () {
        it('should have equal array length'), function () {
            (0, _assert.equal)(_testData.output.length, (0, _computeData.computeClicksSubset)(_testData.input).length);
        };
    });
});