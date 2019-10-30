import { h } from 'preact';
import Polygon from '../components/Polygon';
import CTA from '../components/CTA';

const Home = () => (
  <div className="page container home">
    <Polygon backgroundImage="url('https://www.fillmurray.com/g/1000/700')">
      <div className="row">
        <div className="col-8">
          <h1 className="h1">
            WE CHANGE LIVES
            <br />
            WITH COMPUTER
            <br />
            PROGRAMMING SKILLS
          </h1>
        </div>
      </div>
    </Polygon>
    <div className="row text-container">
      <div className="text-section">
        <h2 class="h2">What is Operation Spark?</h2>
        <p className="col-12 paragraph">
          Operation Spark, or OpSpark, is a New Orleans non-profit that teaches
          the fundamentals of software development (also known as coding or
          computer programming) to low-opportunity individuals by presenting the
          fastest route to a career in software development. All students are
          looking to begin a new career in the exciting field of software
          development.
        </p>
        <p className="col-12 paragraph">
          No past computer science experience is needed to get started in our
          programs.
        </p>
      </div>
      <div className="text-section">
        <h2 class="h2">Hallebot's Quick Facts</h2>
      </div>
    </div>
    <Polygon backgroundImage="url('https://www.fillmurray.com/g/1000/500')">
      <h1 className="h1">
        Our grads work
        <br />
        at great places
      </h1>
    </Polygon>
    <div className="text-container"></div>
    <Polygon alt backgroundImage="url('https://www.fillmurray.com/g/700/700')">
      <h1 className="h1">Software industry jobs</h1>
    </Polygon>
    <div className="text-container"></div>
    <CTA
      actionText="Start your Software Journey Today"
      buttonText="Join us"
    />
  </div>
);

export default Home;
