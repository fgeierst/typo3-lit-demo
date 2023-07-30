import type { Meta, StoryObj } from '@storybook/web-components';
import "./nav-item.ts";

import { html } from 'lit';

const meta: Meta = {
  component: 'nav-item',
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
	render: () => html`<tl-nav-item>
		Nav Item
	</tl-nav-item>`,
};
