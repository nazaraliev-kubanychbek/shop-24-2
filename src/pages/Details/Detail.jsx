import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import './detail.css';
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/reducer";

const Detail = () => {
    const [data, setData] = useState({});
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();


    useEffect(()=>{
        axios(`https://fakestoreapi.com/products/${params.id}`)
        .then(({data})=> setData(data));
    }, [params])
    return (
        <div className="detail">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={data.image} alt="" className="detail-img" />
                    </div>
                    <div className="col-6">
                        <h3 className="detail-title">{data.title}</h3>
                        <p className="detail-text">{data.description}</p>
                        <p className="detail-text">${data.price}</p>
                        <p className="detail-text">{data.category}</p>
                        <button className="detail-btn" onClick={()=>{
                            dispatch(addCart(data))
                        }}>buy</button>
                        <button className="detail-btn" onClick={()=>{
                            navigate(-1)
                        }}>go back</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;
