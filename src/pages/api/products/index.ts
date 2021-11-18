import products from "@/models/products";
import dbConnect from "@/utils/mongoose";
// api to get all products
import type { NextApiRequest, NextApiResponse } from "next";

dbConnect();

type Product = {
 _id: string;
 name: string;
 price: number;
 parcelamento: string[];
 color: string;
 image: string;
 size: string[];
 date: string;
};

export default async function handler(
 req: NextApiRequest,
 res: NextApiResponse
) {
 // api to get all products
 const { method, body } = req;

 switch (method) {
  case "GET":
   try {
    const tasks: Array<Product> = await products.find();

    return res.status(200).json(tasks);
   } catch (error: any) {
    return res.status(500).json({ error: error.message });
   }
 }
}
