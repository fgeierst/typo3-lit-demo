import { LitElement, unsafeCSS, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js';

import { settings } from '../settings'
import style from './teaser.css?inline';

@customElement(`${settings.prefix}-teaser`)
export class Teaser extends LitElement {

	constructor() {
		super();
	}

	static styles = unsafeCSS(style);

	render() {
		return html`
			<div class="teaser">
				<div class="header">
					<slot name="header"></slot>
				</div>
				<slot></slot>
			</div>
		`;
	}
}
