import { h } from 'preact';

const PolygonHeader = ({ children, backgroundImage, clipPath = '' }) => (
  <div
    className="polygon"
    style={{ backgroundImage, clipPath }}
  >
    <div className="polygon-children">{children}</div>
    <div className="polygon-overlay"></div>
  </div>
);

export default PolygonHeader;
