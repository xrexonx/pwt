import { PolymerElement, html } from '@polymer/polymer';
import '../_widgets/data-table';
import '../_widgets/page-header';
import { fetchExternalFeeds } from './services';

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
          height: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          margin: 0 10px 0 10px;
          border-radius: 2px;
          background-color: #ffffff;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
          overflow-x: hidden;
        }
      </style>
      <section>
        <page-header title="TMS Stations" icon="add"></page-header>
        <data-table raw-items="[[items]]"></data-table>
      </section>
    `;
  }
}

window.customElements.define(ExternalFeeds.is, ExternalFeeds);
