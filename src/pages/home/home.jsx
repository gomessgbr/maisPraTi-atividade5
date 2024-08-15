import { Carousel } from "../../components";

export function Home() {
  return (
    <>
      <Carousel
        onComponentSelect={() => {
          console.log("component selected");
        }}
      />
    </>
  );
}
