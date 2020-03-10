import '../build/bitstyles.css';
import { addDecorator, addParameters } from '@storybook/html';
import { addReadme } from 'storybook-readme/html';

addParameters({ options: { theme: {} } });
addDecorator(addReadme);
