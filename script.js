function loadContent(section) {
    const contentBox = document.getElementById('content');

    let content = '';
    switch(section) {
      case 'about':
        content = `
          <h1>About Me :</h1>
          <p id = 'aboutmep'> Just an average 10th grader <br> 
          I am a web developer and i love to create fun projects <br> 
          If you need any information or help fell free to contact me <br> <br>
          Please do check out my projects</p>
        `;
        break;
      case 'projects':
        content = `
          <h1>Projects :</h1>
          <a href="https://pavansweb.github.io/HorizonTunes/" class="item">
            <h2>Horizon Tunes</h2>
            <img src="https://i.imgur.com/V1gIGAi.jpg" alt="Horizon Tunes">
            <p>Listen to music anytime anywhere now on Horizon Tunes!</p>
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
          <a href="https://pavansweb.github.io/rickRoll/" class="item">
            <h2>TOP SECRET</h2>
            <img src="https://thumbs.dreamstime.com/b/top-secret-stamp-red-top-secret-classified-stamp-icon-illustration-top-secret-stamp-red-top-secret-classified-stamp-icon-161667856.jpg" alt="Top Secret">
            <p></p>
          </a>
        `;
        break;

        
      case 'skills':
        content = `
          <h1>Skills :</h1>
          <p id = 'skillsp'>I basically love to play with HTML, CSS and JavaScript <br> But my other favorites are C++ java and python <br> ofc i do app development too <br> You can find my websites in the projects section <br> <br> Feel free to contact mee!!!</p>
        `;
        break;
      case 'contact':
        content = `
          <h1><i class="fas fa-envelope"></i>Contact Us</h1>
        <form id="contactForm" action="https://formsubmit.co/pavansh555@gmail.com" method="post">
            <label for="name"><i class="fas fa-user"></i>Your Name</label>
            <input type="text" id="name" name="name"  required>
        
            <label for="email"><i class="fas fa-envelope"></i>Your Email</label>
            <input type="email" id="email" name="email" placeholder="eg:- you@gmail.com" required>
        
            <label for="message"><i class="fas fa-pencil-alt"></i>Message</label>
            <textarea id="message" name="message" placeholder="Enter Issues or any Suggestions" required></textarea>
        
            <input type="submit" value="Submit">
        </form>
        <p>You can also contact me on Instagram - pavan._.hegde
 
    
        `;
        break;
      default:
        content = '<h1>Welcome!</h1>';
    }

    contentBox.innerHTML = content;
  }

  // Load the default section
  loadContent('projects');

