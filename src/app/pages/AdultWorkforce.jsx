import { h } from 'preact';
import Polygon from '../components/Polygon';
import CTA from '../components/CTA';

const AdultWorkforce = () => (
  <div className="page container home">
    <Polygon backgroundImage="code">
      <h1 className="h1">Adult Workforce</h1>
    </Polygon>
    <div className="row text-container"></div>
    <CTA
      actionText="Start your Software Journey Today"
      buttonText="Join us"
    />
  </div>
);

export default AdultWorkforce;
