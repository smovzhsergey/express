import express from 'express';

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

export const router = express.Router();

router.get('/', get);
router.post('/', post);

router.get('/:lessonHash', getByHash);
router.put('/:lessonHash', updateByHash);
router.delete('/:lessonHash', deleteByHash);

router.post('/:lessonHash/videos', getVideos);
router.get('/:lessonHash/videos/:videoHash', getVideoByHash);
router.delete('/:lessonHash/videos/:videoHash', deleteVideoByHash);

router.post('/:lessonHash/keynotes', getKeynotes);
router.get('/:lessonHash/keynotes/:keynoteHash', getKeynoteByHash);
router.delete('/:lessonHash/keynotes/:keynoteHash', deleteKeynoteByHash);

export { router as lessons };
