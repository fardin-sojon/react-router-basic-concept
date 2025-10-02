// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import PlantCard from "../Components/PlantCard";

const Home = () => {

  // const [plants, setPlants]= useState([])

  // useEffect(()=>{
  //   fetch('https://openapi.programming-hero.com/api/plants')
  //   .then(res=> res.json())
  //   .then(data=>setPlants(data?.plants))
  // }, [])
// console.log(plants);

  const {plants} = useLoaderData()
  // console.log(plants);

  return (
    <div className="ml-3">
      <h2 className="text-green-500 text-3xl mt-5">Plants Card</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 py-8">
          {
        plants.map(plant=> <PlantCard key={plant?.id} plant={plant}></PlantCard>)
      }
      </div>
    </div>
  );
};

export default Home;