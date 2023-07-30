import type { Meta, StoryObj } from '@storybook/web-components';
import "./header.ts";
import "../nav/nav.ts";
import "../nav-item/nav-item.js";

import { html } from 'lit';

const meta: Meta = {
  component: 'header',
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
	render: () => html`
	<tl-header>
		<div slot="logo">Logo</div>
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
	</tl-header>
	`,
};
