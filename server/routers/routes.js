import express from "express";
import upload from "../handleImage/moduleImg.js";
import { createBlog, deleteBlog, getBlog, updateBlog } from "../userModules/module.js";
import { validate, validateUser } from "../validate/validators.js";

const router = express.Router();



router.post("/api/create-blog",upload.single('image'), validate, validateUser, createBlog);
router.patch("/api/update-blog/:id",updateBlog);
router.get("/api/get-blog", getBlog);
router.delete("/api/delete-blog/:id",deleteBlog);


export default router;