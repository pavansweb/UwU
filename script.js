const contentBoxes = {
  about: document.getElementById('firstBox'),
  projects: document.getElementById('secondBox'),
  contact: document.getElementById('thirdBox')
};



function loadContent(section) {
  console.log("Loading content for section:", section);

  const sections = {
    about: {
      title: 'About Me',
      content: `
        <p id='aboutmep'>Just an <mark>average 10th grader</mark> <br>
        <br>
        I am a <mark>web developer</mark> and I make websites
        <br><br>
        <mark>JEE aspirant for 2026</mark>
        If you need any information or help feel free to <a href="#contact" onclick="loadContent('contact')">Contact me </a> <br>
        <br>
        Please do check out my <a href="#projects" onclick="loadContent('projects')">Projects</a></p>
      `,
    },
    projects: {
      title: 'Projects',
      content: `
      <div></div>
        <a href="https://pavansweb.github.io/HorizonTunes/" class="item">
          <h2>Horizon Tunes</h2>
          <img src="https://i.imgur.com/V1gIGAi.jpg" alt="Horizon Tunes">
          <p>Listen to music anytime anywhere now on Horizon Tunes!</p>
        </a>
        <a href="https://pavansweb.github.io/weather" class="item">
          <h2>Weather Info</h2>
          <img src="https://i.postimg.cc/DyxfF97d/94765cc674ee3688fb3fa6478dc435aa-2.png" alt="weather!?">
          <p>Check your city's weather info now!</p>
        </a>
        <a href="https://pavansweb.github.io/flowers" class="item">
          <h2>Flowers</h2>
          <img src="https://i.postimg.cc/YCKt5mg8/flowers.jpg" alt="Flowers">
          <p>If you are sad all you need are flowers, just grab them by clicking here!</p>
        </a>
        <a href="https://pavansweb.github.io/Calculator/" class="item">
          <h2>Calculator</h2>
          <img src="https://i.postimg.cc/hvxsJwGk/Capture.jpg" alt="Calculator">
          <p>Basic arithmetic calculator (if you failed 6th grade maths)</p>
        </a>
        <a href="https://pavansweb.github.io/billCalculator/" class="item">
          <h2>Bill Splitter</h2>
          <img src="https://i.postimg.cc/kGs5JMmD/bill-Calculator.jpg" alt="Bill Splitter">
          <p>Out on a party? Split bills among friends. Just enter the amount and you can know how much each person has to pay.</p>
        </a>
        <a href="https://pavansweb.github.io/TicTacToe" class="item">
          <h2>Tic Tac Toe game</h2>
          <img src="https://i.postimg.cc/CxZK0nQv/Capture.jpg" alt="Tic Tac Toe">
          <p>Bored? play tic tac toe a 2 player game</p>
        </a>
        <a href="https://pavansweb.github.io/rickRoll/" class="item">
          <h2>TOP SECRET</h2>
          <img src="https://thumbs.dreamstime.com/b/top-secret-stamp-red-top-secret-classified-stamp-icon-illustration-top-secret-stamp-red-top-secret-classified-stamp-icon-161667856.jpg" alt="Top Secret">
          <p>PLEASE DON'T CLICK THIS PLEASEE</p>
        </a>
        <div></div>
        <p>Need any <mark>information?</mark> <a href="#contact" onclick="loadContent('contact')"> Just drop a message here </a></p>
      `
    },
    contact: {
      title: 'Contact Me',
      content: `
        <form id="contactForm" action="https://formsubmit.co/pavansh555@gmail.com" method="post">
          <label for="name"><i class="fas fa-user"></i>Your Name</label>
          <input type="text" id="name" name="name" required>
          <label for="email"><i class="fas fa-envelope"></i>Your Email</label>
          <input type="email" id="email" name="email" placeholder="eg:- you@gmail.com" required>
          <label for="message"><i class="fas fa-pencil-alt"></i>Message</label>
          <textarea id="message" name="message" placeholder="Enter Issues or any Suggestions" required></textarea>
          <input type="submit" value="Submit">
        </form>
        <p>You can also contact me on Instagram - pavan._.hegde</p>
        <p> Check out my <a href="#projects" onclick="loadContent('projects')">Projects</a></p>
      `,
    }
  };

  if (section) {
    if (window.innerWidth < 1000) {
      // For mobile view
      const firstBox = contentBoxes.about;
      if (section && sections[section]) {
        firstBox.innerHTML = `<h1>${sections[section].title} :</h1>${sections[section].content}`;
      } else {
        firstBox.innerHTML = `<h1>${sections.about.title} :</h1>${sections.about.content}`;
      }

      firstBox.classList.add('active');
    } else {
      // For desktop view
      Object.keys(contentBoxes).forEach(key => {
        if (key === section) {
          contentBoxes[key].innerHTML = `<h1>${sections[key].title} :</h1>${sections[key].content}`;
          contentBoxes[key].classList.add('active');
        } else {
          contentBoxes[key].innerHTML = '';
          contentBoxes[key].classList.remove('active');
        }
      });
    }
  } else { //default for pc
    Object.keys(contentBoxes).forEach((key) => {
      if (contentBoxes[key]) {
        contentBoxes[key].innerHTML = `<h1>${sections[key].title} :</h1>${sections[key].content}`;
      }
    });
  }

}

function checkScreenSize() {
  if (window.innerWidth < 1000) {
    console.log("mobile");
    loadContent('about'); // Load only about section for mobile view by default
  } else {
    loadContent(); // Load all sections for desktop view
    console.log("pc");
  }
}

// Event listeners
window.onload = checkScreenSize;
window.onresize = checkScreenSize;
