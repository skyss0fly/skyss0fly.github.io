// blog.js

const blogData = [
  {
    title: "Website Live Preview 2 Launched",
    author: "skyss0fly",
    date: "2025-06-06",
    content: "We're excited to announce the launch of the seconds live preview of the website!"
  },
  {
    title: "Test Blog",
    author: "skyss0fly",
    date: "2025-06-06",
    content: "Test!"
  }
];

// Render blog posts
const blogContainer = document.getElementById("blogContainer");

blogData.forEach(post => {
  const blogEl = document.createElement("div");
  blogEl.classList.add("blog-post");
  blogEl.innerHTML = `
    <h3>${post.title}</h3>
    <div class="meta">By ${post.author} on ${post.date}</div>
    <p>${post.content}</p>
  `;
  blogContainer.appendChild(blogEl);
});
