import { Route, Routes } from "react-router";
import Landing from "./features/landing/Landing";
import Room from "./features/room/Room";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/room" element={<Room />} />
    </Routes>
  );
};

export default App;
