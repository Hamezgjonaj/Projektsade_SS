var close = document.getElementsByClassName("close");
var i;
var selectedRole = "Student";
var userList = [];
var filteredList = [];

function startUp() {
  var test = localStorage.getItem("UserList");
  var existingList = JSON.parse(test);
  if (existingList.length > 0) {
    this.userList = existingList;
    this.showList(this.userList)
  }
}

function newElement() {
  if (document.getElementById("myInput").value == "") {
    alert("You must write something!");
  } else {
    this.userList.push({
      name: document.getElementById("myInput").value,
      role: this.selectedRole,
    });
    localStorage.setItem("UserList", JSON.stringify(this.userList));
    this.showList(this.userList);
  }
}

function showList(list) {
  document.getElementById("myUL").innerHTML = "";
  list.forEach((element) => {
    var li = document.createElement("li");
    li.classList.add("list-element");
    var inputValue = element.name;
    // var role = element.role;
    var t = document.createElement("div");
    t.classList.add("user-container");
    var userImage = document.createElement("img");
    userImage.classList.add("user-image");
    userImage.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png";
    t.appendChild(userImage);
    var userInfo = document.createElement("div");
    userInfo.classList.add("user-info");
    var userName = document.createElement("div");
    userName.classList.add("user-name");
    userName.id = "current";
    userName.innerHTML += inputValue;
    userInfo.appendChild(userName);
    var userRole = document.createElement("div");
    userRole.classList.add("user-role");
    userRole.innerHTML += element.role;
    userInfo.appendChild(userRole);
    t.appendChild(userInfo);
    li.appendChild(t);
    if (inputValue === "") {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("div");
    span.className = "close";
    span.setAttribute("data-index", list.indexOf(element));
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        var itemIndex = this.getAttribute("data-index");
        list.splice(itemIndex, 1);
        localStorage.setItem("UserList", JSON.stringify(list));
        var div = this.parentElement;
        div.style.display = "none";
      };
    }
  });
}

function selectRole(role) {
  this.selectedRole = role;
}

function filterList($event) {
  this.filteredList = [];
  for (let index = 0; index < this.userList.length; index++) {
    if (this.userList[index].name.includes($event.target.value)) {
      this.filteredList.push(this.userList[index]);
    }
  }
  this.showList(this.filteredList);
}
