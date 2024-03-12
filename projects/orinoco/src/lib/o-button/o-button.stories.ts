import type { Meta, StoryObj } from '@storybook/angular';

import { OButtonComponent } from './o-button.component';
import { Size } from '../utils/enums/size.enum';
import { Type } from '../utils/enums/type.enum';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<OButtonComponent> = {
  title: 'Orinoco/OButton',
  component: OButtonComponent,
  tags: ['autodocs'],
  render: (args: OButtonComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<OButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const OPrimary: Story = {
  args: {
    type: Type.PRIMARY,
    label: 'OButton',
  },
};

export const OSecondary: Story = {
  args: {
    type: Type.SECONDARY,
    label: 'OButton',
  },
};
export const ODanger: Story = {
  args: {
    type: Type.DANGER,
    label: 'OButton',
  },
};

export const OLarge: Story = {
  args: {
    size: Size.LARGE,
    label: 'OButton',
  },
};

export const OSmall: Story = {
  args: {
    size: Size.SMALL,
    label: 'OButton',
  },
};
