import { html } from "@polymer/polymer/polymer-element";
import "@polymer/paper-button/paper-button";
import "@polymer/paper-dialog/paper-dialog";
import "@polymer/paper-radio-button/paper-radio-button";
import "@polymer/paper-radio-group/paper-radio-group";

export const databaseModal = html`
  <paper-dialog id="actions">
    <h2>Current LiL Database</h2>
    <div class="database-form">
      <paper-radio-group selected="{{selectedDB}}">
        <paper-radio-button name="staging">Staging</paper-radio-button> <br />
        <paper-radio-button name="previous">Previous</paper-radio-button> <br />
        <paper-radio-button name="production">Production</paper-radio-button>
      </paper-radio-group>
    </div>
    <div class="buttons">
      <paper-button dialog-dismiss>Cancel</paper-button>
      <paper-button on-click="submitForm" dialog-confirm autofocus
        >Save</paper-button
      >
    </div>
  </paper-dialog>
`;
