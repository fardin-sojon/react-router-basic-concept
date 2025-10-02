// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";

import { useLoaderData } from "react-router";

const PlantDetails = () => {
//   const { id } = useParams();
//   console.log(id);

//   const [plant, setPlant] = useState({});

//   useEffect(() => {
    // fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    //   .then((res) => res.json())
    //   .then((data) => setPlant(data?.plants));

//     axios(`https://openapi.programming-hero.com/api/plant/${id}`).then((data) =>
//       setPlant(data.data.plants)
//     );
//   }, [id]);

  //     {
  //     "id": 1,
  //     "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
  //     "name": "Mango Tree",
  //     "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
  //     "category": "Fruit Tree",
  //     "price": 500
  // }

  const {data} = useLoaderData()
//   console.log(data);

  const { name, image, description, category, price } = data.plants

  console.log(data.plants);

  return (
    <div>
      <div className="card bg-base-100 h-190 max-w-5xl mx-auto shadow-sm">
        <figure>
          <img src={image} alt="Fruit" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{category}</div>
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Price: {price}</div>
            <div className="badge badge-outline">Add to Cart</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
