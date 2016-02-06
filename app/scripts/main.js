(function() {
    var $ = require('jquery'),
        chart = require('./chart.js');

    $(document).ready(function() {
        $('.copyright-year').text(new Date().getFullYear());

        $.ajax({
            url: 'global-temperature.json',
            success: downloadSuccessful,
            error: downloadError
        });

        chart.init();
    });

    function downloadSuccessful(data) {
        chart.drawData(data);
    }

    function downloadError(jqXHR, textStatus, error) {
        console.error('Error while downloading data', jqXHR, textStatus, error);
        $('.chart-wrapper').html('Sorry, there\'s been an error downloading data. Please, try again later.');
    }
})();