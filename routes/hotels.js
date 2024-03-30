import express from 'express';
const router  =  express.Router();
import { createHotel, updateHotel, deleteHotel, getHotel, getHotels, countByCity, countByType } from "../controllers/hotel.js";
import { verifyAdmin } from './../utiles/verifyToken.js';

// create
router.post('/',verifyAdmin,createHotel)
// update
router.put('/:id',verifyAdmin,updateHotel)
//   delete
router.delete('/:id',verifyAdmin,deleteHotel)
//   get the hotel
router.get('/find/:id',getHotel)
//   get all the hotels 
router.get('/',getHotels)
router.get("/countByCity",countByCity)
router.get("/countByType",countByType)
export default router