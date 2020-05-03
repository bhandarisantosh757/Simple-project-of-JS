var DATA_URL='https://coronavirus-19-api.herokuapp.com/countries';
    window.onload=function () {
        fetchCovidData();
    };
    function fetchCovidData() {
        const fetchPromise = fetch(DATA_URL);
        fetchPromise.then(response => {
            return response.json();
        }).then(data => {
            populateData(data);
        }).catch(error=>{

        });
    }
    function populateData(data) {
        var covidDesigen=''
        data.forEach(function (value) {
            covidDesigen=covidDesigen+'<div style="margin-bottom: 20px;">\n' +
                '    <div class="country-name">'+value.country+'</div>\n' +
                '<div class="container-counts">\n' +
                '    <div class="container-totaL">\n' +
                '        <div class="total-cont">'+value.cases+'</div>\n' +
                '        <div >Total</div>\n' +
                '    </div>\n' +
                '    <div class="container-recovered">\n' +
                '        <div class="recovered-cont">'+value.recovered+'</div>\n' +
                '        <div>Recovered</div>\n' +
                '    </div>\n' +
                '    <div class="container-death">\n' +
                '        <div class="death-cont">'+value.deaths+'</div>\n' +
                '        <div>Death</div>\n' +
                '</div>\n' +
                '<div class="container-active">\n' +
                '        <div class="active-counts">'+value.active+'</div>\n' +
                '        <div>Active cases</div>\n' +
                '</div>\n' +
                '</div>\n' +
               '</div>\n'


        });
        document.getElementById('covid').innerHTML=covidDesigen;
    }
