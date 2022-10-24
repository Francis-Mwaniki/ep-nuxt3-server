const router = require("express").Router();
const songs = require("../model/Songs");
router.post("/api/s1/addSongs", (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({ message: "can not be empty!" });
    return;
  }

  // Create a song
  const song = new songs({
    title: req.body.title,
    description: req.body.description,
  });

  // Save Tutorial in the database
  song
    .save(song)
    .then((data) => {
      res.send({ message: "song created!!" });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
});
router.get("/api/s1/Songs", (req, res) => {
  const title = req.query.title;
  var condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};

  songs
    .find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
});
router.put("/api/s1/updateSong/:id", (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  songs
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update song with id=${id}`,
        });
      } else res.send({ message: "song was updated!" });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating song with id=" + id,
      });
    });
});
router.delete("/api/s1/deleteSong/:id", (req, res) => {
  const id = req.params.id;

  songs
    .findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Tutorial with id=${id}`,
        });
      } else {
        res.send({
          message: "song was deleted!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete song with id=" + id,
      });
    });
});

module.exports = router;
