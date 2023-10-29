import express from "express";

const app = express();
const PORT = 3001;

app.use(express.json);

app.get('/api/generateQuestion', (req, res) => {
    // Generate a math question here and send it as JSON response
    const question = generateQuestion(); // Implement generateMathQuestion
    res.json({ question });
});
  
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});

function generateMathQuestion() 
{
// Implement your logic to generate a math question
// Return the question as a string or object

    var num1, num2, solution;
    //to determine the operation the quiz will be asked to perform
    //0 is add
    //1 is subtract
    //2 is multiply
    //3 is divide
    var operation = getRandomInt(0,3);

    switch (operation) {
        case 0:
            num1 = getRandomInt(1, 100);
            num2 = getRandomInt(1,100);
            solution = num1 + num2;
            break;
        case 1:
            num1 = getRandomInt(1, 100);
            num2 = getRandomInt(1,100);
            solution = num1 - num2;
            break;
        case 2:
            num1 = getRandomInt(0, 12);
            num2 = getRandomInt(0,12);
            solution = num1 * num2;
            break;
        case 3:
            num1 = getRandomInt(0, 12);
            num2 = getRandomInt(1,12);
            solution = num1 / num2;
            break;                
    }

    // return {num1, num2, solution};
    return "" + num1 + ", " + num2 + ", " + solution;

}

function getRandomInt(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



