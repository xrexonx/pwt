import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import '../shared-styles';
import style from './view404.style.scss';
import view from './view404.template.html';

export class MyView404 extends PolymerElement {
  $: any;

  static get is() {
    return 'my-view404';
  }

  static get template() {
    return html([`<style include="shared-styles">${style}</style>${view}`]);
  }
}

window.customElements.define(MyView404.is, MyView404);
