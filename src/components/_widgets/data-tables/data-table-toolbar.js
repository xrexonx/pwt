import { html } from '@polymer/polymer/polymer-element.js';
import './exmg-paper-toolbar';

export const toolbar = html`
  <exmg-paper-toolbar>
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
      </template>
      <template is="dom-if" if="[[!isSearch]]" restamp="true">
        <iron-icon icon="exmg-paper-icons:search"></iron-icon>
        <span
          on-tap="_showSearch"
          class="interactive-content"
        >
          [[_getFilterValue(filterValue)]]
        </span>
      </template>
    </div>
  </exmg-paper-toolbar>
`;
