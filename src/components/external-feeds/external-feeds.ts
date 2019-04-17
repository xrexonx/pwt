import { PolymerElement, html } from '@polymer/polymer';
import '../_widgets/data-table';
import '../_widgets/page-header';
import { fetchExternalFeeds } from './services';
import '@polymer/iron-ajax/iron-ajax';

export class ExternalFeeds extends PolymerElement {
  ready() {
    super.ready();
    this.set('items', fetchExternalFeeds());
  }

  static get is() {
    return 'external-feeds';
  }

  static get template() {
    return html`
      <style>
        section {
          border-radius: 2px;
          margin: 8px 10px 8px 10px;
          background-color: #ffffff;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
          overflow-x: hidden;
        }
      </style>
      <section>
        <page-header title="TMS Stations" icon="add"></page-header>
        <iron-ajax
          url="https://reqres.in/api/users"
          last-response="{{rawItems}}"
          auto=""
        >
        </iron-ajax>
        <data-table raw-items="[[items]]"></data-table>
      </section>
    `;
  }
}

window.customElements.define(ExternalFeeds.is, ExternalFeeds);
