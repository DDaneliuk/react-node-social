import { rerenderEntireTree } from "./../render";

let state = {
  profilePage: {
    posts: [
      {
        id: 1,
        userName: "willsmith",
        post: "Y’all gotta see how @bmike2c made the art for my book— there’s levels to it!! 5 layers, each repping a different stage of my life…Beautiful! Pre-order the book, link in bio. Big thanx @brianbowensmith for the original pic. #WillTheBook",
      },
      {
        id: 2,
        userName: "willsmith",
        post: "Y’all gotta see how @bmike2c made the art for my book— there’s levels to it!! 5 layers, each repping a different stage of my life…Beautiful! Pre-order the book, link in bio. Big thanx @brianbowensmith for the original pic. #WillTheBook",
      },
      {
        id: 3,
        userName: "willsmith",
        post: "Y’all gotta see how @bmike2c made the art for my book— there’s levels to it!! 5 layers, each repping a different stage of my life…Beautiful! Pre-order the book, link in bio. Big thanx @brianbowensmith for the original pic. #WillTheBook",
      },
      {
        id: 4,
        userName: "willsmith",
        post: "Y’all gotta see how @bmike2c made the art for my book— there’s levels to it!! 5 layers, each repping a different stage of my life…Beautiful! Pre-order the book, link in bio. Big thanx @brianbowensmith for the original pic. #WillTheBook",
      },
    ],
    postAreaText: "Today was a great day...",
  },
};

window.state = state;

export let addPost = (user) => {
  let newPost = {
    id: 5,
    userName: user,
    post: state.profilePage.postAreaText,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.postAreaText = "";
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.postAreaText = newText;
  rerenderEntireTree(state);
};

export default state;
