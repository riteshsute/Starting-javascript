const posts = [
    {title: 'Post One', body: 'This is Post One', createdAt: new Date().getTime()},
    {title: 'Post Two', body: 'This is Post Two', createdAt: new Date().getTime()}
]

let intervalId = 0;
function getPosts(){
    clearInterval(intervalId)
    intervalId = setInterval(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title} - created ${(new Date().getTime() - post.createdAt) / 1000} seconds ago </li>`;
        });
        document.body.innerHTML = output;
    }, 0);
}



function createPost(post, callBack) {
    setTimeout(() => {
        posts.push({...post, createdAt: new Date().getTime()});
        callBack();
    }, 1000);
}



function create4thPost(post, createPost) {
    setTimeout(() => {
        posts.push({...post, createdAt: new Date().getTime()});
        createPost();
    }, 2000);
}


 createPost({title: 'Post Three', body: 'This is Post Three', createdAt: Date.now()}, getPosts)
 create4thPost({title: 'Post four', body: 'This is Post Four', createdAt: Date.now()}, getPosts)