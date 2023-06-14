import logo from "./logo.svg";
import "./App.css";
import News from "./data/news.json";

function App() {
  console.log(News);
  return (
    <div>
      {News.map((item) => (
        <div>
          <h1>{item.Title}</h1>
          <h3>{item.Content}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
