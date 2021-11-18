// Scheme to products
import { Schema, model, models } from "mongoose";

const productsSchema = new Schema({
 name: {
  type: String,
  required: true,
  unique: true,
  trim: true,
 },
 price: {
  type: Number,
  required: true,
 },
 parcelamento: {
  type: Array,
  required: true,
 },
 color: {
  type: String,
  required: true,
 },
 image: {
  type: String,
  required: true,
 },
 size: {
  type: Array,
  required: true,
 },
 date: {
  type: String,
  required: true,
 },
});

export default models.products || model("products", productsSchema);
