import '../build/bitstyles.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: ['Introduction', 'UI', ['Navigation', 'Content', 'Buttons', 'Data'], 'Atoms', 'Utilities', 'Organisms', 'Base' ],
    },
  },
}
