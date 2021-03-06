import "./App.css";

const businessesJSON = [
  {
    name: "Business 1",
    link: "",
  },
  {
    name: "Business 2",
    link: "",
  },
];
function App() {
  return (
    <div className="App">
      <h1>Welcome to Corner Store</h1>
      {businessesJSON.map((item, index) => (
        <p>
          <a href={item.link}>{item.name}</a>
        </p>
      ))}
    </div>
  );
}

export default App;
