import '../build/bitstyles.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: ['Introduction', ['Navigation', 'Content', 'Buttons', 'Data'], 'UI', 'Generic', 'Base', 'Layout', 'Objects', 'Components', 'Utilities'],
    },
  },
}
