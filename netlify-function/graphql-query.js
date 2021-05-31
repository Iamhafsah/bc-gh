const fetch = require('node-fetch');

const headers = {
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type'
}

exports.handler = function(event, context, callback) {
    
  const profileName = event.queryStringParameters.profileName

  fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${process.env.GITHUB_KEY}`,
      },
      body:  JSON.stringify({ query: `{user(login: ${profileName}) {
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
}`
})
})
.then(response => response.json())
.then(data => {
    callback(null, {
        statusCode: 200,
        headers,
        body: JSON.stringify(data)
    })
})
};