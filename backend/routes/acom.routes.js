import express from 'express';
import { publishAccommodation } from '../controllers/acomController.js';
import { editAccommodation } from '../controllers/acomController.js';
import { listPublishedAccommodations } from '../controllers/acomController.js';

const router = express.Router();

//@TODO double-check router routes
router.post('/host/accommodations', publishAccommodation);
router.put('/host/accommodations/:id', editAccommodation);
router.get('/host/accommodations', listPublishedAccommodations);

export default router;
