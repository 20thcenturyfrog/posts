document.addEventListener("DOMContentLoaded", function (e) {
  fetchPosts("https://jsonplaceholder.typicode.com/posts");
});

function createPost(p) {
  const post = document.createElement("div");
  post.className = "post";
  post.innerHTML = `<h1 class="title">Заголовок: ${p.title}</h1><p class="article"><b>Статья:</b> ${p.body}</p>`;
  document.body.appendChild(post);
}

async function fetchPosts(url) {
  try {
    const response = await fetch(url);
    const postArray = await response.json();
    for (const item of postArray) {
      createPost(item);
    }
  } catch (error) {
    console.log(error.message);
  }
}
