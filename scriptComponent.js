var close = document.getElementsByClassName("close");
var i;
var selectedRole = "Student";
var userList = [];
var filteredList = [];
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

function newElement() {
  this.userList.push({
    name: document.getElementById("myInput").value,
    role: this.selectedRole,
  });
  this.showList(this.userList);
}

function showList(list) {
  document.getElementById("myUL").innerHTML = "";
  list.forEach((element) => {
    var li = document.createElement("li");
    li.classList.add("list-element");
    var inputValue = element.name;
    var role = element.role;
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
    userName.innerHTML += inputValue;
    userInfo.appendChild(userName);
    var userRole = document.createElement("div");
    userRole.classList.add("user-role");
    userRole.innerHTML += role;
    userInfo.appendChild(userRole);
    t.appendChild(userInfo);
    li.appendChild(t);
    if (inputValue === "") {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("span");
    span.className = "close";
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
      };
    }
  });
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

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
