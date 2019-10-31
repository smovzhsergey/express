import { Router } from 'express';

// utils
import { authorization } from '../../utils';

import { get, post } from './handlers';

import { 
  getByHash,
  deleteByHash,
  updateByHash,
  getVideos,
  getVideoByHash,
  deleteVideoByHash,
  getKeynotes,
  getKeynoteByHash,
  deleteKeynoteByHash
} from './hash';

export const router = Router();

router.get('/', get);
router.post('/', [authorization], post);

router.get('/:lessonHash', [authorization], getByHash);
router.put('/:lessonHash', [authorization], updateByHash);
router.delete('/:lessonHash', [authorization], deleteByHash);

router.post('/:lessonHash/videos', [authorization], getVideos);
router.get('/:lessonHash/videos/:videoHash', [authorization], getVideoByHash);
router.delete('/:lessonHash/videos/:videoHash', [authorization], deleteVideoByHash);

router.post('/:lessonHash/keynotes', [authorization], getKeynotes);
router.get('/:lessonHash/keynotes/:keynoteHash', [authorization], getKeynoteByHash);
router.delete('/:lessonHash/keynotes/:keynoteHash', [authorization], deleteKeynoteByHash);

export { router as lessons };
