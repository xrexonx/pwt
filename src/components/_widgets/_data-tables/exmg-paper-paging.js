import {PolymerElement, html} from '@polymer/polymer';
import {GestureEventListeners} from '@polymer/polymer/lib/mixins/gesture-event-listeners.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-item/paper-item.js';
import './exmg-paper-icons.js';

export class ExmgPaperPagingElement extends GestureEventListeners(PolymerElement) {
  static get template() {
    return html`
    <style>
      :host {
        display: block;
        @apply --paper-font-common-base;
        background: var(--exmg-paper-paging-background-color, none);
        color: var(--exmg-paper-paging-text-color, rgba(0,0,0,.87));
        font-size: 12px;
        font-weight: 500;
        height: 56px;
        padding: 0px 6px;
        @apply --layout-horizontal;
        @apply --layout-end-justified;
        @apply --layout-center;
        @apply --exmg-paper-paging;

        --paper-dropdown-menu: {
          text-align: right;
          width: 68px;
        };
        --paper-dropdown-menu-icon: {
          color: var(--exmg-paper-paging-icon-color, rgba(0,0,0,.54));
        };
        --paper-icon-button: {
          color: var(--exmg-paper-paging-icon-color, rgba(0,0,0,.54));
          padding: 0;
          width: 24px;
          height: 24px;
        };
        --paper-icon-button-disabled: {
          color: var(--exmg-paper-paging-icon-disabled-color, rgba(0,0,0,.36));
        };
        --paper-input-container-underline-focus: { display: none; };
        --paper-input-container-underline-disabled: { display: none; };
        --paper-input-container-underline: { display: none; };
        --paper-input-container-input: {
          font-size: 14px;
          font-weight: 500;
        };
      }

      .page-information {
        margin: 0 20px 0 32px;
        @apply --exm-paging-page-information;
      }
      .page-actions {
        margin: 0 20px 0 12px;
      }
    </style>

    <span>Rows per page:</span>
    <paper-dropdown-menu no-label-float="" no-animations="">
      <paper-listbox slot="dropdown-content" selected="{{_pageSize}}" attr-for-selected="value">
        <paper-item value="5">5</paper-item>
        <paper-item value="10">10</paper-item>
        <paper-item value="25">25</paper-item>
<!--        <paper-item value="50">50</paper-item>-->
<!--        <paper-item value="100">100</paper-item>-->
      </paper-listbox>
    </paper-dropdown-menu>
    <span class="page-information">
      [[_pageInfoStart(pageIndex, pageSize)]]
      -
      [[_pageInfoEnd(pageIndex,pageSize,totalItems)]] of [[totalItems]]
    </span>
    <div class="page-actions">
      <paper-icon-button icon="exmg-paper-icons:first-page" on-tap="firstPage" disabled="[[_isFirstPage(pageIndex)]]"></paper-icon-button>
      <paper-icon-button icon="exmg-paper-icons:chevron-left" on-tap="previousPage" disabled="[[_isFirstPage(pageIndex)]]"></paper-icon-button>
      <paper-icon-button icon="exmg-paper-icons:chevron-right" on-tap="nextPage" disabled="[[_isLastPage(pageIndex, pageSize, totalItems)]]"></paper-icon-button>
      <paper-icon-button class="last-page-button" icon="exmg-paper-icons:last-page" on-tap="lastPage" disabled="[[_isLastPage(pageIndex, pageSize, totalItems)]]"></paper-icon-button>
    </div>
`;
  }

  static get is() {
    return 'exmg-paper-paging';
  }
  static get properties() {
    return {
      /**
      * Total items
      */
      totalItems: {
        type: Number,
        value: 0,
      },

      /**
      * This property can be used to change the current visible page
      */
      pageIndex: {
        type: Number,
        notify: true,
        value: 0,
      },

      /**
      * Set the page size of the table. Valid options are 5/10/25/50/100
      */
      pageSize: {
        type: Number,
        notify: true,
        value: 10,
      },

      _pageSize: {
        type: Number,
      },
    };
  }

  static get observers() {
    return [
      '_observePageSizeList(_pageSize)',
      '_observePageSize(pageSize)',
    ];
  }

  _observePageSizeList(ps) {
    this.pageSize = Number(ps);
  }

  _observePageSize(ps) {
    this._pageSize = Number(ps);
  }

  _pageInfoStart(pageIndex, pageSize) {
    return pageIndex * pageSize;
  }

  _pageInfoEnd(pageIndex, pageSize, totalItems) {
    const end = (pageIndex + 1) * pageSize;
    return end < totalItems ? end : totalItems;
  }

  _isFirstPage() {
    return this.pageIndex < 1;
  }

  _isLastPage() {
    return ((this.pageIndex + 1) * this.pageSize) > (this.totalItems - 1);
  }

  nextPage() {
    this.pageIndex++;
  }

  previousPage() {
    this.pageIndex--;
  }

  firstPage() {
    this.pageIndex = 0;
  }

  lastPage() {
    this.pageIndex = Math.floor((this.totalItems - 1) / this.pageSize);
  }
}

window.customElements.define(ExmgPaperPagingElement.is, ExmgPaperPagingElement);

Exmg.ExmgPaperPagingElement = ExmgPaperPagingElement;
