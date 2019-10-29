import { configure } from '@storybook/preact';

configure(require.context('../src/app/storybook', true, /\.stories\.jsx$/), module);
