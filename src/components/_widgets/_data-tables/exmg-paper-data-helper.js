import {PolymerElement} from '@polymer/polymer';

const isArray = (o) => Array.isArray(o) || Object.prototype.toString.call(o) === '[object Array]';
const properArray = (o) => {
  return isArray(o) ? o : [];
};
const lookupValueByPath = (o, path) => path.split('.').reduce((r, p) => r[p], o);

export class PaperDataHelperElement extends PolymerElement {
  static get is() {
    return 'exmg-paper-data-helper';
  }
  static get properties() {
    return {
      /**
        * Raw item list
        */
      rawItems: {
        type: Array,
      },

      /**
        * Returnes a page of the sorted items
        */
      items: {
        type: Array,
        notify: true,
      },

      /**
      * Returns the total length of the raw list that will be used in the exm-paging
      * as indication on how much pages there are available.
      */
      totalItems: {
        notify: true,
        type: Number,
        computed: '_computeLength(rawItems.*)',
      },

      /**
      * This property can be used to change the current visible items page
      */
      pageIndex: {
        type: Number,
        value: 0,
      },

      /**
      * Set the page size of the exposed item list
      */
      pageSize: {
        type: Number,
        value: 10,
      },

      /**
      * An string containing the column sort key
      */
      sorted: String,

      /**
      * An string containing 'ASC' or 'DESC' to indicate the sorting direction
      */
      sortDirection: String,
    };
  }
  static get observers() {
    return [
      '_sortChanged(sorted,sortDirection)',
      '_ramItemsChanged(rawItems.*)',
      '_pageChanged(pageIndex, pageSize)',
    ];
  }

  _sortChanged() {
    this._updatePage();
  }

  _computeLength() {
    return properArray(this.rawItems).length;
  }

  _ramItemsChanged() {
    this._updatePage();
  }

  _pageChanged() {
    this._updatePage();
  }

  _updatePage() {
    /* Make sure to always start with same array to ensure consistency in sorting results */
    const workArray = [...properArray(this.rawItems)];
    const start = (this.pageIndex * this.pageSize);
    const sortArray = (a, b) => {
      let fieldA = lookupValueByPath(a, this.sorted);
      let fieldB = lookupValueByPath(b, this.sorted);
      if (typeof fieldA === 'number' || typeof fieldA === 'boolean') {
        return this.sortDirection === 'ASC' ? fieldA - fieldB : fieldB - fieldA;
      } else {
        fieldA = fieldA ? fieldA.toLowerCase() : '';
        fieldB = fieldB ? fieldB.toLowerCase() : '';
        if (fieldA < fieldB) {
          return this.sortDirection === 'ASC' ? -1 : 1;
        }
        if (fieldA > fieldB) {
          return this.sortDirection === 'ASC' ? 1 : -1;
        }
      }
      return 0;
    };

    if (this.sorted) {
      workArray.sort((a, b) => sortArray(a, b));
    }

    this.set('items', []);
    this.set('items', workArray.slice(start, start + this.pageSize));
  }
}

window.customElements.define(PaperDataHelperElement.is, PaperDataHelperElement);

Exmg.PaperDataHelperElement = PaperDataHelperElement;

