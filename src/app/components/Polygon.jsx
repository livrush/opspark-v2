import { h } from 'preact';

const PolygonHeader = ({ alt, children, backgroundImage, clipPath = '' }) => (
  <div
    className={ `polygon ${alt ? 'alt' : ''}`}
    style={{ backgroundImage: `url(../assets/stock/${backgroundImage}.jpeg)`, clipPath }}
  >
    <div className="polygon-children">{children}</div>
    <div className="polygon-overlay"></div>
  </div>
);

export default PolygonHeader;
