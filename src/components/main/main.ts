import { PolymerElement, html } from "@polymer/polymer";
import "@polymer/paper-input/paper-input";
import "@polymer/paper-button/paper-button";
import "../_widgets/page-header";
import "@polymer/paper-tabs/paper-tabs";
import "@polymer/paper-tabs/paper-tab";
import "@polymer/iron-collapse/iron-collapse";
// import {getPageUrl} from "../../_utils/string";

class DashboardPage extends PolymerElement {
  $: any;
  tabChanged(tab: string) {
    // console.log('tab', tab);
    // if (tab !== 'ltm') {
    //   import(getPageUrl(tab));
    // }
  }

  toggleCollapse(e: any) {
    this.$.collapse.toggle();
  }

  static get properties() {
    return {
      tab: {
        observer: "tabChanged",
        type: String,
      },
      tabData: Object,
    };
  }

  static get template() {
    return html`
      <style>
        paper-tabs {
          margin: 8px 10px 8px 10px;
          background-color: #0568ae;
          color: #fff;
        }
      </style>
      <section>
        <paper-tabs id="plain-tabs" selected="0">
          <paper-tab name="menu">
            Main Menu
          </paper-tab>
          <paper-tab name="reports">
            Reports
          </paper-tab>
          <paper-tab name="job-calendar">
            Job Calendar
          </paper-tab>
        </paper-tabs>
        <iron-pages
          role="main"
          class="flex"
          selected="[[tab]]"
          attr-for-selected="name"
        >
        </iron-pages>

        <section>
          <paper-button on-tap="toggleCollapse">
            <span>Collapse #1</span>
            <iron-icon icon="expand-more"></iron-icon>
          </paper-button>
          <iron-collapse id="collapse">
            <div class="content">
              Lorem ipsum dolor sit amet, per in nusquam nominavi periculis
              sit elit oportere ea, id minim maiestatis incorrupte duo
              Dolorum verterem ad ius, his et nullam verterem. Eu al
              ia debet usu, an doming tritani est. Vix ad po
              nderum petentium suavitate, eum eu tempor populo,
              graece sententiae constituam vim ex. Cu torquatos
            </div>
          </iron-collapse>
        </section>
      </section>
    `;
  }
}

customElements.define("dashboard-page", DashboardPage);
