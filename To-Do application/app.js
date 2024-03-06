let Todo = [];

let req = prompt("Enter your request");

while(true) {
    if(req == "quit"){
        console.log("quitting application");
        break;
    }

    if(req == "list"){
        console.log("--------")
        for(i=0; i<Todo.length;i++ ){
            console.log(i, Todo[i]);
        }
        console.log("--------")
    }
    else if(req == "add"){
        task = prompt("Enter the task you would like to add");
        Todo.push(task);
        console.log("Task added successfully");
    }

    else if(req == "delete"){
        let number = prompt("Enter the task you would like to delete")
        Todo.splice(number, 1);
        console.log("Task deleted successfully")
    }

    else{
        console.log("Invalid Request")
    }



    req = prompt("Please enter your request");
}
