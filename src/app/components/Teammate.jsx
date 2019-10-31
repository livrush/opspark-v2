import { h } from 'preact';

const Teammate = ({ info }) => (
  <div className="teammate">
    <img class="person teammate-headshot" src={`../../assets/headshots/${info.photo}`} alt={info.name} />
    <div className="teammate-name">{info.name}</div>
    <div className="teammate-title">{info.title}</div>
  </div>
);

export default Teammate;
