import Badge from '../atoms/badge/Badge';
import Button from '../atoms/button/Button';
import SectionHeading, { textLabel } from './SectionHeading';

export default {
  title: 'UI/Content/Section heading',
  component: SectionHeading,
  argTypes: {},
};

const Template = (args) => SectionHeading(args);

export const Base = Template.bind({});
Base.args = {
  title: 'Recent bookings',
};
Base.parameters = {
  zeplinLink: 'https://zpl.io/YYQmz7L',
};

export const TextOnly = Template.bind({});
TextOnly.args = {
  title: 'Most recent bookings',
};
TextOnly.parameters = {
  zeplinLink: 'https://zpl.io/DlMR39W',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  title: 'Recent bookings',
  label: textLabel(),
};
WithLabel.parameters = {
  zeplinLink: '',
};

export const WithBadge = Template.bind({});
WithBadge.args = {
  title: 'Recent bookings',
  label: Badge({ sizeVariant: ['small'], theme: 'brand-1' }),
};
WithBadge.parameters = {
  zeplinLink: 'https://zpl.io/mDqzmNQ',
};

export const WithButtons = Template.bind({});
WithButtons.args = {
  title: 'Most recent bookings',
  extra: [
    Button({
      colorVariant: ['outline'],
      children: ['Settings'],
      classname: ['u-margin-m-right'],
    }),
    Button({ colorVariant: ['outline'], children: ['Edit'] }),
  ],
};
WithButtons.parameters = {
  zeplinLink: 'https://zpl.io/3Xp7yoA',
};

export const WithLabelAndButtons = Template.bind({});
WithLabelAndButtons.args = {
  title: 'Recent bookings',
  label: textLabel(),
  extra: [
    Button({
      colorVariant: ['outline'],
      children: ['Settings'],
      classname: ['u-margin-m-right'],
    }),
    Button({ colorVariant: ['outline'], children: ['Edit'] }),
  ],
};
WithLabelAndButtons.parameters = {
  zeplinLink: 'https://zpl.io/ll7RvE0',
};
