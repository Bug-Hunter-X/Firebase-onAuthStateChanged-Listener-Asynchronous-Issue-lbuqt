# Firebase onAuthStateChanged Asynchronous Bug

This repository demonstrates a common issue with Firebase's `onAuthStateChanged` listener:  delays in triggering after authentication changes.  The `bug.js` file showcases the problem where attempts to access user data immediately after login fail, while `bugSolution.js` provides a robust solution using Promises or async/await to ensure data access only after the authentication state is confirmed.