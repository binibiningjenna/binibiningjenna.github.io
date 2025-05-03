
//Typing Effect
var typingEffect = new Typed("#position", {
  strings: ["Future Web Developer", "Graphic Designer"],
  typeSpeed: 70,
  backSpeed: 25,
  loop: true,
});


// Array of projects with data
const projects = [
  {
    image: "images/project_1.png",
    title: "MacBook Pro Showcase",
    category: "Web Dev",
    description: "This website brings the sleek design and powerful features of the MacBook to life. Built with HTML and CSS, it’s a simple yet elegant space that shows how the MacBook can fuel creativity. Whether you're working or creating, this site highlights everything that makes the MacBook stand out.",
    languages: ["HTML", "CSS"],
    website: "web-dev/Project 1/project1.html",
    github: "https://github.com/binibiningjenna/binibiningjenna.github.io/tree/main/web-dev/Project%201"
  },
  {
    image: "images/project_2.png",
    title: "Paris, France Country Showcase",
    category: "Web Dev",
    description: "Paris, the City of Light, is home to iconic landmarks, vibrant culture, and timeless beauty. This site takes you on a virtual tour of Paris, showcasing its most famous spots and unique charm. Built with HTML, CSS, and Bootstrap, it’s your gateway to the magic of Paris.",
    languages: ["HTML", "CSS"],
    website: "web-dev/Project 2/project2.html",
    github: "https://github.com/binibiningjenna/binibiningjenna.github.io/tree/main/web-dev/Project%202"
  },
  {
    image: "images/project_3.png",
    title: "Looped Trend Gallery",
    category: "Web Dev",
    description: "Step into a stunning clothing gallery showcasing the latest fashion trends for women, men, and kids. With HTML, CSS, Bootstrap, and JavaScript, this site brings you the best in style, with a smooth browsing experience. Whether you're into casual wear or formal outfits, there’s something here to inspire your wardrobe.",
    languages: ["HTML", "CSS", "JavaScript"],
    website: "web-dev/Project 3/project3.html",
    github: "https://github.com/binibiningjenna/binibiningjenna.github.io/tree/main/web-dev/Project%203"
  },
  {
    image: "images/project_4.png",
    title: "Tasty Recipe API",
    category: "Web Dev",
    description: "TastyClick is your go-to spot for discovering delicious recipes from around the world. Built with HTML, CSS, JavaScript, API, and Bootstrap, this site makes it easy to find and try new dishes. From breakfast to dinner, you'll find plenty of tasty options to spice up your cooking routine.",
    languages: ["HTML", "CSS", "JavaScript"],
    website: "web-dev/Project 4/project4.html",
    github: "https://github.com/binibiningjenna/binibiningjenna.github.io/tree/main/web-dev/Project%204"
  },
  {
    image: "images/project_5.png",
    title: "Coral Wonders",
    category: "Web Dev",
    description: "Coral Wonders takes you on a journey through vibrant coral reefs. With stunning visuals and insights, it highlights the beauty and importance of underwater ecosystems. Built with HTML, CSS, JavaScript, and Bootstrap, it’s designed to engage visitors and share the wonders of coral life.",
    languages: ["HTML", "CSS", "JavaScript"],
    website: "web-dev/Project 5/project5.html",
    github: "https://github.com/binibiningjenna/binibiningjenna.github.io/tree/main/web-dev/Project%205"
  },
  {
    image: "images/project_6.png",
    title: "Planet Parallax Explorer",
    category: "Web Dev",
    description: "Planet Explorer is your destination for discovering planets and celestial wonders. Built with HTML, CSS, JavaScript, and parallax effects, this site enables interactive exploration of the cosmos. With stunning visuals and smooth animations, dive into the wonders of space and gain insights into the vast universe",
    languages: ["HTML", "CSS", "JavaScript"],
    website: "web-dev/Project 6/project6.html",
    github: "https://github.com/binibiningjenna/binibiningjenna.github.io/tree/main/web-dev/Project%206"
  },
  {
    image: "images/A02.png",
    title: "FUNZY LAND",
    category: "App Dev",
    description: "Welcome to FunzyLand! A world full of puzzles, action, and hilarious stories. Test your brain, embark on colorful mini adventures, and create wacky stories—fun awaits at every turn! FunzyLand is built using HTML, CSS, JavaScript, and PHP, providing a seamless and interactive experience.",
    languages: ["HTML", "CSS", "JavaScript", "PHP"],
    website: "ADET/A02/index.php",
    github: "https://github.com/binibiningjenna/binibiningjenna.github.io/tree/main/ADET/A02"
  },
  {
    image: "images/A03.png",
    title: "GymBoost",
    category: "App Dev",
    description: "Welcome to GymBoost! Get stronger, healthier, and more confident with us. Join exciting workouts, meet awesome trainers, and enjoy a fun fitness journey. Built with HTML, CSS, and JavaScript for a smooth and easy experience.",
    languages: ["HTML", "CSS", "JavaScript"],
    website: "ADET/A03/index.html",
    github: "https://github.com/binibiningjenna/binibiningjenna.github.io/tree/main/ADET/A03"
  },
  {
    image: "images/A04.png",
    title: "Booklet",
    category: "App Dev",
    description: "Welcome to Booklet POS! A Point of Sale system designed to manage your booklet collection. This platform allows you to easily browse and manage booklets with features built using HTML, CSS, and JavaScript for a smooth and efficient experience.",
    languages: ["HTML", "CSS", "JavaScript"],
    website: "ADET/A04/index.html",
    github: "https://github.com/binibiningjenna/binibiningjenna.github.io/tree/main/ADET/A04"
  }
];

