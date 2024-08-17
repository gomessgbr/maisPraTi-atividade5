import { useNavigate } from "react-router-dom";
import { Carousel } from "../../components";

export function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Carousel
        onComponentSelect={(component) => {
          navigate(`/${component}`);
        }}
      />
    </>
  );
}
