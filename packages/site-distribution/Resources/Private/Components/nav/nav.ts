import { LitElement, unsafeCSS, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js';

import { settings } from '../settings'
import style from './nav.css?inline';

@customElement(`${settings.prefix}-nav`)
export class Nav extends LitElement {

	constructor() {
		super();
	}

	static styles = unsafeCSS(style);

	render() {
		return html`
      <nav>
				<ul>
					<slot name="item"></slot>
				</ul>
			</nav>
		`;
	}
}
