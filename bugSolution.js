Instead of directly accessing user data within `onAuthStateChanged`, wrap the data access in a Promise or use async/await.  This ensures the code waits for the authentication state to update before proceeding.

```javascript
// Using Promises
firebase.auth().onAuthStateChanged(user => {
  return new Promise((resolve, reject) => {
    if (user) {
      resolve(user);
    } else {
      reject("User not authenticated");
    }
  })
  .then(user => {
    // Access user data here
    console.log(user.uid);
  })
  .catch(error => {
    console.error(error);
  });
});

// Using async/await
firebase.auth().onAuthStateChanged(async user => {
  if (user) {
    try {
      // Access user data here
      const uid = user.uid;
      console.log(uid);
    } catch (error) {
      console.error(error);
    }
  } else {
    console.log('User is signed out');
  }
});
```