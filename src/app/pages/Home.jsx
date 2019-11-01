import { h } from 'preact';
import { Link } from 'preact-router/match';
import Polygon from '../components/Polygon';
import CTA from '../components/CTA';
import Graph from '../components/Graph';
import { nodes, edges } from '../../copy/employers';

const Home = () => (
  <div className="page container home">
    <Polygon backgroundImage="tutor">
      <div className="row">
        <div className="col-8 flex-col-center">
          <h1 className="h1">
            WE CHANGE LIVES
            <br />
            WITH COMPUTER
            <br />
            PROGRAMMING SKILLS
          </h1>
          <Link href="/sign-up" class="btn">
            Join us
          </Link>
        </div>
      </div>
    </Polygon>
    <div className="row text-container">
      <div className="text-section">
        <h2 id="what-is-operation-spark" class="h2">
          What is Operation Spark?
        </h2>
        <p className="col-12 paragraph">
          Operation Spark, or OpSpark, is a New Orleans non-profit that teaches
          the fundamentals of software development (also known as coding or
          computer programming) to low-opportunity individuals by presenting the
          fastest route to a career in software development. All students are
          looking to begin a new career in the exciting field of software
          development.
        </p>
        <p className="col-12 paragraph bold">
          No past computer science experience is needed to get started in our
          programs.
        </p>
        <div className="row">
          <div className="col-3">
            <a href="" target="_blank" >
              <img class="news-logo" src="../../assets/logos/forbes.png" alt="" />
            </a>
          </div>
          <div className="col-3">
            <a href="" target="_blank" >
              <img class="news-logo" src="../../assets/logos/white-house.png" alt="" />
            </a>
          </div>
          <div className="col-3">
            <a href="https://www.theadvocate.com/baton_rouge/news/politics/article_4309e250-4e61-51e8-974c-a50c5f0b92d3.html" target="_blank" >
              <img class="news-logo" src="../../assets/logos/4wwltv.png" alt="" />
            </a>
          </div>
          <div className="col-3">
            <a href="" target="_blank" >
              <img class="news-logo" src="../../assets/logos/advocate.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-section">
        <h2 class="h2">Hallebot's Quick Facts</h2>
      </div>
    </div>
    <Polygon backgroundImage="collaborating">
      <h1 className="h1">
        Our grads work
        <br />
        at great places
      </h1>
    </Polygon>
    <div className="text-container">
      <Graph data={{ nodes, edges }} />
    </div>
    <Polygon alt backgroundImage="working">
      <h1 className="h1">Software industry jobs</h1>
    </Polygon>
    <div className="text-container">
      <div className="row center">
        <div className="col-4 flex-col-center icon-bullet">
          <img src="../../assets/home-money.svg" alt="money" />
          <p className="paragraph">Provide significant lifetime earnings</p>
        </div>
        <div className="col-4 flex-col-center icon-bullet">
          <img
            src="../../assets/home-college.svg"
            alt="crossed out graduation hat"
          />
          <p className="paragraph">
            Don't require college degrees/certifications
          </p>
        </div>
        <div className="col-4 flex-col-center icon-bullet">
          <img src="../../assets/home-globe.svg" alt="globe" />
          <p className="paragraph">
            Available in every industry across the world
          </p>
        </div>
      </div>
    </div>
    <CTA actionText="Start your Software Journey Today" buttonText="Join us" />
  </div>
);

export default Home;
