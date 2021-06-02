function getEmployees() {
  let url = "http://sandbox.bittsdevelopment.com/code1/fetchemployees.php";
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      let employees = JSON.parse(this.responseText);
      console.log(employees);
      for (id in employees) {
        console.log(employees);
        var row = document.createElement("div");
        if (employees[id].employeeisfeatured === "1") {
          var crownIcon = document.createElement("p");
          crownIcon.setAttribute("id", "crown");
          crownIcon.innerHTML = "&#128081;";
          row.appendChild(crownIcon);
        }
        var createImg = document.createElement("img");
        createImg.src = 'http://sandbox.bittsdevelopment.com/code1/employeepics/' + id + '.jpg';
        createImg.alt = "picture of employee";
        row.appendChild(createImg);
        var h2 = document.createElement("h2");
        h2.innerText = employees[id].employeefname + " " + employees[id].employeelname;
        row.appendChild(h2);
        var eBio = document.createElement("p");
        eBio.setAttribute("id", "bio");
        eBio.innerText = employees[id].employeebio;
        row.appendChild(eBio);
        // add bio
        for (var i = 0; i < employees[id].roles.length; i++) {
          var createSpan = document.createElement("span");
          createSpan.innerText = employees[id].roles[i].rolename;
          createSpan.style.backgroundColor = employees[id].roles[i].rolecolor;
          row.appendChild(createSpan);
        }
        document.body.appendChild(row);
      }
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}
window.onload = function() {
  getEmployees();
};
