import pageInfo from './modules/pageInfo.js'
import profile from './modules/query.js'
import repoInfo from './modules/repoInfo.js'

const inputName = document.querySelector('.input-name');
const form = document.querySelector('.sign-in');
const github = document.querySelector('.github-page')


const token = 'b8c04bffea14744396e8ac2661b6a704f8410524'


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
        console.log(info);
        info.repositories.edges.map(repo=> {
            repoInfo(repo)
            // repo.node.primaryLanguage ? console.log(repo.node.primaryLanguage.color) : console.log('none')
        })
        if (info === null){
            alert(`Please confirm that input ${profileName} is correct`)
        }else{
            github.classList.remove('hide')
            form.classList.add('hide')
            pageInfo(info)
        }
    })
}

form.addEventListener('submit', getUserInfo);

