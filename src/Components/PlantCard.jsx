import React from "react";
import { Link } from "react-router";

const PlantCard = ({ plant }) => {
  //     {
  //     "id": 1,
  //     "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
  //     "name": "Mango Tree",
  //     "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
  //     "category": "Fruit Tree",
  //     "price": 500
  // }

  const { name, image, description, category, price, id } = plant;

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm mx-auto">
        <figure>
          <img className="w-full h-50 object-cover " src={image} alt="Fruit" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{category}</div>
          </h2>
          <p>{description}</p>
          <div className=" flex justify-between items-center gap-7">
            <Link to={`/plant-details/${id}`} className="btn btn-primary">Plant Details</Link>
            <div className="flex gap-1">
            <div className="badge badge-outline">Price: {price}</div>
            <div className="badge badge-outline">Add Cart</div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
