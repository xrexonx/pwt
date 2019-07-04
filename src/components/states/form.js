import { html } from '@polymer/polymer/polymer-element.js';

export const sampleForm = html`
    <div class="form">
      <h2>County Info</h2>
      <div class="state-form">
        <iron-form id="form3">
          <form action="/foo" class="state-form">
            <!--<paper-input label="County Name" class="fullwidth"></paper-input>-->
            <paper-input label="County Name"></paper-input>
            <paper-dropdown-menu label="States">
              <paper-listbox slot="dropdown-content" selected="1">
                <paper-item>Select</paper-item>
                <paper-item>Alabama</paper-item>
                <paper-item>Alaska</paper-item>
                <paper-item>Bear Brand</paper-item>
                <paper-item>Nido</paper-item>
              </paper-listbox>
            </paper-dropdown-menu>
            <paper-input label="USPS County Codes" char-counter maxlength="10"></paper-input>
            <paper-dropdown-menu label="Size Code (optional):">
              <paper-listbox slot="dropdown-content" selected="1">
                <paper-item>Select</paper-item>
                <paper-item>23123</paper-item>
                <paper-item>56345</paper-item>
                <paper-item>3432</paper-item>
                <paper-item>00000</paper-item>
              </paper-listbox>
            </paper-dropdown-menu>
            <paper-input label="Notes" class="fullwidth"></paper-input>
          </form>
        </iron-form>
      </div>
      <div class="buttons">
        <paper-button raised  dialog-dismiss>Cancel</paper-button>
        <paper-button raised on-click="submitForm" dialog-confirm autofocus
          >Save</paper-button
        >
      </div>
    </div>
`;