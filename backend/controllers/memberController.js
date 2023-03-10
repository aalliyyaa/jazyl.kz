const memberModel = require ('../models/member')

 const addMember = async (req, res)=>{
    try{
        const newMember = new memberModel({
            name: req.body.name        })

        const saveMember = await newMember.save()
        res.status(200).json(saveMember)
    }
    catch(err){res.json(err)}
}

 const getAllMembers =  async (req, res)=>{
    try{
        const allMembers = await memberModel.find({})
        res.status(200).json(allMembers)
    }
    catch(err){res.json(err)}
}

 const onClass =  async (req, res)=>{
    try{
        const findMember = await memberModel.findById(req.params.id)
        const updateMember = await memberModel.findByIdAndUpdate({_id: req.params.id},
            { isOnClass: !findMember.isOnClass }) 
        updateMember.save()
              
        res.status(200).json(updateMember)
    }
    catch(err){res.json(err)}
}

 const removeClass =  async (req, res)=>{
    try{
        const findMember = await memberModel.findById(req.params.id)
        const updateMember = await memberModel.findByIdAndUpdate({_id: req.params.id},
            { isOnClass: !findMember.isOnClass }) 
        updateMember.save()
              
        res.status(200).json(updateMember)
    }
    catch(err){res.json(err)}
}


 const deleteMember = async (req, res)=>{
    try{
        const deleteMember = await memberModel.findByIdAndDelete(req.params.id)
        res.status(200).json('Item deleted')
    }
    catch(err){res.json(err)}
}

const getClasslist =  async (req, res)=>{
    try{
        const allMembers = await memberModel.find({isOnClass:true})
        res.status(200).json(allMembers)
    }
    catch(err){res.json(err)}
}

module.exports = {addMember, getAllMembers, onClass, removeClass, deleteMember, getClasslist}

