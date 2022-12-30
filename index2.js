
let Tasks = [];

 saveBtn.addEventListener('click',function(){
    if(localStorage.getItem('Table') == null){
        let task = {
            name: document.getElementById("task_name").value,
            desc: document.getElementById("task_desc").value
        };
        console.log(task);
        Tasks.push(task);
        localStorage.setItem('Table',JSON.stringify(Tasks));
    }
    else{
        Tasks = JSON.parse(localStorage.getItem('Table'));
        let task = {
            name: document.getElementById("task_name").value,
            desc: document.getElementById("task_desc").value
        };
        console.log(task);
        Tasks.push(task);
        localStorage.setItem('Table',JSON.stringify(Tasks));
    }
    update();

 });
function clearAll(){
    if(confirm("Do you wish to clear all data?")){
        localStorage.removeItem("Table");
    }
    update();
}
 function update(){
    if(localStorage.getItem("Table")!=null){
        table_body.innerHTML = "";
        console.log("Update Func");
        tasksArray = JSON.parse(localStorage.getItem("Table"));

        //For-each loop
        tasksArray.forEach((element,index) => {
            console.log(element,index);
            table_body.innerHTML += `<tr>
            <th scope="row">${index + 1}</th>
            <td>${element.name}</td>
            <td>${element.desc}</td>
            <td><button class="btn btn-primary" onclick='Delete(${index})'>Delete</button></td>
        </tr>`
        });
    }
    else{
        table_body.innerHTML = "";
    }
 }
 update();

function Delete(index) {
    console.log("Delete method index: ", index);
    Tasks = JSON.parse(localStorage.getItem('Table'));
    //const elem = Tasks.indexOf(index);
    let elem = index;
    if (elem > -1) { // only splice array when item is found
        console.log("inside if");
        Tasks.splice(elem, 1); // 2nd parameter means remove one item only
        console.log("After splice: ",Tasks);
    }
    localStorage.setItem('Table',JSON.stringify(Tasks));
    
    update();
}


//Random Sentence Generator
var verbs, nouns, adjectives, adverbs, preposition;
nouns = ["bird", "clock", "boy", "plastic", "duck", "teacher", "old lady", "professor", "hamster", "dog"];
verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed"];
adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy"];
adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately"];
preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];

function randGen() {
  return Math.floor(Math.random() * 5);
}

generateBtn.addEventListener('click',function(){
  var rand1 = Math.floor(Math.random() * 10);
  var rand2 = Math.floor(Math.random() * 10);
  var rand3 = Math.floor(Math.random() * 10);
  var rand4 = Math.floor(Math.random() * 10);
  var rand5 = Math.floor(Math.random() * 10);
  var rand6 = Math.floor(Math.random() * 10);
  //                var randCol = [rand1,rand2,rand3,rand4,rand5];
  //                var i = randGen();
  var content = "The " + adjectives[rand1] + " " + nouns[rand2] + " " + adverbs[rand3] + " " + verbs[rand4] + " because some " + nouns[rand1] + " " + adverbs[rand1] + " " + verbs[rand1] + " " + preposition[rand1] + " a " + adjectives[rand2] + " " + nouns[rand5] + " which, became a " + adjectives[rand3] + ", " + adjectives[rand4] + " " + nouns[rand6] + ".";
console.log(content);
  document.getElementById("task_desc").innerText =  content ;
});
