const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js')

describe('Decorator', function(){
    let decorator;
    let paint1;

    beforeEach(function(){
        decorator = new Decorator();
        paint1 = new Paint(30);
        paint2 = new Paint(20);
    })

    describe('paintStock', function() {
        it("should start with an empty paint stock", function() {
            const actual = decorator.paintStock;
            assert.deepStrictEqual(actual, []);
        });

        it("should be able to add a can of paint to paint stock", function() {
            decorator.addPaint(paint1);
            const actual = decorator.numberOfCans();
            assert.strictEqual(actual, 1 );
        })

        it("should be able to calculate total litres of paint in stock", function(){
            decorator.addPaint(paint1);
            decorator.addPaint(paint2);
            const actual = decorator.totalLitres();
            assert.strictEqual(actual, 50);
        })







    })
})