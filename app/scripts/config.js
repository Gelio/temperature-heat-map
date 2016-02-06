var config = {
    width: 900,
    height: 600,
    margin: {
        top: 50,
        right: 50,
        bottom: 100,
        left: 50
    },
    xScaleYearsInterval: 25,
    colors: ['blue', 'lightblue', 'yellow', 'red']
};

module.exports = config;

config.innerWidth = config.width - config.margin.left - config.margin.right;
config.innerHeight = config.height - config.margin.top - config.margin.bottom;