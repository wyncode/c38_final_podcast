const service = require("./podcast.service") ;
const { ObjectId } = require( 'mongodb' );

exports.getAllCategories = async ( req, res ) => {
    const { err, categories } = await service.getAllCategories( {} )
    if ( categories ) {
        return res.status( 200 ).json( {
            success: true,
            categories
        } )
    }
    return res.status( 400 ).json( {
        success: false,
        message: "Some Thing went wrong"
    } )
}

exports.getThreeCategories = async ( req, res ) => {
    // const categories = req.body
    const threeCategories = ['News', 'Arts', 'Sports']
    const { err, categories } = await service.getThreeCategories( 
        {
            $or: [{ name: threeCategories[0] }, { name: threeCategories[1] }, { name: threeCategories[2] }]
        } )
    if ( categories ) {
        return res.status( 200 ).json( {
            success: true,
            categories
        } )
    }
    return res.status( 400 ).json( {
        success: false,
        message: "Some Thing went wrong"
    } )
}

exports.AddCategories = async ( req, res ) => {
    const { err, category } = await service.addCategories( req.body )
    if ( category ) {
        return res.status( 200 ).json( {
            success: true,
            category
        } )
    }
    return res.status( 400 ).json( {
        success: false,
        message: "Some Thing went wrong"
    } )
}


exports.getAllPodCast = async ( req, res ) => {
    const { err, podcast } = await service.getAllPodCast( {} )
    if ( podcast ) {
        return res.status( 200 ).json( {
            success: true,
            podcast
        } )
    }
    return res.status( 400 ).json( {
        success: false,
        message: "Some Thing went wrong"
    } )
}



exports.getAllPodCastOfSingleCategory = async ( req, res ) => {
    const { id } = req.query
    const { err, podcast } = await service.getAllPodCast( { genre: ObjectId( id ) } )
    if ( podcast ) {
        return res.status( 200 ).json( {
            success: true,
            podcast
        } )
    }
    return res.status( 400 ).json( {
        success: false,
        message: "Some Thing went wrong"
    } )
}
