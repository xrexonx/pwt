import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "@polymer/iron-flex-layout/iron-flex-layout";
import "@polymer/paper-button/paper-button";
import "@polymer/paper-icon-button/paper-icon-button";
import "@polymer/paper-input/paper-input";
import "@polymer/paper-checkbox/paper-checkbox";
import "@exmg/exmg-paper-tooltip/exmg-paper-tooltip";
import "@exmg/exmg-paper-datatable/exmg-paper-datatable";

import ".//_data-tables/exmg-paper-toolbar.js";
import ".//_data-tables/exmg-paper-thead.js";
import ".//_data-tables/exmg-paper-tbody.js";
import ".//_data-tables/exmg-paper-paging.js";
import ".//_data-tables/exmg-paper-data-helper.js";
import ".//_data-tables/exmg-paper-data-filter.js";
import ".//_data-tables/exmg-paper-icons.js";

class DataTable extends PolymerElement {
  placeHolder: any;
  static get properties() {
    return {
      pageIndex: {
        type: Number,
        value: 0,
      },
      pageSize: {
        type: Number,
        value: 10,
      },
      sorted: {
        type: String,
        value: "name",
      },
      sortDirection: {
        type: String,
        value: "ASC",
      },
      filterValue: {
        type: String,
        value: "",
      },
      isSearch: {
        type: Boolean,
        value: false,
      },
      placeHolder: {
        type: String,
        value: "Search chuchu here",
      },
      rawItems: { type: Array },
    };
  }

  getFilterValue(filterValue: string) {
    return filterValue || this.placeHolder;
  }
  handleKeyUp(e: any) {
    if (e.keyCode === 27) {
      this.hideSearch();
    }
  }
  handleInputBlur() {
    this.hideSearch();
  }
  hideSearch() {
    this.set("isSearch", false);
  }
  showSearch() {
    this.set("isSearch", true);
    // setTimeout(
    //   () => this.shadowRoot.querySelector("#searchInput").focus(),
    //   200,
    // );
  }
  computeSearchClasses(isSearch: string) {
    return isSearch ? "search" : "";
  }

  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        h2 {
          max-width: 936px;
          width: 100%;
          margin: 20px auto;
        }
        iron-input {
          width: 100%;
        }
        input {
          font-size: 14px;
          margin: 0px 4px;
          padding: 4px;
          /*border: 0px solid var(--divider-color);*/
          width: 100%;
        }
        exmg-paper-toolbar span.interactive-content {
          margin-left: 10px;
          white-space: nowrap;
          overflow: hidden;
          color: rgba(0, 0, 0, 0.38);
          font-size: 14px;
          text-overflow: ellipsis;
          letter-spacing: 0.005em;
          box-sizing: border-box;
          font-weight: 400;
          cursor: pointer;
          width: 100%;
        }
        .search {
          background: #fff;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
            0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
        }
        .search input {
          outline: none;
        }
      </style>
      <exmg-paper-toolbar>
        <div slot="default" class$="[[computeSearchClasses(isSearch)]]">
          <template is="dom-if" if="[[isSearch]]" restamp="true">
            <iron-icon icon="exmg-paper-icons:search"></iron-icon>
            <iron-input bind-value="{{filterValue}}">
              <input
                id="searchInput"
                placeholder="[[placeHolder]]"
                on-keyup="handleKeyUp"
                on-blur="handleInputBlur"
              />
            </iron-input>
          </template>
          <template is="dom-if" if="[[!isSearch]]" restamp="true">
            <iron-icon icon="exmg-paper-icons:search"></iron-icon>
            <span class="interactive-content" on-tap="showSearch"
              >[[getFilterValue(filterValue)]]</span
            >
          </template>
        </div>
      </exmg-paper-toolbar>
      <!-- DataTable -->
      <exmg-paper-datatable>
        <!--              <table-list-->
        <!--                items="{{items}}"-->
        <!--                sorted="{{sorted}}"-->
        <!--                sort-direction="{{sortDirection}}">-->
        <!--              </table-list>-->
        <exmg-paper-thead
          sorted="{{sorted}}"
          sort-direction="{{sortDirection}}"
        >
          <template>
            <div class="tr">
              <div class="th flex" sortable="name">
                <span>Name</span>
              </div>
              <div class="th flex" sortable="email">
                <span>Email</span>
              </div>
              <div class="th flex collapsable" sortable="city">
                <span>City</span>
              </div>
              <div class="th flex collapsable" sortable="country">
                <span>Country</span>
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
                <span>[[item.email]]</span>
              </div>
              <div class="td flex collapsable">
                <span>[[item.city]]</span>
              </div>
              <div class="td flex collapsable">
                <span>[[item.country]]</span>
              </div>
              <div class="td flex-right flex-none hover" style="width: 120px">
                <span>
                  <paper-icon-button
                    icon="dfw:trash"
                    on-tap="_stopTap"
                  ></paper-icon-button>
                  <exmg-paper-tooltip>Remove</exmg-paper-tooltip>
                </span>
              </div>
            </div>
          </template>
        </exmg-paper-tbody>
      </exmg-paper-datatable>
      <!-- Table Paging -->
      <exmg-paper-paging
        total-items="[[totalItems]]"
        page-index="{{pageIndex}}"
        page-size="{{pageSize}}"
      ></exmg-paper-paging>
      <!-- Filter items by filter value  -->
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
  }
}

customElements.define("data-table", DataTable);
