import express from 'express';

// utils
import { authorization, limiter } from '../../utils';

import { get, post } from './handlers';
import { enroll, expel, getByHash, deleteByHash, updateByHash } from './hash';

export const router = express.Router();

router.get('/', [limiter(2, 1000 * 60)], get);
router.post('/', [authorization], post);

router.get('/:classHash', [authorization, limiter(2, 1000 * 60)], getByHash);
router.put('/:classHash', [authorization], updateByHash);
router.delete('/:classHash', [authorization], deleteByHash);

router.post('/:classHash/enroll', [authorization], enroll);
router.post('/:classHash/expel', [authorization], expel);

export { router as classes };
