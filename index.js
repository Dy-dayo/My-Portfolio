console.log('hi')
import { projects } from "./data.js"

// const myInfo = document.getElementById('my-info')
// const myInfoArea = document.getElementById('my-info-area')
const showNav = document.getElementById('show-btn')
const hideNav = document.getElementById('close-btn-svg')

showNav.addEventListener('click',()=>{
    document.getElementById('nav').style.display= 'block'
    showNav.style.display = 'none'
})
hideNav.addEventListener('click',()=>{
    showNav.style.display = 'block'
    document.getElementById('nav').style.display= 'none'
    // showNav.style.display = 'block'
})

function myInfo(){
    document.getElementById('info').textContent=`Frontend Engineer`
    setTimeout(()=>{
        document.getElementById('info').textContent=`Technical Writer`
    },2000)

}
myInfo()
 setInterval(()=>myInfo(),4000)


function renderProject(){
    const project = document.getElementById('project')
    project.style.display="block"
    const projectDiv = document.getElementById('my-project-div')
    let myProject = ''
    projects.forEach(project=> {
        myProject+=` 
            <div class="project">
                <img src="${project.image}" alt="A "/>
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <span>Deployed <a href="${project.link}">here</a>.</span>
                <span>View on <a href="${project.githubLink}">GitHub</a></span>
            </div>
            `
        projectDiv.innerHTML = myProject
    });
}
document.getElementById("myProject").addEventListener('click',renderProject)
// renderProject()