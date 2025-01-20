const express = require("express");
const fs = require("fs");
const path = require("path");
const Note = require("./models/note");
const app = express();
require("./db/mongoose");

app.use(express.json());

// READ 
app.get("/notes", async (req, res) => {
  try {
    const notes = await Note.find({});
    res.send(notes);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// CREATE 
app.post("/notes", (req, res) => {
  const note = new Note(req.body);
  note
    .save()
    .then(() => {
      res.status(201).send(note);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});


// UPDATE  
app.patch("/notes/:id", async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!note) {
      return res.status(404).send("Note not found");
    }
    res.status(200).send(note);
  } catch (error) {
    res.status(400).send(error);
  }
});


// DELETE  
app.delete("/notes/:id", async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
     // 检查文档是否存在
    if (!note) {
      return res.status(404).send("Note not found");
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).send(error);
  }
});
