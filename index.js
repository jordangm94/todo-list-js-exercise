//In the code below we refactored code and put some of the task details
//Into an object. However the functions that are acting on the object,
//should be a part of the object. So we will refactor here to make it better!
//By using functions within our object, we will call these object methods!
//This is what is called making things more object oriented:

function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function () {//We can use this here instead of task since we are now in task object.
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function () {
      this.complete = true;
    }
  }
  return task;
};



const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2]

task1.logState()//This will add clean cat litter not complete to the list
task1.markCompleted()//This will mark the clean cat litter task completed
task1.logState()//This will now print that our clean cat litter task is complete.

console.log(tasks);

//IF we wanted to access simple properties from our object:
console.log(task1.title);



//Instead of having all these arrays just sitting, we are going to store
//in an object!

//Here we are going to refractor the code from below using object orientation!

// function newTask(title, description) {
//   const task = {
//     title: title,
//     description: description,
//     complete: false
//   }
//   return task;
// };

//Objects are a better way of grouping the task data, but we also have to
//refactor the functions.
// prints out the provided task's details

// function logTaskState(task) {
//   console.log(`${task.title} has${task.complete ? " " : " not "}been completed`)
// }

// // marks the provided task as completed

// function completeTask(task){
//   task.complete = true;
// }

// DRIVER CODE BELOW

// const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
// const task2 = newTask("Do Laundry", "😨");
// const tasks = [task1, task2]

// logTaskState(task1); //Clean cat litter has not been completed.
// completeTask(task1); //clean cat litter is marked as task.complete = true, and is marked as done
// logTaskState(task1); //Clean cat litter should now be marked as done given our complete task call.

// console.log(tasks);




// // Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const takeDescriptions = [];

// // Create a new task by adding to the arrays
// // A new task will be created as incomplete
// function newTask(title, description) {
//   taskTitles.push(title);
//   taskDescriptions.push(description);
//   taskComplete.push(false);
// }

// // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(taskIndex) {
//   taskComplete[taskIndex] = true;
// }

// // Print the state of a task to the console in a nice readable way
// function logTaskState(taskIndex) {
//   const title = taskTitles[taskIndex];
//   const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// }

// // DRIVER CODE BELOW

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed
