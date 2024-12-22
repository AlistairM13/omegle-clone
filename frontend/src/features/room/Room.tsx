import { useSearchParams } from "react-router";

const Room = () => {
  const [searchParams] = useSearchParams();

  return <div>Hi {searchParams.get("name")}</div>;
};

export default Room;
