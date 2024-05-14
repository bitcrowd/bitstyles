import Badge from '../../atoms/badge/Badge';
import Button from '../../atoms/button/Button';
import SectionHeader, { textLabel } from './SectionHeader';

export default {
  title: 'Organisms/Section header',
  component: SectionHeader,
  argTypes: {},
};

const Template = (args) => SectionHeader(args);

export const Base = Template.bind({});
Base.args = {
  title: 'Recent bookings',
};
Base.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=63613539842cc318bb1a433c',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  title: 'Recent bookings',
  label: textLabel(),
};
WithLabel.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=63613539842cc318bb1a433c',
};

export const LongTitleWithLabel = Template.bind({});
LongTitleWithLabel.args = {
  title: 'Betäubungsmittelverschreibungsverordnungen',
  label: textLabel(),
};
LongTitleWithLabel.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=63613539842cc318bb1a433c',
};

export const WithBadge = Template.bind({});
WithBadge.args = {
  title: 'Recent bookings',
  label: Badge({ sizeVariant: ['small'], theme: 'brand-1', label: 'New' }),
};
WithBadge.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6361353cfeaf26147151d11d',
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
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6361353a09cd62193b39d1e7',
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
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=636135388713c218d8a6ffca',
};

export const WithBadgeAndButtons = Template.bind({});
WithBadgeAndButtons.args = {
  title: 'Recent bookings',
  label: Badge({ sizeVariant: ['small'], theme: 'brand-1', label: 'New' }),
  extra: [
    Button({
      colorVariant: ['outline'],
      children: ['Settings'],
      classname: ['u-margin-m-right'],
    }),
    Button({ colorVariant: ['outline'], children: ['Edit'] }),
  ],
};
WithBadgeAndButtons.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=636135388713c218d8a6ffca',
};
