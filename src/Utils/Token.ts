import jwt from "jsonwebtoken";
import config from "../config/cfg";

export const Token = {
  sign(id: string, rules: string) {
    const token = jwt.sign({ id,rules }, config.secret, {
      expiresIn: 8640
    });
    console.log(token)
    return token;
  },
};
