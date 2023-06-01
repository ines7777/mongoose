const Person = require("../models/personModel");

//Create and Save a Record of a Model:
const person = new Person({
  name: "ines",
  age: 28,
  favoriteFoods: ["pizza", "makloub", "glace"],
});

const createAndSavePerson = async () => {
  try {
    await person.save();
  } catch (error) {
    console.log(error);
  }
};

//Create Many Records with model.create()
const arrayOfPeaople = [
  {
    name: "samir",
    age: 28,
    favoriteFoods: ["pizza", "makloub", "cafe"],
  },
  {
    name: "mohamed",
    age: 40,
    favoriteFoods: ["pizza", "shawarma", "glace"],
  },
  {
    name: "ayoub",
    age: 35,
    favoriteFoods: ["pizza", "baguette", "glace"],
  },
];



const createManyPeople = async () => {
    try {
      await Person.create(arrayOfPeaople);
    } catch (error) {
      console.log(error);
    }
  };


  //Use model.find() to Search Your Database
const serachByName=async(searchByName)=>{
    try {
        const data=await Person.find({name:`${searchByName}`})
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

//Use model.findOne() to Return a Single Matching Document from Your Database
const serachByFood=async(searchByFood)=>{
    try {
        const data=await Person.findOne({
            favoriteFoods:{$all:[`${searchByFood}`]}
        })
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

//Use model.findById() 
const searchById=async(searchById)=>{
    try {
        const data=await Person.findById(`${searchById}`)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

//Perform Classic Updates by Running Find, Edit, then Save
const updatePerson=async(personId)=>{
    try {
        const data=await Person.findById(`${personId}`)
        data.favoriteFoods.push("hamburger")
        data.save()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}


//Perform New Updates on a Document Using model.findOneAndUpdate()
const newUpdatePerson=async(personName)=>{
    try {
        const data=await Person.findOneAndUpdate({name:`${personName}`},{age:20},{new:true})
        
        
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}


//Delete One Document Using model.findByIdAndRemove
const deletePerson=async(personId)=>{
    try {
        await Person.findByIdAndRemove(`${personId}`)
        
        
        console.log("deleted")
    } catch (error) {
        console.log(error)
    }
}

//Delete Many Documents with model.remove()
const removeMany=async(personName)=>{
    try {
        await Person.deleteMany({name:`${personName}`})
        
        
        console.log("deleted people")
    } catch (error) {
        console.log(error)
    }
}

//Chain Search Query Helpers to Narrow Search Results
const chainSearch=async()=>{
    try {
        const data=await Person.find({favoriteFoods:{$all:["pizza"]}})
                  .sort({name: 1})
                  .limit(2)
                  .select({age:false})
                  .exec()

                  console.log(data)

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
  createAndSavePerson,
  createManyPeople,
  serachByName,
  serachByFood,
  searchById,
  updatePerson,
  newUpdatePerson,
  deletePerson,
  removeMany,
  chainSearch,
};
