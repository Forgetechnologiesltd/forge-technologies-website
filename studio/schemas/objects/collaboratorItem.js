export default {
  name: "collaboratorItem",
  type: "object",
  title: "Accreditations Item",
  fields: [
    {
      name: "image",
      type: "image",
      title: "Logo",
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      type: "string",
      title: "Name",
    },
  ],
  preview: {
    select: {
      content: "content",
      media: "image",
    },
    prepare({ media }) {
      return {
        title: "Click to change",
        media,
      };
    },
  },
};
