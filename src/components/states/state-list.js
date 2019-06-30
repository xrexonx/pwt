import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-checkbox/paper-checkbox.js';

import '@exmg/exmg-paper-datatable/exmg-paper-datatable.js';
import '../_widgets/data-tables/exmg-paper-toolbar.js';
import '../_widgets/data-tables/exmg-paper-thead.js';
import '../_widgets/data-tables/exmg-paper-tbody.js';
import '../_widgets/data-tables/exmg-paper-paging.js';
import '../_widgets/data-tables/exmg-paper-data-helper.js';
import '../_widgets/data-tables/exmg-paper-data-filter.js';
import '../_widgets/data-tables/exmg-paper-icons.js';
import { dataTableStyles } from '../_widgets/data-tables/data-table-style';
import { dataTableDefaultProps } from '../_widgets/data-tables/data-table-props';
import { tableFooter } from '../_widgets/data-tables/data-table-footer';
import { fetchStates } from "./services";

const debounce = (fn, time) => {
  let timeout;
  return function() {
    const functionCall = () => fn.apply(this, arguments);
    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  }
};

class StateList extends PolymerElement {
  async ready() {
    super.ready();
    this.set('rawItems', await fetchStates());
  }

  static get properties() {
    return {
      stateName: String,
      ...dataTableDefaultProps,
    };
  }

  observePageIndex() {
    console.log('Observer pageIndex', this.pageIndex);
  }

  observePageSize() {
    console.log('Observer pageSize', this.pageSize);
  }

  observeSort() {
    console.log('sorted', this.sorted);
    console.log('sortDirection', this.sortDirection);
  }

  debounceSearch(event) {
      // ▼ ▲
      console.log(event.target.id);
      console.log(event.target.value);
      this.set(event.target.id, event.target.value);
      console.log('state', this.stateName);

      debounce();
  }

  static get template() {
    return html`
      ${dataTableStyles}
      <!-- StateList -->
      <exmg-paper-datatable>
        <exmg-paper-thead
          sorted="{{sorted}}"
          sort-direction="{{sortDirection}}"
        >
          <template>
            <div class="tr">
              <div class="th flex" sortable="name">
                <paper-input
                  id="stateName"
                  label="Name"
                  on-keyup="debounceSearch"
                  value="{{state.name}}">
                </paper-input>
              </div>
              <div class="th flex" sortable="abbreviation">
                <paper-input
                  id="abbreviation"
                  label="Abbreviation"
                  on-keyup="debounceSearch"
                  value="{{state.name}}">
                </paper-input>
              </div>
              <div class="th flex collapsable" sortable="usps">
                <paper-input
                  id="usps"
                  label="USPS Code"
                  on-keyup="debounceSearch"
                  value="{{state.name}}">
                </paper-input>
              </div>
              <div class="th flex-right flex-none" style="width: 120px"></div>
            </div>
          </template>
        </exmg-paper-thead>
        <!-- TBody -->
        <exmg-paper-tbody items="[[items]]">
          <template>
            <div class="tr">
              <div class="td flex">
                <span>[[item.name]]</span>
              </div>
              <div class="td flex">
                <span>[[item.abbreviation]]</span>
              </div>
              <div class="td flex collapsable">
                <span>123</span>
              </div>
              <div class="td flex-right flex-none hover" style="width: 120px">
                <span>
                  <paper-icon-button
                    on-tap="_stopTap"
                    icon="delete-forever"
                  ></paper-icon-button>
                </span>
              </div>
            </div>
          </template>
        </exmg-paper-tbody>
      </exmg-paper-datatable>
      ${tableFooter}
    `;
  }
}

customElements.define('state-list', StateList);
