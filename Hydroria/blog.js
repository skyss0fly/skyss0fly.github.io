// blog.js

const blogData = [
  {
    title: "Server Launch Announcement",
    author: "Skyss0fly",
    date: "2025-06-06",
    content: "We're excited to announce the launch of Hydroria, a new aquatic-themed PvP and Factions server with plot support. Dive in today!"
  },
  {
    title: "Patch Notes - v1.0.1",
    author: "AdminTeam",
    date: "2025-06-05",
    content: "Fixed some early bugs and improved underwater faction mechanics. Thanks for all your feedback!"
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
