import { LitElement, unsafeCSS, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js';

import { settings } from '../settings'
import style from './header.css?inline';

@customElement(`${settings.prefix}-header`)
export class Header extends LitElement {

	constructor() {
		super();
	}

	static styles = unsafeCSS(style);

	render() {
		return html`
      <header>
				<div class="container">
					<div class="logo">
						<slot name="logo"></slot>
					</div>
        	<slot></slot>
				</div>
			</header>
		`;
	}
}
