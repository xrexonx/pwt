import { PolymerElement, html } from "@polymer/polymer/polymer-element";

import "@polymer/paper-icon-button";
import "@exmg/exmg-paper-tooltip/exmg-paper-tooltip";
import "../_widgets/_data-tables/exmg-paper-thead";
import "../_widgets/_data-tables/exmg-paper-tbody";

class TableList extends PolymerElement {
  static get properties() {
    return {
      sorted: {
        type: String,
        value: "name",
      },
      sortDirection: {
        type: String,
        value: "ASC",
      },
      items: {
        type: Array,
      },
    };
  }

  stopTap(e: any) {
    // Do something
    // console.log(' Do something', e);
    e.stopPropagation();
  }

  static get template() {
    return html`
      <exmg-paper-thead sorted="{{sorted}}" sort-direction="{{sortDirection}}">
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
                <paper-icon-button icon="delete-forever" on-tap="stopTap">
                </paper-icon-button>
                <exmg-paper-tooltip>Remove</exmg-paper-tooltip>
              </span>
            </div>
          </div>
        </template>
      </exmg-paper-tbody>
    `;
  }
}

customElements.define("table-list", TableList);
