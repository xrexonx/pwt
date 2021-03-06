import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/paper-styles/paper-styles.js';
import {mixinBehaviors} from '@polymer/polymer/lib/legacy/class.js';
import {Templatizer} from '@polymer/polymer/lib/legacy/templatizer-behavior.js';


/**
* @namespace Exmg
*/
window.Exmg = window.Exmg || {};

/**

Material design: Datatables (https://material.io/guidelines/components/data-tables.html)

`exmg-paper-datatable` is the base table component that needs to be extended in the table element.

```html
<exmg-paper-datatable>
  <exmg-paper-thead sorted="{{sorted}}" sort-direction="{{sortDirection}}">
    <template>...</template>
  </exmg-paper-thead>
  <exmg-paper-tbody items='[[items]]' selection-enabled>
    <template>...</template>
  </exmg-paper-tbody>
</exmg-paper-datatable>
```

### Styling
The following custom properties and mixins are also available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--exmg-paper-datatable-background-color` | Background color of table| `Based on the button's color`
`--exmg-paper-datatable-text-color` | Text color of table| `87% black`
`--exmg-paper-datatable` | Mixin applied to the datatable | `{}`

@customElement
@polymer
@group Exmg Paper Elements
@element exmg-paper-datatable
@demo demo/index.html
*/
export class ExmgPaperDatatableElement extends mixinBehaviors([Templatizer], PolymerElement) {
  static get template() {
    return html`
    <style>
      :host {
        font-size: 12px;
        color: rgba(0,0,0,.78);
        @apply --paper-font-common-base;
        -webkit-font-smoothing: antialiased;
        background: var(--exmg-paper-datatable-background-color, none);
        color: var(--exmg-paper-datatable-text-color, rgba(0,0,0,.87));
        @apply --exmg-paper-datatable;
      }
    </style>
    <slot></slot>`;
  }

  static get is() {
    return 'exmg-paper-datatable';
  }
}

window.customElements.define(ExmgPaperDatatableElement.is, ExmgPaperDatatableElement);

Exmg.ExmgPaperDatatableElement = ExmgPaperDatatableElement;
