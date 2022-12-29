
const posts = [
        {title: 'Post One', body: 'This is Post One', createdAt: new Date().getTime()},
        {title: 'Post Two', body: 'This is Post Two', createdAt: new Date().getTime()}
        ]

async function getPosts(post) {
    let intervalId;
    const getPosts = clearInterval(intervalId);
        intervalId = setInterval(() => {
            let output = '';
            posts.forEach((post, index) => {
            output += `<li>${post.title}- created ${(new Date().getTime() - post.createdAt) / 1000} seconds ago</li>`;
            });
        document.body.innerHTML = output;
        }, 1000);

        const createPost = new Promise((resolve, reject) => {
            new setTimeout(() => {
                posts.push(post);
                const error = false;

                if(!error) {
                    resolve();
                } else {
                    reject("error")
                }
            }, 1000);
        })

        const deletePost =  new Promise((resolve, reject) => {
            setTimeout(() => {
                if (posts.length > 0) {
                    resolve(posts.pop())
                } else {
                    reject('Error: Something Went Wrong');
                }
            }, 1000);
        })
    
        let creatingPost = await createPost
        let deletingPost = await deletePost
        
        return[creatingPost, deletingPost] 
}

getPosts()
