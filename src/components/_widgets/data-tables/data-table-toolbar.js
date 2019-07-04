import { html } from '@polymer/polymer/polymer-element.js';
import './exmg-paper-toolbar';

export const toolbar = html`
  <exmg-paper-toolbar id="searchToolBar">
    <div slot="default" class$="[[_computeSearchClasses(isSearch)]]">
      <template is="dom-if" if="[[isSearch]]" restamp="true">
        <iron-icon icon="exmg-paper-icons:search"></iron-icon>
        <iron-input bind-value="{{filterValue}}">
          <input
            id="searchInput"
            placeholder="[[placeHolder]]"
            on-keyup="_handleKeyUp"
            on-blur="_handleInputBlur"
          />
        </iron-input>
        <iron-icon icon="list"></iron-icon>
      </template>
      <template is="dom-if" if="[[!isSearch]]" restamp="true">
        <iron-icon icon="exmg-paper-icons:search"></iron-icon>
        <span
          on-tap="_showSearch"
          class="interactive-content"
        >
          [[_getFilterValue(filterValue)]]
        </span>
        <iron-icon icon="list" on-tap="searchFilter"></iron-icon>
        <iron-collapse id="toggleSearchFilter">
           <paper-item id="searchFilterItem-name">
            <paper-checkbox checked>Name</paper-checkbox>
            </paper-item>
           <paper-item id="searchFilterItem-abbrev">
            <paper-checkbox>Abbrev</paper-checkbox>
            </paper-item>
           <paper-item id="searchFilterItem">
                <paper-checkbox>USPS Code</paper-checkbox>
           </paper-item>
        </iron-collapse>
      </template>
    </div>
  </exmg-paper-toolbar>
`;
