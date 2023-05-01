import { Joi } from "celebrate";

export const CategoryBodySchema = Joi.object({
  name: Joi.string().required().min(3),
});
