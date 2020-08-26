const express = require('express')
const router = express()
import {  
    getAllCategories,
    AddCategories,
    getAllPodCast,
    getAllPodCastOfSingleCategory
} from "./podcast.controller";
router.route("/getAllCategories").get(getAllCategories)

router.route("/addCategory").post(AddCategories)

router.route("/getAllPodCast").get(getAllPodCast)

router.route("/getAllPodCastOfSingleCategory").get(getAllPodCastOfSingleCategory)
module.exports = router;