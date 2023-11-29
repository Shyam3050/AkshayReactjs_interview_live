import "./App.css";
import Header from "./Header";

function App() {
  const country = "India";
  return (
    <div className="App">
      <Header country={country} />
    </div>
  );
}

export default App;
