import express from 'express';
const router  =  express.Router();
import { verifyAdmin } from './../utiles/verifyToken.js';
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from '../controllers/room.js';

// create
router.post('/:hotelid',verifyAdmin,createRoom)
// update
router.put('/:id',verifyAdmin,updateRoom)
//   delete
router.delete('/:id/:hotelid',verifyAdmin,deleteRoom)
//   get the hotel
router.get('/:id',getRoom)
//   get all the hotels 
router.get('/',getRooms)
export default router