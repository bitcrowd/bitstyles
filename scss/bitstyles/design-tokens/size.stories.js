export default {
  title: 'Design tokens/Sizes',
};

const Template = ({ size }) => {
  const block = document.createElement('div');
  block.classList.add('u-shadow-default');
  block.classList.add('u-bg-grayscale-dark-1');
  block.classList.add('u-border-radius-s7');
  block.classList.add('a-size-block');
  block.setAttribute(
    'style',
    `width: var(--bs-size-${size}); height: var(--bs-size-${size})`
  );
  block.setAttribute('title', size);
  return block;
};

export const S7 = Template.bind({});
S7.args = {
  size: 's7',
};

export const S6 = Template.bind({});
S6.args = {
  size: 's6',
};

export const S5 = Template.bind({});
S5.args = {
  size: 's5',
};

export const S4 = Template.bind({});
S4.args = {
  size: 's4',
};

export const S3 = Template.bind({});
S3.args = {
  size: 's3',
};

export const S2 = Template.bind({});
S2.args = {
  size: 's2',
};

export const S1 = Template.bind({});
S1.args = {
  size: 's1',
};

export const M = Template.bind({});
M.args = {
  size: 'm',
};

export const L1 = Template.bind({});
L1.args = {
  size: 'l1',
};

export const L2 = Template.bind({});
L2.args = {
  size: 'l2',
};

export const L3 = Template.bind({});
L3.args = {
  size: 'l3',
};

export const L4 = Template.bind({});
L4.args = {
  size: 'l4',
};

export const L5 = Template.bind({});
L5.args = {
  size: 'l5',
};

export const L6 = Template.bind({});
L6.args = {
  size: 'l6',
};

export const L7 = Template.bind({});
L7.args = {
  size: 'l7',
};
