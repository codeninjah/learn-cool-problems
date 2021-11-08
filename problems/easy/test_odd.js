import assert from 'assert'
import tests from './odd.js'

// Because of the special array structure being exported from the problems, we add this extract the function.
// fn below is the function to test
const [testDefs] = tests
//const [fn] = testDefs.filter(x => x % 2 == 1)

describe("odd", () => {
  it("[1, 2, 3, 4, 5]", () => assert.notDeepEqual((testDefs[1, 2, 3, 4, 5]), [1, 3, 5]))
})

