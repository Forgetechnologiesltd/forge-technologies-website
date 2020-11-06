export default {
  type: "object",
  name: "wildcard",
  title: "The Wildcard",
  fields: [
    {
      title: "Text block",
      name: "block",
      type: "bodyPortableText",
    },
  ],
  preview: {
    select: {
      subtitle: "title",
    },
    prepare({ subtitle }) {
      return {
        title: "Wysiwyg",
        subtitle: "Text Block",
      };
    },
  },
};
