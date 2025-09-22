// FRONT-END (CLIENT) JAVASCRIPT HERE
const results = async function (event) {
  const username = localStorage.getItem("username")
  const response = await fetch(`/results?username=${encodeURIComponent(username)}`)
  const data = await response.json()

  const body = document.getElementById("results").getElementsByTagName("tbody")[0]
  body.innerHTML = ""

  data.forEach((obj, i) => {
    const row = body.insertRow()

    row.insertCell(0).innerText = obj.task
    row.insertCell(1).innerText = obj.priority
    row.insertCell(2).innerText = obj.creation
    row.insertCell(3).innerText = obj.deadline

    const del = row.insertCell(4)
    const delButton = document.createElement("button")
    delButton.innerText = "Delete"
    const info = JSON.stringify({ id: obj._id, username })

    delButton.onclick = async () => {
      await fetch("/delete", {
        method: "POST",
        body: info,
        headers: { 'Content-Type': 'application/json' }
      })
      results()
    }

    del.appendChild(delButton)

    const modify = row.insertCell(5)
    const modifyButton = document.createElement("button")
    modifyButton.innerText = "Modify"

    modifyButton.onclick = () => openModal(obj, i)
    modify.appendChild(modifyButton)
  });
}

const login = async function (event) {
  event.preventDefault()
  const username = document.querySelector("#username").value
  const password = document.querySelector("#password").value

  const response = await fetch("/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: { 'Content-Type': 'application/json' }
  })

  const data = await response.json()
  
  if (!response.ok) {
    alert(data.message);
    return;
  }
  
  if (data.message) {
    alert(data.message)
  }
  
  localStorage.setItem("username", username)

  document.getElementById("login").style.display = "none"
  document.getElementById("app").style.display = "block"
  results()
}
const submit = async function (event) {
  // stop form submission from trying to load
  // a new .html page for displaying results...
  // this was the original browser behavior and still
  // remains to this day
  event.preventDefault()

  const username = localStorage.getItem("username")
  const task = document.querySelector("#task").value
  const priority = document.querySelector("#priority").value
  const body = JSON.stringify({ username, task, priority })

  const response = await fetch("/submit", {
    method: "POST",
    body,
    headers: { 'Content-Type': 'application/json' }
  })

  document.querySelector("#task").value = ""
  results()
}

const openModal = (obj, i) => {
  const modal = document.getElementById("modify")
  document.getElementById("editTask").value = obj.task
  document.getElementById("editPriority").value = obj.priority

  const save = document.getElementById("save")
  const close = document.querySelector(".close")
  const username = localStorage.getItem("username");

  modal.style.display = "flex"

  save.onclick = async () => {
    const newTask = document.getElementById("editTask").value
    const newPriority = document.getElementById("editPriority").value

    await fetch("/modify", {
      method: "POST",
      body: JSON.stringify({ id: obj._id, username, newTask, newPriority }),
      headers: { 'Content-Type': 'application/json' }
    })

    modal.style.display = "none"
    results()
  }

  close.onclick = () => {
    modal.style.display = "none"
  }
}
window.onload = function () {
  document.getElementById("login-button").onclick = login
  document.getElementById("task-button").onclick = submit

  if (localStorage.getItem("username")) {
    document.getElementById("login").style.display = "none"
    document.getElementById("app").style.display = "block"
    results()
  }

  this.document.getElementById("logout-button").onclick = () => {
    this.localStorage.removeItem("username")
    this.location.reload()
  }
}