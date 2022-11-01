import express from "express";
import { router } from "./router";
import bodyParser from "body-parser";
import * as cors from 'cors';

const bp = bodyParser;

const options: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: ['http://localhost:8100/','http://localhost:8080/'],
  preflightContinue: false,
};


export class App{

  public server: express.Application;

  constructor(){
    this.server = express();
    this.middleware();
    this.router();
    this.bodyparser();
    this.cors();
    }

  private middleware(){
    this.server.use(express.json());
  }

  private router(){
    this.server.use(router);
  }
  private bodyparser(){
    this.server.use(bp.urlencoded({extended: true}));
    this.server.use(bodyParser.json());
  }
  private cors(){
    this.server.use(cors.default(options));
    this.server.options('*', cors.default(options));
  }
};