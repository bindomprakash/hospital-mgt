import { userRegistration } from "../controllers/user.controller.js";
import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js";
const router = Router();

router.route('/register').post(
    upload.fields([
        { name: "avtar", maxCount: 1 },
        { name: "coverimage", maxCount: 1 }
    ]),
    userRegistration
);

export default router;