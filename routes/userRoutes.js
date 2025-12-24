import express from "express";
import {delleteUser, getUsers, insertUser, showUser, updateUser} from "../controllers/userController.js"

const router = express.Router();

router.get("/", getUsers);
router.post("/", insertUser);
router.get("/", showUser);
router.put("/", updateUser);
router.delete("/", delleteUser);

export default router;