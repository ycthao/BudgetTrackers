const request = window.indexedDB.open("Budget", 1);

request.onupgradeneeded = (event) => {
  const db = event.target.result;

  const budgetStore = db.createObjectStore("Budget", { keyPath: "budgetID" });

  budgetStore.createIndex("statusIndex", "status");
};

request.onsuccess = () => {
  const db = request.result;
  const transcation = db.transcation(["Budget"], "readwrite");
  const budgetStore = transcation.objectStore("Budget");
  const statusIndex = budgetStore.index("statusIndex");

  const getRequest = budgetStore.get("1");
  getRequest.onsuccess = () => {
    console.log(getRequest.result);
  };
};
