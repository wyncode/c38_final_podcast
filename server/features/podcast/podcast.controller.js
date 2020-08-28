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
    const { ids } = req.body
    const { err, podcast } = await service.getAllPodCast( { genre: ids.map( id => ObjectId( id ) ) } )
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

exports.login = async ( req, res ) => {
    const { email, password } = req.body;
    const query = {
        $and: [
            {
                email: email
            },
            {
                password: password
            }
        ]
    };
    const { err, user } = await service.isUserPortalExists( query )
    console.log(err,user)
    if ( user && Array.isArray(user) && user.length) {
        return res.status( 200 ).json( {
            success: true,
            user: user,
        } );

    }
    return res.json( {
        success: false,
        message: " Incorrect crendentials"
    } );
};

exports.addPodCastToCategory = async ( req, res ) => {
    const { categoryId } = req.body
    let data = {
        genre: ObjectId( categoryId ),
        author: faker.name.findName(),
        title: faker.lorem.slug(),
        coverImage: faker.image.imageUrl(),
        numOfEpisodes: faker.random.number(),
        length: faker.random.number(),
        likes: faker.random.number(),
        description: faker.lorem.paragraph(),
    }

    const { err, newPodCast } = await service.addPodCastToCategory( data )
    if ( newPodCast ) {
        return res.json( {
            success: true,
            podcast: newPodCast,
        } )
    }
    return res.json( {
        success: false,
        message: "Some Thing went wrong"
    } )

}

