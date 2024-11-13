import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  _id: string;
  name: string;
  password: string;
  org: string;
  loction: string;
  resources: [{ type: string }];
}

const resourcesSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  org: {
    type: String,
    required: true,
  },
  loction: {
    type: String,
    require: true,
  },
  resources: [resourcesSchema],
});

export default mongoose.model<IUser>("User", UserSchema);
