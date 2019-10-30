import { h } from 'preact';
import Polygon from '../components/Polygon';

const Home = () => (
  <div className="page container home">
    <Polygon backgroundImage="url('https://www.fillmurray.com/g/1000/700')">
			<div className="container">
				<div className="row">
					<div className="col-8">
						<h1 className="h1">
							<span>WE CHANGE LIVES</span>
							<span>WITH COMPUTER </span>
							<span>PROGRAMMING SKILLS</span>
						</h1>
					</div>
				</div>
			</div>
    </Polygon>
    <div className="row text-section">
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
  </div>
);

export default Home;
