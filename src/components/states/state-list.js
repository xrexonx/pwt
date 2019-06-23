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
import { toolbar} from '../_widgets/data-tables/data-table-toolbar';
import { tableFooter } from '../_widgets/data-tables/data-table-footer';

class StateList extends PolymerElement {
  static get properties() {
    return dataTableDefaultProps;
  }

  _getFilterValue(filterValue) {
    return filterValue || this.placeHolder;
  }
  _handleKeyUp(e) {
    if (e.keyCode === 27) {
      this._hideSearch();
    }
  }
  _handleInputBlur() {
    this._hideSearch();
  }
  _hideSearch() {
    this.set('isSearch', false);
  }
  _showSearch() {
    this.set('isSearch', true);
    setTimeout(
      () => this.shadowRoot.querySelector('#searchInput').focus(),
      200
    );
  }
  _computeSearchClasses(isSearch) {
    return isSearch ? 'search' : '';
  }

  static get template() {
    return html`
      ${dataTableStyles}
      ${toolbar}
      <!-- StateList -->
      <exmg-paper-datatable>
        <exmg-paper-thead
          sorted="{{sorted}}"
          sort-direction="{{sortDirection}}"
        >
          <template>
            <div class="tr">
              <div class="th flex" sortable="name">
                <span>Name</span>
              </div>
              <div class="th flex" sortable="abbreviation">
                <span>Abbreviation</span>
              </div>
              <div class="th flex collapsable" sortable="usps">
                <span>USPS Code</span>
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
                    icon="delete-forever"
                    on-tap="_stopTap"
                  ></paper-icon-button>
                  <!--<exmg-paper-tooltip>Remove</exmg-paper-tooltip>-->
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
