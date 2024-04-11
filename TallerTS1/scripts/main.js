import { series } from './data.js';
var seriesTbody = document.getElementById('series');
var averageSeasonsCell = document.getElementById('averageSeasons');
renderSeriesInTable(series);
function renderSeriesInTable(series) {
    console.log('Desplegando cursos');
    var totalSeasons = 0;
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        var link = "<a href=\"".concat(serie.enlace, "\">").concat(serie.nombre, "</a>");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                          <td>").concat(link, "</td>\n                          <td>").concat(serie.canal, "</td>\n                          <td>").concat(serie.numTemporadas, "</td>");
        totalSeasons += serie.numTemporadas;
        seriesTbody.appendChild(trElement);
    });
    var averageSeasons = totalSeasons / series.length;
    averageSeasonsCell.textContent = averageSeasons.toFixed(0);
}
