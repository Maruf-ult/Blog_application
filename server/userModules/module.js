import bgModel from "../userModel/userSchema.js";

export const createBlog = async (req, res) => {
  try {
    const { title, about } = req.body;
    const image = req.file ? req.file.path : null;
    if (!title || !about || !image) {
      return res
        .status(401)
        .json({ success: false, msg: "all fields should be filled" });
    }
    const newBlog = new bgModel({ title, about, image });
    await newBlog.save();
    return res
      .status(201)
      .json({ success: true, msg: "blog created successfully" });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ success: false, msg: `an enternal error occured ${error}` });
  }
};

export const getBlog = async (req, res) => {
  try {
    const Blogs = await bgModel.find();
    if (!Blogs) {
      return res
        .status(401)
        .json({ success: false, msg: "Blog doesnot exist" });
    }
    return res
      .status(201)
      .json({ success: true, msg: "All blogs are here", Blogs });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ success: false, msg: `an enternal error occured ${error}` });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const ID = req.params.id;
    const update = await bgModel.findByIdAndUpdate(ID, req.body, { new: true });
    if (!update) {
      return res.status(401).json({ success: false, msg: "cant find user" });
    }
    return res
      .status(201)
      .json({ success: true, msg: "Blog updated successfully" });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ success: false, msg: `an enternal error occured ${error}` });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const ID = req.params.id;
    const Delete = await bgModel.findByIdAndDelete(ID);
    if (!Delete) {
      return res.status(401).json({ success: false, msg: "cant find blog" });
    }
    return res
      .status(201)
      .json({ success: true, msg: "Blog deleted successsfully" });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, msg: `an enternal error occured ${error}` });
  }
};
