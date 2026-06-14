const input = document.getElementById('user-input');
const button = document.getElementById('user-taskAdd-btn');
const taskcard = document.getElementById('tasks-list');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('user-search-button');

//pagination veribales
let currentpage = 1;
const cardPerPage = 4;


let tasksArr = [];

function searchTask(searchinput){
    taskcard.innerHTML = "";

    const searchresult = tasksArr.filter(val => val == searchinput);
    console.log(searchresult);

    if(searchresult == ""){
        alert("Task not found");
        displaySortedTask();
    }
    else{
        // builtTaskList(searchresult);
        searchresult.forEach(task => builtTaskList(task));
    }
    searchInput.value = "";
}

searchButton.addEventListener('click',() => {
    const userinput = searchInput.value;
    console.log(userinput)
    searchTask(userinput);
})

function displaySortedTask(){
    taskcard.innerHTML = "";

    tasksArr.sort();

    const totalPages = Math.ceil(tasksArr.length/cardPerPage);

    if(currentpage > totalPages){
        currentpage = totalPages || 1;
    }

    const startIndex = (currentpage - 1) * cardPerPage;
    const endIndex = startIndex + cardPerPage;

    const pageTasks = tasksArr.slice(startIndex,endIndex);

    // for(let i=0; i<tasksArr.length; i++){
    //     builtTaskList(tasksArr[i]);
    // }

    pageTasks.forEach((tasks) => {
        builtTaskList(tasks);
    })

    updatepagination();

}

button.addEventListener('click', () => {
    const inputText = input.value;

    if(inputText.trim() === ""){
        alert("Tasks is empty");
        return;
    }

    tasksArr = [...tasksArr,inputText];

    displaySortedTask();

    input.value = "";

});

function builtTaskList(taskData){

    const task_container = document.createElement('div');
    const text = document.createElement('h3');
    const removebtn = document.createElement('button');
    const markbtn = document.createElement('button');
    const updatebtn = document.createElement('button');

    text.innerText = taskData;
    removebtn.innerText = 'Remove Task';
    markbtn.innerText = 'Mark as Done';
    updatebtn.innerText = 'Update Task'

    task_container.appendChild(text);
    task_container.appendChild(removebtn);
    task_container.appendChild(markbtn);
    task_container.appendChild(updatebtn);

    task_container.className = 'taskBox';

    taskcard.appendChild(task_container);

    removebtn.addEventListener('click', ()=>{

        const taskvalue = text.innerText;
        console.log(taskvalue);
        task_container.remove();

        const index = tasksArr.indexOf(taskvalue);

        if(index != -1){
            tasksArr.splice(index,1);
            displaySortedTask();
        }
    })

    markbtn.addEventListener('click',()=>{
        if(text.style.textDecoration === 'line-through'){
            text.style.textDecoration = 'none';
            markbtn.innerText = 'Mark as Done';
        }
        else{
            text.style.textDecoration = 'line-through';
            markbtn.innerText = 'Undo';
        }
    });

    updatebtn.addEventListener('click', () => {
        const updatetaskField = document.createElement('div');
        const updateinputfield = document.createElement('input');
        const updatebtn = document.createElement('button');

        updatebtn.innerText = 'submit';
        updatetaskField.appendChild(updateinputfield);
        updatetaskField.appendChild(updatebtn);
        task_container.appendChild(updatetaskField);

        updatebtn.addEventListener('click',() => {
            const updatedText = updateinputfield.value;
            console.log(text.innerText);

            const index = tasksArr.indexOf(text.innerText);

            if(index != -1){
                tasksArr.splice(index,1);
            }

            text.innerText = updatedText;
            updatetaskField.remove();
            tasksArr = [...tasksArr,updatedText];
        })
    })
}

//pagination logic

const paginationCont = document.getElementById('pagination');

function updatepagination(){

    const totalpages = Math.ceil(tasksArr.length/cardPerPage);

    if(totalpages <= 1){
        paginationCont.style.display = 'none';
        return;
    }

    paginationCont.style.display = 'flex';

    document.getElementById('page-info').innerText = `${currentpage} of ${totalpages}`;

    document.getElementById('prev-btn').disabled = currentpage === 1;

    document.getElementById('next-btn').disabled = currentpage === totalpages;
}

document.getElementById('prev-btn').addEventListener('click',() => {
    if(currentpage > 1){
        currentpage--;
        displaySortedTask();
    }
})

document.getElementById('next-btn').addEventListener('click',() => {

    const totalpages = Math.ceil(tasksArr.length / cardPerPage);

    if(currentpage < totalpages){
        currentpage++;
        displaySortedTask();
    }
})


