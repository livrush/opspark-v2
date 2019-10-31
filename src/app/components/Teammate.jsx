import { h } from 'preact';
import { Link } from 'preact-router/match';

const generateTeammateHref = (teammate) => {
  console.log(teammate);
  if (!teammate) return null;
  return `/team?mate=${teammate.name.replace(' ', '-').toLowerCase()}`
}

const Teammate = ({ info }) => (
  <Link href={generateTeammateHref(info)} className="teammate">
    <img class="person teammate-headshot" src={`../../assets/headshots/${info.photo}`} alt={info.name} />
    <div className="teammate-name">{info.name}</div>
    <div className="teammate-title">{info.title}</div>
  </Link>
);

const SelectedTeammate = ({ info, prev, next }) => (
  <div className="row flex-row-center teammate">
    <div className="col-4">
      <img
        class="person teammate-headshot selected"
        src={`../../assets/headshots/${info.photo}`}
        alt={info.name}
      />
      <h1 className="h4">{info.name}</h1>
      <label for="job-title" className="h5">
        {info.title}
      </label>
      <div className="teammate-change-container flex-row">
        <Link href={generateTeammateHref(prev)} className="teammate-change-link">
          &lt;
        </Link>
        <img src="../assets/lightning.svg" alt="lightning bolt" />
        <Link href={generateTeammateHref(next)} className="teammate-change-link">
          &gt;
        </Link>
      </div>
    </div>
    <div className="col-6 left">
      {info.paragraphs.map(para => (
        <p>{para}</p>
      ))}
    </div>
  </div>
);

export {
  SelectedTeammate,
  Teammate,
};
