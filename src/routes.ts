import { Router } from 'express';

import UserController from '~/app/controllers/UserController';

const routes = Router();

routes.get('/', async (req, res) => {
  return res.json({ message: 'Hey, all working perfectly!' });
});

routes.get('/users', UserController.index);

export default routes;
