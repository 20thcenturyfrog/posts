const form = document.forms[0];
const button = document.getElementById("button");
const container = document.getElementById("container");

button.addEventListener("click", function (e) {
  e.preventDefault();
  let post = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value,
  };

  form.reset();

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((post) => {
      let postItem = document.createElement("div");
      postItem.className = "post-item";
      postItem.innerHTML = `<h1 class="title">${post.title}</h1><p class="body">${post.body}</p>`;
      container.appendChild(postItem);
    })
    .catch((error) => console.log(error.message));
});
