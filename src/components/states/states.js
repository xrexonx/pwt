import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../_widgets/page-header';
import './state-list';
import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';
import { sampleForm } from "./form";

class States extends PolymerElement {

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
        .form {
         padding: 0 50px 0 50px;
        }
        .state-form {
          display: grid;
          grid-gap: 20px;
        }
        .fullwidth {
          grid-column: span 2;
        }
        .buttons {
          margin-top: 5px;
        }
      </style>
      <page-header title="State List">
        <div slot="actions">
          <paper-icon-button icon="icons:file-download" title="Export Excel"></paper-icon-button>
          <paper-icon-button id="add-state" icon="add" title="Add States"></paper-icon-button>
        </div>
      </page-header>
      <section>
        <state-list></state-list>
      </section>
      <page-header title="Form"></page-header>
      <section>${sampleForm}</section>
    `;
  }
}

window.customElements.define(States.is, States);
