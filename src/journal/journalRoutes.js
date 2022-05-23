const { Router } = require('express') ;

const { addEntry, listEntrys, updateEntry, deleteEntry } = require('./journalController')

const journalRouter = Router()

journalRouter.post('/journal', addEntry)
journalRouter.get('/journal', listEntrys)
journalRouter.patch('/journal', updateEntry)
journalRouter.delete('/journal', deleteEntry)


module.exports = journalRouter