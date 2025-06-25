import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export const fakeLinkDownload = (url, name) => {
  const fakeLink = document.createElement("A");

  fakeLink.href = url;
  fakeLink.download = name || url.substr(url.lastIndexOf("/") + 1);
  fakeLink.target = "_blank";

  document.body.appendChild(fakeLink);
  fakeLink.click();
  document.body.removeChild(fakeLink);
};

function App() {
  const [count, setCount] = useState(0);

  const handleDownload = async () => {
    await new Promise((resolve) => {
      setTimeout(resolve, 5000);
    });

    fakeLinkDownload("/react-test/cat.pdf");
  };

  return (
    <>
      <a style={{ cursor: "pointer" }} onClick={handleDownload}>
        DOWNLOAD
      </a>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
