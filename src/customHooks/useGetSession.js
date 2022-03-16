import { useState } from "react";
import UserPool from "../UserPool";

export const GetSession = async () => {
  return await new Promise((resolve, reject) => {
    const user = UserPool.getCurrentUser();
    console.log("i'm here");
    if (user) {
      user.getSession(async (err, session) => {
        if (err) {
          reject();
        } else {
          const attributes = await new Promise((resolve, reject) => {
            user.getUserAttributes((err, attributes) => {
              if (err) {
                reject(err);
              } else {
                const results = {};

                for (let attribute of attributes) {
                  const { Name, Value } = attribute;
                  results[Name] = Value;
                }

                resolve(results);
              }
            });
          });

          resolve({ user, ...session, ...attributes });
        }
      });
    } else {
      reject();
    }
  });
};
