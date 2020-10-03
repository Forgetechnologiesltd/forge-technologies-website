export default {
  type: "object",
  name: "innocent",
  title: "The Innocent",
  fields: [
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "text",
      type: "simpleBlockContent",
      title: "Text",
    },
  ],
  preview: {
    select: {
      media: "image",
    },
    prepare({ media }) {
      return {
        media,
        subtitle: "The Innocent: Image and medium-sized paragraph.",
      };
    },
  },
};
