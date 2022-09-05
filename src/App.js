import Navbar from "./components/Navbar";
import Travel from "./components/Travel";
import data from "./data";

function App() {
  const travels = data.map((travel) => (
    <Travel key={travel.mapsUrl} {...travel} />
  ));

  return (
    <div className="App">
      <a
        className="website-refferal"
        href="https://kaitakami.com"
        target="_blank"
        rel="noreferrer"
      >
        <Navbar />
      </a>
      <div className="container">{travels}</div>
    </div>
  );
}

export default App;
