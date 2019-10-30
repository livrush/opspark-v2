import { h } from 'preact';
import Header from '../layout/Header';

export default { title: 'Header' }

export const withText = () => (
  <Header>Hello Header</Header>
);

export const withEmoji = () => (
  <Header><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Header>
);
