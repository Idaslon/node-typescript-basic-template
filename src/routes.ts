import { Router } from 'express';

import UserController from '@controllers/UserController';

const routes = Router();

routes.get('/', async (req, res) => {
  return res.json({ message: 'Hey, all is working perfectly!' });
});

routes.get('/users', UserController.index);

export default routes;
