var d3 = require('d3'),
    config = require('./config.js'),
    helper = require('./helper-functions.js');

module.exports = {
    initScales: initScales,
    setScalesDomain: setScalesDomain,
    initAxes: initAxes
};

function initScales() {
    // Years
    this.x = d3.time.scale()
        .range(0, config.innerWidth);

    // Months
    this.y = d3.time.scale()
        .range(0, config.innerHeight);
}

function setScalesDomain() {
    this.x.domain([
        d3.min(this.data, helper.yearsToDate),
        d3.max(this.data, helper.yearsToDate)
    ]);

    // Hardcore months 1 through 12
    this.y.domain([1, 12]);
}

function initAxes() {
    this.xAxis = d3.svg.axis()
        .scale(this.x);

    this.yAxis = d3.svg.axis()
        .scale(this.y);
}