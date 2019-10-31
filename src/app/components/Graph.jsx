import { h } from 'preact';
import { Link } from 'preact-router/match';

// console.log(sigma);

const Graph = ({ data }) => {
  const { nodes } = data;
  return (
    <div className="graph-container">
      {
        nodes.map(node => (
          <div
            className="node"
            style={`left: ${node.x}%;top: ${node.y}%; animation-delay: ${Math.random() * -10}s`}
          >
            <div className="node-point"></div>
            <p className="node-label">
              {node.label}
            </p>
          </div>
        ))
      }
    </div>
  );
}

export default Graph;
