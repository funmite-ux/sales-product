const express=require('express')
const {products} =require('./data')
const app=express()

app.use(express.json())

app.get('/api/products', (req,res)=>{
    const newProducts=products.map((product)=>{
        const {id,name,image,price,description,stock}=product
        return{id,name,image,price,description,stock}
    })
        res.json((newProducts))
})


app.post('/api/postman/products', (req,res)=>{
    const {description}=req.body
    const {stock}=req.body
    const {price}=req.body
    const {id}=req.body
    const {name}=req.body
    if(!name){
        return res.status(400).json({success:false, msg:"provide name value!"})
    }
    res.status(200).json({success:true,data:[...products, {
            id,
            name,
            price,
            stock,
            description
        }]})
})

app.put('/api/postman/products/:id', (req,res)=>{
    const{id}=req.params
    const{name}=req.body
    const product=products.find((product)=>product.id===Number(id))

    if (!product){
        return res.status(404).json({success:false,msg:`no product with the ${id}`})
    }
    const newProducts=products.map((product)=>{
        if(product.id===Number(id)){
            product.name=name
            product.id=id
        }
        return product                                                                           
    })
    res.status(200).json({success:true, data: newProducts})
})

app.delete('/api/products/:id', (req,res)=>{
    const product=products.find((product)=>product.id===Number(req.params.id))
    if (!product){
        return res.status(404).json({success:false,msg:`no product with the ${req.params.id}`})
    }
    const newProducts=products.filter((product)=>product.id!==Number(req.params.id))
    res.status(200).json({success:true, data: newProducts})
})







app.listen(3000,()=>{
    console.log(" listening to port 3000...")
})