import "reflect-metadata";
import { createConnection } from "typeorm";
import { Book } from "./infrastructure/typeorm/models/Book";

createConnection().then(connection => {
    // here you can start to work with your entities

}).catch(err => console.log(err))