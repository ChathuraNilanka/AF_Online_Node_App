const exp = require('express');
const body_parser = require('body-parser');

const route = require('./routes');

const app = exp();

app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());

app.use('/', route);

app.listen(3000, function() {
    console.log("Server listen on port: 3000");
})

// app.post('/add', (req, res)=>{
//     const user = new usrObj(req.body.fName, req.body.lName, new Date(req.body.bDay),Date.now());
//     userArr.push(user);
//     res.status(200).send({message:"User added successfully", User: user});
// });

// app.get('/get', (req, res)=>{
//     console.log(userArr);
//     try{
//         res.status(200).send({message :"user data", data: userArr});
//     }catch (e){
//         res.status(500).send({message:e});
//     }
// });

// app.get('/getById/:id', (req, res)=>{
//     try{
//         const index = userArr.findIndex(x => x.id == req.params.id);
//         if(index > -1){
//             res.status(200).send({message:"success", data: userArr[index]})
//         }else{
//             res.status(404).send({message:"invalid id"});
//         }
//     }catch (e){
//         res.status(500).send({message:e});
//     }
// });


// app.put('/update/:id', (req, res)=>{
//     try{
//         const index = userArr.findIndex(x => x.id == req.params.id);
//         if(index > -1){
//             userArr[index].f_name = req.body.fName;
//             userArr[index].l_name = req.body.lName;
//             userArr[index].bDay = req.body.bDay;

//             res.status(200).send({message:"successfully updated", data: userArr[index]})
//         }else{
//             res.status(404).send({message:"invalid id"});
//         }
//     }catch (e){
//         res.status(500).send({message:e});
//     }
// });

// app.delete('/delete/:id', (req, res)=>{
//     try{
//         const index = userArr.findIndex(x => x.id == req.params.id);

//         if(index > -1){
//             const delVal = userArr.splice(index, 1);
//             res.status(200).send({message:"user removed", user: delVal, userArr: userArr});
//         }else{
//             res.status(404).send({message: "invalid id"})
//         }
//     }catch (e){
//         res.status(500).send({message:e});
//     }
// });

