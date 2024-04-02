import React from "react";
import { MultiStepLoader } from "./ui/multi-step-loader";

const loadingMessages = [
  { text: "Asking the code nicely to load faster..." },
  { text: "Compiling coffee into code..." },
  { text: "Distracting you with this message while we load..." },
  { text: "Making sure the internet is turned on..." },
];

function Preloader(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}>
    <MultiStepLoader
      loadingStates={loadingMessages} // Pass the loading states messages
      loading={props.load}           // Use the prop to control the loading state
      duration={1700}                // Set the duration to 1700ms
      loop={false}                    // Disable looping of the loading states
    />
  </div>;
}

export default Preloader;
