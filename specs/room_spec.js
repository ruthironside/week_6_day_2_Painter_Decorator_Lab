const assert = require("assert");
const Room = require("../room.js")

describe("Room", function() {
    let room;

    beforeEach(function() {
        room = new Room(100);
    });

    it("should have an area", function() {
        const actual = room.area;
        assert.strictEqual(actual, 100)

    });

    it("should start not painted", function() {
        const actual = room.isPainted;
        assert.strictEqual(actual, false)
    })

    it("should be able to be painted", function() {
        room.paintRoom();
        const actual = room.isPainted;
        assert.strictEqual(actual, true)
    })

})