import Missile, { IMissile } from "../Modules/MissileModel";
import orgModel, { IOrg } from "../Modules/orgModel";

interface buyUserDto {
  name: string;
  missileName: string;
  orgName: string;
}
const allMissils = async () => {
  try {
    const allMissils = Missile.find();
    return allMissils;
  } catch (error) {
    throw new Error("error to find users");
  }
};

const buyMissille = async (buyUser: buyUserDto) => {
  const missile = await Missile.findOne({ name: buyUser.missileName });

  const org: any | null = await orgModel.findOne({ name: buyUser.orgName });

  const pric: number | undefined = missile?.price;
  const Budget: number | undefined = org?.budget;

  if (Budget! < pric!) return console.log("you don't have enough money");

  const resources: any = org!.resources;

  const resourceSingel: any = resources.find(
    (m: any) => m.name === missile?.name
  );

  // צריך לעשות לוגיקה של עדכון ושמירה בDB

  if (resourceSingel) {
    resourceSingel.amount++;
    org!.Budget = org!.Budget - pric!;
    console.log(resourceSingel, org!.Budget);
    org.save();

    return buyUser;
  } else {
    console.log("User not found");
  }
};

export { allMissils, buyMissille };
