// // routes/vaccineRoutes.js
// import express from 'express';
// import { bookVaccine } from '../controllers/bookVaccine.js';
// const mailRouter = express.Router();
// mailRouter.post('/book-vaccine', bookVaccine);
// export default mailRouter;

// routes/vaccineRoutes.js
import express from 'express';
import { bookVaccine } from '../controllers/bookVaccine.js';

const router = express.Router();

/**
 * @route   POST /api/v1/book-vaccine
 * @desc    Book a vaccine slot for a child
 * @access  Public or Authenticated (depending on your auth middleware)
 */
router.post('/book-vaccine', bookVaccine);

export default router;
