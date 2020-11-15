export default {
  type: "object",
  name: "contact",
  title: "Contact",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "text",
      type: "simpleBlockContent",
      title: "Text",
    },
    {
      name: "successMessage",
      type: "string",
      title: "Success message",
    },
    {
      name: "errorMessage",
      type: "string",
      title: "Error message",
    },
  ],
  preview: {
    select: {
      title: "heading",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "Contact: Heading and text.",
      };
    },
  },
};
