    // users.js
    import express from 'express';
    import { updateUser, getUser, getUsers, deleteUser } from '../controllers/user.js';
    import { verifyAdmin, verifyToken, verifyUser } from '../utiles/verifyToken.js';

    const router = express.Router();
    // router.get("/checkauthentication",verifyToken,(req,res,next)=>{
    // res.send("hello user,you are authenticated")
    // })
    // router.get("/checkuser/:id",verifyUser , (req,res,next)=>{
    //     res.send("hello user, you are logged in and you can delete your account")
    // })
    // router.get("/checkadmin/:id",verifyAdmin , (req,res,next)=>{
    //     res.send("hello admin, you are logged in and you can delete all  accounts")
    // })
    router.put("/:id",verifyUser, updateUser);
    router.get("/:id",verifyUser, getUser);
    router.get("/",verifyAdmin, getUsers);
    router.delete("/:id",verifyUser, deleteUser);

    export default router 
