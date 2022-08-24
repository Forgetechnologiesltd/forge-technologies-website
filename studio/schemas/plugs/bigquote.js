export default {
  name: "bigquote",
  type: "object",
  title: "Big Quote",
  fields: [
    {
      name: "quoteText",
      type: "bodyPortableText",
      title: "Quote",
    },
    {
      name: "quoteName",
      type: "string",
      title: "Quote Name",
    },
    {
      name: "quoteTitle",
      type: "string",
      title: "Quote Title",
    },
    {
      name: "quoteCompany",
      type: "string",
      title: "Quote Company",
    },
  ],
};
