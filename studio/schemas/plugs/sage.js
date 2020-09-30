export default {
  name: "sage",
  type: "object",
  title: "The Sage",
  fields: [
    {
      name: "quote",
      type: "simpleBlockContent",
      title: "Testimonial",
    },
    {
      name: "author",
      type: "string",
      title: "Author",
    },
  ],
  preview: {
    select: {
      content: "content",
    },
    prepare({ content }) {
      return {
        title:
          "The Sage: Used for testimonials. Text for a quote and field for the author.",
      };
    },
  },
};
