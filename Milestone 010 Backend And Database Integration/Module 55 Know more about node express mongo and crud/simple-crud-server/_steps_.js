/**
 *------------------------------- 
 * Mongodb Connection
 * ------------------------------
 * 1. Create account
 * 2. Create an user with password
 * 3. whitelist IP address
 * 4. database > connect > driver > node > view all code
 * 5. Change the password the URL
 * -----------------------------
 * 1. CREATE --- POST
 * 2. app.post('/users'/ async (req, res) => {})
 * 3. Make the function async to use await inside it
 * 4. Make sure you use the express.json() middleware
 * 5.  access data from the body: const user = req.body
 * 6. const result = await userCollection. insertOne(user);
 * 7. res.send(result)
 * 
 * 
 * CLIENT
 * CRUD-- Create
 * 1. create fetch
 * 2. add second parameter as an object
 * 3. provide method: 'POST'
 * 4. add headers: {'content-type': 'application/json'}
 * 5. add body: JSON.Stringify(user)
 * -----------------------------
 * CRUD-- Read Many
 * 1. create a cursor = userCollection.find()
 * 2. const result = await cursor.toArray()
 * -----------------------------
 * CRUD-- Delete
 * 1. create app.delete('/users/:id', async(req, res) =>{})
 * 2. specify unique ObjectId to delete the right users
 * 3. const query = { _id: new ObjectId(id)}
 * 4. const result = await userCollection.deleteOne(query);
 * 
 * 
 * Client
 * 1. create dynamic url with id
 * 2. mention the DELETE method
 *   
 * -----------------------------
 * Documentation
 * -----------------------------
 * 1. node mongodb crud (current version)
 * 2. Insert Operations -> Insert a Document -> 
 * 
 * 
 *  
 * 


 */