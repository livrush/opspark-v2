import { h } from 'preact';
import Polygon from '../components/Polygon';
import CTA from '../components/CTA';
import { history, serve, career } from '../../copy/history';

const History = () => (
  <div className="page container home">
    <Polygon backgroundImage="code">
      <div className="flex-col-center">
        <div className="col-8">
          <h1 className="h1">OUR MISSION</h1>
          <p class="h5">
            Operation Spark is opening a new door to prosperity for
            low-opportunity individuals by presenting the fastest route to a
            career in software development.
          </p>
        </div>
      </div>
    </Polygon>
    <div className="row text-container">
      <h2 className="h2">Our History</h2>
      <div className="flex-col-center">
        <div className="col-10">
          { history.map(para => <p className="paragraph">{para}</p>) }
        </div>
      </div>
    </div>
    <Polygon backgroundImage="student" alt>
      <h1 className="h1">Who we serve</h1>
    </Polygon>
    <div className="row text-container">
      <div className="flex-col-center">
        <div className="col-10">
          { serve.map(para => <p className="paragraph">{para}</p>) }
        </div>
      </div>
      <h2 className="h2">A Career for Everyone</h2>
      <div className="flex-col-center">
        <div className="col-10">
          { career.map(para => <p className="paragraph">{para}</p>) }
        </div>
      </div>
    </div>
    <CTA
      actionText="Start your Software Journey Today"
      buttonText="Join us"
    />
  </div>
);

export default History;
