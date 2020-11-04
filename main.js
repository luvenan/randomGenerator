//This is where the js code is going to go, let's get started!
//Messages will have four parts. Here are the variables with each of the corresponding arrays:
//Things to do:
const toDo = ['eat everything in your fridge', 'exercise', 'make something to eat', 'do a magic spell'];

//Where in the house:
const location = ['while lying in bed', 'in the kitchen', 'on your couch', 'in the garden'];

//With whom?
const withWhom = ['your imaginary friend', 'your mom, over zoom', 'yourself', 'one of the fair folk'];

//Listening to what?
const song = ['"Disease" by Matchbox 20', '"Fever", by Peggy Lee', '"It\'s The End Of The World As We Know It (And I Feel Fine)" by R.E.M.', '"Pandemic Flu" by Seanan McGuire']

//function to randomly select each of four possibilities:
function createRandomIndex () {
    const randomIndex = Math.floor(Math.random() * 4)
    return randomIndex
};


function generateMessage () {
    let a = createRandomIndex();
    let b = createRandomIndex();
    let c = createRandomIndex();
    let d = createRandomIndex();
    return 'You should ' + toDo[a] + ' ' + location[b] + ' with ' + withWhom[c] + ', while listening to ' + song [d] + '.';
}

console.log(generateMessage())

//This is the first version