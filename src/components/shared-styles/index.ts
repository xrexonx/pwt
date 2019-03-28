// import '@polymer/iron-icon/iron-icon';
import '@polymer/iron-iconset-svg/iron-iconset-svg';

import defsScss from './defs.scss';

const documentContainer = document.createElement('div');
documentContainer.setAttribute('style', 'display: none;');
documentContainer.innerHTML = `<dom-module id="shared-styles">
		<template><style>${defsScss}</style></template>
	</dom-module>`;
document.head.appendChild(documentContainer);
