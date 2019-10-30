import { h } from 'preact';
import { Link } from 'preact-router/match';

const CTA = ({ actionText, buttonText, buttonLink }) => (
  <div className="call-to-action">
    <div className="row">
      <div className="col-8">

        <h3 className="h3">{actionText}</h3>
        <div className="btn alt">
          <Link>{buttonText}</Link>
        </div>
      </div>
    </div>
  </div>
);

export default CTA;
