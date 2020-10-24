export default {
  type: "document",
  name: "footerMenu",
  fields: [
    {
      type: "string",
      name: "title",
    },
    {
      type: "array",
      name: "items",
      of: [{ type: "menuItem" }],
    },
  ],
};
