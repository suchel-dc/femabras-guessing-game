import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 5000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/frontend/views"));

app.use(express.static(path.join(__dirname, "/frontend/public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    const numberList = [];
    const attemptNumber = 6;
    
    for (let i = 0; i < 12; i++) {
        const randomNumber = Math.floor( Math.random() * 10);
        numberList.push(randomNumber);
    }

    res.render("index", { number: numberList, attempts: attemptNumber });
});

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});