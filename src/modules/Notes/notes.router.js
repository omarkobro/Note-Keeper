import { Router } from "express";

import * as noteController from './notes.controller.js'

let router = Router()

// =================== get all Notes ===========================

router.get("/getAllNotes" , noteController.getAllNotes)

// =================== add Note ===========================

router.post("/addNote" , noteController.addNote)
// =================== delete Note ===========================

router.delete("/deleteNote" , noteController.deleteNote)
// =================== Update Note ===========================

router.put("/updateNote" , noteController.updateNote)
// =================== get Notes with info ===========================

router.get("/noteInfo" , noteController.notesWithWriterInfo)

export default router 