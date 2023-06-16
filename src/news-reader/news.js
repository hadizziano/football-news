import News from "../data/news.json";
import "./news.css";
const NewsReader = () => {
  return (
    <div className="flex-container">
      {News.map((item) => (
        <div className="news-container">
          <h1>{item.Title}</h1>
          <img className="newsimage" width="300px" src={item.image} />
          <h5>{item.Content}</h5>
        </div>
      ))}
    </div>
  );
};
export default NewsReader;
