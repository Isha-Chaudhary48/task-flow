import { response } from "express";

let container = document.querySelector(".container");

let input = document.getElementById("inputWork");

let taskLists = document.getElementById("taskLists");

let Add = () => {
  if (input.value == "") {
    alert("please add some task");
  } else {
    let addContent = document.createElement("div");
    addContent.className = "taskItem";

    addContent.innerHTML = `<p>${input.value}</p> <i class="fa-solid fa-trash"></i>`;
    addContent.style.backgroundColor = "white";

    taskLists.appendChild(addContent);
    input.value = "";
    document.getElementById("todoForm").value = "";
    addContent.querySelector("i").addEventListener("click", async function () {
      const taskId = addContent.getAttribute("data-id");
      try {
        // Send a DELETE request to the backend with the task ID
        const response = await fetch(`/todos/${taskId}`, {
          method: "DELETE",
        });

        if (response.ok) {
          // Remove the task from the UI after successful deletion
          addContent.remove();
        } else {
          console.error("Failed to delete todo");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    });
  }
};
