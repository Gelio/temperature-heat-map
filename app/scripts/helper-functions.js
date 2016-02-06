var config = require('./config.js');

module.exports = {
    yearsToDate: yearsToDate,
    monthsToDate: monthsToDate,
    getTranslation: getTranslation,
    getYear: getYear,
    getMonth: getMonth,
    getTemperature: getTemperature
};

function yearsToDate(d) {
    return new Date(d.year);
}

function monthsToDate(d) {
    return new Date(0, d.month);
}

function getTranslation(d) {
    return 'translate(' + this.x(d.year) + ', ' + (this.y(d.month) - config.translateBarsUp)  + ')';
}

function getYear(d) {
    return d.year;
}

function getMonth(d) {
    return d.month;
}

function getTemperature(baseTemperature) {
    return function(d) {
        return baseTemperature + d.variance;
    }
}