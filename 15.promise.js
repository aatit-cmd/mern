//! promise
//* object

//* states
//  pending
//  fulfilled
// rejected

// console.log("start");

// const promise = new Promise((resolve, reject) => {
//   // async logic
//   setTimeout(() => {
//     resolve("Sucess");
//     //reject("error");
//   }, 2000);
// });

// console.log(promise);
// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((data) => {
//     console.log(data);
//   })
//   .finally(() => {
//     console.log("finally");
//   });

// console.log("end");

const getUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (error) {
        reject({ message: "error occured in getuser" });
      } else {
        console.log("user data fetched");
        data = {
          _id: 1,
          name: "john doe",
          email: "john@gmail.com",
        };
        resolve(data);
      }
    }, 2000);
  });
};

const getPost = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (error) {
        reject({ message: "error occured in getpost" });
      } else {
        console.log("post fetched");
        data = [
          {
            _id: 1,
            userId: userId,
            title: "post 1",
          },
          {
            _id: 2,
            userId: userId,
            title: "post 2",
          },
        ];
        resolve(data);
      }
    }, 2000);
  });
};

const getComments = (postId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (error) {
        console.log("error in fetching comment");
      } else {
        console.log("comments fetched");
        resolve([
          {
            _cid: 1,
            postId: postId,
            comment: "commets 1",
          },
          {
            _cid: 2,
            postId: postId,
            comment: "comments 2",
          },
        ]);
      }
    }, 2000);
  });
};

// getUser().then((user) => {
//   getPost(user._id).then((post) => {
//     console.log(post);
//   });
// });

// getUser()
//   .then((user) => {
//     console.log(user);
//     return getPost(user.userId);
//   })
//   .then((post) => {
//     console.log(post);
//     return getComments(post[0]._id);
//   })
//   .then((comments) => {
//     console.log(comments);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//! fetch
// fetch is a built in method in js which is used to make http request to the server and get the response from the server
// it returns a promise which is resolved with the response of the server
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//! async/await
// async is a keyword which is used to declare a function as asynchronous function and if a function is declared as asynchronous function then it will return a promise and we can use await keyword inside the asynchronous function to wait for the promise to be resolved and get the value of the promise
// async can be used to make the code more readable and easier to understand and it also helps in handling errors in a better way than then/catch method. async/await is built on top of promises and it is a syntactic sugar for promises which makes the code more readable and easier to understand.
// await is a keyword which is used to wait for the promise to be resolved and get the value of the promise
//! try/catch

const a = async () => {
  try {
    const user = await getUser();
    console.log(user);
    const post = await getPost(user._id);
    console.log(post);

    const comments = await getComments(post[1]._id);
    console.log(comments);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finally");
  }
};

// a()

const b = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const user = await response.json();
    console.log(user);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finally");
  }
};
// b()

const c = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    console.log(posts[3]);
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${posts[3].id}`,
    );
    const comment = await res.json();
    console.log(comment);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finally");
  }
};

c();

//! event loop
