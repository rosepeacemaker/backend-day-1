const express = require('express')
const app = express()  // server  instane created


//craete middleware taa k req.body me data ja saky

app.use(express.json())

const notes = []
//     {
//         title: "test title 1",
//         description: "test description 1"
//     }


app.get("/", (req,res)=>{
    res.send("welcome")
    
})

//post method use when we sreate new source
app.post("/notes", (req,res)=>{
    console.log(req.body);

    notes.push(req.body)
    
console.log(notes);

   res.send("notes created")
   
})

// DELETE method uses with  index like  /notes/:index
// req params.index
app.delete("/notes/:index", (req,res)=>{
    delete notes [req.params.index]

    console.log("notes Deleted");
    
})


// PATCh  /notes/:index //
// req.body = {description:- "sample modified descrtiption."}
//  with out column : req.param kaam nhi krta

app.patch("/notes/:index",(req,res)=>{

    notes[req.params.index].descriptiom = req.body.description
    res.send("Note updated successfully")

})


app.listen(3000,()=>{
    console.log("Server runnig on port 3000");
    
})
