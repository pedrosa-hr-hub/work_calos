import { App } from "./app";
import { database } from "./model/database";

//dotenv
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;
if(!PORT){
 throw console.log('it has no port on the server');
}

new App().server.listen(PORT, async ()=>{
     //await database.sync();
     console.log("IS RUNING")
});