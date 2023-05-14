const mongoose=require('mongoose')
//const mongoURI = 'mongodb+srv://kishangaur448:123@cluster0.jkvtuhv.mongodb.net/gofoodmern?retryWrites=true&w=majority'
//const mongoURI = "mongodb://kishangaur448:123@ac-iudq7gg-shard-00-00.jkvtuhv.mongodb.net:27017,ac-iudq7gg-shard-00-01.jkvtuhv.mongodb.net:27017,ac-iudq7gg-shard-00-02.jkvtuhv.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-g5nmkw-shard-0&authSource=admin&retryWrites=true&w=majority"
const mongoDB=async()=>{
  await mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true},async(err,result)=>{
    if(err) console.log("---",err)
    else{
        console.log("connected Successfully")
        const fetched_data = await mongoose.connection.db.collection("food_item")
        fetched_data.find({}).toArray(async function(err,data){
          const foodCategory = await mongoose.connection.db.collection("foodCategory");
          foodCategory.find({}).toArray(function (err,catData){
            if(err) console.log(err)
            else{
              global.food_items = data
              global.foodCategory = catData
            }
          })
          // if(err) console.log(err)
          // else {
          //   global.food_items = data;
            //console.log(global.food_items)
          //}
        })
    }
        
    })
}
module.exports = mongoDB;