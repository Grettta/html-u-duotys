console.log("Java script treniruotės-pratimas 1.5");
const todos=[
    {
        id: 1,
        text: "Klaumas nr.1",
        isCompleted: true
    },
    {
        id: 2,
        text: "Klaumas nr.2",
        isCompleted: true
    },
    {
        id: 3,
        text: "Klaumas nr.3",
        isCompleted: false
    }
]
//for
//for(let i = 0; i<todos.length; i++)
//console.log(todos[i].text);

//foreach
//todos.forEach(function(todo){console.log(todo.text);})

//while
let i = 0;
while(i < todos.length) {
    console.log(todos[i].text);
    i++;}

// Filter
let todoUncompleted = todos.filter(function (todo) {
    return todo.isComplete === false;
  });
  console.log(todoUncompleted);

  // Map
let todoText = todos.map(function (todo) {
    return todo.text;
  });
  console.log(todoText);
