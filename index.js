const express = require("express");

const app = express();

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

app.get("/", (request, response) => {
  response.send("<h2>Hello World!</h2>");
});

// GET REQUEST
app.get("/api/notes/:id", (request, response) => {
  //User requests a specific note via its id
  const id = Number(request.params.id);
  const note = notes.find((note) => note.id === id); // Searching notes array to find object with matching id
  if (note) {
    response.json(note); // Sending back the found note to the client as a response
  } else {
    response.status(404).end();
  }
});

app.delete("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  notes = notes.filter((note) => note.id !== id);
  response.status(204).end();
});

app.post("/api/notes", (request, response) => {
  const note = request.body;
  console.log(note);
  response.json(note);
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
