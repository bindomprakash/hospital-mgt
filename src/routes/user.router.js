import { getUser, userRegistration } from "../controllers/user.controller.js";
import { upload } from '../middleware/multer.middleware.js'
import { Router } from "express";
const router = Router();

router.route('/register').post(
    upload.fields([
        { name: "avatar", maxCount: 5 },
        { name: "coverimage", maxCount: 5 }
    ]),
    userRegistration
);

router.route('/register').get(getUser);

export default router;