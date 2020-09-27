export default {
  type: "object",
  name: "magician",
  title: "The Magician",
  fields: [
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
      name: "mediumSizeImage",
      type: "image",
      title: "Medium size image",
      options: {
        hotspot: true,
      },
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
      media: "mediumSizeImage",
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: "The Magician: Medium-sized image, heading, text and CTA.",
        media,
      };
    },
  },
};
