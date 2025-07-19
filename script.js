document.getElementById('userForm').addEventListener('submit', submitContact);

function submitContact(event) {
      event.preventDefault(); // Prevent the default form submission behavior
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;

      if (name && email) {
        alert("Thank you, " + name + "! Your details have been submitted.");
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
      } else {
        alert("Please fill in all the fields.");
      }
    }

function addTask() {
      const input = document.getElementById('taskInput');
      const taskList = document.getElementById('taskList');
      if (input.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = input.value;
        taskList.appendChild(li);
        input.value = '';
      }
    }

function addImage() {
    const url = document.getElementById('imgUrl').value;
    if (url) {
        const img = document.createElement('img');
        img.src = url;
        img.style.width = "100px";
        img.style.margin = "5px";
        document.getElementById('gallery').appendChild(img);
        document.getElementById('imgUrl').value = '';
    } else {
        alert("Please enter an image URL.");
    }
}