import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 5000;

// Temporal database
const data = {
    title: "A Sinfonia dos Números e o Ritmo da Máquina",
    content: "Na arquitetura de um software, assim como na construção de um beat de Amapiano, a precisão é a alma do negócio. Imagine que cada linha de código é um compasso. Para um produtor que busca a perfeição, o segredo não está apenas no que se ouve, mas na estrutura invisível que sustenta a obra. Se olharmos para o horizonte de vinte anos, veremos que a tecnologia e a arte se fundiram. Para encontrar a frequência certa, o mestre deve observar os detalhes. O primeiro passo é notar a dupla batida do bumbo, seguida por duas variações de sintetizador que ecoam no vazio. Não há espaço para o zero, pois a energia deve ser plena, como uma nota três vezes sustentada em um solo de guitarra. A jornada do sucesso financeiro exige que você seja oito vezes mais resiliente que a média. Se você somar cinco camadas de percussão e subtrair as distrações, restará a essência: dois canais de áudio, sete notas na escala e três segundos de silêncio antes do drop. A fundação é sólida como um MacBook Pro de seis gerações atrás, mas com o poder de quatro núcleos processando o futuro. No fim, a matemática não mente: seis horas de trabalho, três de inspiração e três de pura execução. A música é o código; o código é a riqueza. Se você decifrar a ordem desta melodia, os sete pilares da sua fortuna estarão visíveis, e o último seis selará o seu destino."
}

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

    res.render("index", { number: numberList, attempts: attemptNumber, title: data.title, content: data.content });
});

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});