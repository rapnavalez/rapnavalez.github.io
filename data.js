const projects = [
  {
    title: 'Simple Dynamic Chart',
    img: './images/dynamicchart.png',
    desc: "This is a challenge from frontendmentor.io. It's a simple dynamic chart that fetch data from a JSON file. The design and information on the chart is generated from the JSON file.",
    language: [
      `<i class="fa-brands fa-html5"></i>`,
      `<i class="fa-brands fa-sass"></i>`,
      ,
      `<i class="fa-brands fa-js"></i>`,
    ],
    link: 'https://rapnavalez.github.io/expensechart.github.io/',
    category: 'challenge',
  },
  {
    title: 'Calculator App',
    img: './images/calculatorapp.png',
    desc: "This is a challenge from frontendmentor.io. It's a simple calculator app that has simple calculator functions. You also have 3 themes to select with!",
    language: [
      `<i class="fa-brands fa-html5"></i>`,
      `<i class="fa-brands fa-sass"></i>`,
      `<i class="fa-brands fa-js"></i>`,
    ],
    link: 'https://rapnavalez.github.io/calculatorchallenge/',
  },
  {
    title: 'E-commerce Product Page',
    img: './images/ecommproductpage.png',
    desc: 'A simple e-commerce product page where in you can add, view, and delete items from your cart. It also has a lightbox feature to view the product!',
    language: [
      `<i class="fa-brands fa-html5"></i>`,
      `<i class="fa-brands fa-sass"></i>`,
      `<i class="fa-brands fa-react"></i>`,
      `<i class="fa-brands fa-js"></i>`,
    ],
    link: 'https://rapnavalez.github.io/ecommerceproductpage/build',
  },
  {
    title: 'Drag & Drop Todo',
    img: './images/todoapp.png',
    desc: 'An intermidiate challenge from frontendmentor.io. This is a todo app with a twist! You can create, read, update, delete Todos. All are saved in local storage.',
    language: [
      `<i class="fa-brands fa-html5"></i>`,
      `<i class="fa-brands fa-react"></i>`,
      `<i class="fa-brands fa-sass"></i>`,
    ],
    link: 'https://rapnavalez.github.io/todowithatwist/build/',
  },
  {
    title: 'Project 5',
    img: './images/image.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem qui ea ratione, ullamnesciunt eius amet fugiat fugit in ut.',
    language: [
      `<i class="fa-brands fa-html5"></i>`,
      `<i class="fa-brands fa-css3"></i>`,
      `<i class="fa-brands fa-node"></i>`,
    ],
    link: 'google.com',
  },
];

const portfolioWrapper = document.querySelector('.portfolio-wrapper');

projects.forEach((project) => {
  portfolioWrapper.innerHTML += `

        <li class="project-card">
            <a href=${project.link} target="_blank">
                <div class="project-img">
                    <img src=${project.img} alt="">
                </div>
                <div class="project-title">${project.title}</div>
                <div class="project-desc">${project.desc}</div>
                <div class="project-technology">
                    ${project.language.join('')}
                </div>
                <div class="view-now">
                    <i class="fa-solid fa-eye"></i>
                </div>
            </a>
        </li>
    `;
});

const skills = [
  {
    name: 'Html',
    rating: 'Advanced',
    ratingBar: 70,
  },
  {
    name: 'Css',
    rating: 'Advanced',
    ratingBar: 70,
  },
  {
    name: 'JavaScript',
    rating: 'Intermidiate',
    ratingBar: 50,
  },
  {
    name: 'ReactJs',
    rating: 'Entry Level',
    ratingBar: 30,
  },
  {
    name: 'NodeJs',
    rating: 'Entry Level',
    ratingBar: 30,
  },
];

// const skillsWrapper = document.querySelector(".about-left-skills")

// skills.forEach(skill => {

//     skillsWrapper.innerHTML += `

//         <li class="skill">
//             <div class="skill-title-rating">
//                 <h4>${skill.name}</h4>
//                 <h4>${skill.rating}</h4>
//             </div>
//             <div class="skill-bar">
//                 <div class="skill-bar-outer">
//                     <div class="skill-bar-inner" style="width: ${skill.ratingBar}%;"></div>
//                 </div>
//             </div>
//         </li>
//     `
// })
