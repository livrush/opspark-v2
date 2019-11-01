import { h } from 'preact';
import Polygon from '../components/Polygon';
import CTA from '../components/CTA';

const Programs = () => (
  <div className="page container home">
    <Polygon backgroundImage="code">
      <h1 className="h1">Our Programs</h1>
    </Polygon>
    <div className="row text-container"></div>
    <CTA
      actionText="Start your Software Journey Today"
      buttonText="Join us"
    />
  </div>
);

export default Programs;
