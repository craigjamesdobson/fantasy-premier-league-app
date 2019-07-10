/* tslint:disable-next-line:no-var-requires */
const filterTemplate = require('../../components/Templates/PlayersFilterTemplate.hbs');
const filterContainer = $('.filter-container');

export function initPlayerFilters(teams) {
  filterContainer.append(filterTemplate(teams));
}
