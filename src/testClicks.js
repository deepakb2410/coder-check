
import { equal, throws } from 'assert';

import { input, output } from './testData.js';
import { computeClicksSubset } from './computeData.js';

describe('While creating subset',function(){
    context('have no input arguments', function(){
        it('should return an error', function(){
            throws(()=>computeClicksSubset(),'No Input!'            
            );
        });
    });
    context('have invalid input arguments', function(){
        it('show thorw an error', function(){
            throws(()=>computeClicksSubset({abc:9011}), "Invalid Arguments");
        });
    });
    context('with valid arguments', function(){
        it('should have equal array length'), function(){
            equal(output.length, computeClicksSubset(input).length);
        }
    });
    
});