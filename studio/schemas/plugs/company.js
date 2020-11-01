export default {
  type: "object",
  name: "company",
  title: "The Company",
  description: "Heading and 3 paragraphs to be displayed in 3 columns",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "items",
      type: "array",
      description: "Add, edit, and reorder items",
      of: [{ type: "companyItem" }],
    },
  ],
  preview: {
    select: {
      title: "heading",
      subutitle: "description",
    },
  },
};
