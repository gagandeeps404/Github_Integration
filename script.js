function makeAjaxCall(url, cb){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();
  xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200){
      //console.log(xhr.response);
      var responseJson = JSON.parse(xhr.response);
      cb(responseJson);
    }
  }
}

//makeAjaxCall("https://api.github.com/users/btford");

var btnElem = document.getElementById("getDataBtn");
var userIdElem = document.getElementById("userId");
var usernameElem = document.getElementById("username");
var avatarElem = document.getElementById("avatar");
var nameElem = document.getElementById("name");
var companyElem = document.getElementById("company");
var repoBtnElem = document.getElementById("getRepo");
var tableElem = document.getElementById("repoInfo");

function makeAjaxCall(url, cb){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();
  xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200){
      //console.log(xhr.response);
      var responseJson = JSON.parse(xhr.response);
      cb(responseJson);
    }
  }
}

//makeAjaxCall("https://api.github.com/users/btford");

var btnElem = document.getElementById("getDataBtn");
var userIdElem = document.getElementById("userId");
var usernameElem = document.getElementById("username");
var avatarElem = document.getElementById("avatar");
var nameElem = document.getElementById("name");
var companyElem = document.getElementById("company");
var repoBtnElem = document.getElementById("getRepo");
var tableElem = document.getElementById("repoInfo");
if(btnElem){
 btnElem.addEventListener("click", buttonClickHandler);
}

function buttonClickHandler(){
  var userId = userIdElem.value;
  var url = "https://api.github.com/users/" + userId;
  makeAjaxCall(url, renderUserData);
}

function renderUserData(obj){
    usernameElem.innerHTML = obj.login;
    avatarElem.src = obj.avatar_url;
    nameElem.innerHTML = obj.name;
    companyElem.innerHTML = obj.company;
}








  
function makeAjaxCall(url, cb){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();
  xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200){
      //console.log(xhr.response);
      var responseJson = JSON.parse(xhr.response);
      cb(responseJson);
    }
  }
}

//makeAjaxCall("https://api.github.com/users/btford");

var btnElem = document.getElementById("getDataBtn");
var userIdElem = document.getElementById("userId");
var usernameElem = document.getElementById("username");
var avatarElem = document.getElementById("avatar");
var nameElem = document.getElementById("name");
var companyElem = document.getElementById("company");
var repoBtnElem = document.getElementById("getRepo");
var tableElem = document.getElementById("repoInfo");
if(btnElem){
 btnElem.addEventListener("click", buttonClickHandler);
}

function buttonClickHandler(){
  var userId = userIdElem.value;
  var url = "https://api.github.com/users/" + userId;
  makeAjaxCall(url, renderUserData);
}

function renderUserData(obj){
    usernameElem.innerHTML = obj.login;
    avatarElem.src = obj.avatar_url;
    nameElem.innerHTML = obj.name;
    companyElem.innerHTML = obj.company;
}








  
function makeAjaxCall(url, cb){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();
  xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200){
      //console.log(xhr.response);
      var responseJson = JSON.parse(xhr.response);
      cb(responseJson);
    }
  }
}

//makeAjaxCall("https://api.github.com/users/btford");

var btnElem = document.getElementById("getDataBtn");
var userIdElem = document.getElementById("userId");
var usernameElem = document.getElementById("username");
var avatarElem = document.getElementById("avatar");

var nameElem = document.getElementById("name");
var companyElem = document.getElementById("company");
var repoBtnElem = document.getElementById("getRepo");
var tableElem = document.getElementById("repoInfo");
if(btnElem){
 btnElem.addEventListener("click", buttonClickHandler);
}

function buttonClickHandler(){
  var userId = userIdElem.value;
  var url = "https://api.github.com/users/" + userId;
  makeAjaxCall(url, renderUserData);
}

function renderUserData(obj){
    usernameElem.innerHTML = obj.login;
    avatarElem.src = obj.avatar_url;
    nameElem.innerHTML = obj.name;
    companyElem.innerHTML = obj.company;
}
repoBtnElem.addEventListener("click", function(){
var url = "https://api.github.com/users/" + userIdElem.value + "/repos";
makeAjaxCall(url, renderRepoData);
});
function renderRepoData(data){
var tbodyElem = tableElem.querySelector("tbody");
for (var i=0; i<data.length;i++){
var repoData = data[i];
console.log(repoData);
var trElem = document.createElement("tr");
var checkTdElem = document.createElement("td");
var nameTdElem = document.createElement("td");
var descTdElem = document.createElement("td");
var langTdElem = document.createElement("td");
var checkInputElem = document.createElement("input");
var linkElem = document.createElement("a");
checkInputElem.type="checkbox";
linkElem.setAttribute("href", repoData.html_url);
linkElem.setAttribute("target", "_blank");
linkElem.innerHTML = repoData.name;
descTdElem.innerHTML = repoData.description;  
langTdElem.innerHTML = repoData.language;
checkTdElem.appendChild(checkInputElem);
nameTdElem.appendChild(linkElem);
trElem.appendChild(checkTdElem);
trElem.appendChild(nameTdElem);
trElem.appendChild(descTdElem);
trElem.appendChild(langTdElem);
tbodyElem.appendChild(trElem);

  }
}









  