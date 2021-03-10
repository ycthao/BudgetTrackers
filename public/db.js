const request = window.indexedDB.open("Budget", 1);

request.onupgradeneeded = (event) => {
  const db = event.target.result;

  const budgetStore = db.createObjectStore("Budget", { keyPath: "budgetID" });

  budgetStore.createIndex("statusIndex", "status");
};
