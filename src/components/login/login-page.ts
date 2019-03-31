// import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
// // import '@polymer/paper-checkbox/paper-checkbox.js';
// import '@polymer/paper-input/paper-input.js';
// import '@polymer/paper-button/paper-button.js';
//
// class LoginPage extends PolymerElement {
//   static get properties() {
//     return {
//       username: String,
//       password: String
//     }
//   }
//
//   static get template() {
//     return html`
//             <style>
//                   section {
//                     padding: 88px 16px;
//                   }
//                   .container {
//                     @apply --layout-horizontal;
//                     max-width: 800px;
//                     margin: 0 auto;
//                   }
//                   .container > * {
//                     @apply --layout-flex;
//                   }
//                   .container img {
//                     max-width: 100%;
//                     max-height: 100%;
//                   }
//                   .container h3 {
//                     font-size: 32px;
//                     font-weight: 300;
//                     margin: 24px 0;
//                   }
//                   @media (max-width: 600px) {
//                     .container {
//                       @apply --layout-vertical;
//                     }
//                   }
//             </style>
//           <section id="about">
//             <div class="container">
//                   <div>
//                     <!--<img src="//app-layout-assets.appspot.com/assets/landing-page/berries.jpg">-->
//                     <img src="//app-layout-assets.appspot.com/assets/landing-page/tomato.jpg">
//                     <!--<img src="//app-layout-assets.appspot.com/assets/landing-page/red-onion.jpg">-->
//                   </div>
//                   <div>
//                   <h3>Login</h3>
//                 <paper-input always-float-label label="Username" value="{{username}}"></paper-input>
//                 <paper-input type="password" always-float-label label="Password" value="{{password}}"></paper-input>
//                 <paper-button on-click="onSubmit" raised class="custom indigo">Login</paper-button>
//                 <paper-button>Sign Up</paper-button>
//                 </div>
//             </div>
//           </section>
//         `;
//   }
//
//   onSubmit(e) {
//     console.log('this', this);
//     console.log('username', this.username);
//     console.log('password', this.password);
//   }
// }
//
// customElements.define('login-page', LoginPage);