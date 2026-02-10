import "./Ghosts.css";

const Ghosts = () => {
  return (
    <div className="ghosts-card">
      <div className="ghost-wrapper">
        <div className="ghosts-container">
          <div
            className="ghost ghost1"
            style={{ "--d": `${(Math.random() * 1.5 + 0.5).toFixed(2)}s` }}>
            <div className="ghost-body">
              <div className="ghost1-eyes">
                <div className="ghost-eye left"></div>
                <div className="ghost-eye right"></div>
              </div>
            </div>
          </div>
          <div
            className="ghost ghost2"
            style={{ "--d": `${(Math.random() * 1.5 + 0.5).toFixed(2)}s` }}>
            <div className="ghost-body">
              <div className="ghost2-eyes">
                <div className="ghost-eye left"></div>
                <div className="ghost-eye right"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="floor"></div>
      </div>
    </div>
  );
};

export default Ghosts;
