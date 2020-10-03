export default {
  type: "object",
  name: "caregiverItem",
  title: "The Caregiver Item",
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
  ],
  preview: {
    select: {
      title: "heading",
      media: "image",
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: "The Caregiver Item: Heading, text, image and CTA",
        media,
      };
    },
  },
};
