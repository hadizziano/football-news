import News from "../data/news.json";
import "./bolder-news.css";
const BolderNewsReader = () => {
  return (
    <div className="bolder-flex-container">
      {News.map((item, index) =>
        index < 3 ? (
          <div className="bolder-news-container">
            <img className="boldernewsimage" width="600px" src={item.image} />
            <div className="bolderh1">{item.Title}</div>
            <div className="bolderh5">{item.Content}</div>
          </div>
        ) : null
      )}
    </div>
  );
};
export default BolderNewsReader;
