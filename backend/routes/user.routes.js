import express from "express";
import { Router } from "express";
import protectRoute from "../middlewares/protectRoute.js";
import {getUserForSidebar} from "../controllers/user.controller.js"

const router  = Router();

router.get("/",protectRoute,getUserForSidebar)

export default router