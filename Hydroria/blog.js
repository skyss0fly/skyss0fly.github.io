document.addEventListener("DOMContentLoaded", () => {
  const blogData = [
    {
      title: "Website Live Preview 2 Launched",
      author: "skyss0fly",
      date: "2025-06-06",
      tags: ["announcement", "release"],
      content: "We're excited to announce the launch of the second live preview of the website! Everything from UI to blog rendering has been polished. Stay tuned for more features coming this week including tag filtering, UI animations, and future roadmap planning!"
    },
    {
      title: "Test Blog",
      author: "skyss0fly",
      date: "2025-06-06",
      tags: ["testing"],
      content: "Test!"
    }
  ];

  const blogContainer = document.getElementById("blogContainer");
  const tagFilters = document.getElementById("tagFilters");

  let currentFilter = null;

  const uniqueTags = [...new Set(blogData.flatMap(post => post.tags))];

  uniqueTags.forEach(tag => {
    const btn = document.createElement("button");
    btn.textContent = `#${tag}`;
    btn.classList.add("tag-btn");
    btn.addEventListener("click", () => {
      currentFilter = tag === currentFilter ? null : tag;
      renderPosts();
      updateTagButtons();
    });
    tagFilters.appendChild(btn);
  });

  function updateTagButtons() {
    document.querySelectorAll(".tag-btn").forEach(btn => {
      if (btn.textContent === `#${currentFilter}`) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  function renderPosts() {
    blogContainer.innerHTML = "";

    const filtered = currentFilter
      ? blogData.filter(post => post.tags.includes(currentFilter))
      : blogData;

    filtered.forEach(post => {
      const blogEl = document.createElement("div");
      blogEl.classList.add("blog-post");

      const fullContent = post.content;
      const shortContent = fullContent.length > 150 ? fullContent.slice(0, 150) + "..." : fullContent;

      blogEl.innerHTML = `
        <h3>${post.title}</h3>
        <div class="meta">By ${post.author} on ${post.date}</div>
        <p class="blog-content">${shortContent}</p>
        ${fullContent.length > 150 ? '<button class="read-more-btn">Read More</button>' : ""}
        <div class="tags">${post.tags.map(tag => `<span>#${tag}</span>`).join(" ")}</div>
      `;

      if (fullContent.length > 150) {
        blogEl.querySelector(".read-more-btn").addEventListener("click", (e) => {
          const contentEl = blogEl.querySelector(".blog-content");
          contentEl.textContent = fullContent;
          e.target.remove();
        });
      }

      blogContainer.appendChild(blogEl);
    });
  }

  renderPosts();
});
