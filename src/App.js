import logo from "./logo.svg";
import "./App.css";
import NewsReader from "./news-reader/news";
import Header from "./header/header";
import BolderNewsReader from "./news-reader/bolder-news";
function App() {
  return (
    <div>
      <Header />
      <BolderNewsReader />
      <NewsReader />
    </div>
  );
}

export default App;
