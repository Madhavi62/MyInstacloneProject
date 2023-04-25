const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
//connect to DataBase
const server = process.env.DATABASE_URL || "mongodb+srv://madhavisurigala123:madhavi123@cluster0.dqdj6tm.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(server, { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("connected to DB");
    }
);
// console.log(process.env.PORT);
app.listen( 7000, () => console.log("Server running ....."));