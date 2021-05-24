const login = document.querySelector('.login')
const littleAvatar = document.querySelector('.little-avatar')
const userAvatar = document.querySelector('.user-avatar')
const fullName = document.querySelector('.full-name')
const bio = document.querySelector('.bio')
const followers = document.querySelector('.followers')
const following = document.querySelector('.following')
const starred = document.querySelector('.starred')
const locationName = document.querySelector('.location-name')
const emailName = document.querySelector('.email-name')
const twitterHandle = document.querySelector('.twitter-handle')
const email= document.querySelector('.email')
const twitter= document.querySelector('.twitter') 
const location = document.querySelector('.location') 



const pageInfo = (user) => {
    login.innerHTML = user.login;
    littleAvatar.src = user.avatarUrl;
    userAvatar.src = user.avatarUrl;
    fullName.innerHTML = user.name;
    bio.innerHTML = user.bio;

    // checking if the follower count user is in thousands or millions
    let followerCount = (user.followers.totalCount > 999 && user.followers.totalCount < 1000000) 
    ? `${(user.followers.totalCount/1000).toFixed(1)}k` 
    : (user.followers.totalCount > 1000000) 
    ? `${(user.followers.totalCount/1000000).toFixed(1)}M` 
    : user.followers.totalCount;
    followers.innerHTML = `${followerCount} followers`;

    // checking if the following count user is in thousands or millions
    let followingCount = (user.following.totalCount > 999  && user.followers.totalCount < 1000000)
    ? `${(user.following.totalCount/1000).toFixed(1)}k`
    : (user.followers.totalCount > 1000000) 
    ? `${(user.followers.totalCount/1000000).toFixed(1)}M` 
    : user.following.totalCount;
    following.innerHTML = `${followingCount} following`;
   
    starred.innerHTML = user.starredRepositories.totalCount;

    user.location === null ? location.style.display = 'none': locationName.innerHTML = user.location;

    user.email === "" ? email.style.display = 'none' : null;
    emailName.innerHTML = user.email;
    twitterHandle.innerHTML = user.twitterUsername ;
    
    
    user.twitterUsername === null ? twitter.style.display = 'none': twitterHandle.innerHTML = user.twitterUsername;
}

export default pageInfo