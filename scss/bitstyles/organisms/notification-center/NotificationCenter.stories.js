import NotificationCenter, { NotificationWrapper } from './NotificationCenter';

export default {
  title: 'Organisms/Notification center',
  component: NotificationCenter,
  argTypes: {},
};

const Template = (args) => NotificationCenter(args);

export const Base = Template.bind({});
const baseDecorator = (story) => {
  return NotificationWrapper(story().outerHTML);
};

Base.args = {
  title: 'Password update request confirmed',
  subtitle: 'Thank you for updating your details.',
};
Base.decorators = [baseDecorator];
Base.parameters = {
  zeplinLink: 'https://zpl.io/WQKegrn',
};
