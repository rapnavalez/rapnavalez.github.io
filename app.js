// ------------Header related scripts--------------
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('header-on-scroll');
  } else {
    header.classList.remove('header-on-scroll');
  }
});
// --------------------------------------------------

// ------------Menu / Nav related scripts--------------
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav li');

burger.addEventListener('click', () => {
  navLinks.forEach((link) => (link.style.animation = 'unset'));
  if (!burger.classList.contains('cross')) {
    burger.classList.add('cross');
    nav.classList.add('show-nav');
    navLinks.forEach((link, index) => {
      link.style.animation = `entry ${index * 0.2 + 0.5}s .3s forwards`;
    });
  } else {
    navLinks.forEach((link, index) => {
      link.style.animation = `exit ${index * 0.2 + 0.5}s forwards`;
    });
    setTimeout(() => {
      burger.classList.remove('cross');
      nav.classList.remove('show-nav');
      navLinks.forEach((link) => (link.style.animation = 'unset'));
    }, 700);
  }
});

// *****Closes mobile menu on scroll*****
window.addEventListener('scroll', () => {
  if (window.innerWidth <= 767.98) {
    navLinks.forEach((link, index) => {
      link.style.animation = `exit ${index * 0.2 + 0.5}s forwards`;
    });
    setTimeout(() => {
      burger.classList.remove('cross');
      nav.classList.remove('show-nav');
      navLinks.forEach((link) => (link.style.animation = 'unset'));
    }, 700);
  }
});

// --------------------------------------------------

// ------------Theme related scripts--------------
const darkModeSwitch = document.querySelector('.dark-mode-switch');
const lightLabel = document.querySelector('.light-label');
const darkLabel = document.querySelector('.dark-label');
const html = document.querySelector('html');

const setTheme = (theme) => window.localStorage.setItem('theme', theme);

const theme = window.localStorage.getItem('theme') || 'light';

window.onload = () => {
  html.setAttribute('data-theme', theme);
  if (theme === 'light') {
    darkLabel.style.opacity = '.4';
    darkLabel.style.pointerEvents = 'auto';
    lightLabel.style.opacity = '1';
    lightLabel.style.pointerEvents = 'none';
    darkModeSwitch.checked = false;
  } else {
    darkLabel.style.opacity = '1';
    lightLabel.style.pointerEvents = 'none';
    lightLabel.style.opacity = '.4';
    lightLabel.style.pointerEvents = 'auto';
    darkModeSwitch.checked = true;
  }
};

darkModeSwitch.addEventListener('change', () => {
  if (darkModeSwitch.checked) {
    html.setAttribute('data-theme', 'dark');
    lightLabel.style.opacity = '.4';
    darkLabel.style.opacity = '1';
    darkLabel.style.pointerEvents = 'none';
    lightLabel.style.pointerEvents = 'auto';
    setTheme('dark');
  } else {
    html.setAttribute('data-theme', 'light');
    darkLabel.style.opacity = '.4';
    lightLabel.style.opacity = '1';
    lightLabel.style.pointerEvents = 'none';
    darkLabel.style.pointerEvents = 'auto';
    setTheme('light');
  }
});

// ------------Scroll on view related scripts--------------

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.page-link');
const tracker = document.querySelector('.location-tracker');
const body = document.querySelector('body');
const footer = document.querySelector('footer');
const skillBar = document.querySelectorAll('.skill-bar-inner');
const about = document.querySelector('.about');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 300) {
      current = section.getAttribute('id');
    }
  });

  navLi.forEach((li) => {
    li.classList.remove('active');
    if (li.classList.contains(current)) {
      li.classList.add('active');
    }
  });

  //Tech Stack rating
  const skillRating = [80, 80, 50, 30, 30];
  if (about.classList.contains('active')) {
    skillBar.forEach((skill, index) => {
      skill.style.width = `${skillRating[index]}%`;
    });
  } else {
    skillBar.forEach((skill, index) => {
      skill.style.width = '0%';
    });
  }

  //Tracker script (Top scrollbar)

  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  tracker.style.width = `${(window.scrollY / height) * 100}%`;
});

// --------------------------------------------------

// ------------------Form validation----------------------

const inputs = document.querySelectorAll('.form-input');
const errors = document.querySelectorAll('.error');
const sendBtn = document.querySelector('.form-submit');
const checkIcons = document.querySelectorAll('.check-icon');

