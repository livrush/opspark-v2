import { h } from 'preact';
import { Link } from 'preact-router/match';

// console.log(sigma);

const Graph = ({ data }) => {
  // new sigma({
  //   graph: data,
  //   container: 'graph-container',
  // });
  const { edges, nodes } = data;
  let myGraph = {
    nodes: [{ id: 'n1', label: 'Alice' }, { id: 'n2', label: 'Rabbit' }],
    edges: [{ id: 'e1', source: 'n1', target: 'n2', label: 'SEES' }],
  };
  console.warn(data);

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
