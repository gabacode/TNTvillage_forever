import mongoose from "mongoose";

const recordSchema = new mongoose.Schema({
  DATA: String,
  HASH: String,
  TOPIC: Number,
  POST: Number,
  AUTORE: String,
  TITOLO: String,
  DESCRIZIONE: String,
  DIMENSIONE: String,
  CATEGORIA: Number,
});

const Record = mongoose.model("Record", recordSchema, "torrents");

export default Record;

