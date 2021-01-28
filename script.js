class User {
    constructor(firstName, lastName, id, DoB, departing, arriving, leaveDate, returnDate, bags, outdurration, outage, meal, extra, extras, outextras, outcost) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.DoB = DoB;
        this.departing = departing;
        this.arriving = arriving;
        this.leaveDate = leaveDate;
        this.returnDate = returnDate;
        this.bags = bags;
        this.meal = meal;
        this.outdurration = outdurration;
        this.outage = outage;
        this.outextras = outextras;
        this.extra = extra
        this.extras = extras
        this.outcost = outcost
    }
}

let userList = [];
let searchArr = []
let idCount = 1;

// let daniel = new User("Daniel", "Nijdl", 2004-08-23, "Austin, Texas", "Las Vegas, Nevada", 2021-02-05, 2021-02-12, 4, "fish")

function addToList() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let DoB = document.getElementById("DoB").value;
    let departing = document.getElementById("departing").value;
    let arriving = document.getElementById("arriving").value;
    let leaveDate = document.getElementById("leaveDate").value;
    let returnDate = document.getElementById("returnDate").value;
    let bags = document.getElementById("bags").value;
    let meal = ""
    outdurration = document.getElementById("outdurration").value;
    let outage = document.getElementById("outage").value
    let extra = document.getElementsByName('extra').value;
    let outCost = document.getElementById("outcost").value;


    //     for(var i=0; extra[i]; ++i){
    //         if(extra[i].checked){
    //              checkedValue = extra[i].value;
    //         }
    //   }

    // for (var i = 0, length = meal.length; i < length; i++) {
    //     if (meal[i].checked) {
    //       // do whatever you want with the checked radio
    //       // only one radio can be logically checked, don't check the rest
    //     //   break;
    //     }
    //   }

    // for(i = 0; i < (meals = meal[i]); i++) { 
    //     if(meal[i].checked) 
    //     document.getElementsByName("meals").value = "";

    let meals = document.getElementsByName("meal");
    for (let i = 0, length = meals.length; i < length; i++) {
        if (meals[i].checked) {
            meal = meals[i].value;
        }

    }


    // let extras = document.getElementsByName('extra');
    // for (let checkbox of extras) {
    //     if (checkbox.checked)
    //         outextras = checkbox.value

    // }

    let extrasCost = "";
    let extras = document.getElementsByName('extra')
    let selectedItems = "";
    for(let i = 0; i < extras.length; i++){
        if(extras[i].type == 'checkbox' && extras[i].checked == true)
        selectedItems += extras[i].value+=", ";
        extra = selectedItems
        extrasCost = extra[i] * 20
    }

    extrassCost = extrasCost * 20
    let bagsCost = bags * 20
    let allCost = bagsCost + extrassCost


    let currentDate = Date.now()
    DoBn = new Date(DoB);
    let yearofBirth = DoBn.getTime();
    let timebetweenDates = currentDate - yearofBirth;
    timebetweenDates = Math.floor(timebetweenDates / (1000 * 60 * 60 * 24 * 365.25))
    outage = timebetweenDates;



    let outDate = Date.parse(leaveDate);
    let backDate = Date.parse(returnDate);
    let timeBetween = backDate - outDate;
    outdurration = Math.floor(timeBetween / (1000 * 60 * 60 * 24));




    if (firstName != "" && lastName != "" && idCount != "" && DoB != "" && departing != "" && arriving != "" && leaveDate != "" && returnDate != "" && bags != "" && meal != "" && extras != "") {
        let user = new User(firstName, lastName, DoB, departing, arriving, leaveDate, returnDate, bags, meal, extras, idCount)
        idCount++
        userList.push(user);
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("DoB").value = "";
        document.getElementById("departing").value = "";
        document.getElementById("arriving").value = "";
        document.getElementById("leaveDate").value = "";
        document.getElementById("returnDate").value = "";
        document.getElementById("bags").value = "";
        document.getElementById("outdurration").value = "";
        document.getElementById("outage").value = "";
        document.getElementsByName("meal").value = "";
        document.getElementsByName("extra").value = "";
        document.getElementsByName("outextras").value = "";
        document.getElementById("outcost").value = ""

        let outfirstName = document.getElementById("outfirstName").value = firstName;
        let outlastName = document.getElementById("outlastName").value = lastName;
        let outDoB = document.getElementById("outDoB").value = DoB;
        let outbags = document.getElementById("outbags").value = bags;
        let outdeparting = document.getElementById("outdeparting").value = departing;
        let outarriving = document.getElementById("outarriving").value = arriving;
        let outleaveDate = document.getElementById("outleaveDate").value = leaveDate;
        let outreturnDate = document.getElementById("outreturnDate").value = returnDate;
        let outmeal = document.getElementById("outmeal").value = meal;
        let outextras = document.getElementById("outextras").value = extra
        outdurration = document.getElementById("outdurration").innerText = outdurration;
        outage = document.getElementById("outage").innerText = outage;
        let outcost = document.getElementById("outcost").innerText = allCost;
    }
}


function search() {
    let input = document.getElementById("search").value;
    for(let i = 0; i < userList.length; i++){
        let thisUserList = userList[i].split(' ')
        if (input == thisUserList[0] || `${thisUserList[2]} ${thisUserList[1]}`){
            let thisUserListArr = thisUserList[i];
        }
    }
}


function print() {
    let names = document.getElementById("names");
    names.innerHTML = "";

    for (let i = 0; i < userList.length; i++) {
        names.innerHTML += `<div><span>${userList[i].id}</span>${userList[i].firstName} ${userList[i].lastName}</div>`
    }
}

// let outfirstName = document.getElementById("outfirstName").value = "test";