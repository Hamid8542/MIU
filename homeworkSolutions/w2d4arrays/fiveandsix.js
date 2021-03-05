/* 5.    Modify each rotate function to rotate array by n times where, n is the second parameter passed in the function (EC). n < number of elements */
describe("rotateNRight", function () {

    it("tests rotateNRight 3", function () {
        assert.deepStrictEqual(arrays.rotateNRight([-1, -100, 1, 2, 3, -55], 3), [2, 3, -55, -1, -100, 1]);
    });
    it("tests rotateNRight 4", function () {
        assert.deepStrictEqual(arrays.rotateNRight([-10, 2, 3, 4, 20], 4), [2, 3, 4, 20, -10]);
    });

});

/* 6.    Write a JavaScript function that takes a string of  numbers as comma separated values, e.g, “32, 105,  -22”,  and stores it into an array, e.g., [32, 105, -22] and do following operations
a.    Filters out negative values
b.    Maps the filtered elements to sum of its digits--i.e., 32 becomes 5 and 105 becomes 6
c.    Reduce to get sum of all the elements and returns this value--i.e, add the 5 and 6 to get 11
*/
describe("filter map reduce string", function () {
    it("tests 32, 105,  -22 ", function () {
        assert.strictEqual(arrays.fmrString("32, 105,  -22"), 11);
    });
});

