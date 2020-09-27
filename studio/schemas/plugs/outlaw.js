export default {
  type: "object",
  name: "outlaw",
  title: "The Outlaw",
  description: "3 items of Icon, Heading, small paragraph and CTA.",
  fields: [
    {
      name: "items",
      type: "array",
      description: "Add, edit, and reorder items",
      of: [{ type: "outlawItem" }],
    },
  ],
  preview: {
    select: {
      title: "heading",
      media: "mediumSizeImage",
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: "3 items of Icon, Heading, small paragraph and CTA.",
        media,
      };
    },
  },
};
