export default {
  type: "object",
  name: "lover",
  title: "The Lover",
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
        subtitle: "The Lover: Heading and text.",
      };
    },
  },
};
