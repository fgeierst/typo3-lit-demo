import type { Meta, StoryObj } from '@storybook/web-components';
import "./teaser.ts";

import { html } from 'lit';

const meta: Meta = {
  component: 'teaser',
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
	render: () => html`
	<tl-teaser>
		<div slot="header">Lorem</div>
		Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
	</tl-teaser>
	`,
};
