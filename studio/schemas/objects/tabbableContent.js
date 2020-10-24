export default {
  type: "object",
  name: "tabbableContent",
  title: "Tab sections",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },

    {
      name: "content",
      type: "array",

      description: "Add, edit, and reorder sections",
      of: [
        { type: "jester" },
        { type: "lover" },
        { type: "magician" },
        { type: "outlaw" },
        { type: "sage" },
        { type: "ruler" },
        { type: "explorer" },
        { type: "innocent" },
        { type: "creator" },
        { type: "caregiver" },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title,
      };
    },
  },
};
