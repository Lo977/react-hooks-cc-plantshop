import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch(" http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => setPlants(data));
  }, []);
  // console.log(plants);
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().startsWith(search.toLowerCase())
  );
  function handleNewPlants(newPlant) {
    setPlants([...plants, newPlant]);
  }
  return (
    <main>
      <NewPlantForm onNewPlant={handleNewPlants} />
      <Search search={search} onSearch={setSearch} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
