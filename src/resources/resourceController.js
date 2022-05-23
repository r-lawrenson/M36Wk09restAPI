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
        const resource = await Resource.find({})
        res.status(200).send({resource})
} catch (error) {
    console.log(error)
    res.status(500).send({
        error:error.message
    })
}
}