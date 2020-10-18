export default {
  type: "document",
  name: "page",
  title: "Page",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .slice(0, 200),
      },
    },
    {
      name: "content",
      type: "array",
      title: "Page sections",
      description: "Add, edit, and reorder sections",
      of: [
        { type: "hero" },
        { type: "lover" },
        { type: "magician" },
        { type: "outlaw" },
        { type: "sage" },
        { type: "ruler" },
        { type: "explorer" },
        { type: "innocent" },
        { type: "creator" },
        { type: "caregiver" },
        { type: "jester" },
        // { type: "everyman" },
      ],
    },
  ],
};
