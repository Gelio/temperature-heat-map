var config = {
    width: 900,
    height: 600,
    margin: {
        top: 50,
        right: 50,
        bottom: 100,
        left: 50
    }
};

module.exports = config;

config.innerWidth = config.width - config.margin.left - config.margin.right;
config.innerHeight = config.height - config.margin.top - config.margin.bottom;

config.translateBarsUp = config.innerHeight / 12 / 2;   // this is so that bars line up with the y axis