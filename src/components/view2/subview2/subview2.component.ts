import { html, PolymerElement } from "@polymer/polymer/polymer-element";
import "../../icons";
import "../../shared-styles";
import style from "./subview2.style.scss";
import view from "./subview2.template.html";

export class MySubview2 extends PolymerElement {
  $: any;

  static get is() {
    return "my-subview2";
  }

  static get template() {
    return html([`<style include="shared-styles">${style}</style>${view}`]);
  }
}

window.customElements.define(MySubview2.is, MySubview2);
