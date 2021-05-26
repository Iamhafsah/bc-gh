// modules imported from the modules folder
import pageInfo from './jsmodules/pageInfo.js'
import profile from './jsmodules/query.js'
import repoInfo from './jsmodules/repoInfo.js'


const inputName = document.querySelector('.input-name');
const form = document.querySelector('.sign-in');
const formContainer = document.querySelector('.login-form')
const github = document.querySelector('.github-page')

const token = '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'


let getUserInfo = (e) => {
    e.preventDefault()
    const profileName = inputName.value;

    let body = JSON.stringify(profile(profileName));

    fetch('https://api.github.com/graphql', {
    method: 'post',
    headers: {
        'Content-Type': 'application/json',
         authorization: `token ${token}`
    },
    body: body
    })
    .then(response => response.json())
    .then((data) => {
        let info = data.data.user
        if (info === null){
            alert(`Please confirm that ${profileName} is a valid username`)
        }else{
            github.classList.remove('hide')
            formContainer.classList.add('hide')
            pageInfo(info)
            info.repositories.edges.map(repo=> {
                repoInfo(repo)
            })
        }
    })
}

form.addEventListener('submit', getUserInfo);

