module.exports = {
    yearsToDate: yearsToDate,
    monthsToDate: monthsToDate
};

function yearsToDate(d) {
    return new Date(d.year);
}

function monthsToDate(d) {
    return new Date(0, d.month);
}