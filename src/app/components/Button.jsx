import { h } from 'preact';
import '../../style/index.scss';

const Button = ({ alt, children }) => (
  <button className={ `btn ${alt ? 'alt' : ''}` }>{ children }</button>
);

export default Button;