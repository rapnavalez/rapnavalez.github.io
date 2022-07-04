const projects = [
    {
        title: "Project 1",
        img: "./images/image.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem qui ea ratione, ullamnesciunt eius amet fugiat fugit in ut.",
        language: [
            `<i class="fa-brands fa-html5"></i>`, 
            `<i class="fa-brands fa-css3"></i>`, 
            `<i class="fa-brands fa-react"></i>`, 
            `<i class="fa-brands fa-js"></i>`
        ],
        link: "google.com"
    },
    {
        title: "Project 2",
        img: "./images/image.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem qui ea ratione, ullamnesciunt eius amet fugiat fugit in ut.",
        language: [
            `<i class="fa-brands fa-html5"></i>`, 
            `<i class="fa-brands fa-react"></i>`, 
            `<i class="fa-brands fa-js"></i>`
        ],
        link: "google.com"
    },
    {
        title: "Project 3",
        img: "./images/image.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem qui ea ratione, ullamnesciunt eius amet fugiat fugit in ut.",
        language: [
            `<i class="fa-brands fa-html5"></i>`, 
            `<i class="fa-brands fa-react"></i>`, 
            `<i class="fa-brands fa-js"></i>`
        ],
        link: "google.com"
    },
    {
        title: "Project 4",
        img: "./images/image.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem qui ea ratione, ullamnesciunt eius amet fugiat fugit in ut.",
        language: [
            `<i class="fa-brands fa-html5"></i>`, 
            `<i class="fa-brands fa-react"></i>`, 
            `<i class="fa-brands fa-js"></i>`
        ],
        link: "google.com"
    },
    {
        title: "Project 5",
        img: "./images/image.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem qui ea ratione, ullamnesciunt eius amet fugiat fugit in ut.",
        language: [
            `<i class="fa-brands fa-html5"></i>`, 
            `<i class="fa-brands fa-css3"></i>`, 
            `<i class="fa-brands fa-node"></i>`
        ],
        link: "google.com"
    },
]


const portfolioWrapper = document.querySelector(".portfolio-wrapper")




projects.forEach(project => {



    portfolioWrapper.innerHTML += `

        <li class="project-card">
            <a href="/" target="_blank">
                <div class="project-img">
                    <img src=${project.img} alt="">
                </div>
                <div class="project-title">${project.title}</div>
                <div class="project-desc">${project.desc}</div>
                <div class="project-technology">
                    ${project.language.join("")}
                </div>
                <div class="view-now">
                    <i class="fa-solid fa-eye"></i>
                </div>
            </a>
        </li>
    `
})









const skills = [
    {
        name: "Html",
        rating: "Advanced",
        ratingBar: 70
    },
    {
        name: "Css",
        rating: "Advanced",
        ratingBar: 70
    },
    {
        name: "JavaScript",
        rating: "Intermidiate",
        ratingBar: 50
    },
    {
        name: "ReactJs",
        rating: "Entry Level",
        ratingBar: 30
    },
    {
        name: "NodeJs",
        rating: "Entry Level",
        ratingBar: 30
    },
]


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