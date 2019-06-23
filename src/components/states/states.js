import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../_widgets/page-header';
import { fetchStates } from './services';
import './state-list';

class States extends PolymerElement {
  async ready() {
    super.ready();
    const states = await fetchStates();
    console.log({states});
    this.set('states', states);
  }

  openDialog() {
    this.$.statesModal.open();
  }

  static get is() {
    return 'states-page';
  }

  static get template() {
    return html`
      <style>
        section {
          margin: 0 10px 5px 10px;
          background-color: #ffffff;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
          border-top: 2px solid #0568ae;
        }
        paper-icon-button:hover {
          background-color: #0568ae;
          border-radius: 50%;
          color: white;
        }
      </style>
      <page-header title="State List">
        <div slot="actions">
          <paper-icon-button id="add-state" icon="add" title="Add States"></paper-icon-button>
          <paper-icon-button icon="icons:file-download" title="Export Excel"></paper-icon-button>
        </div>
      </page-header>
      <section>
        <state-list raw-items="[[states]]" place-holder="Search states here"></state-list>
      </section>
    `;
  }
}

window.customElements.define(States.is, States);
