   fetch("/api/stores")
  .then((response) => response.json())
  .then((data) => {
    const storesList = document.getElementById("stores-list");

    data.forEach((store) => {
      const listItem = document.createElement("li");

      if (store.url) {
        const link = document.createElement("a");

        if (store.url.startsWith("http")) {
          link.href = store.url;
        } else {
          link.href = `https://${store.url}`;
        }

        link.textContent = store.name;
        link.target = "_blank";
        listItem.appendChild(link);
      } else {
        listItem.textContent = store.name;
      }

      storesList.appendChild(listItem);
    });
  })
  .catch((error) => console.error("Error loading stores:", error));

