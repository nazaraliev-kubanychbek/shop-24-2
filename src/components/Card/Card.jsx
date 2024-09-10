import './card.css';

export default function Card({item}) {
  return (
    <div className="card">
      <img src={item.image} alt="" className="card-img" />
      <h1 className="card-title">{item.title}</h1>
      <p className="card-text">{item.description}</p>
    </div>
  )
}
