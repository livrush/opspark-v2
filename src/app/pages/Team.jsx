import { h } from 'preact';
import Polygon from '../components/Polygon';
import { SelectedTeammate, Teammate } from '../components/Teammate';
import CTA from '../components/CTA';
import { staff, board, advisors } from '../../copy/team';

const Team = ({ mate }) => {
  let selectedTeammate = null;
  if (mate) {
    const team = [...staff, ...board, ...advisors];
    for (var i = 0; i < team.length; i++) {

      const currentTeammate = team[i];
      const name = currentTeammate.name.replace(' ', '-').toLowerCase();
      if (name === mate) {
        console.warn(currentTeammate, team[i - 1], team[i + 1]);
        selectedTeammate = (
          <SelectedTeammate
            info={currentTeammate}
            prev={team[i - 1]}
            next={team[i + 1]}
          />
        );
        break;
      }
    }
  }

  return (
    <div className="page container home">
      <Polygon backgroundImage="url('https://www.fillmurray.com/g/1000/700')">
        <div className="col-8 flex-col-center">
          <h1 className="h1">OUR MISSION</h1>
          <p class="h5">
            Operation Spark is opening a new door to prosperity for
            low-opportunity individuals by presenting the fastest route to a
            career in software development.
          </p>
        </div>
      </Polygon>
      <div className="row text-container">
        <div className="selected-teammate">{selectedTeammate}</div>
        <h2 className="h2">Staff</h2>
        <div className="flex-row-wrap">
          {staff.map(teammate => (
            <div className="col-3">
              <Teammate info={teammate} />
            </div>
          ))}
        </div>
        <h2 className="h2">Board of Directors</h2>
        <div className="flex-row-wrap">
          {board.map(teammate => (
            <div className="col-3">
              <Teammate info={teammate} />
            </div>
          ))}
        </div>
        <h2 className="h2">Advisory Board</h2>
        <div className="flex-row-wrap">
          {advisors.map(teammate => (
            <div className="col-3">
              <Teammate info={teammate} />
            </div>
          ))}
        </div>
      </div>
      <CTA
        actionText="Start your Software Journey Today"
        buttonText="Join us"
      />
    </div>
  );
}

export default Team;
