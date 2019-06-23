import { html } from '@polymer/polymer/polymer-element.js';

export const dataTableStyles = html`
      <style>
        :host {
          display: block;
        }
        h2 {
          max-width: 936px;
          width: 100%;
          margin: 20px auto;
        }
        iron-input {
          width: 100%;
        }
        input {
          font-size: 14px;
          margin: 0px 4px;
          padding: 4px;
          border: 0px solid var(--divider-color);
          width: 100%;
        }
        exmg-paper-toolbar span.interactive-content {
          margin-left: 10px;
          white-space: nowrap;
          overflow: hidden;
          color: rgba(0, 0, 0, 0.38);
          font-size: 14px;
          text-overflow: ellipsis;
          letter-spacing: 0.005em;
          box-sizing: border-box;
          font-weight: 400;
          cursor: pointer;
          width: 100%;
        }
        .search {
          background: #fff;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
            0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
        }
        .search input {
          outline: none;
        }
      </style>`;
