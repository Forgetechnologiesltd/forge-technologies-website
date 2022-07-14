export default {
  type: "document",
  name: "collaboratorList",
  __experimental_actions: ["update", "create", "delete", "publish"],
  fields: [
    {
      type: "string",
      name: "title",
    },
    {
      type: "array",
      name: "items",
      of: [{ type: "collaboratorItem" }],
    },
  ],
};
