import mongoose from 'mongoose';
import { prop } from '@typegoose/typegoose';
import {
  CustomerCivilStatus,
  CustomerCivilStatusType,
  CustomerSalutation,
  CustomerSalutationType,
} from './customer.enum';

export class Customer {
  public readonly _id!: mongoose.Types.ObjectId;

  @prop({ enum: CustomerSalutation })
  public salutation?: CustomerSalutationType;

  @prop({ required: true })
  public firstName!: string;

  @prop({ required: true })
  public lastName!: string;

  @prop({ enum: CustomerCivilStatus })
  public civilStatus?: CustomerCivilStatusType;

  @prop()
  public email!: string;

  @prop({ required: true })
  public phone!: string;

  @prop()
  public street?: string;

  @prop()
  public streetNumber?: string;

  @prop()
  public city?: string;

  @prop()
  public birthdate?: Date;

  @prop()
  public country?: string;

  @prop()
  public interestedIn?: string;

  @prop()
  public company?: string;

  @prop()
  public income?: string;

  @prop()
  public creditOther?: number;

  @prop()
  public businessNumberOfEmployees?: number;
}
