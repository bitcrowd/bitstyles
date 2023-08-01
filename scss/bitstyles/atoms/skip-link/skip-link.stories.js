import Link from '../../base/anchor/Link';

export default {
  title: 'Atoms/Skip link',
  component: Link,
};

const Template = (args) => {
  const wrapper = document.createElement('div');
  const mainContent = document.createElement('div');
  mainContent.setAttribute('id', 'main');
  mainContent.innerHTML =
    'Your main content here, after some other content that gets repeated on every page (navigation etc.)';
  wrapper.append(Link(args));
  wrapper.append(mainContent);
  return wrapper;
};

// ***** Default size, each shape & color ****************** //

export const Base = Template.bind({});
Base.args = {
  children: 'Skip to content',
  classname: ['a-skip-link'],
  href: '#main',
};
Base.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363a297d8cc70b3d84eeee3',
};
