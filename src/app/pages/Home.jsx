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
        <p className="col-12 paragraph">
          Learn more about us on our about page, read up on the programs we provide, or check out some of our awards and press.
        </p>
        <div className="row">
          <div className="col-3">
            <a href="https://www.forbes.com/sites/bridgespan/2016/06/08/three-ways-philanthropists-can-invest-in-markets-to-revive-the-american-dream/#3332d19e48bd" target="_blank" rel="noopener noreferrer">
              <img class="news-logo" src="../../assets/logos/forbes.png" alt="Forbes" />
            </a>
          </div>
          <div className="col-3">
            <a href="https://obamawhitehouse.archives.gov/blog/2015/05/18/launching-police-data-initiative" target="_blank" rel="noopener noreferrer">
              <img class="news-logo" src="../../assets/logos/white-house.png" alt="White House" />
            </a>
          </div>
          <div className="col-3">
            <a href="https://www.theadvocate.com/baton_rouge/news/politics/article_4309e250-4e61-51e8-974c-a50c5f0b92d3.html" target="_blank" rel="noopener noreferrer">
              <img class="news-logo" src="../../assets/logos/advocate.png" alt="The Advocate" />
            </a>
          </div>
          <div className="col-3">
            <a href="https://www.wwltv.com/article/news/operation-spark-give-new-orleans-youth-chance-to-learn-how-to-code/289-152697121" target="_blank" rel="noopener noreferrer">
              <img class="news-logo" src="../../assets/logos/4wwltv.png" alt="4WWLTV" />
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
            <div className="job-fact-container">
              <img src="../../assets/home-money.svg" alt="money" />
              <p className="paragraph">
                Provide significant lifetime earnings
              </p>
            </div>
        </div>
        <div className="col-4 flex-col-center icon-bullet">
            <div className="job-fact-container">
              <img src="../../assets/home-college.svg" alt="crossed out graduation hat" />
              <p className="paragraph">
                Don't require college degrees/certifications
              </p>
            </div>
        </div>
        <div className="col-4 flex-col-center icon-bullet">
            <div className="job-fact-container">
              <img src="../../assets/home-globe.svg" alt="globe" />
              <p className="paragraph">
                Available in every industry across the world
              </p>
            </div>
        </div>
      </div>
    </div>
    <CTA actionText="Start your Software Journey Today" buttonText="Join us" />
  </div>
);

export default Home;
