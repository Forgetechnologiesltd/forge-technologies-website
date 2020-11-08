export default {
  type: "object",
  name: "hero",
  title: "The Hero",
  fields: [
    {
      title: "Text position",
      name: "textPosition",
      type: "string",
      options: {
        list: [
          { title: "Text Left", value: "left" },
          { title: "Text Centered", value: "center" },
          { title: "Text Right", value: "right" },
        ],
        layout: "radio",
      },
    },
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "tagline",
      type: "simpleBlockContent",
      title: "Tagline",
    },
    {
      name: "backgroundImage",
      type: "image",
      title: "Background image",
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
      media: "backgroundImage",
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: "The Hero editing block type",
        media,
      };
    },
  },
};
