// console.log("start");
// console.log("processing");
// console.log("end");

// //* setTimeout
// //? setTimeout(callback, timer_out)

// console.log("start");

// const timer_id = setTimeout(
//   (a, b) => {
//     console.log("processing", a, b);
//   },
//   2000,
//   20,
//   15,
// );

//clearTimeout(timer_id)

// console.log(timer_id);
// console.log(timer_id._timerArgs);
// console.log("end");

// let i =0;
// const id =setInterval(()=>{
//     console.log(i);
//     if (i===10){
//         clearInterval(id)
//     }
//     i++
// },1000);

// console.log("end");

//todo: hh:mm:ss -> countdown timer

//todo: 1:12:09

//todo: callback function

// let j = 10;
// const id = setInterval(() => {
//   if (j === 0) {
//     console.log("time up!!")
//     clearInterval(id);
//     return;
//   }
//   const pad = (n) => n.toString().padStart(2, "0");
//   let hour = Math.floor(j / 3600);
//   let min = Math.floor((j % 3600) / 60);
//   let sec = Math.floor(j % 60);
//   console.log(pad(hour),":",pad(min),":",pad(sec))
//   j--;
// }, 1000);

function a(callback) {
  console.log("a");
  callback(12);
}

a((b) => {
  console.log("callback", b);
});

const getUser = (callback) => {
  setTimeout(() => {
    console.log("user fetched");
    callback(null, {
      _id: 1,
      name: "john doe",
      email: "john@gmail.com",
    });
  }, 3000);
};

const getPost = (userId, callback) => {
  setTimeout(() => {
    console.log("posts fetched");

    // console.log([
    //   {
    //     _id: 1,
    //     userId: userId,
    //     title: "post 1",
    //   },
    //   {
    //     _id: 2,
    //     userId: userId,
    //     title: "post 2",
    //   },
    // ]);

    callback(null, [
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
    ]);
  }, 2000);
};

const getComments = (postId,callback) => {
  setTimeout(() => {
    console.log("comments fetched");
    callback(null, [
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
  }, 2000);
};

getUser((error, user) => {
  if (error) {
    console.log("error:", error);
    return;
  }
  getPost(user._id, (error, post) => {
    if (error) {
      console.log("error:", error);
      return;
    }
    getComments(post[0]._id, (error, comments) => {
      if (error) {
        console.log("error:", error);
        return;
      }
      console.log(comments);
    });
  });
});

//! callback hell -> promise
//* pyramid of doom