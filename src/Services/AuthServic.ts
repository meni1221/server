import { comparePassword, generateUserPassword } from "../../Helpers/Bcrypt";
import { CookieOptions, Response } from "express";
import User from "../Modules/UserModel";

export interface IUser extends Document {
  name: string;
  password: string;
  org: string;
  loction: string;
}

interface userDTO {
  name: string;
  password: string;
}

const register = async (userData: IUser) => {
  try {
    const nueUser = new User(userData);
    nueUser.password = generateUserPassword(nueUser.password)
    await nueUser.save();
    return nueUser;
  } catch (error) {
    throw new Error("error to add");
  }
};

const login = async (user: userDTO, res: Response) => {
  try {
    const foundUser = await User.findOne({ name: user.name });

    if (!foundUser) return console.log("User not found");
    const isPasswordCorrect = await comparePassword(
      user.password,
      foundUser.password
    );
    if (!isPasswordCorrect) return console.log("Incorrect password or name");

    return foundUser ;
  } catch (error) {
    throw new Error("Failed to login");
  }
};

const logout = (res: Response): void => {
  try {
    res.clearCookie("auth_token", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });
  } catch (error) {
    console.log(error);
  }
};

export { register, login, logout };
