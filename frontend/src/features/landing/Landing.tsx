import React from "react";
import { Link } from "react-router";

const Landing = () => {
  const [name, setName] = React.useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Link to={`/room/?name=${name}`}>Start</Link>
    </div>
  );
};

export default Landing;
