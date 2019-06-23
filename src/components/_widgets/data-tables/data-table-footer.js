import { html } from '@polymer/polymer/polymer-element.js';

export const tableFooter = html`
<!-- Table Paging -->
      <exmg-paper-paging
        total-items="[[totalItems]]"
        page-index="{{pageIndex}}"
        page-size="{{pageSize}}"
      ></exmg-paper-paging>
      <!-- Filter items by filter value and return resulting items to the data provider  -->
      <exmg-paper-data-filter
        raw-items="[[rawItems]]"
        items="{{filteredItems}}"
        filter-value="[[filterValue]]"
        filter-fields="index,name,email"
      ></exmg-paper-data-filter>
      <!-- Manage sorting and paging  -->
      <exmg-paper-data-helper
        raw-items="[[filteredItems]]"
        items="{{items}}"
        page-index="[[pageIndex]]"
        page-size="[[pageSize]]"
        sorted="[[sorted]]"
        sort-direction="[[sortDirection]]"
        total-items="{{totalItems}}"
      ></exmg-paper-data-helper>
`;
