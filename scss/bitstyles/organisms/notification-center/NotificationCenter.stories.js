import Dropdown from '../../atoms/dropdown/Dropdown';
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

export const InDropdown = Template.bind({});
const dropdownDecorator = (story) => {
  const decorator = document.createElement('div');
  decorator.style.height = '30rem';
  const children = `<ul class="u-list-none">
  <li class="u-border-brand-1-dark-2-bottom">${story().outerHTML}</li>
  <li class="u-border-brand-1-dark-2-bottom">${story().outerHTML}</li>
  <li class="u-border-brand-1-dark-2-bottom">${story().outerHTML}</li>
  <li>${story().outerHTML}</li>
  </ul>`;
  decorator.appendChild(Dropdown({ alignment: ['right'], children }));
  return decorator;
};

InDropdown.args = {
  title: 'Password update request confirmed',
  subtitle: 'Thank you for updating your details.',
};
InDropdown.decorators = [dropdownDecorator];
InDropdown.parameters = {
  zeplinLink: 'https://zpl.io/Gn7L1d3',
};
