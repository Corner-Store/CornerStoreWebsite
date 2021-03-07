import "./App.css";
import { businessesJSON } from "./businesses";

function App() {
  return (
    <div className="App">
      <h1>Welcome to Corner Store</h1>
      <ul data-testid="item-list-businesses">
        {businessesJSON.map((item, index) => (
          <li key={index} className="list-item" data-testid="single-item">
            <a href={item.link} data-testid="display-businesses">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
