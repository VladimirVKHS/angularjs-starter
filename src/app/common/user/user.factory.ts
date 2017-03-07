interface User {
  isSignedIn: boolean;
}


let UserFactory = function () {
  let user: User = { isSignedIn: false };

  let getUser = () => {
    return user;
  };

  let isSignedIn = () => {
    return user.isSignedIn;
  };

  return { getUser, isSignedIn };
};

export default UserFactory;
