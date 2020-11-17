const Paint = function(litres) {
    this.litres = litres;
};

Paint.prototype.checkIsEmpty = function() {
    if (this.litres === 0) {
        result = true 
    } else {
        result = false
    }
    return result;
}

Paint.prototype.empty = function() {
    this.litres = 0;
}

module.exports = Paint;