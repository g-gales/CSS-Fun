import "./Firefly.css";

// Generates a starting point for fireflies thats biased towards the center of the swarm
const r = () => Math.random() - 0.5;
const bias = () => r() * r() * 200 * (Math.random() < 0.5 ? -1 : 1);

const Firefly = () => {
  return (
    <div className="firefly-card">
      <p className="firefly-title">Find the Fireflies</p>
      <div className="swarm">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="pivot"
            style={{
              "--x": `${bias()}px`,
              "--y": `${bias()}px`,
              "--d": `${(Math.random() * 1.5 + 0.5).toFixed(2)}s`, // delay
              "--s": `${(Math.random() * 2 + 2.5).toFixed(2)}s`, // speed
              "--ax": `${(Math.random() * 18 + 10).toFixed(1)}px`, // amplitude x for fig8
              "--ay": `${(Math.random() * 12 + 6).toFixed(1)}px`, // amplitude y for fig8
            }}>
            <div className="firefly" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Firefly;
