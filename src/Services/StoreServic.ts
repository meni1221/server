import Missile, { IMissile } from "../Modules/MissileModel";

const allMissils = async () => {
  try {
    const allMissils = Missile.find();
    return allMissils;
  } catch (error) {
    throw new Error("error to find users");
  }
};

export { allMissils };
