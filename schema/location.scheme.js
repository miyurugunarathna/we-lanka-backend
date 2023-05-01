import { Joi } from "celebrate";

export const LocationBodySchema = Joi.object({
  name: Joi.string().required().min(3),
});
