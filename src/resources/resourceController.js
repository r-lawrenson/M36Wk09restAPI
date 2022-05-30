const Resource = require('./resourceModel')

exports.addResource = async (req, res) => {
    try {
        const newResource = await Resource.create(req.body)
        res.status(200).send({resource:newResource.username})
    } catch (error) {
        console.log(error)
        res.status(500).send({
            error:error.message
        })
    }
}

exports.listResource = async (req,res) => {
    try { 
        const resource = await Resource.find({keyword: req.body.keyword})
        res.status(200).send({resource})
} catch (error) {
    console.log(error)
    res.status(500).send({
        error:error.message
    })
}
}

exports.updateResource = async (req, res) => {
	try {
	const updateResource = await Resource.updateOne(
		{ username: req.body.username }, 
		{$set: 
			{
			username: req.body.username,
			website: req.body.website,
            helpline: req.body.helpline,
            keywords: req.body.keywords
		}})
			res.status(200).send({ updateResource })
    } catch (error) {
		console.log(error)
		res.status(500).send({ error: error.message })
	}

}

exports.updateResourceWeb = async (req, res) => {
	try {
	const updateResourceWeb = await Resource.updateOne(
		{ website: req.body.website }, 
		{$set: 
			{
			username: req.body.username,
			website: req.body.website,
            helpline: req.body.helpline,
            keywords: req.body.keywords
		}})
			res.status(200).send({ updateResourceWeb })
    } catch (error) {
		console.log(error)
		res.status(500).send({ error: error.message })
	}

}

exports.updateResourceHelp = async (req, res) => {
	try {
	const updateResourceHelp = await Resource.updateOne(
		{ helpline: req.body.helpline }, 
		{$set: 
			{
			username: req.body.username,
			website: req.body.website,
            helpline: req.body.helpline,
            keywords: req.body.keywords
		}})
			res.status(200).send({ updateResourceHelp })
    } catch (error) {
		console.log(error)
		res.status(500).send({ error: error.message })
	}

}

exports.updateResourceKeywords = async (req, res) => {
	try {
	const updateResourceKeywords = await Resource.updateOne(
		{ keywords: req.body.keywords }, 
		{$set: 
			{
			username: req.body.username,
			website: req.body.website,
            helpline: req.body.helpline,
            keywords: req.body.keywords
		}})
			res.status(200).send({ updateResourceKeywords })
    } catch (error) {
		console.log(error)
		res.status(500).send({ error: error.message })
	}

}

exports.deleteResource = async (req, res) => {
	try {
		const remove = await Resource.remove(
			{username: req.body.username})
			res.status(200).send({ remove })
	} catch (error) {
		console.log(error)
		res.status(500).send({ error: error.message })
	}
}