const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: "daucdoeyi",
  api_key: "716791717663599",
  api_secret: "wNfd_SdfW9whKFeZW_dRf4Ai-Nw",
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: " Instaclone",
  },
});

module.exports = { cloudinary, storage };