
const inputQuantity= document.getElementByClass("enter_quant");

const quantityEntered = document.getElementByClass("quant_entered");
/*
function enterQuantity (){
    quantityEntered.value = inputQuantity.value
}
addBtn.addEventListener('click', enterQuantity)
*/
const pWithError = document.getElementByClass("errorQuant")
const addBtn = document.getElementByClass("addButton");
function showError() {
  if (quantityEntered.value < 0){
    pWithError.style.visibility = 'visible'
  } else {
    pWithError.style.visibility = 'hidden'
  }
}
addBtn.addEventListener('click', showError)



/*
//Task Constructor Class//
class Item {
  constructor(Id = 0) {
    this.taskArr = [];
    this.Id = Id;
  }
  //add task 33333
  addTask(taskName, assign, date, status, desc) {
    const newTask = {
      id: this.Id++,
      taskName: taskName,
      assign: assign,
      date: date,
      status: status,
      desc: desc,
    };
    this.taskArr.push(newTask);
  }
  //getting task from array
  getTask(taskId) {
    let getTask;
    for (let i = 0; i < this.taskArr.length; i++) {
      const task = this.taskArr[i];
      console.log(task)
      if (task.id === taskId) {
        getTask = task;
        
      }
    }
    return getTask;
  }
  
  //delete Task 4444
  removeTask(taskId) {
    const newObj = [];
    for (let i = 0; i < this.taskArr.length; i++) {
      const task = this.taskArr[i];
      if (task.id !== taskId) {
        newObj.push(task);
      }
    }
    this.taskArr = newObj;
    console.log(this.taskArr);
  }
  //saving to local storage
  saveToLstorage() {
    const taskStingify = JSON.stringify(this.taskArr);
    // console.log(taskStingify);
    localStorage.setItem("task", taskStingify);
    const Id = String(this.Id);
    localStorage.setItem("Id", Id);
  }
  //get data from localstorage  after refresh or browser closed
  getPage() {
    if (localStorage.getItem("task")) {
      const getData = localStorage.getItem("task");
     console.log(getData);
      this.taskArr = JSON.parse(getData);
      console.log(this.taskArr);
    }
    if (localStorage.getItem("Id")) {
      const Id = localStorage.getItem("Id");
      this.Id = Number(Id);
    }
  }

  // display task card
  displayPage() {
    const htmlList = [];

    const tasks = this.taskArr
    tasks.forEach((task)=>{
      const taskHtml = createBootstrap(
        task.id,
        task.taskName,
        task.assign,
        task.date,
        task.status,
        task.desc
      );
      htmlList.push(taskHtml);
    })
    
    const tasksHtml = htmlList.join("\n");
    const taskList = document.querySelector("#task-card");
    taskList.innerHTML = tasksHtml;
  }

  //clear field after task submit
  clearFields() {
    inputValue.value = "";
    assignValue.value = "";
    statusValue.value = "";
    descValue.value = "";
    dateValue.value = "";
    submitBtn.value = "";
  }
}

//new Task instance
const taskClass = new Task(0);
taskClass.getPage();
taskClass.displayPage();

//event listner for form
submitBtn.addEventListener("click", (event) => {
  //event.preventDefault();
  validateForm();
  if (isFormValid() == true) {
    taskClass.addTask(
      inputValue.value,
      assignValue.value,
      dateValue.value,
      statusValue.value,
      descValue.value
    );
    taskClass.clearFields();
    taskClass.saveToLstorage();
    taskClass.displayPage();
  } else {
    event.preventDefault();
  }
});



//setting error and success message
function showError(element, errorMessage) {
  const parent = element.parentElement;
  parent.classList.add("error");
  const paragraph = parent.querySelector("p");
  paragraph.textContent = errorMessage;
}





  //Toggling delete button
  if (event.target.classList.contains("delete-button")) {
    const parentTask = event.target.parentElement.parentElement;
    console.log(parentTask);
    const taskId = Number(parentTask.dataset.taskId);
    taskClass.removeTask(taskId);
    //console.log(taskId);
    taskClass.saveToLstorage();
    taskClass.displayPage();
  }
});

*/