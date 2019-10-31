import { h } from 'preact';
import { Link } from 'preact-router/match';

const Teammate = ({ info }) => (
  <Link href={`/team?mate=${info.name.replace(' ', '-').toLowerCase()}`} className="teammate">
    <img class="person teammate-headshot" src={`../../assets/headshots/${info.photo}`} alt={info.name} />
    <div className="teammate-name">{info.name}</div>
    <div className="teammate-title">{info.title}</div>
  </Link>
);

export default Teammate;
