const posts=require("../data/data.js");

//Read/Fetch all posts

const alldata=(req,res)=>{
    try{res.status(200).json({
        success:true,
        body:posts,
        message:"post fetched successfully"
    })
    }catch(err){
        res.status(500).json({
            success:false,
            message:"Something went wrong",
            error:err.message,
        })
    }
};


//Fetch single post

const getsingledata=(req,res)=>{
    try{
        let postId=req.params.id;
        let post=posts.find((ele)=>ele.id===postId);
        if(!post){
            return res.status(404).json({
                success:false,
                message:"Post not found"
            });
        }
        res.status(200).json({
            success:true,
            body:post,
            message:"Post fetched successfully"
        });
    }catch(err){
        res.status(500).json({
            success:false,
            message:"Something went wrong",
            error:err.message
        });
    }
};


//Create post

const createblog=(req,res)=>{
    try{
        let{id,title,author,description,category,image}=req.body;
        if(!title || !author || !description || !category || !image){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            });
        }
            let newPost={
                ...req.body,
                id:String(Date.now())
            }
            posts.push(newPost);
            res.status(201).json({
                success:true,
                body:newPost,
                message:"Post created successfully" 
            })
        }
        catch(err){
            res.status(500).json({
                success:false,
                message:"Something went wrong",
                error:err.message
            })
        }
};

//Delete post

const deleteblog=(req,res)=>{
    try{
        let removeId=req.params.id;
        let index=posts.findIndex((ele)=> ele.id===removeId);
        if(index===-1){
            return res.status(404).json({
                success:false,
                message:"Post not found"
            });
        }
        let postArr=posts.splice(index,1);
        res.status(200).json({
            success:true,
            body:postArr[0],
            message:"Post deleted successfully",
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:"Something went wrong",
            error:err.message
        });
    }
};

//update post

const updateblog=(req, res) => {
    try {
        let updateId = req.params.id;
        let index = posts.findIndex(ele => ele.id === updateId);

        if (index === -1) {
            return res.status(404).json({
                success: false,
                message: "Post not found"
            })
        }

        let obj = posts.find(ele => ele.id === updateId);

        let updatedObj = {
            ...obj,
            ...req.body,
            id: obj.id
        }

        posts[index] = updatedObj;

        res.status(200).json({
            success: true,
            body: updatedObj,
            message: "Post Updated Successfully"
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Network error",
            error: err.message
        })
    }
};

module.exports={alldata, 
    getsingledata, 
    createblog, 
    deleteblog, 
    updateblog};