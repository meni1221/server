import mongoose, { Document, Schema } from "mongoose";

export interface IOrg extends Document {
  _id: string;
  name: string;
  resources: [{ type: string }];
  budget: number;
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

const OrgSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  resources: [resourcesSchema],
  budget: {
    type: Number,
    required: true,
  },
});

export default mongoose.model<IOrg>("org", OrgSchema);
