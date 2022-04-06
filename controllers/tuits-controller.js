import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime()+'';
    newTuit.postedBy = {
        "username": "Elon Musk"
    };
    newTuit.liked = false;
    newTuit.disliked = false;
    newTuit.verified = false;
    newTuit.handle = "elonmusk";
    newTuit.time = "now";
    newTuit.avatar_image = "https://pbs.twimg.com/profile_images/1503591435324563456/foUrqiEw_400x400.jpg";
    newTuit.stats = {
        "comments": 0,
        "retuits": 0,
        "likes": 0,
        "dislikes":0
    }


    tuits.push(newTuit);
    res.json(newTuit);
}
const findAllTuits = (req, res) => {res.json(tuits);}
const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
    res.sendStatus(200);
}
const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
    res.sendStatus(200);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}