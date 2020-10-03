export default {
  type: "object",
  name: "caregiver",
  title: "The Caregiver",
  description: "Two of Heading, text, image and CTA",
  fields: [
    {
      name: "caregiverItems",
      type: "array",
      description: "Add, edit, and reorder to 2 blocks",
      of: [{ type: "caregiverItem" }],
      validation: (Rule) =>
        Rule.required()
          .min(2)
          .max(2),
    },
  ],
  preview: {
    select: {
      title: "heading",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "The Caregiver: Two of Heading, text, image and CTA",
      };
    },
  },
};
