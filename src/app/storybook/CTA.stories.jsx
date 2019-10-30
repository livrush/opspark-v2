import { h } from 'preact';
import CTA from '../components/CTA';

export default { title: 'Components' };

export const callToAction = () => (
  <CTA
    actionText="Join us in saying Hello to the World"
    buttonText="Hello World"
  />
);
