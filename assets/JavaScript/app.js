// Css entrypoint
import "../Css/app.css";

// Lit components

import "../../packages/site-distribution/Resources/Private/Components/header/header.ts";
import "../../packages/site-distribution/Resources/Private/Components/nav/nav.ts";
import "../../packages/site-distribution/Resources/Private/Components/nav-item/nav-item.ts";

// Use vite-svg-loader, see https://www.npmjs.com/package/vite-svg-loader#user-content-import-params
// import typo3Logo from '../Image/Icon/typo3.svg?url'
// document.querySelector('.js-made-with').innerHTML = 'Made with <img width="20px" height="20px" src="' + typo3Logo + '" alt="TYPO3">'

// TYPO3.lang contains all available inline labels
console.log("Say hi! " + TYPO3.lang["site-distribution.welcome"]);

// Shoelace components

import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/rating/rating.js';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';

// Set the base path to the folder you copied Shoelace's assets to
setBasePath('packages/site-distribution/Resources/Public/assets/shoelace');

// <sl-button>, <sl-icon>, <sl-input>, and <sl-rating> are ready to use!
