import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useEffect, useState } from "react";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set an event listener to check if the user is on mobile or not
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial state of the isMobile variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle
    // the change of the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);

      // Add the callback function as a listener to the query
      mediaQuery.addEventListener("change", handleMediaQueryChange);

      // Remove the callback function from the query
      return () => {
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
      };
    };
  }, []);


  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {!isMobile &&
        technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
