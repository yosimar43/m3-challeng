//connect with mongoose
import { connect, connection } from "mongoose";

const conn = {
 isConnected: false,
};

const { MONGO_URI } = process.env;

export default async function dbConnect() {
 if (conn.isConnected) return;

 const db = await connect(`${MONGO_URI}`);
 conn.isConnected = !!db.connections[0].readyState;

 console.log(db.connection.db.databaseName);
}

connection.on("connected", () => {
 console.log("connected to mongo");
});

connection.on("error", (err) => {
 console.log("error====> ", err);
});
