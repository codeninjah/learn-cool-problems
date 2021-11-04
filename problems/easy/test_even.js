import assert from 'assert'
import even from './even.js'
import alex from './test_YYYY.js'


//var assert = require('assert');
  describe('even()', function() {
    it('should return -1 when the value is not present', function() {
      assert.deepEqual(even([2,3,4,5,6]), [2,4,6]);
  });
});


//var assert = require('assert');
describe('alex()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(alex("ja"), "is string");
  });
});
