import { Joi } from "celebrate";

export const ModifyCartBodySchema = Joi.array().items({
  item: Joi.string().length(24).hex().required(),
  quantity: Joi.number().min(1).required(),
});
