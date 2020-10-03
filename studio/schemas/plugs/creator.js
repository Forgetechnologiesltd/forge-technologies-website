export default {
  type: "object",
  name: "creator",
  title: "The Creator",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "shortText",
      type: "simpleBlockContent",
      title: "Short text",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "cta",
      type: "cta",
      title: "Call to action",
    },
    {
      title: "Side",
      name: "side",
      type: "string",
      options: {
        list: [
          { title: "Image Left", value: "left" },
          { title: "Image Right", value: "Western" },
        ],
        layout: "radio",
      },
    },
  ],
  preview: {
    select: {
      title: "heading",
      media: "image",
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle:
          "The Creator: Heading, short text, image, CTA and a toggle to swap image and text sides",
        media,
      };
    },
  },
};
