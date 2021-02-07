const model = require('../model/schema');


const posts = {
    async listAll(req,res){
        try{
            const listAll = await model.find({});
            return res.status(200).json(listAll);
        }
        catch(err)
        { return res.status(400).json(err)}
    },

    async create(req, res){
        try{
            const createPost = await model.create(req.body);
            return res.status(201).json(createPost);
        }
         catch(err){
            return res.status(400).json(err);
        }
    },
    
    async listById(req,res){
        try{
            const listById = await model.findById(req.params);
            return res.status(200).json(listById);
        }
        catch(err){
            return res.status(200).json(err);
        }
    },
    async updateById(req,res){
            const bodyData = req.body;
            const {id} = req.params;  

            try{  
                const update= await model.findByIdAndUpdate(id,bodyData,{new:true})  
                return res.status(200).json(update);
        }
        catch(err){
            return res.status(400).json(err)
        }
    }
    }

module.exports = posts;
