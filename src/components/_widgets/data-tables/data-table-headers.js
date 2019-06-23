import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class DataTableHeader extends PolymerElement {
  static get properties() {
    return {
      headerTitles: Array,
    }
  }

  static get template() {
    return html`
      <section>
        
      </section>
    `;
  }

}

customElements.define('data-table-header', DataTableHeader);
