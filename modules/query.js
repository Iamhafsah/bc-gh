const profile = (profileName)=> {
    const profileQuery = {
        'query' : ` {
            user(login:"${profileName}") {
                name
                bio
                login
                location
                avatarUrl
                websiteUrl
                twitterUsername
                email
                starredRepositories{
                totalCount
                }
                followers{
                    totalCount
                }
                following{
                    totalCount
                }
                repositories (last: 20){
                    totalCount
                    edges{
                        node{
                        name
                        url
                        descriptionHTML
                        updatedAt
                        stargazerCount
                        primaryLanguage{
                            name
                            color
                        }
                        }
                    }
                } 
            }
        }
        `
    }
    return profileQuery;
}
export default profile