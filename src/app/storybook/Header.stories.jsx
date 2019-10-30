import { h } from 'preact';
import Header from '../layout/Header';
import { storiesOf } from '@storybook/preact';

// export default {
//   title: 'Layout',
// }


storiesOf('Layout')
  .add('Header', () => <Header />);

// export const header = () => ( <Header /> );
