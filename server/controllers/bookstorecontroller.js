const Books=require('../model/bookstoremodle')

exports.getallbooks= async (req,res)=>{
    const books=await Books.find();
    
    if(!books){
        return res.status(200).json({Message:"No book found"})
    }

    res.status(200).json({Books:books});
}

exports.addbook=async(req,res)=>{
    console.log(req.body)
    const book=await Books.create(req.body);
    
    res.status(201).json({
        success:true,
        book
    })
}

exports.updatebooksdetails=async(req,res)=>{
    let books=await Books.findById(req.params.id)
    
    if(!books){
        return res.status(500).json({Message:"No book found"})
    }

    books=await Books.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true,useFindAndModify:true});

    res.status(200).json({
        success:true,
        books})
}
exports.deletebook=async(req,res)=>{
    let books=await Books.findById(req.params.id)
    
    if(!books){
        return res.status(500).json({Message:"No book found"})
    }

    await books.deleteOne();

    res.status(200).json({
        success:true,
        message:"message delete successfully"
    })
}
exports.getbook=async(req,res)=>{
    
    const books=await Books.findById(req.params.id)

    if(!books){
        return res.status(500).json({Message:"No book found"})
    }

    res.status(200).json(
        {Books:books}
    )
}