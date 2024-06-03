import { Router } from "express";

import * as userController from './users.controller.js'

let router = Router()
// =================== get all users ===========================

router.get("/" , userController.getAllUsers)

// =================== sign Up ===========================
router.post("/signUp" , userController.signUp)


// =================== update user ===========================
router.put("/updateUser" , userController.updateUser)


// =================== delete user ===========================
router.delete("/deleteUser" , userController.deleteUser)


// =================== search user ===========================
router.get("/searchWithLetter" , userController.searchWithLetter)


// =================== search user ===========================
router.get("/searchInRange" , userController.searchInRange)


// =================== search 3 oldest users ===========================
router.get("/searchOldestUsers" , userController.searchFor3oldestUsers)

export default router 