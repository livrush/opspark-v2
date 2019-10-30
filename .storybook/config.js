import { configure } from '@storybook/preact';

configure(require.context('../src', true, /\.stories\.jsx$/), module);
