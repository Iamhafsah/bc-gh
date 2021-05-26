const login = document.querySelector('.login')
const littleAvatar = document.querySelector('.little-avatar')
const userAvatar = document.querySelector('.user-avatar')
const fullName = document.querySelector('.full-name')
const bio = document.querySelector('.bio')
const followerDetails = document.querySelector('.follower-details')
const locationName = document.querySelector('.location-name')
const emailName = document.querySelector('.email-name')
const websiteName = document.querySelector('.website-name')
const twitterHandle = document.querySelector('.twitter-handle')
const email= document.querySelector('.email')
const website= document.querySelector('.website')
const twitter= document.querySelector('.twitter') 
const location = document.querySelector('.location') 
const repoCount = document.querySelector('.repo-count')
const mobileRepoCount = document.querySelector('.mobile-repo-count')



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

    // checking if the following count user is in thousands or millions
    let followingCount = (user.following.totalCount > 999  && user.followers.totalCount < 1000000)
    ? `${(user.following.totalCount/1000).toFixed(1)}k`
    : (user.followers.totalCount > 1000000) 
    ? `${(user.followers.totalCount/1000000).toFixed(1)}M` 
    : user.following.totalCount;

    followerDetails.innerHTML = `<img src="../assets/people-outline.svg" class="people-icon icons" alt="followers"> <span class="followers">${followerCount} followers </span> . <span class="following"> ${followingCount} following</span> . <i class="far fa-star icons"></i> <span>${user.starredRepositories.totalCount}</span>`

    user.location === null ? location.style.display = 'none': locationName.innerHTML = user.location;

    user.email === "" ? email.style.display = 'none' : null;
    emailName.innerHTML = user.email;
    
    user.websiteUrl === null ? website.style.display = 'none' : websiteName.innerHTML = user.websiteUrl;
    websiteName.href= user.websiteUrl;
    
    user.twitterUsername === null ? twitter.style.display = 'none': twitterHandle.innerHTML = ` @${user.twitterUsername}`;
    twitterHandle.href = `https://twitter.com/${user.twitterUsername}`

    repoCount.innerHTML = user.repositories.totalCount;
    mobileRepoCount.innerHTML = user.repositories.totalCount;
}

export default pageInfo