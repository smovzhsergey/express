import { Router } from 'express';

import { postLogin, postLogout } from './handlers';
import { authorization } from '../../utils';

const router = Router();

router.post('/login', postLogin);
router.post('/logout', [authorization], postLogout);

export { router as auth };