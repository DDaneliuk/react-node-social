let rerenderEntireTree = () => {
  console.log("state has changed")
}

let state = {
  profilePage: {
    posts: [
      {
        id: 1,
        userName: "willsmith",
        post: "Y’all gotta see how @bmike2c made the art for my book— there’s levels to it!! 5 layers, each repping a different stage of my life…Beautiful! Pre-order the book, link in bio. Big thanx @brianbowensmith for the original pic. #WillTheBook",
        likes: 0
      },
      {
        id: 2,
        userName: "willsmith",
        post: "Y’all gotta see how @bmike2c made the art for my book— there’s levels to it!! 5 layers, each repping a different stage of my life…Beautiful! Pre-order the book, link in bio. Big thanx @brianbowensmith for the original pic. #WillTheBook",
        likes: 0
      },
    ],
    postAreaText: "",
  },
};

window.state = state;

export const addPost = () => {
  let newPost = {
    id: 3,
    userName: "willsmith",
    post: state.profilePage.postAreaText,
    likes: 0
  };
  state.profilePage.posts.push(newPost)
  state.profilePage.postAreaText = ""
  rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
  state.profilePage.postAreaText = newText;
  rerenderEntireTree(state);
};

export const subscribe = (observe) => {
  rerenderEntireTree = observe
}
export default state;

// store - OOP

