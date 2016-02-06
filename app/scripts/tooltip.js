var d3 = require('d3'),
    config = require('./config.js');

module.exports = {
    bindTooltip: bindTooltip
};

function bindTooltip(groups) {
    groups.on('mouseover', displayTooltip.bind(this))
        .on('mouseout', hideTooltip.bind(this));
}

function displayTooltip(d) {
    console.log('Display', d);
    console.log(d3.event.pageX, d3.event.pageY);
    d3.select('.chart-tooltip')
        .classed('visible', true)
        .style('left', d3.event.clientX + config.tooltipOffset.left + 'px')
        .style('top', d3.event.clientY + config.tooltipOffset.top + 'px')
        .html('<h3>' + d.year + '</h3>' + (this.baseTemp + d.variance).toFixed(2) + ' &deg;C');
}

function hideTooltip(d) {
    d3.select('.chart-tooltip')
        .classed('visible', false);
}