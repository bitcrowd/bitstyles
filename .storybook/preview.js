import 'alpinejs';
import 'a11y-dialog';
import '../scss/bitstyles.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewMode: 'docs',
  previewTabs: { 'storybook/docs/panel': { index: -1 } },
  options: {
    storySort: {
      order: [
        'Introduction',
        ['Getting started', 'Principles', 'Extending bitstyles', 'UI components'],
        'Design Tokens',
        'UI',
        ['Navigation', 'Content', 'Buttons', 'Data'],
        'Atoms',
        'Utilities',
        'Organisms',
        'Base',
      ],
    },
  },
};
