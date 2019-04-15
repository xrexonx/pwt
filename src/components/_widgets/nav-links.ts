import {
  html,
  css,
  property,
  customElement,
  LitElement,
  TemplateResult
} from 'lit-element';
import '@polymer/paper-checkbox/paper-checkbox';
import '@polymer/iron-icon/iron-icon';
import '@polymer/iron-icons/iron-icons';
import { titleize } from '../_utils/string';
import { SIDE_NAV_LINKS } from '../navigation/constants';

@customElement('nav-links')
class NavLinks extends LitElement {
  @property() name: string;

  static get is() {
    return 'nav-links';
  }

  static get styles() {
    return css`
      h2 {
        padding: 8px;
        margin: 8px 0 0;
        color: #222222;
        font-size: 16px;
        text-transform: capitalize;
        // border-left: 4px solid #0568ae;
      }
      .link {
        display: block;
        text-decoration: none;
        font-size: 14px;
        padding: 6px 8px 6px 18px;
        color: var(--app-secondary-color);
      }
      .link:hover {
        background: #f5f5f5;
        border-left: 4px solid #0568ae;
      }
      .side-nav {
        margin: 0 8px 8px 8px;
      }
      .active-link {
        border-left: 4px solid #0568ae;
      }
    `;
  }

  render(): TemplateResult {
    // const { name } = this;
    const navLInks = SIDE_NAV_LINKS[this.name];

    if (!navLInks) {
      return html``;
    }

    return html`
      <div class="side-nav">
        <h2>${titleize(this.name)}</h2>
        ${navLInks.map(
          (link: any) => html`
            <a
              name="${link.routeName}"
              href="/${link.routeName}"
              class="link"
            >
              <iron-icon icon="${link.icon || 'chevron-right'}"> </iron-icon>
              &nbsp; ${link.title}
            </a>
          `
        )}
      </div>
    `;
  }
}