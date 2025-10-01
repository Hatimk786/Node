const Song = require("./Song");
const { createValidator, updateValidator, validate } = require("./songValidator");

// Add new song
exports.store = (req, res) => {
  const validation = validate(createValidator, req.body);

  if (!validation.success) {
    return res.status(400).send({
      message: "Validation failed",
      errors: validation.errors,
    });
  }

  const newSong = new Song(validation.value);

  newSong.save()
    .then((savedSong) => {
      console.log("🎶 New song added:", savedSong.title);
      res.status(201).send({ message: "Song stored successfully", data: savedSong });
    })
    .catch((error) => {
      console.error("❌ Error adding new song:", error);
      res.status(500).send({ message: "Error storing song", error: error.message });
    });
};

// Update song
exports.update = (req, res) => {
  const validation = validate(updateValidator, req.body);

  if (!validation.success) {
    return res.status(400).send({
      message: "Validation failed",
      errors: validation.errors,
    });
  }

  Song.findByIdAndUpdate(req.params.id, validation.value, { new: true })
    .then((updatedSong) => {
      if (!updatedSong) return res.status(404).send({ message: "Song not found" });
      console.log("✅ Song updated:", updatedSong.title);
      res.status(200).send({ message: "Song updated successfully", data: updatedSong });
    })
    .catch((error) => {
      console.error("❌ Error updating song:", error);
      res.status(500).send({ message: "Error updating song", error: error.message });
    });
};
// Delete song
exports.delete = (req, res) => {
  Song.findByIdAndDelete(req.params.id)
    .then((deletedSong) => {
      if (!deletedSong) return res.status(404).send({ message: "Song not found" });
      console.log("🗑️ Song deleted:", deletedSong.title);
      res.status(200).send({ message: "Song deleted successfully", data: deletedSong });
    })
    .catch((error) => {
      console.error("❌ Error deleting song:", error);
      res.status(500).send({ message: "Error deleting song", error: error.message });
    });
};