import React, { useState } from "react";

function NewPlantForm({ onNewPlant }) {
  const [plantsData, setPlantsData] = useState({
    name: "",
    image: "",
    price: 0,
  });
  function handleChane(e) {
    const key = e.target.name;

    setPlantsData({ ...plantsData, [key]: e.target.value });
  }
  // console.log(plantsData);
  function handleSubmit(e) {
    e.preventDefault();
    fetch(" http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(plantsData),
    })
      .then((r) => r.json())
      .then((data) => onNewPlant(data));
    setPlantsData({
      name: "",
      image: "",
      price: 0,
    });
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={plantsData.name}
          onChange={handleChane}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={plantsData.image}
          onChange={handleChane}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={plantsData.price}
          onChange={handleChane}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
