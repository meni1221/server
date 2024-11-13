import fs from 'fs';
import  Missile  from '../src/Modules/MissileModel';
import  Org  from '../src/Modules/orgModel';

async function loadInitialData() {
  const orgData = JSON.parse(fs.readFileSync('./data/organizations.json', 'utf8'));
  const missileData = JSON.parse(fs.readFileSync('./data/missiles.json', 'utf8'));

  if ((await Org.countDocuments()) === 0) {
    await Org.insertMany(orgData);
  }

  if ((await Missile.countDocuments()) === 0) {
    await Missile.insertMany(missileData);
  }
}

export default loadInitialData