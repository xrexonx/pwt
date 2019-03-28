// import '@polymer/iron-icon/iron-icon';
import '@polymer/iron-iconset-svg/iron-iconset-svg';

import defsHtml from './defs.html';

const documentContainer = document.createElement('div');
documentContainer.setAttribute('style', 'display: none;');
documentContainer.innerHTML = defsHtml;
document.head.appendChild(documentContainer);
