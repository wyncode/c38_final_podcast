import Genre from "../../db/models/genre.model";
import to from "await-to-js";
import Podcast from "../../db/models/podcast";


exports.getAllCategories = async ( query ) => {
    const [err, categories] = await to( Genre.find( query ) )
    return { err, categories }
}

exports.addCategories = async ( body ) => {
    const newCategory = new Genre( body )
    const [err, category] = await to( newCategory.save() )
    return { err, category }
}


exports.getAllPodCast = async ( query ) => {
    const [err, podcast] = await to( Podcast.find( query ) )
    return { err, podcast }
}