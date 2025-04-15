import Notification from './Notification';

export default {
  title: 'Molecules/Notification',
  component: Notification,
  argTypes: {},
};

const Template = (args) => Notification(args);

export const Base = Template.bind({});
Base.args = {
  title: 'Password update request sent',
  subtitle:
    'We sent an email to asdf@example.com. Please click the link inside to confirm your password change',
  theme: 'positive',
};
Base.parameters = {
  zeplinLink: 'https://zpl.io/WQKegrn',
};
