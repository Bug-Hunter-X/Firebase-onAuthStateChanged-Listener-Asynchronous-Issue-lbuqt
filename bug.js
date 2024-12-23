The Firebase SDK's `onAuthStateChanged` listener might not trigger immediately upon login or logout, leading to unexpected behavior in your application.  This is often due to asynchronous operations or race conditions.  For example, you might attempt to access user data before the authentication state has actually changed.