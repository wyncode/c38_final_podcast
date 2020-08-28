const express = require('express')
const router = express.Router()
const {  
    getAllCategories,
    getThreeCategories,
    AddCategories,
    getAllPodCast,
    getAllPodCastOfSingleCategory
} = require("./podcast.controller") ;
// router.route("/getAllCategories").get(getAllCategories)
router.get("/getAllCategories", getAllCategories)

router.post("/getThreeCategories", getThreeCategories)

// router.route("/addCategory").post(AddCategories)
router.post("/addCategory", AddCategories)

// router.route("/getAllPodCast").get(getAllPodCast)
router.get("/getAllPodCast", getAllPodCast)

// router.route("/getAllPodCastOfSingleCategory").get(getAllPodCastOfSingleCategory)
router.get("/getAllPodCastOfSingleCategory", getAllPodCastOfSingleCategory)


module.exports = router;