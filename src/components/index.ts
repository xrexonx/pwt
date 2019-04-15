import {
  setRootPath,
  setPassiveTouchGestures
} from '@polymer/polymer/lib/utils/settings';
// import { MyApp } from './shell/shell.component';
import { AppShell } from './shell/app-shell';

declare var window: any;

// console.log('rootPath', window.Polymer.rootPath);

setRootPath(window.Polymer.rootPath);
setPassiveTouchGestures(true);

const elements: any = [
  AppShell
  // Add your STATIC elements here
];

for (const el of elements) {
  customElements.define(el.is, el);
}
