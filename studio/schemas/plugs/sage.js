export default {
  name: "sage",
  type: "object",
  title: "The Sage",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "quote",
      type: "simpleBlockContent",
      title: "Testimonial",
    },
  ],
  preview: {
    select: {
      content: "content",
    },
    prepare({ content }) {
      return {
        title:
          "The Sage: Used for forge values. Text for a quote and field for the heading.",
      };
    },
  },
};
