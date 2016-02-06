var d3 = require('d3'),
    config = require('./config.js'),
    helper = require('./helper-functions.js');

module.exports = {
    initScales: initScales,
    setScalesDomain: setScalesDomain,
    initAxes: initAxes,
    callAxes: callAxes
};

function initScales() {
    // Years
    this.x = d3.scale.ordinal()
        .rangeRoundBands([0, config.innerWidth]);

    // Months
    this.y = d3.scale.ordinal()
        .rangeRoundBands([0, config.innerHeight]);

    this.colorScale = d3.scale.linear()
        .range(config.colors)
}

function setScalesDomain() {
    this.x.domain(d3.range(
        d3.min(this.data, helper.getYear),
        d3.max(this.data, helper.getYear)+1
    ));

    // Hardcore months 1 through 12
    this.y.domain(d3.range(1, 13));

    this.colorScale.domain([
        d3.min(this.data, helper.getTemperature(this.baseTemp)),
        d3.max(this.data, helper.getTemperature(this.baseTemp))
    ]);
}

function initAxes() {
    this.xAxis = d3.svg.axis()
        .scale(this.x)
        .orient('bottom')
        .tickValues(this.x.domain().filter(function(v, i) { return i%config.xScaleYearsInterval == 0; }));

    this.yAxis = d3.svg.axis()
        .scale(this.y)
        .orient('left');
}

function callAxes() {
    this.innerChart.append('g')
        .attr('transform', 'translate(0, ' + config.innerHeight + ')')
        .call(this.xAxis);

    this.innerChart.append('g')
        .call(this.yAxis);
}