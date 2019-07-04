import "@polymer/app-layout/app-drawer-layout/app-drawer-layout";
import "@polymer/app-layout/app-header-layout/app-header-layout";
import "@polymer/app-layout/app-drawer/app-drawer";
import "@polymer/app-layout/app-toolbar/app-toolbar";
import "@polymer/app-layout/app-scroll-effects/app-scroll-effects";
import "@polymer/app-layout/app-header/app-header";
import "@polymer/app-layout/demo/sample-content";
import "@polymer/app-route/app-route";
import "@polymer/app-route/app-location";
import "@polymer/iron-pages/iron-pages";
import "@polymer/iron-selector/iron-selector";
import "@polymer/iron-flex-layout/iron-flex-layout";
import "@polymer/paper-icon-button/paper-icon-button";
import { html, PolymerElement } from "@polymer/polymer/polymer-element";

import "./main";
import "../navigation/side-nav";

import styles from "./styles.scss";
import { splitJoinString } from "../_utils/string";

export class MainPage extends PolymerElement {
  page: string;

  static get is() {
    return "main-page";
  }

  static get properties() {
    return {
      route: String,
      routeData: Object,
      page: {
        type: String,
        reflectToAttribute: true,
        observer: "pageChanged",
      },
    };
  }

  static get observers() {
    return ["routePageChanged(routeData.page)"];
  }

  routePageChanged(page: string) {
    this.page = page || "ltm";
  }

  pageChanged(page: string) {
    if (page !== "ltm") {
      const component = splitJoinString(page, "_", "-");
      import(`../${component}/${component}`);
    }
  }

  showPage404() {
    this.page = "view404";
  }

  toggleDrawer() {
    if (this.$.drawerLayout.forceNarrow || !this.$.drawerLayout.narrow) {
      this.$.drawerLayout.forceNarrow = !this.$.drawerLayout.forceNarrow;
    } else {
      this.$.drawerLayout.drawer.toggle();
    }
  }

  static get template() {
    return html([
      `
      <style>${styles}</style>
      <app-location route="{{route}}"></app-location>
      <app-route
        route="{{route}}"
        pattern="/:page"
        data="{{routeData}}"
        tail="{{subroute}}"
      ></app-route>
      <app-drawer-layout id="drawerLayout">
        <app-drawer slot="drawer" id="drawer">
          <side-nav
            user="OV Market Manager"
            page="{{page}}"
            route="{{route}}"
          ></side-nav>
        </app-drawer>
        <app-header-layout>
          <app-header slot="header" effects="waterfall" reveals fixed>
            <app-toolbar>
              <paper-icon-button
              icon="menu"
              drawer-toggle
              on-tap="toggleDrawer"
              ></paper-icon-button>
              <div main-title></div>
              <paper-icon-button icon="settings"></paper-icon-button>
            </app-toolbar>
          </app-header>
          <iron-pages
            role="main"
            class="flex"
            selected="[[page]]"
            attr-for-selected="name"
            fallback-selection="error404"
          >
            <dashboard-page name="ltm"></dashboard-page>
            <sample-content name="preferences" size="2"></sample-content>
            <sample-content name="guides" size="2"></sample-content>
            <databases-page name="databases"></databases-page>
            <external-feeds name="external_feeds"></external-feeds>
            <login-page name="login"></login-page>
            <states-page name="states"></states-page>
          </iron-pages>
        </app-header-layout>
      </app-drawer-layout>
    `,
    ]);
  }
}

window.customElements.define(MainPage.is, MainPage);