inputs.forEach((input, index) => {
  input.addEventListener('focus', (e) => {
    let focus = e.target.value;
    if (!focus) {
      input.addEventListener('change', (e) => {
        let entry = e.target.value;
        let validation;
        let err;
        const conditions = [
          entry.length >= 4,
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value),
          entry.length >= 10,
        ];
        switch (e.target.name) {
          case 'name':
            validation = conditions[0];
            break;
          case 'email':
            validation = conditions[1];
            break;
          case 'message':
            validation = conditions[2];
            break;
          default:
            break;
        }

        if (validation) {
          e.target.classList.add('valid-input');
          e.target.classList.remove('invalid-input');
          errors[index].innerHTML = '';
          checkIcons[index].classList.add('fa-circle-check');
          checkIcons[index].classList.remove('fa-circle-xmark');
        } else {
          e.target.classList.add('invalid-input');
          e.target.classList.remove('valid-input');
          checkIcons[index].classList.remove('fa-circle-check');
          checkIcons[index].classList.add('fa-circle-xmark');

          switch (e.target.name) {
            case 'name':
              err = '*Please enter at least 4 characters.';
              errors[0].innerHTML = err;
              break;
            case 'email':
              err = '*Hey, the email is not valid.';
              errors[1].innerHTML = err;
              break;
            case 'message':
              err = "*Tell me more. I'd love to hear from you!";
              errors[2].innerHTML = err;
              break;
            default:
              break;
          }
        }

        if (
          inputs[0].classList.contains('valid-input') &&
          inputs[1].classList.contains('valid-input') &&
          inputs[2].classList.contains('valid-input')
        ) {
          sendBtn.disabled = false;
        } else {
          sendBtn.disabled = true;
        }
      });
    } else {
      input.addEventListener('keyup', (e) => {
        let entry = e.target.value;
        let validation;
        let err;
        const conditions = [
          entry.length >= 4,
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value),
          entry.length >= 10,
        ];
        switch (e.target.name) {
          case 'name':
            validation = conditions[0];
            break;
          case 'email':
            validation = conditions[1];
            break;
          case 'message':
            validation = conditions[2];
            break;
          default:
            break;
        }

        if (validation) {
          e.target.classList.add('valid-input');
          e.target.classList.remove('invalid-input');
          errors[index].innerHTML = '';
          checkIcons[index].classList.add('fa-circle-check');
          checkIcons[index].classList.remove('fa-circle-xmark');
        } else {
          e.target.classList.add('invalid-input');
          e.target.classList.remove('valid-input');
          checkIcons[index].classList.remove('fa-circle-check');
          checkIcons[index].classList.add('fa-circle-xmark');

          switch (e.target.name) {
            case 'name':
              err = '*Please enter at least 4 characters.';
              errors[0].innerHTML = err;
              break;
            case 'email':
              err = '*Hey, the email is not valid.';
              errors[1].innerHTML = err;
              break;
            case 'message':
              err = "*Tell me more. I'd love to hear from you!";
              errors[2].innerHTML = err;
              break;
            default:
              break;
          }
        }

        if (
          inputs[0].classList.contains('valid-input') &&
          inputs[1].classList.contains('valid-input') &&
          inputs[2].classList.contains('valid-input')
        ) {
          sendBtn.disabled = false;
        } else {
          sendBtn.disabled = true;
        }
      });
    }
  });
});

// ----------------------End of form validation----------------------------

// -------------------------Send email----------------------------------
const senderName = document.querySelector('.name');
const senderEmail = document.querySelector('.email');
const senderMessage = document.querySelector('.message');
const alert = document.querySelector('.alert');
const alertMessage = document.querySelector('.alert-message');

let i = 0.9;

const sendEmail = () => {
  sendBtn.innerHTML = 'Sending...';
  Email.send({
    SecureToken: '38b5f125-d1a8-4c3f-8200-b93bf93f722f',
    To: 'rapwebdev@gmail.com',
    From: 'rapwebdev@gmail.com',
    Subject: 'EMAIL FROM YOUR WEBSITE',
    Body: `Name: ${senderName.value} <br>
        Email: ${senderEmail.value} <br>
        Message: ${senderMessage.value} <br>`,
  }).then(
    inputs.forEach((input) => input.classList.remove('valid-input')),
    inputs.forEach((input) => (input.value = '')),
    checkIcons.forEach((icon) => icon.classList.remove('fa-circle-check')),
    (sendBtn.innerHTML = 'Send'),
    (sendBtn.disabled = true),
    (alertMessage.innerHTML = 'Message Sent!'),
    alert.classList.add('show-alert'),
    setTimeout(() => {
      alert.classList.remove('show-alert');
    }, 5000)
  );
};
