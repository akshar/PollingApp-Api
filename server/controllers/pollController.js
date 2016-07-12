import db from 'sequelize-connect'
const pollController ={}


pollController.handlePost =  function (req,res,next) {

    db.sequelize.transaction(async transaction => {
       const createdPoll = await db.models.poll.create({
            question: req.body.question
        },{
            transaction
        })

        const pollOptions = req.body.options.map(option => {
            return {
                text:option,
                pollId: createdPoll.dataValues.id
            }
        })

        await db.models.pollOption.bulkCreate(pollOptions,{
            transaction
        })
        res.status(201).json({createdPollId:createdPoll.dataValues.id})
    }).catch(next)

}

pollController.handleGet = async function (req,res,next) {
    try {
   const foundPoll = await db.models.poll.findOne({
            where:{
                id : req.params.pollId,

            },
            attributes:['question'],
            include:{
                model: db.models.pollOption,
                attributes: [ ['id','optionId'],'text']

            }
        })

   res.status(200).json(foundPoll)
    }catch(err){
        next(err)
    }
}

export default pollController