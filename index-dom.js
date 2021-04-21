/* EXERCISE 5:
                  Add a new task to the list.
                  Suggestion:
                  - Use document.getElementById to get the UL item and the input text
                  - Use the document.createElement to create the new List Item
                  - Append the child to the UL
              */
                  const addNewTask = function () {
                    let UlItem = document.getElementById("myTaskList");
                    let inputNewTask = document.getElementById("newTask");
                    let newListItem = document.createElement("li");
                    newListItem.innerHTML = inputNewTask.value;
                    UlItem.appendChild(newListItem);
                    inputNewTask.value = "";
                  };
            
                  /* EXERCISE 6:
                              Create a method "removeLast" which removes the last item from the task list
                          */
                  const removeLast = function () {
                    let UlItem = document.getElementById("myTaskList");
                    UlItem.lastChild.remove();
                  };
                  /* EXERCISE 7:
                              Create a method "removeFirst" which removes the first item from the task list
                          */
                  const removeFirst = function () {
                    /* let newListItem = document.getElementsByTagName("li");
                    newListItem[0].remove(); */
                    let UlItem = document.getElementById("myTaskList");
                    UlItem.firstChild.remove();
                  };
                  /* EXERCISE 8:
                             Create a method "getTasksAsArray" which returns, and prints to the console an array containing the tasks as string
                          */
                  const getTasksAsArray = function () {
                    let arrTasks = [];
                    let newListItem = document.getElementsByTagName("li");
                    for (let i = 0; i < newListItem.length; i++) {
                      arrTasks.push(newListItem[i].innerHTML);
                    }
                    
                    return arrTasks;
                  };
            
                  /* EXERCISE 9:
                             Create a method "changeTaskBackgroundColor" which takes the color from the color picker with an
                             onchange event listener ad applies it as background to every list item
                          */
                  const changeTaskBackgroundColor = function () {
                    let colorPicker = document.getElementById("colorPicker");
                    let newListItem = document.getElementsByTagName("li");
                    /* let bgTaskList;
                    colorPicker.onchange = function () {
                      bgTaskList = this.value;
                      console.log(bgTaskList);
                    }; */
                    for (let i = 0; i < newListItem.length; i++) {
                      newListItem[0].style.backgroundColor = colorPicker.value;
                    }
                  };
            
                  /* EXTRA */
            
                  /* EXERCISE 10:
                             Create a method "bubbleSort()" which sort the task list alphabetically using the bubble sort algorithm
            
                             Use your spare time to beautify your task list via CSS.
            
                             Suggestion:
                             - Break the code into many function for semplicity
                             - Reuse the functions previously created
                          */
                  const bubbleSort = function () {
                    let arrToBeSorted = [];
                    arrToBeSorted = getTasksAsArray();
                    let temp;
                    for (let j = 0; j < arrToBeSorted.length - 1; j++) {
                      for (let i = j + 1; i < arrToBeSorted.length; i++) {
                        if (arrToBeSorted[j].localeCompare(arrToBeSorted[i]) > 0) {
                          temp = arrToBeSorted[j];
                          arrToBeSorted[j] = arrToBeSorted[i];
                          arrToBeSorted[i] = temp;
                        }
                      }
                    }
                    console.log(arrToBeSorted)
                    let container=document.querySelector(".container")
                    let newUl=document.createElement("ul")
                    
                    for(let i=0;i<arrToBeSorted.length;i++){
                        let newli=document.createElement("li")
                        newli.innerText=arrToBeSorted[i]
                        newUl.appendChild(newli)
                    }
                    container.appendChild(newUl)
                   /*  return arrToBeSorted; */


                  };