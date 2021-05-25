let repoContainer = document.querySelector('.repo-container')


const repoInfo = (repo) => {
    let starCount = repo.node.stargazerCount > 0 ? repo.node.stargazerCount : '';

    // repo updated date
    let options = { month: 'short'};
    const date = new Date(repo.node.updatedAt);
    const year = date.getFullYear();
    const day = date.getDate();
    const month = new Intl.DateTimeFormat('en-US', options).format(date);
    const updatedDate = `${month} ${day}, ${year}`;
   

    let repoTemplate = `
    <div class='repos'>
    <div class="repo-left">
        <div>
            <a class="repo-url" href=${repo.node.url} target="_blank">
            <p class="repo-name">${repo.node.name}</p>
            </a>

            <p class="description">${repo.node.descriptionHTML}</p>
        </div>
        <div class='lang-div'>
                ${repo.node.primaryLanguage ? 
                `<div>
                <span style="background-color:${repo.node.primaryLanguage.color}" class="circle-color"></span>
                <span class='language-name'>${repo.node.primaryLanguage.name}</span>
                </div>` : ''}

                <div class='star-count-div'>
                    ${starCount > 0 ? 
                        `<div><i class="far fa-star icons"></i>
                        <span>${starCount}</span></div>` : ''}
                </div>

                <div class='updated-at'>
                <span>Updated on ${updatedDate}</span>
                </div>

        </div>
       
    </div>

    <div class='star-div'><i class="far fa-star reo-star-icons"></i>Star
    </div>
</div>
    `

    let repoDiv = document.createElement('div')
    repoDiv.innerHTML = repoTemplate
    repoContainer.appendChild(repoDiv)
}


export default repoInfo