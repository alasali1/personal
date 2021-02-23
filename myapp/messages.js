const express = require("express");
const messagesRouter = express.Router();
const port = 3000;

//This represents an active chat between two users
const chats = [
    {id: "1", user1: "Bill", user2: "Bob"}
]
//This represents the messages within the chat
const messages = [
    {from: "Bill", to:"Bob", message:"Hello"}
]

messagesRouter.route('/v1/messages') 
  .post((req, res, next) => {
   res.send(200);
}) 
.get((req, res) => {
    res.status(200);})

messagesRouter.route('/:id')
.get((req, res)=>{
    const matchingMessages = messages.filter((m) => {
        return req.params['id'] ===m.id;
    })})
   
 .put((req, res) => {
     res.sendStatus(404);
 })
 .delete((req,res) => {
     res.sendStatus(505);
 });

 app.listen(port, () => {
     console.log('Example app listening at http://localhost:$(port)');
 });
    
    module.exports = messagesRouter;