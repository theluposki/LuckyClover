import { Request, Response } from "express";
import { RegisterRepository } from "../repositories/RegisterRepository";
import { UserRepository } from "../repositories/UserRepository";

export const RegisterController = async (req: Request, res: Response) => {
  const { name, fullName, nickName, email, password } = req.body;

  const userAlreadyExists = await UserRepository.getOneByEmail(email);

  if (!name) {
    return res.status(400).json({ error: "name is required" });
  }

  if (!fullName) {
    return res.status(400).json({ error: "fullName is required" });
  }

  if (!nickName) {
    return res.status(400).json({ error: "nickName is required" });
  }

  if (!email) {
    return res.status(400).json({ error: "email is required" });
  }

  if (userAlreadyExists) {
    return res.status(400).json({ error: "user already exists" });
  }
  
  if (!password) {
    return res.status(400).json({ error: "password is required" });
  }

  if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/.test(password)){
    return res.status(400).json({ 
      error:  
      `
      your password must:
      must contain at least one lowercase letter
      must contain at least one capital letter
      must contain at least one special character
      must contain at least 8 characters
      ` 
    });
  }

  try {
    const user = await RegisterRepository(req.body);

    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: "Unable to register a new user!" });
  }
};
