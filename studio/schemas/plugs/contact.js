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
