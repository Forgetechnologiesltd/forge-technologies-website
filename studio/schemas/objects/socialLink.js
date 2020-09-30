export default {
  type: "object",
  name: "socialLink",
  title: "Social link",
  fields: [
    {
      name: "icon",
      type: "icon",
      title: "Icon",
    },
    {
      name: "altText",
      type: "string",
      title: "Name of Social Media",
    },
    {
      title: "URL",
      name: "href",
      type: "url",
    },
  ],
};
