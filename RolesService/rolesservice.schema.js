import Joi from "joi";

export const rolesCreationSchema = Joi.object({
  roleName: Joi.string()
    .required()
    .label("Roles name")
    .valid("admin", "teacher", "monitor","student")
    .trim()
    .lowercase()
    .message({
      "string.valid":
        "For {{#label}} valid values are admin, teacher and monitor",
    }),
  permissions: Joi.object({
    create: Joi.array()
      .default([])
      .label("Create Permission")
      .items(Joi.string()),
    read: Joi.array().default([]).label("Read Permission").items(Joi.string()),
    update: Joi.array()
      .default([])
      .label("Update Permission")
      .items(Joi.string()),
    delete: Joi.array()
      .default([])
      .label("Update Permission")
      .items(Joi.string()),
  })
    .label("Permissions for role")
    .required()
    .message({
        "any.requied":'Field {{#label}} is required'
    }),
});



export const rolesUpdationSchema = Joi.object({
  permissions: Joi.object({
    create: Joi.array()
      .default([])
      .label("Create Permission")
      .items(Joi.string()),
    read: Joi.array().default([]).label("Read Permission").items(Joi.string()),
    update: Joi.array()
      .default([])
      .label("Update Permission")
      .items(Joi.string()),
    delete: Joi.array()
      .default([])
      .label("Update Permission")
      .items(Joi.string()),
  })
    .label("Permissions for role")
    .required()
    .message({
        "any.requied":'Field {{#label}} is required'
    }),
});
