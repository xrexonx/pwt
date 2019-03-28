import '@polymer/app-route/app-location';
import '@polymer/app-route/app-route';
import '@polymer/iron-pages/iron-pages';
import '@polymer/iron-selector/iron-selector';
import '@polymer/paper-button/paper-button';
import '@polymer/paper-input/paper-input';
import { html, PolymerElement } from '@polymer/polymer/polymer-element';

import '../icons';
import '../shared-styles';
import style from './view3.style.scss';
import view from './view3.template.html';

export class MyView3 extends PolymerElement {
  $: any;

  static get is() {
    return 'my-view3';
  }

  static get template() {
    return html([`<style include="shared-styles">${style}</style>${view}`]);
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: 'pageChanged'
      },
      route: Object,
      routeData: Object,
      subroute: Object,
      dynamicPath: String
    };
  }

  static get observers() {
    return ['routeChanged(route.path)'];
  }

  routeChanged(path: string) {
    // For some reason, the route change is not detected when we go back to the main page2 view.
    // This little workaround will fix this problem
    const [route, subroute] = path.replace(this.rootPath, '').split('/');
    if (route !== 'view3') {
      return;
    }
    this.page = subroute ? 'dynamic-subview' : 'index';
    this.dynamicPath = subroute || '';
  }

  pageChanged(page: string) {
    // Load page import on demand. Show 404 page if fails
    import(/* webpackMode: "lazy" */
    `./${page}/${page}.component`).catch(this.showPage404.bind(this));
  }

  showPage404() {
    this.page = 'index';
  }
}

window.customElements.define(MyView3.is, MyView3);
