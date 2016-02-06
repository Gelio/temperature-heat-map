(function() {
    var d3 = require('d3'),
        config = require('./config.js'),
        scalesAxes = require('./scales-axes.js'),
        helper = require('./helper-functions.js');

    module.exports = {
        init: init,
        drawData: drawData
    };

    function init() {
        console.log('Initiating chart');

        this.chart = d3.select('.chart')
            .attr('width', config.width)
            .attr('height', config.height);
        this.innerChart = this.chart.append('g')
            .attr('transform', 'translate(' + config.margin.left + ', ' + config.margin.top + ')');

        scalesAxes.initScales.call(this);
    }

    function drawData(data) {
        console.log('Drawing', data);

        this.baseTemp = data.baseTemperature;
        this.data = data.monthlyVariance;

        scalesAxes.setScalesDomain.call(this);
        scalesAxes.initAxes.call(this);

        var groups = this.innerChart.selectAll('g')
            .data(this.data)
            .enter().append('g')
            .attr('transform', helper.getTranslation.bind(this));

        groups.append('rect')
            .attr('height', this.y.rangeBand())
            .attr('width', this.x.rangeBand())
            .attr('fill', function(d) {
                return this.colorScale(this.tempToFraction(this.baseTemp + d.variance));
            }.bind(this));

        scalesAxes.callAxes.call(this);
    }
})();