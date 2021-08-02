window.onload = () => {
  const postList = document.getElementById("posts")

  const data = window.posts

  data.posts.forEach((post) => {
    const date = new Date(post.timestamp)

    const item = document.createElement("li")
    item.className = "postItem"
    item.innerHTML = `
      <h3>
        <a href="">${post.title}<a>
      </h3>
      <p>${date.toDateString()}</p>
    `
    postList.appendChild(item)
  })
}