
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
      description: "This website brings the sleek design and powerful features of the MacBook to life. Built with HTML and CSS, it’s a simple yet elegant space that shows how the MacBook can fuel creativity. Whether you're working or creating, this site highlights everything that makes the MacBook stand out.",
      languages: ["HTML", "CSS"],
      website: "projects/Project 1/project1.html",
      github: "https://github.com/binibiningjenna/binibiningjenna.github.io/tree/main/projects/Project%201"
  },
  {
      image: "images/project_2.png",
      title: "Paris, France Country Showcase",
      description: "Paris, the City of Light, is home to iconic landmarks, vibrant culture, and timeless beauty. This site takes you on a virtual tour of Paris, showcasing its most famous spots and unique charm. Built with HTML, CSS, and Bootstrap, it’s your gateway to the magic of Paris.",
      languages: ["HTML", "CSS"],
      website: "projects/Project 2/project2.html",
      github: "https://github.com/binibiningjenna/binibiningjenna.github.io/tree/main/projects/Project%202"
  },
  {   
      image: "images/project_3.png",
      title: "Looped Trend Gallery",
      description: "Step into a stunning clothing gallery showcasing the latest fashion trends for women, men, and kids. With HTML, CSS, Bootstrap, and JavaScript, this site brings you the best in style, with a smooth browsing experience. Whether you're into casual wear or formal outfits, there’s something here to inspire your wardrobe.",
      languages: ["HTML", "CSS", "JavaScript"],
      website: "projects/Project 3/project3.html",
      github: "https://github.com/binibiningjenna/binibiningjenna.github.io/tree/main/projects/Project%203"
  },
  {
      image: "images/project_4.png",
      title: "Tasty Recipe API",
      description: "TastyClick is your go-to spot for discovering delicious recipes from around the world. Built with HTML, CSS, JavaScript, API, and Bootstrap, this site makes it easy to find and try new dishes. From breakfast to dinner, you'll find plenty of tasty options to spice up your cooking routine.",
      languages: ["HTML", "CSS", "JavaScript"],
      website: "projects/Project 4/project4.html",
      github: "https://github.com/binibiningjenna/binibiningjenna.github.io/tree/main/projects/Project%204"
  },
  {
      image: "images/project_5.png",
      title: "Coral Wonders",
      description: "Coral Wonders takes you on a journey through vibrant coral reefs. With stunning visuals and insights, it highlights the beauty and importance of underwater ecosystems. Built with HTML, CSS, JavaScript, and Bootstrap, it’s designed to engage visitors and share the wonders of coral life.",
      languages: ["HTML", "CSS", "JavaScript"],
      website: "projects/Project 5/project5.html",
      github: "https://github.com/binibiningjenna/binibiningjenna.github.io/tree/main/projects/Project%205"
  },
  {
      image: "images/project_6.png",
      title: "Planet Parallax Explorer",
      description: "Planet Explorer is your destination for discovering planets and celestial wonders. Built with HTML, CSS, JavaScript, and parallax effects, this site enables interactive exploration of the cosmos. With stunning visuals and smooth animations, dive into the wonders of space and gain insights into the vast universe",
      languages: ["HTML", "CSS", "JavaScript"],
      website: "projects/Project 6/project6.html",
      github: "https://github.com/binibiningjenna/binibiningjenna.github.io/tree/main/projects/Project%206"
  }
];

// Language category color 
const languageColors = {
  "HTML": "#601f83", 
  "CSS": "#731a1a",  
  "JavaScript": "#114c30" 
};

// Initialize current project index
let currentIndex = 0;

// Function to update the project details on the page
function updateProject() {
  const project = projects[currentIndex];
  
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
  currentIndex = (currentIndex + 1) % projects.length; 
  updateProject();
}

// Function to go to the previous project
function prevProject() {
  currentIndex = (currentIndex - 1 + projects.length) % projects.length; 
  updateProject();
}

// Navigation buttons
document.getElementById("nextButton").addEventListener("click", nextProject);
document.getElementById("prevButton").addEventListener("click", prevProject);

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
        '<h5 class="text-center subheading pb-3" style="color:#EDECE5">' + category + '</h5>' +
        '<div class="card mb-3" style="background-color: #333;">' +
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
