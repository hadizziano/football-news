import News from "../data/news.json";
import image from "../data/images/1.jpg";
const NewsReader = () => {
  return (
    <div>
      {News.map((item) => (
        <div>
          <h1>{item.Title}</h1>
          <img width="300px" src={item.image} />
          <h5>{item.Content}</h5>
        </div>
      ))}
    </div>
  );
};
export default NewsReader;
