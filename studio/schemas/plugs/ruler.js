export default {
  type: "object",
  name: "ruler",
  title: "The Ruler",
  description: "Heading and team members",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "teamMembers",
      type: "array",
      description: "Add, edit, and reorder team members",
      of: [{ type: "teamMember" }],
    },
  ],
  preview: {
    select: {
      title: "heading",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "Heading and team members",
      };
    },
  },
};
