var config = {
    width: 900,
    height: 500,
    margin: {
        top: 0,
        right: 50,
        bottom: 50,
        left: 50
    },
    xScaleYearsInterval: 25,
    colors: ['blue', 'lightblue', 'yellow', 'red'],
    tooltipOffset: {
        top: 10,
        left: 10
    }
};

module.exports = config;

config.innerWidth = config.width - config.margin.left - config.margin.right;
config.innerHeight = config.height - config.margin.top - config.margin.bottom;