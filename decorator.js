const Decorator = function() {
    this.paintStock = []
};

Decorator.prototype.numberOfCans = function() {
    return this.paintStock.length;
}

Decorator.prototype.addPaint = function(paintCan) {
    this.paintStock.push(paintCan);

}

Decorator.prototype.totalLitres = function() {
    let total = 0;
    for (can of this.paintStock) {
        total += can.litres;
    
    }
    return total;
    
}

module.exports = Decorator;