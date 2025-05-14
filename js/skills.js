// Data model for your tech skills
const skillData = {
  python: {
    title: "Python",
    value: 80,
    items: [
      "Data analysis tool using Pandas & Matplotlib",
      "Web-scraping bots with BeautifulSoup",
      "Flask/Django REST API"
    ]
  },
  cplusplus: {
    title: "C++",
    value: 75,
    items: [
      "Custom memory allocator",
      "Simple game physics engine",
      "Performance-critical data structures"
    ]
  },
  java: {
    title: "Java",
    value: 70,
    items: [
      "Android app for campus events",
      "Server-side REST API with Spring Boot",
      "Multithreaded chat application"
    ]
  },
  javascript: {
    title: "JavaScript",
    value: 85,
    items: [
      "React single-page app",
      "Node.js + Express backend",
      "Interactive data viz with D3.js"
    ]
  },
  htmlcss: {
    title: "HTML & CSS",
    value: 90,
    items: [
      "Responsive layouts with Flexbox & Grid",
      "CSS animations & transitions",
      "CSS preprocessors (Sass)"
    ]
  },
  react: {
    title: "React",
    value: 80,
    items: [
      "Function components & hooks",
      "State management with Context API",
      "Styled-components & shadcn/ui"
    ]
  },
  nodejs: {
    title: "Node.js",
    value: 75,
    items: [
      "REST APIs with Express",
      "Middleware & authentication",
      "Real-time with Socket.io"
    ]
  },
  sql: {
    title: "SQL",
    value: 70,
    items: [
      "Schema design & normalization",
      "Joins, indexing & optimization",
      "PostgreSQL & MySQL"
    ]
  },
  docker: {
    title: "Docker",
    value: 65,
    items: [
      "Dockerfiles & images",
      "Compose multi-container apps",
      "Container orchestration basics"
    ]
  },
  git: {
    title: "Git",
    value: 85,
    items: [
      "Branching & merging strategies",
      "Pull requests & code reviews",
      "GitHub Actions (CI/CD)"
    ]
  },
  ai: {
    title: "AI Fundamentals",
    value: 60,
    items: [
      "Linear regression & classification",
      "Intro to neural networks",
      "Course project on image recognition"
    ]
  },
  csfund: {
    title: "Algorithms & Data Structures",
    value: 80,
    items: [
      "Sorting & searching algorithms",
      "Trees, graphs & hash tables",
      "Complexity analysis (Big-O)"
    ]
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".skill-card");
  const titleEl = document.getElementById("skill-title");
  const barEl = document.getElementById("skill-bar");
  const listEl = document.getElementById("skill-list");

  function updateDetail(key) {
    const data = skillData[key];
    titleEl.textContent = data.title;
    barEl.dataset.value = data.value;
    // reset & fill bar
    barEl.style.width = "0";
    setTimeout(() => barEl.style.width = data.value + "%", 50);
    // update bullets
    listEl.innerHTML = data.items.map(i => `<li>${i}</li>`).join("");
  }

  // animate on scroll
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        barEl.style.width = barEl.dataset.value + "%";
        obs.disconnect();
      }
    });
  }, { threshold: 0.5 });
  obs.observe(barEl);

  // card click events
  cards.forEach(card => {
    card.addEventListener("click", () => {
      cards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      updateDetail(card.dataset.skill);
    });
  });

  // initial
  updateDetail(document.querySelector(".skill-card.active").dataset.skill);
});
