
fetch("/api/stores")
  .then((response) => response.json()) 
  .then((data) => {
    
    const storesList = document.getElementById("stores-list");

    
    data.forEach((store) => {
      const listItem = document.createElement("li");
      listItem.textContent = store.name; 
      storesList.appendChild(listItem);
    });
  })
  .catch((error) => {
    console.error("Error loading stores:", error);
  });
