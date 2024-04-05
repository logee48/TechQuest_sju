const Repo = require("../Models/Repo")

module.exports.Repo_test = async (req, res, next) => {
    const {Name,Description,Category,Author,Path,createdAt} = req.body;
    const wat = await Repo.create({Name,Description,Category,Author,Path,createdAt});
      res
        .status(201)
        .json({ message: "works,noice brooo", success: true, wat });
      next();  
    };