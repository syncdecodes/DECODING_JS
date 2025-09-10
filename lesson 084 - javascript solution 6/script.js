console.log("To do list web app")

const W_input = document.querySelector(".work-input")
const T_input = document.querySelector(".time")
const Select_hours = document.querySelector("#hours")
const Add_btn = document.querySelector(".Add_btn")
const Task_list = document.querySelector(".task-list")
const Clear_All = document.querySelector(".AC")

console.log(W_input)
console.log(T_input)
console.log(Select_hours)
console.log(Add_btn)
console.log(Task_list)
console.log(Clear_All)

for (let i = 1; i <= 24; i++) {
    const option = document.createElement("option")
    option.textContent = i
    option.value = i
    Select_hours.appendChild(option)
}

Select_hours.addEventListener("change", (e) => {
    e.preventDefault()  // prevents from page relaod

    if (Select_hours.value == 1) {
        T_input.value = Select_hours.value + " Hour"
    }
    else {
        T_input.value = Select_hours.value + " Hours"
    }

})

Add_btn.addEventListener("click", (e) => {
    e.preventDefault()

    const value = W_input.value.trim();
    const timevalue = T_input.value.trim();

    if (value == "" || timevalue == "") {
        alert("Please enter task amd time both")
        return;
    };

    const list = document.createElement("li");

    const tasktext = document.createElement("span");
    tasktext.textContent = value;

    const time_remaining = document.createElement("div")
    time_remaining.textContent = "Time remaining : " + T_input.value

    const dlt_btn = document.createElement("button");
    dlt_btn.textContent = "Delete";

    dlt_btn.addEventListener("click", (e) => {
        e.preventDefault()

        Task_list.removeChild(list)
    })
    list.appendChild(tasktext);
    list.appendChild(time_remaining)
    list.appendChild(dlt_btn);
    Task_list.appendChild(list);

    const hours = Select_hours.value;
    let totalseconds = hours * 60 * 60;

    const interval = setInterval(() => {
        totalseconds--;

        if (totalseconds <= 0) {
            time_remaining.textContent = "Time over"
        }
        else {
            const h = Math.floor(totalseconds / 3600);
            const m = Math.floor((totalseconds % 3600) / 60);
            const s = Math.floor(totalseconds % 60)
            time_remaining.textContent = `Time remaining : ${h}h ${m}m ${s}s`
        }
    }, 1000)

    W_input.value = "";
    T_input.value = "";
    Select_hours.value = "Hour"
})

Clear_All.addEventListener("click", (e) => {
    e.preventDefault()

    Task_list.textContent = "";
    W_input.value = "";
})

console.log("I dare you to do your task within the time limit :)")

/* 
eg -: 
let user selected 7 hours
total_minutes = 7 * 60 = 420
total_seconds = 7 * 60 * 60 = 420 * 60 = 25200 
so to calculate we will do this -: 
let hours = (total_seconds / 3600) = 25200 / 3600 = 7
let minutes = (total_seconds % 3600) / 60 = 25200 / 3600 = remainder = 0, 0 / 60 = 0
let seconds = (total_seconds % 60) = 25200 / 60 = remainder = 0 
so ans is 
7 hour 0 minutes 0 seconds



another example -:
let total_seconds = 4320 
const hours = 4320 / 3600 = 1.2 now as we are using Math.floor => 1.2 = 1 hour
const minutes = (4320 % 3600) / 60 = ramainder = 720 => 720 / 60 = 12 minutes
const seconds = (4320 % 60 ) = 4320 / 60 => reaminder = 0 => 0 / 60 = 0 seconds 
*/
