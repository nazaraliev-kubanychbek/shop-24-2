import "./card.css";
import { Link } from "react-router-dom";
import { addCart } from "../../redux/reducer";
import { useDispatch } from "react-redux";

export default function Card({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="card">
      <Link to={`/product/${item.id}`}>
        <img src={item.image} alt="" className="card-img" />
        <h1 className="card-title">
          {item.title.length > 15
            ? item.title.substr(0, 12).trim() + "..."
            : item.title}
        </h1>
        <p className="card-text">
          {item.description.length > 30
            ? item.description.substr(0, 27).trim() + "..."
            : item.description}
        </p>
      </Link>
      <p className="card-text">${item.price}</p>
      <button className="card-btn" onClick={()=>{
        dispatch(addCart(item))
      }}>buy</button>
    </div>
  );
}
