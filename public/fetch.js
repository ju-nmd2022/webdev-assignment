// Fetch data from the API
fetch("/api/stores")
  .then((response) => response.json()) // Parse the response as JSON
  .then((data) => {
    // Get the list element where we'll add the stores
    const storesList = document.getElementById("stores-list");

    // Loop through the stores data and create list items
    data.forEach((store) => {
      const listItem = document.createElement("li");
      listItem.textContent = store.name; // Assuming the store data has a "name" property
      storesList.appendChild(listItem);
    });
  })
  .catch((error) => {
    console.error("Error loading stores:", error);
  });
