fetch("/items")
  .then((res) => res.json())
  .then((data) => {
    console.log("All Items", data);
  });

