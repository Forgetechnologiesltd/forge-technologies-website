export default {
  type: "object",
  name: "outlawItem",
  title: "Outlaw Inner Block",
  fields: [
    {
      name: "icon",
      type: "icon",
      title: "Icon",
    },
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "paragraph",
      type: "simpleBlockContent",
      title: "Paragraph",
    },
    {
      name: "cta",
      type: "cta",
      title: "Call to action",
    },
  ],
  preview: {
    select: {
      title: "heading",
    },
    prepare({ title }) {
      return {
        title,
      };
    },
  },
};
