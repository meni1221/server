import mongoose, { Document, Schema } from "mongoose";

export interface IMissile extends Document {
  _id: string;
  name: string;
  description: string;
  speed: number;
  intercepts: [{type: string}];
  price: number;
}

const MissileSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  speed: {
    type: Number,
    required: true,
  },
  intercepts: {
    type: [{type: String}],
  },
  price: {
    type: Number,
    required: true,
  },
});


export default mongoose.model<IMissile>("Missile", MissileSchema,"Missile"); 
