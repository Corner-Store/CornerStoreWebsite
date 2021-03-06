import "./App.css";
import { businessesJSON } from "./businesses";

function App() {
  return (
    <div className="App">
      <h1>Welcome to Corner Store</h1>

      {businessesJSON.map((item, index) => (
        <p key={index}>
          <a href={item.link}>{item.name}</a>
        </p>
      ))}
    </div>
  );
}

export default App;
