
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt"); 

const saltRounds = 10;

const app = express();
app.use(cors({
    origin: "*"
}));
app.use(express.json());
    

const SECRET = process.env.SECRET; 
if (!SECRET) throw new Error("SECRET missing");

const PORT = process.env.PORT || 5000;

let users = [];
let transactions = [];

app.post("/register", async (req, res) => {
    const {email, password} = req.body;

    const existUser = users.find(x => x.email === email);
    if (existUser) return res.status(400).json({message: "User already exists, try to login"});

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    users.push({
        id: Date.now(), 
        email, 
        password: hashedPassword,
    });

    res.json ({message: "User registered succesfully"});
});

app.post("/login", async (req, res) => {
    const {email, password} = req.body;

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(401).json({message: "Invalid credentials"});

    const token = jwt.sign(
        {userId: user.id}, 
        SECRET);

    res.json({
        token,
        userId: user.id
    });


  console.log(users);
});

const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) return res.status(401).json({message: "No token provided"});

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, SECRET);
        req.userId = decoded.userId;
        next();
    } catch (err) {
        res.status(401).json({message: "Invalid token"});
    };
};

app.post("/transactions", authenticate, (req, res) => {
    const newTransaction = {
        id: Date.now(),
        userId: req.userId,
        ...req.body
    };

    transactions.push(newTransaction);

    res.json(newTransaction);
});


app.get("/transactions", authenticate, (req, res) => {
    const userTransactions = transactions.filter(x => x.userId === req.userId);
    res.json(userTransactions);
});
 


app.listen(PORT, () => {
  console.log(`Server is running`);
});

