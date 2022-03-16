import { CognitoUserPool } from "amazon-cognito-identity-js";

var poolData = {
  UserPoolId: "us-west-1_NkRF5M6CA",
  ClientId: "4abp1dsb7d456demfovsp3itjc",
};

export default new CognitoUserPool(poolData);
