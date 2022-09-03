import { Request, Response } from "express";

class VotoController{

  public home(req:Request, res:Response) {
    return res.json({
      response: 'Hello World, im test'
    });
  };
};

export const votoController = new VotoController();