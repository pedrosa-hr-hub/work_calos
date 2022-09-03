import express from "express";
import { router } from "./router";
import bodyParser from "body-parser";

const bp = bodyParser;

export class App{
  public server: express.Application;

  constructor(){
    this.server = express();
    this.middleware();
    this.router();
    this.bodyparser();
  }

  private middleware(){
    this.server.use(express.json());
  }

  private router(){
    this.server.use(router);
  }
  private bodyparser(){
    this.server.use(bp.urlencoded({extended: true}))
    this.server.use(bodyParser.json())
  }
};