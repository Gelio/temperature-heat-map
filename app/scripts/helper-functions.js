module.exports = {
    yearsToDate: yearsToDate,
    monthsToDate: monthsToDate,
    getTranslation: getTranslation
};

function yearsToDate(d) {
    return new Date(d.year);
}

function monthsToDate(d) {
    return new Date(0, d.month);
}

function getTranslation(d) {
    return 'translate(' + this.x(yearsToDate(d)) + ', ' + this.y(monthsToDate(d)) + ')';
}