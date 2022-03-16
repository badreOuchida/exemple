import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";

export const useLogin = async (credentials, userData) => {
  console.log(credentials, userData);
  try {
    var authenticationDetails = await new AuthenticationDetails(credentials);
    try {
      var cognitoUser = await new CognitoUser(userData);
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: (data) => {
          console.log("Success", data);
        },
        onFailure: (data) => {
          console.log("err", data);
        },
        newPasswordRequired: (data) => {
          console.log("newPasswordRequired: ", data);
        },
      });
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
};
