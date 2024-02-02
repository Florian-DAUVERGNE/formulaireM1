import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ versionKey: false })
export class User extends Document {
  @Prop()
  p9puf2LO9WZADiq7zdksASHER503pu1g: string;

  @Prop()
  LzRJR6wYlOLQAmBxpBxwqhGbnKIMfjO8: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
