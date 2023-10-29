import express from "express";

const app = express();
const PORT = 3001;

app.use(express.json);

app.get('/api/generateMathQuestion', (req, res) => {
    // Generate a math question here and send it as JSON response
    const info = generateMathQuestion(); // Implement generateMathQuestion
    res.json(info);
});

app.get('/api/checkAnswer', (req, res) => {
    // Generate a math question here and send it as JSON response
    const info = checkAnswer(); // Implement generateMathQuestion
    res.json(info);
});
  
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Keep track of correct answers
var correct = 0;
var solution = 0;

function generateMathQuestion() 
{
// Implement your logic to generate a math question
// Return the question as a string or object
    var num1, num2;
    //to determine the operation the quiz will be asked to perform
    //0 is add
    //1 is subtract
    //2 is multiply
    //3 is divide
    var randInt = getRandomInt(0,3);

    switch (randInt) {
        case 0:
            num1 = getRandomInt(1, 100);
            num2 = getRandomInt(1,100);
            solution = num1 + num2;
            var operation = "+"
            break;
        case 1:
            num1 = getRandomInt(1, 100);
            num2 = getRandomInt(1,100);
            solution = num1 - num2;
            var operation = "-"
            break;
        case 2:
            num1 = getRandomInt(0, 12);
            num2 = getRandomInt(0,12);
            solution = num1 * num2;
            var operation = "*"
            break;
        case 3:
            num1 = getRandomInt(0, 12);
            num2 = getRandomInt(1,12);
            solution = num1 / num2;
            var operation = "/"
            break;                
    }

    // return {num1, num2, solution};
    return {
        first: num1,
        op: operation,
        second: num2, 
    };

}

function getRandomInt(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkAnswer() {

    var answer = document.getElementById("guess");

    if (answer == solution) {
        correct += 1;
        return "Correct!";
    }
    else {
        return "Incorrect!";
    }

}



