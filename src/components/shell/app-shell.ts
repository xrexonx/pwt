import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "../main/index";

export class AppShell extends PolymerElement {
  static get is() {
    return "app-shell";
  }

  static get template() {
    return html`<main-page></main-page>`;
  }
}
