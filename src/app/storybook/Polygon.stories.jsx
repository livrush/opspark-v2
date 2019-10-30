import { h } from 'preact';
import Polygon from '../components/Polygon';

export default { title: 'Polygon Header' };

export const imageOnly = () => (
  <Polygon backgroundImage="url('https://www.fillmurray.com/g/1000/700')" />
);

export const withChildren = () => (
  <Polygon backgroundImage="url('https://www.fillmurray.com/g/1000/700')">
    <h1>Hello World</h1>
  </Polygon>
);
