import express from 'express';

import { get, post } from './handlers';
import { enroll, expel, getByHash, deleteByHash, updateByHash } from './hash';

export const router = express.Router();

router.get('/', get);
router.post('/', post);

router.get('/:classHash', getByHash);
router.put('/:classHash', updateByHash);
router.delete('/:classHash', deleteByHash);

router.post('/:classHash/enroll', enroll);
router.post('/:classHash/expel', expel);

export { router as classes };