// Language category color 
const languageColors = {
  "HTML": "#601f83",
  "CSS": "#731a1a",
  "JavaScript": "#114c30",
  "PHP": "#4C6A92"
};

// Initialize current project index and filtered projects
let currentIndex = 0;
let filteredProjects = projects;

// Function to update the project details
function updateProject() {
  const project = filteredProjects[currentIndex];

  // Update project image, title, description, badges, and links
  document.getElementById("projectImage").src = project.image;
  document.getElementById("projectTitle").textContent = project.title;
  document.getElementById("projectDescription").textContent = project.description;

  // Update language badges dynamically
  const languagesContainer = document.getElementById("projectLanguages");
  languagesContainer.innerHTML = '';
  project.languages.forEach(language => {
    const badge = document.createElement("span");
    badge.classList.add("badge", "me-2");
    badge.style.backgroundColor = languageColors[language] || "#ffffff";
    badge.textContent = language;
    languagesContainer.appendChild(badge);
  });

  // Update website and GitHub buttons with links
  document.getElementById("websiteButton").href = project.website;
  document.getElementById("githubButton").href = project.github;
}

// Function to go to the next project
function nextProject() {
  currentIndex = (currentIndex + 1) % filteredProjects.length;
  updateProject();
}

// Function to go to the previous project
function prevProject() {
  currentIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
  updateProject();
}

// Function to filter projects by category
function filterProjects(category) {
  filteredProjects = projects.filter(project => project.category === category);
  currentIndex = 0;
  updateProject();

  document.getElementById("webDevButton").classList.remove("active");
  document.getElementById("appDevButton").classList.remove("active");

  if (category === "Web Dev") {
    document.getElementById("webDevButton").classList.add("active");
  } else if (category === "App Dev") {
    document.getElementById("appDevButton").classList.add("active");
  }
}

// Event listeners for Web Dev and App Dev buttons
document.getElementById("webDevButton").addEventListener("click", () => filterProjects("Web Dev"));
document.getElementById("appDevButton").addEventListener("click", () => filterProjects("App Dev"));

// Navigation buttons
document.getElementById("nextButton").addEventListener("click", nextProject);
document.getElementById("prevButton").addEventListener("click", prevProject);

// Default
window.addEventListener("DOMContentLoaded", () => {
  filterProjects("Web Dev");
})

updateProject();

// Function to generate skill cards 
function generateSkills(data, containerId) {
  var container = document.getElementById(containerId);

  if (!container) {
    return;
  }

  var html = '';

  // Iterate through each skill category
  for (var i = 0; i < data.length; i++) {
    var category = data[i].category;
    var skills = data[i].skills;

    // Start adding HTML for the category column and card
    html +=
      '<div class="col-12 col-md-6 col-lg-4 mb-4">' +
      '<h5 class="text-center subheading pb-3" style="color:#EDECE5" data-aos="fade-up">' + category + '</h5>' +
      '<div class="card mb-3" style="background-color: #333;" data-aos="fade-up">' +
      '<div class="card-body">';

    // Loop through the skills in the current category
    for (var j = 0; j < skills.length; j++) {
      var skillName = skills[j].name;
      var skillLevel = skills[j].level;

      // Add each skill as a progress bar inside the card
      html +=
        '<h6 class="subheading fw-normal body p-2">' + skillName + '</h6>' +
        '<div class="progress mb-3">' +
        '<div class="progress-bar bg-warning text-dark body fw-bold" style="width: ' + skillLevel + '%">' + skillLevel + '%</div>' +
        '</div>';
    }

    html +=
      '</div>' +
      '</div>' +
      '</div>';
  }

  container.innerHTML = html;
}

//  Skills data
var skillData = [
  {
    category: "Technical Skills",
    skills: [
      { name: "HTML & CSS", level: 70 },
      { name: "SQL", level: 80 },
      { name: "Java, JavaScript, and PHP", level: 40 },
      { name: "Python", level: 30 },
      { name: "C, C++", level: 50 }
    ]
  },
  {
    category: "Creative Skills",
    skills: [
      { name: "Graphic Design", level: 70 },
      { name: "Web Design", level: 80 },
      { name: "Video Editing", level: 60 },
      { name: "Photography", level: 90 },
      { name: "UI/UX Design", level: 75 }
    ]
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Leadership", level: 75 },
      { name: "Communication Skill", level: 50 },
      { name: "Problem Solving and Adaptability", level: 80 },
      { name: "Time Management", level: 100 },
      { name: "Critical Thinking", level: 70 }
    ]
  }
];

generateSkills(skillData, "skills-container");

//Scroll Animation
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 2000,
    once: true,
    offset: 200,
  });
});