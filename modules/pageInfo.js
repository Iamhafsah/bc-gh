const login = document.querySelector('.login')
const littleAvatar = document.querySelector('.little-avatar')
const userAvatar = document.querySelector('.user-avatar')
const fullName = document.querySelector('.full-name')
const bio = document.querySelector('.bio')



const pageInfo = (user) => {
    login.innerHTML = user.login
    littleAvatar.src = user.avatarUrl
    userAvatar.src = user.avatarUrl
    fullName.innerHTML = user.name
    bio.innerHTML = user.bio

}

export default pageInfo