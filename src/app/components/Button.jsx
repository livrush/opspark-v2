import { h } from 'preact';
import '../../style/index.scss';

const Button = ({ children }) => (
  <button className="btn">{ children }</button>
);

export default Button;