import { Serie } from './serie.js';
import { series } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
let averageSeasonsCell: HTMLElement = document.getElementById('averageSeasons')!;

renderSeriesInTable(series);

function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando cursos');
  let totalSeasons = 0;
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    let link = `<a href="${serie.enlace}">${serie.nombre}</a>`;
    trElement.innerHTML = `<td>${serie.id}</td>
                          <td>${link}</td>
                          <td>${serie.canal}</td>
                          <td>${serie.numTemporadas}</td>`;
    totalSeasons += serie.numTemporadas;
    seriesTbody.appendChild(trElement);
  });
  const averageSeasons = totalSeasons / series.length;
  averageSeasonsCell.textContent = averageSeasons.toFixed(0);
}
