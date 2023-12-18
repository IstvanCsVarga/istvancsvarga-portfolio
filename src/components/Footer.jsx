import React from "react";
import { SectionWrapper } from "../hoc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="flex justify-center items-center h-16">
        <span>
          <FontAwesomeIcon icon={faCheckCircle} style={{ color: "green" }} />
          &nbsp; All systems are operational. &nbsp;
        </span>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://status.istvanv.dev"
          title="Status"
          style={{ color: "blue" }}
        >
          Status
        </a>
        &nbsp;.&nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://uptime.istvanv.dev"
          title="Uptime"
          style={{ color: "blue" }}
        >
          Uptime
        </a>
      </div>
    </footer>
  );
};

export default SectionWrapper(Footer, "");
