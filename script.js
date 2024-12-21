const events = [
  { name: "Web Development Workshop", date: "2024-01-15" },
  { name: "Tech Conference 2024", date: "2024-02-10" },
  { name: "Startup Meetup", date: "2024-03-05" },
];

function displayEvents() {
  const eventList = document.getElementById("event-list");
  eventList.innerHTML = "";
  events.forEach((event, index) => {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.innerHTML = `<h5>${event.name}</h5><p>Date: ${event.date}</p>`;
    eventList.appendChild(listItem);
  });
}

function addEvent() {
  const name = prompt("Enter event name:");
  const date = prompt("Enter event date (YYYY-MM-DD):");
  if (name && date) {
    events.push({ name, date });
    displayEvents();
  }
}

document.addEventListener("DOMContentLoaded", displayEvents);
