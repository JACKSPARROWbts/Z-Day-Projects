const form=document.querySelector('form');
let count=localStorage.length;
const ul=document.querySelector('ul');
let localvalues=new Array();
console.log(localStorage.getItem('google'));
alert("NOTE:DOUBLE CLICK THE ITEM TO DELETE THE ITEM");
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const value=document.querySelector('#input0').value;
    const input1=document.getElementById('input1').value;
    append_storage(value,input1);
})    
function append_storage(value,input1){
    localStorage.setItem(input1,value);
    document.querySelector("#input0").value=" ";
    document.querySelector("#input1").value=" ";
    appendData(value,input1);
}
function appendData(value,input1){
    const a=document.createElement('a');
    const li=document.createElement('li')
    const text=document.createTextNode(value);
    a.href=value;
    a.innerText=input1;
    li.appendChild(a);
    ul.appendChild(li);
}
for (let index = 0; index < localStorage.length; index++) {
    document.querySelector('ul').innerHTML+=
    `<li><a href=${localStorage.getItem(localStorage.key(index))}>${localStorage.key(index)}</a></li>`;
    
}
var len=ul.children.length;
for (let i = 0; i < len; i++) {
    (function(index){
        ul.children[i].ondblclick=function(){
          localStorage.removeItem(ul.children[i].innerText);
        }
    })(i);
    
}

    var total=0,xlen,x;
    for(x in localStorage){
        if(!localStorage.hasOwnProperty(x)){
            continue;
        }
        console.log(localStorage[x]+"---"+x);
        xlen=((localStorage[x].length+x.length)*2);
        total+=xlen;
        console.log(x.substr(0,50)+"="+(xlen/1024).toFixed(2)+"KB")
        console.log("loc[]",localStorage[x].length);
        console.log("x length is",x.length);
    };
    console.log("The total memory used till now"+" "+(total/1024).toFixed(2)+"KB");
    var remaining=5120-(total/1024).toFixed(2);
    if(remaining==1){
        alert("Memory has reached its limit...you still have 1MB,Delete all unnecessary links")
    }
    else if(remaining==0){
        alert("Memory filled...Delete all unwanted links");
        var confirmtext=confirm("Do you like to wipe all your links");
        if(confirmtext==true){
            localStorage.clear();
        }else{
            console.log("closed");
        }
    }
    console.log("remaining",5120-(total/1024).toFixed(2))

    //ul.addEventListener('dblclick',(e)=>{
        //     e.preventDefault();
        //     for(let [keys,values] of Object.entries(localStorage)){
        //        localvalues.push(keys,values)
        //     }
        //    console.log(localStorage[0])
        // })