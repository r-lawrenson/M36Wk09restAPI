const { Router } = require('express') ;

const { addEntry, listEntrys, updateEntry, deleteEntry, searchJournal } = require('./journalController')

const journalRouter = Router()

journalRouter.post('/journal', addEntry)
journalRouter.get('/journal', listEntrys)
journalRouter.patch('/journal', updateEntry)
journalRouter.delete('/journal', deleteEntry)
journalRouter.get('/s', searchJournal)


module.exports = journalRouter