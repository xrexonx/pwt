import '@polymer/paper-input/paper-input';
import { html } from '@polymer/polymer/polymer-element';

export const loginTemplate = html`
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--4-col" />
    <div class="mdl-cell mdl-cell--4-col">
      <paper-input placeholder="Insert placeholder here" value="{{sample}}">
      </paper-input>
      <div>[[sample]]</div>
    </div>
    <div class="mdl-cell mdl-cell--4-col" />
  </div>
`;
