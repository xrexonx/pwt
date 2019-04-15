import { PolymerElement } from '@polymer/polymer';

export class DataFilterElement extends PolymerElement {
  static get is() {
    return 'exmg-paper-data-filter';
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
       * This array will conatin the filtered items list
       */
      items: {
        type: Array,
        notify: true,
      },

      /**
       * Text string used for filtering the fields.
       */
      filterValue: {
        type: String,
      },

      /**
       * Comma seperated list of filter fields.
       */
      filterFields: {
        type: String,
      },
    };
  }

  static get observers() {
    return [
      '_updateItems(rawItems.*, filterValue, filterFields)',
    ];
  }

  _updateItems() {
    /* Skip if raw items or filterfields are not set */
    if (!this.rawItems || !this.filterFields) {
      return;
    }

    /* return all items when filter is empty */
    if (!this.filterValue || this.filterValue === '') {
      this.set('items', []);
      this.set('items', this.rawItems);
      return;
    }

    /* Look for occurances of the filter value in the item fields */
    const items = [];
    const filterFields = this.filterFields.split(',');
    this.rawItems.forEach((o) => {
      filterFields.some((p) => this._compareListItemToFilterValue(o[p])) && items.push(o);
    });

    /* Reset result array before adding new results */
    this.set('items', []);
    this.set('items', items);
  }
  _compareListItemToFilterValue(listItemValue) {
    const listItemValueUpperCase = String(listItemValue).toUpperCase();
    const filterValueUpperCase = this.filterValue.toUpperCase();

    return listItemValueUpperCase.indexOf(filterValueUpperCase) !== -1;
  }
}
window.customElements.define(DataFilterElement.is, DataFilterElement);

Exmg.DataFilterElement = DataFilterElement;

