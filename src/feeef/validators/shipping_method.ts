import vine from "@vinejs/vine";
import { ImageFileSchema } from "./helpers.js";
import { ShippingMethodPolicy, ShippingMethodStatus } from "../../core/core.js";
// import { ShippingMethodPolicy, ShippingMethodStatus } from '#models/shipping_method'

export const CreateShippingMethodSchema = vine.object({
  name: vine.string(),
  description: vine.string().optional(),
  photoUrl: vine.string().optional(),
  ondarkPhotoUrl: vine.string().optional(),
  photoFile: ImageFileSchema.optional(),
  ondarkPhotoFile: ImageFileSchema.optional(),
  price: vine.number(),
  //   forks: vine.number(),
  //   sourceId: vine.string(),
  storeId: vine.string(),
  rates: vine.array(vine.number().optional()),
  status: vine.enum(ShippingMethodStatus),
  policy: vine.enum(ShippingMethodPolicy),
  //   verifiedAt: vine.date(),
});

export const UpdateShippingMethodSchema = vine.object({
  name: vine.string().optional(),
  description: vine.string().optional(),
  photoUrl: vine.string().optional(),
  ondarkPhotoUrl: vine.string().optional(),
  photoFile: ImageFileSchema.optional(),
  ondarkPhotoFile: ImageFileSchema.optional(),
  price: vine.number().optional(),
  //   forks: vine.number().optional(),
  //   sourceId: vine.string().optional(),
  storeId: vine.string().optional(),
  rates: vine.array(vine.number().optional()).optional(),
  status: vine.enum(ShippingMethodStatus).optional(),
  policy: vine.enum(ShippingMethodPolicy).optional(),
  //   verifiedAt: vine.date().optional(),
});

// ForkShippingMethodSchema
export const ForkShippingMethodSchema = vine.object({
  sourceId: vine.string(),
  storeId: vine.string(),
});
