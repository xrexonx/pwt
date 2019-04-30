import { PolymerElement, html } from "@polymer/polymer/polymer-element";
import "@polymer/iron-list/iron-list";
import "@polymer/paper-card/paper-card";
import "@polymer/paper-button/paper-button";
import "@polymer/paper-dialog/paper-dialog";
import "@polymer/paper-radio-button/paper-radio-button";
import "@polymer/paper-radio-group/paper-radio-group";

import styles from "./styles.scss";
// import { databaseModal } from './modal';
import { fetchDatabases } from "./services";

export class DatabasesPage extends PolymerElement {
  $: any;
  selectedDB: string;

  ready() {
    super.ready();
    const databases = fetchDatabases();
    this.set("databases", databases);
    this.set("currentDB", "Staging");
  }

  openDialog() {
    this.$.actions.open();
  }

  submitForm() {
    // console.log('selected database', this.selectedDB);
  }

  static get is() {
    return "databases-page";
  }

  static get properties() {
    return {
      databases: Array,
      currentDB: String,
      selectedDB: {
        type: String,
        value: "staging",
      },
    };
  }

  static get template() {
    return html([
      `
      <style>${styles}</style>
      <section>
        <app-header slot="header" reveals effects="waterfall">
          <app-toolbar>
            <div main-title>IT LILN [[currentDB]] Database</div>
            <paper-icon-button
              icon="create"
              on-click="openDialog"
            ></paper-icon-button>
          </app-toolbar>
        </app-header>
        <div class="data-list">
          <template is="dom-repeat" items="[[databases]]">
            <paper-card heading="[[item.definition]]">
              <div class="card-content">
                <template is="dom-repeat" items="[[item.tables]]">
                  <div class="icon-list">
                    <iron-icon icon="dfw:audit"></iron-icon>
                    <span>[[item.name]]</span>
                  </div>
                </template>
              </div>
            </paper-card>
          </template>
        </div>
        <paper-dialog id="actions">
          <h2>Current LiL Database</h2>
          <div class="database-form">
            <paper-radio-group selected="{{selectedDB}}">
              <paper-radio-button name="staging">
                Staging
              </paper-radio-button> <br />
              <paper-radio-button name="previous">
                Previous
              </paper-radio-button> <br />
              <paper-radio-button name="production">
                Production
              </paper-radio-button>
            </paper-radio-group>
          </div>
          <div class="buttons">
            <paper-button dialog-dismiss>Cancel</paper-button>
            <paper-button on-click="submitForm" dialog-confirm autofocus
              >Save</paper-button
            >
          </div>
        </paper-dialog>
      </section>
    `,
    ]);
  }
}

window.customElements.define(DatabasesPage.is, DatabasesPage);
