import { html, PolymerElement } from "@polymer/polymer/polymer-element";
import "../../icons";
import "../../shared-styles";
import style from "./subview1.style.scss";
import view from "./subview1.template.html";

export class MySubview1 extends PolymerElement {
  $: any;

  static get is() {
    return "my-subview1";
  }

  static get template() {
    return html([`<style include="shared-styles">${style}</style>${view}`]);
  }
}

window.customElements.define(MySubview1.is, MySubview1);
