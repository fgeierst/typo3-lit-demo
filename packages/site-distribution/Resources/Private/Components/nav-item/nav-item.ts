import { LitElement, unsafeCSS, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js';

import { settings } from '../settings'
import style from './nav-item.css?inline';

@customElement(`${settings.prefix}-nav-item`)
export class NavItem extends LitElement {

	@property({type: Boolean, reflect: true})
  active: boolean = false;

	constructor() {
		super();
	}

	static styles = unsafeCSS(style);

	render() {
		return html`
			<li class="${this.active ? 'active' : ''}">
				<slot></slot>
			</li>
		`;
	}
}
