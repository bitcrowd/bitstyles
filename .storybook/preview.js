import '../build/bitstyles.css';
import 'alpinejs';
import 'a11y-dialog';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewMode: 'docs',
  previewTabs: { 'storybook/docs/panel': { index: -1 } },
  options: {
    storySort: {
      order: ['Introduction', 'UI', ['Navigation', 'Content', 'Buttons', 'Data'], 'Atoms', 'Utilities', 'Organisms', 'Base' ],
    },
  },
}
