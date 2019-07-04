import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-input/paper-input.js';

import "@polymer/paper-checkbox/paper-checkbox.js";
import "@polymer/iron-icon/iron-icon.js";
import "@polymer/iron-icons/iron-icons.js";
import "@polymer/iron-collapse/iron-collapse";
import "@polymer/paper-item/paper-item";

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

  searchFilter(event) {
    event.stopPropagation();
    this.shadowRoot.querySelector('#toggleSearchFilter').toggle();
  }

  static get template() {
    return html`
      <style>
        iron-collapse#toggleSearchFilter {
          position: absolute;
          right: 10px;
          top: 40px;
          background-color: white;
          z-index: 1;
          padding: 5px;
          cursor: pointer;
          border-radius: 5px;
          border: 1px solid #F5F5F5;
        }
        iron-icon {
            cursor: pointer;
        }
        
      </style>
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
                    icon="visibility"
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
