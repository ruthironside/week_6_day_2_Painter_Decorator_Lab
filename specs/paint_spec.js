const assert = require("assert");
const Paint = require("../paint.js")

describe("Paint", function() {
    let paint;

    beforeEach(function() {
        paint = new Paint(4);
    
    });

    it("should have a number of litres of paint", function() {
        const actual = paint.litres;
        assert.strictEqual(actual, 4)
    });

    it("Should be able to check it is empty", function() {
        const actual = paint.checkIsEmpty();
        assert.strictEqual(actual, false);
    });

    it("Should be able to empty itself", function() {
        paint.empty();
        const actual = paint.litres;
        assert.strictEqual(actual, 0);

    })


});