const memberRoute = require('express').Router()
const { addMember, getAllMembers, onClass, removeClass, deleteMember, getClasslist } = require('../controllers/memberController')

memberRoute.post ('/member', addMember)
memberRoute.get('/members', getAllMembers)
memberRoute.get('/members/:id', onClass)
memberRoute.get('/members/:id', removeClass)
memberRoute.get('/classlist', getClasslist)
memberRoute.delete('/members/:id', deleteMember)

module.exports = memberRoute