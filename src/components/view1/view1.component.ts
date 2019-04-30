import { html, PolymerElement } from "@polymer/polymer/polymer-element";

import "../shared-styles";
import style from "./view1.style.scss";
import view from "./view1.template.html";
// import '../login/LoginPage';

export class MyView1 extends PolymerElement {
  $: any;

  static get template() {
    return html([`<style include="shared-styles">${style}</style>${view}`]);
  }
}

window.customElements.define("my-view1", MyView1);
