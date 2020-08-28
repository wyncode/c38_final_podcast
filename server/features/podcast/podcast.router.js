const express = require('express')
const router = express.Router()
const {  
    getAllCategories,
    AddCategories,
    getAllPodCast,
    getAllPodCastOfSingleCategory,
    login
} = require("./podcast.controller") ;
// router.route("/getAllCategories").get(getAllCategories)
router.get("/getAllCategories", getAllCategories)


// router.route("/addCategory").post(AddCategories)
router.post("/addCategory", AddCategories)

// router.route("/getAllPodCast").get(getAllPodCast)
router.get("/getAllPodCast", getAllPodCast)

// router.route("/getAllPodCastOfSingleCategory").get(getAllPodCastOfSingleCategory)
router.route("/getAllPodCastOfSingleCategory").post(getAllPodCastOfSingleCategory)
// login api 
router.route( '/login' ).post( login )





module.exports = router;