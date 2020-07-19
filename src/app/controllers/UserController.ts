import { Request, Response } from 'express';

const users = [{ name: 'Destroyeer' }, { name: 'Test' }];

class UserController {
  async index(req: Request, res: Response) {
    return res.json(users);
  }
}

export default new UserController();
