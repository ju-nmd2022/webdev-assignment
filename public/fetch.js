fetch("/api/stores")
  .then((response) => response.json())
  .then((data) => {
    console.log("Stores:", data);
    // You can now display the data in the frontend
  })
  .catch((error) => console.error("Error loading stores:", error));
