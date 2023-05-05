import "./App.css";
import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faCodeBranch,
  faCodeCommit,
  faDumbbell,
  faCodeFork,
  faCodeMerge,
  faCodePullRequest,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useSyncExternalStore } from "react";
import IconFloat from "./components/iconFloat";

function App() {
  return (
    <div className="App">
      <IconFloat
        icons={[
          "faCode",
          "faDumbbell",
          "faCodeCommit",
          "faCodeBranch",
          "faCodeMerge",
          "faCodeFork",
          "faCodePullRequest",
        ]}
      />
    </div>
  );
}

export default App;
