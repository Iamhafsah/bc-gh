// modules imported from the modules folder
import pageInfo from './jsmodules/pageInfo.js'
import repoInfo from './jsmodules/repoInfo.js'


const inputName = document.querySelector('.input-name');
const form = document.querySelector('.sign-in');
const formContainer = document.querySelector('.login-form')
const github = document.querySelector('.github-page')


let getUserInfo = (e) => {
    e.preventDefault()
    const profileName = inputName.value;
    
    fetch(`https://hafsahs-github.netlify.app/.netlify/functions/graphql-query/?profileName="${profileName}"`)
    .then(response => response.json())
    .then((data) => {
        let info = data.data.user
        if (info === null){
            alert(`Please confirm that ${profileName} is a valid username`)
            form.reset()
        }else{
            github.classList.remove('hide')
            formContainer.classList.add('hide')
            pageInfo(info)
            info.repositories.edges.map(repo=> {
                repoInfo(repo)
            })
        }
    })
    .catch(error => console.log(error))
}

form.addEventListener('submit', getUserInfo);

