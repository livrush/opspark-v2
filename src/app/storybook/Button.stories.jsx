import { h } from 'preact';
import Button from '../components/Button';

export default { title: 'Button' }

export const plain = () => (
  <Button>Hello Button</Button>
);

export const alternate = () => (
  <Button alt>Hellp Button Alt</Button>
);
