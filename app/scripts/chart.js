(function() {
    var d3 = require('d3'),
        config = require('./config.js');
    require('./helper-functions.js');

    module.exports = {
        init: init,
        drawData: drawData
    };

    function init() {
        console.log('Initiating chart');

        initScales.call(this);
        this.chart = d3.select('.chart');
        this.innerChart = this.chart.append('g')
            .attr('transform', 'translate(' + config.margin.left + ', ' + config.margin.top + ')');
    }

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
            d3.min(this.data, yearsToDate),
            d3.max(this.data, yearsToDate)
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

    function drawData(data) {
        console.log('Drawing', data);

        this.baseTemp = data.baseTemperature;
        this.data = data.monthlyVariance;
        setScalesDomain.call(this);
        initAxes.call(this);
    }
})();