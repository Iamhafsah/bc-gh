// modules imported from the modules folder
import pageInfo from './jsmodules/pageInfo.js'
import repoInfo from './jsmodules/repoInfo.js'


const inputName = document.querySelector('.input-name');
const form = document.querySelector('.sign-in');
const formContainer = document.querySelector('.login-form')
const github = document.querySelector('.github-page')
const submit = document.querySelector('.submit')

let getUserInfo = (e) => {
    e.preventDefault()
    const profileName = inputName.value;
    submit.innerHTML = 'Fetching user data...'

    fetch(`https://hafsahs-github.netlify.app/.netlify/functions/graphql-query/?profileName="${profileName}"`)
    .then(response => response.json())
    .then((data) => {
        let info = data.data.user
        if (info === null){
            alert(`Please confirm that ${profileName} is a valid username`)
            form.reset()
            submit.innerHTML = 'Sign in'
        }else{
            github.classList.remove('hide')
            formContainer.classList.add('hide')
            submit.innerHTML = 'Sign in'
            pageInfo(info)
            info.repositories.edges.map(repo=> {
                repoInfo(repo)
            })
        }
    })
    .catch(error => alert('An error occured. Please check your internet connection and try again.'))
}

form.addEventListener('submit', getUserInfo);

