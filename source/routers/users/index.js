import { Router } from 'express';

import { authorization, limiter, validator } from '../../utils';
import { createUser } from '../../schemas';

import { get, post } from './handlers';
import { getByHash, updateByHash, deleteByHash } from './hash';

export const router = Router();

router.get('/', [authorization, limiter(2, 1000 * 60)], get);
router.post('/', [validator(createUser)], post);

router.get('/:userHash', [authorization], getByHash);
router.put('/:userHash', [authorization], updateByHash);
router.delete('/:userHash', [authorization], deleteByHash);

export { router as users };
