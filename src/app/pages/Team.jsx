import { h } from 'preact';
import { Link } from 'preact-router/match';
import Polygon from '../components/Polygon';
import CTA from '../components/CTA';
import Teammate from '../components/Teammate';
import { staff, board, advisors } from '../../copy/team';

const Team = () => {
  return (
    <div className="page container home">
      <Polygon backgroundImage="url('https://www.fillmurray.com/g/1000/700')">
        <h1 className="h1">
          OUR MISSION
        </h1>
        <p>
          Operation Spark is opening a new door to prosperity
          for low-opportunity individuals by presenting
          the fastest route to a career in software development.
        </p>
      </Polygon>
      <div className="row text-container">
        <h2 className="h2">Staff</h2>
        <div className="flex-row-wrap">
        {
          staff.map(teammate => (
            <div className="col-3">
              <Teammate info={teammate} />
            </div>
          ))
        }
        </div>
        <h2 className="h2">Board of Directors</h2>
        <div className="flex-row-wrap">
        {
          board.map(teammate => (
            <div className="col-3">
              <Teammate info={teammate} />
            </div>
          ))
        }
        </div>
        <h2 className="h2">Advisory Board</h2>
        <div className="flex-row-wrap">
        {
          advisors.map(teammate => (
            <div className="col-3">
              <Teammate info={teammate} />
            </div>
          ))
        }
        </div>
      </div>
      <CTA actionText="Start your Software Journey Today" buttonText="Join us" />
    </div>
  );
}

export default Team;
