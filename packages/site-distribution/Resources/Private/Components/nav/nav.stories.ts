import type { Meta, StoryObj } from '@storybook/web-components';
import "./nav.ts";
import "../nav-item/nav-item.js";

import { html } from 'lit';

const meta: Meta = {
  component: 'nav',
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
	render: () => html`
	<tl-nav>
		<tl-nav-item slot="item">
			First Item
		</tl-nav-item>
		<tl-nav-item slot="item">
			Second Item
		</tl-nav-item>
		<tl-nav-item slot="item">
			Third Item
		</tl-nav-item>
	</tl-nav>
	`,
};

export const ManyItems: Story = {
	render: () => html`
	<tl-nav>
		<tl-nav-item slot="item">
			First Item
		</tl-nav-item>
		<tl-nav-item slot="item">
			Second Item
		</tl-nav-item>
		<tl-nav-item slot="item">
			Third Item
		</tl-nav-item>
		<tl-nav-item slot="item">
			Fourth Item
		</tl-nav-item>
		<tl-nav-item slot="item">
			Fifth Item
		</tl-nav-item>
		<tl-nav-item slot="item">
			Sixth Item
		</tl-nav-item>
	</tl-nav>
	`,
};
