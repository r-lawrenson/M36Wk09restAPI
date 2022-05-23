const Journal = require('./journalModel')


exports.addEntry = async (req, res) => {
	try {
		const newEntry = await Journal.create(req.body)
		res.status(200).send({ title: newEntry.entry })
	} catch (error) {
		console.log(error)
		res.status(500).send({ error: error.message })
	}
}

exports.listEntrys = async (req, res) => {
	try {
		const entrys = await Journal.find({})
		res.status(200).send({ entrys })
	} catch (error) {
		console.log(error)
		res.status(500).send({ error: error.message })
	}
}

exports.updateEntry = async (req, res) => {
	try {
	const newEntry = await Journal.updateOne(
		{ title: req.body.title }, 
		{$set: 
			{
			title: req.body.title,
			entry: req.body.entry
		}})
			res.status(200).send({ newEntry })
    } catch (error) {
		console.log(error)
		res.status(500).send({ error: error.message })
	}

}

exports.deleteEntry = async (req, res) => {
	try {
		const remove = await Journal.remove(
			{title: req.body.title})
			res.status(200).send({ remove })
	} catch (error) {
		console.log(error)
		res.status(500).send({ error: error.message })
	}
}

// need to add a search ---> 