import { h } from 'preact';
import Polygon from '../components/Polygon';
import Teammate from '../components/Teammate';
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
        console.log('Win!', name);
        selectedTeammate = (
          <div className="row flex-row-center teammate">
            <div className="col-4">
              <img
                class="person teammate-headshot selected"
                src={`../../assets/headshots/${currentTeammate.photo}`}
                alt={currentTeammate.name}
              />
              <h1 className="h4">{currentTeammate.name}</h1>
              <label for="job-title" className="h5">{currentTeammate.title}</label>
              <div className="teammate-change-container flex-row">
                <button className="text alt">&lt;</button>
                <img src="../assets/lightning.svg" alt="lightning bolt"/>
                <button className="text alt">&gt;</button>
              </div>
            </div>
            <div className="col-6 left">
              {currentTeammate.paragraphs.map(para => <p>{para}</p>)}
            </div>
          </div>
        )
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
