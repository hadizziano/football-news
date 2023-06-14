import logo from "./logo.svg";
import "./App.css";
import NewsReader from "./news-reader/news";
import Header from "./header/header";
function App() {
  return (
    <div>
      <Header />
      <NewsReader />
    </div>
  );
}

export default App;
