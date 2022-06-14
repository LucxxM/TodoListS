const task = document.querySelector("#task");
const addTodo = document.querySelector("#addTodo");
const inputTilte = document.querySelector("#inputTitle");

let idInputBox = localStorage.length;
let id = localStorage.length;
let todoListId = localStorage.length;

addTodo.addEventListener("click", function () {
  
  const inputBox = document.createElement("div");
  const title = document.createElement("h3");
  const input = document.createElement("input");
  const btn = document.createElement("button");
  const tilteValue = inputTilte.value;
  let todoList = [];

  inputTilte.value = "";

  
  id++;
  todoListId++;
  idInputBox++;

  
  inputBox.classList.add("inputBox");
  inputBox.id = idInputBox;
  title.style.textAlign = "center";
  title.style.color = "rgb(255, 0, 0)";
  title.innerHTML = tilteValue;
  btn.type = "submit";
  btn.innerHTML = "add";
  btn.id = id;
  input.type = "text";
  input.placeholder = "Add Task Todo " + tilteValue;
  input.className = "task";
  todoList.id = todoListId;

  inputBox.style.width = "max-content";
  inputBox.appendChild(input);
  inputBox.appendChild(btn);
  inputBox.appendChild(title);
  task.appendChild(inputBox);

  let taskId = 0;
  btn.addEventListener("click", function () {
    const newTask = document.createElement("li");
    const id = this.id;

    taskId++;
    newTask.innerHTML = input.value;
    newTask.title = input.value;
    newTask.id = taskId;
    newTask.style.backgroundColor = "rgb(255, 0, 0)";
    newTask.style.opacity = "1";
    newTask.style.color = "white";
    inputBox.appendChild(newTask);
    newTask.done = false;
    input.value = "";

    newTask.addEventListener("click", function () {
      if (this.style.opacity === "1") {
        this.style.opacity = "0.5";
        this.style.textDecoration = "line-through";
        this.done = true;
      } else {
        this.style.opacity = "1";
        this.style.textDecoration = "none";
        this.done = false;
      }
    });

    newTask.addEventListener("dblclick", function () {
      this.remove();
      todoList.pop(this);
      // if (todoList.length === 0) {
      //   inputBox.remove();
      // }

      const data = {
        id: idInputBox,
        title: tilteValue,
        idInputBox: idInputBox,
        todoListTasks: todoList,
      };

      const dataJson = JSON.stringify(data);

      localStorage.setItem(id, dataJson, todoList);
    });

    const task = {
      id: newTask.id,
      title: newTask.title,
      done: newTask.done,
    };

    console.log(newTask.done);

    todoList.push(task);

    console.log(todoList);

    const data = {
      id: id,
      title: tilteValue,
      idInputBox: idInputBox,
      todoListTasks: todoList,
    };

    const dataJson = JSON.stringify(data);
    console.log(dataJson);
    localStorage.setItem(id, dataJson, todoList);
  

    console.log(localStorage);
  });

  const data = {
    id: id,
    title: tilteValue,
    idInputBox: idInputBox,
    todoListTasks: todoList,
  };

  const dataJson = JSON.stringify(data);
  console.log(dataJson);
  localStorage.setItem(id, dataJson, todoList); 

  console.log(todoList);
});

const loadTodo = document.querySelector("#loadTodo");
loadTodo.addEventListener("click", function () {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    const data = JSON.parse(value);
    const inputBox = document.createElement("div");
    const tilte = document.createElement("h3");
    const input = document.createElement("input");
    const btn = document.createElement("button");

    let id = data.id;
    let todoList = data.todoListTasks;
    let idInputBox = data.idInputBox; 
    let tilteValue = data.title;

    todoList.forEach(function (task) {
      const newTask = document.createElement("li");
      newTask.innerHTML = task.title;
      newTask.title = task.title;
      newTask.style.backgroundColor = "rgb(255, 0, 0)";
      newTask.style.opacity = "1";
      newTask.style.color = "white";
      inputBox.appendChild(newTask);

      newTask.addEventListener("click", function () {
        if (this.style.opacity === "1") {
          this.style.opacity = "0.5";
          this.style.textDecoration = "line-through";
        } else {
          this.style.opacity = "1";
          this.style.textDecoration = "none";
        }
      });

      newTask.addEventListener("dblclick", function () {
        this.remove();
        todoList.pop(this);

        const data = {
          id: id,
          title: tilteValue,
          idInputBox: idInputBox,
          todoListTasks: todoList,
        };

        const dataJson = JSON.stringify(data);

        localStorage.setItem(key, dataJson, todoList);

        console.log(todoList);
      });

      const data = {
        id: id,
        title: tilteValue,
        idInputBox: idInputBox,
        todoListTasks: todoList,
      };

      const dataJson = JSON.stringify(data);

      localStorage.setItem(key, dataJson, todoList);
    });

    inputBox.classList.add("inputBox");
    inputBox.id = idInputBox;
    tilte.style.textAlign = "center";
    tilte.style.color = "rgb(255, 0, 0)";
    tilte.innerHTML = tilteValue;
    btn.type = "submit";
    btn.innerHTML = "add";
    input.type = "text";
    input.placeholder = "Add Task Todo " + tilteValue;
    input.className = "task";
    todoList.id = todoListId;

    inputBox.style.width = "max-content";
    inputBox.prepend(tilte);
    inputBox.prepend(btn);
    inputBox.prepend(input);
    task.appendChild(inputBox);

    let taskId = 0;
    btn.addEventListener("click", function () {
      const newTask = document.createElement("li");

      taskId++;
      newTask.innerHTML = input.value;
      newTask.title = input.value;
      newTask.style.backgroundColor = "blue";
      newTask.style.opacity = "1";
      newTask.style.color = "white";
      inputBox.appendChild(newTask);
      input.value = "";

      newTask.addEventListener("click", function () {
        if (this.style.opacity === "1") {
          this.style.opacity = "0.5";
          this.style.textDecoration = "line-through";
        } else {
          this.style.opacity = "1";
          this.style.textDecoration = "none";
        }
      });

      newTask.addEventListener("dblclick", function () {
        this.remove();
        todoList.pop(this);

        const data = {
          id: id,
          title: tilteValue,
          idInputBox: idInputBox,
          todoListTasks: todoList,
        };

        const dataJson = JSON.stringify(data);

        localStorage.setItem(key, dataJson, todoList);
      });

      const task = {
        id: taskId,
        title: newTask.title,
        done: newTask.done,
      };

      todoList.push(task);

      const data = {
        id: id,
        title: tilteValue,
        idInputBox: idInputBox,
        todoListTasks: todoList,
      };

      const dataJson = JSON.stringify(data);

      localStorage.setItem(key, dataJson, todoList);
      // console.log(task);
      // console.log(todoList);
      // console.log(dataJson);

      // console.log(data);
    });
  }

  loadTodo.remove();
});


function showForm() {
  const form = document.querySelector("#display-add__form");
  const btn = document.querySelector("#showForm");  

  if (form.classList.contains("display-none")) {
    form.classList.remove("display-none");
    btn.innerHTML = "Hide Form";  
  } else {
    form.classList.add("display-none");
    btn.innerHTML = "Show Form";
  }
 
} 