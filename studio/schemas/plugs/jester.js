export default {
  type: "object",
  name: "jester",
  title: "The Jester",
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
          "The Jester: Icon, Heading, short text, image, CTA and a toggle to swap image and text sides",
        media,
      };
    },
  },
};
