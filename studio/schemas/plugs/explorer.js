export default {
  type: "object",
  name: "explorer",
  title: "The Explorer",
  description:
    "Used for a slideshow of items that contain Heading, very short text, image and CTA",
  fields: [
    {
      name: "explorerItems",
      type: "array",
      description: "Add, edit, and reorder slideshow panels",
      of: [{ type: "explorerItem" }],
    },
  ],
  preview: {
    select: {
      title: "heading",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "Used for a slideshow ",
      };
    },
  },
};
