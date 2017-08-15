import express from 'express';
import epl from './epl';

const router = express.Router();

const clubs = epl.clubs.reduce((obj, club)=> {
  obj[club.key] = club
  return obj;
}, {})

router.get('/clubs', (req, res) => {
  res.send({clubs})
})

export default router;
