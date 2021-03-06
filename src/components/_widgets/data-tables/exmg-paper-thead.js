import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import {
  addListener,
  removeListener
} from '@polymer/polymer/lib/utils/gestures.js';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class.js';
import { Templatizer } from '@polymer/polymer/lib/legacy/templatizer-behavior.js';

/**
 * @namespace Exmg
 */
window.Exmg = window.Exmg || {};

/**
`exmg-datatable-thead` which adds sorting functionality to the thead table element.

```html
<exmg-paper-thead sorted="{{sorted}}" sort-direction="{{sortDirection}}">
  <template>
    <div class="tr">
      <div class="th flex-none flex-right" sortable="index" style="width: 70px;">
        <span>Index</span>
      </div>
      <div class="th flex" sortable="name">
        <span>Name</span>
      </div>
      <div class="th flex" sortable="email" style="min-width: 30%">
        <span>Email</span>
      </div>
      <div class="th flex collapsable" sortable="city">
        <span>City</span>
      </div>
      <div class="th flex collapsable" sortable="country">
        <span>Country</span>
      </div>
    </div>
  </template>
</exmg-paper-thead>
```

### Styling
The following custom properties and mixins are also available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--exmg-datatable-thead-color` | font color of thead | `54% black`
`--exmg-datatable-thead` | Mixin applied to the thead | `{}`
`--exmg-datatable-thead-th` | Mixin applied to the th | `{}`
`--exmg-datatable-thead-text-color-hover` | font color of th on hover | `87% black`
`--exmg-datatable-thead-text-color-sorted` | font color of th when sorted | `78% black`

@customElement
@polymer
@group Exmg Paper Elements
@element exmg-paper-datatable
@demo demo/index.html
*/
export class ExmgPaperTheadElement extends mixinBehaviors(
  [Templatizer],
  GestureEventListeners(PolymerElement)
) {
  static get template() {
    return html`
      <style>
        :host {
          @apply --paper-font-common-base;
          width: 100%;
          font-weight: 500;
          border-bottom: 1px solid var(--divider-color);
          user-select: none;
          color: var(--exm-thead-color, rgba(0, 0, 0, 0.64));
          @apply --exmg-datatable-thead;
        }

        .tr {
          @apply --layout;
          box-sizing: border-box;
          border-bottom: 1px solid var(--divider-color);
          @apply --exmg-paper-thead-tr;
          height: 56px;
        }

        .th {
          @apply --layout;
          @apply --layout-center;
          height: 36px;
          box-sizing: border-box;
          background-color: #f5f5f5;
          overflow: hidden;
          text-align: left;
          padding: 0px 6px;
          position: relative;
          @apply --exmg-paper-thead-th;
          height: 56px;
        }

        .th > span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          pointer-events: none;
        }

        .th:first-child {
          padding-left: 24px;
        }

        .th:last-child {
          padding-right: 24px;
        }

        .flex {
          @apply --layout-flex;
        }

        .flex-auto {
          /* stretch and squish */
          @apply --layout-flex-auto;
        }

        .flex-none {
          /* fixed width */
          @apply --layout-flex-none;
        }

        .flex-right {
          @apply --layout;
          @apply --layout-end-justified;
          padding-right: 24px;
          padding-left: 6px !important;
        }

        .collapsable {
          display: none;
        }

        @media (min-width: 600px) {
          .collapsable {
            @apply --layout;
          }
        }

        .th[sorted] {
          color: var(
            --exmg-datatable-thead-text-color-sorted,
            rgba(0, 0, 0, 0.78)
          );
        }

        .th[sortable]:hover {
          cursor: pointer;
          color: var(
            --exmg-datatable-thead-text-color-hover,
            rgba(0, 0, 0, 0.87)
          );
        }

        .th[sortable]::after {
          display: block;
          content: '';
          background-image: url('/images/arrow-downward.svg');
          background-size: 12px 12px;
          height: 12px;
          width: 12px;
          margin: 0 0 0 4px;
          opacity: 0;
        }

        .th[sortable]:hover::after,
        .th[sorted]::after {
          opacity: 1;
        }

        .th[sorted]::after {
          transition: transform 0.1s linear;
          transform: rotate(0deg);
        }

        :host([sort-direction='DESC']) .th[sorted]::after {
          transform: rotate(180deg);
        }

        .th.flex-right[sortable]::after,
        .th.flex-right[sorted]::after {
          position: absolute;
          right: 8px;
          top: 50%;
          margin-top: -6px;
        }
      </style>
      <slot></slot>
    `;
  }

  static get is() {
    return 'exmg-paper-thead';
  }
  static get properties() {
    return {
      /**
       * An string containing the column sort key
       */
      sorted: {
        type: String,
        reflectToAttribute: true,
        notify: true
      },
      /**
       * An string containing 'ASC' or 'DESC' to indicate the sorting direction
       */
      sortDirection: {
        type: String,
        notify: true,
        reflectToAttribute: true,
        value: 'ASC'
      }
    };
  }

  static get observers() {
    return ['_sortedByChanged(sorted)'];
  }

  ready() {
    super.ready();
    const templ = this.querySelector('template');

    if (!templ) {
      console.error('Error: exmg-paper-thead template not found!');
      return;
    }
    this.templatize(templ);
    this.shadowRoot.appendChild(this.stamp(null).root);
  }

  connectedCallback() {
    super.connectedCallback();
    addListener(this, 'tap', this._handleTap);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    removeListener(this, 'tap', this._handleTap);
  }

  /*
   * Triggered on column change when sorting
   */
  _sortedByChanged(sorted) {
    const headerColumns = this.shadowRoot.querySelectorAll('.th');
    this._resetOldSorting();
    headerColumns.forEach(el => {
      if (el.getAttribute('sortable') === sorted) {
        el.setAttribute('sorted', '');
        this.set('sortDirection', 'ASC');
      }
    });
  }

  /*
   * Handle column header tap
   */
  _handleTap(e) {
    const sortField = e.path[0].getAttribute('sortable');
    if (e.path[0].classList.contains('th') && sortField) {
      if (this.sorted === sortField) {
        this.set(
          'sortDirection',
          this.sortDirection === 'ASC' ? 'DESC' : 'ASC'
        );
      } else {
        this._resetOldSorting();
        this.set('sorted', sortField);
      }
    }
  }

  /*
   * Reset old column sorting attributes
   */
  _resetOldSorting() {
    const rowChildren = this.shadowRoot.querySelectorAll('.th[sorted]');
    rowChildren.forEach(el => el.removeAttribute('sorted'));
  }
}

window.customElements.define(ExmgPaperTheadElement.is, ExmgPaperTheadElement);

Exmg.ExmgPaperTheadElement = ExmgPaperTheadElement;
