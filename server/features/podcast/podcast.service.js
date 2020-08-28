const Genre = require("../../db/models/genre.model");
const to = require("await-to-js").default;
const Podcast = require( "../../db/models/podcast");
const User = require("../../db/models/user.model");


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


exports.isUserPortalExists = async ( query ) => {
    const [err, user] = await to( User.find( query ) );
    return { err, user };
}

exports.addPodCastToCategory =async (body)=>{
    const newPodcast = new Podcast( body )
    const [err, newPodCast] = await to( newPodcast.save() )
    return { err, newPodCast }
}