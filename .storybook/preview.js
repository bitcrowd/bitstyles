import '../build/bitstyles.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: ['Introduction', 'UI', ['Navigation', 'Content', 'Buttons', 'Data'], 'Utilities', 'Atoms', 'Organisms', 'Base' ],
    },
  },
}
