export default {
  type: "object",
  name: "companyItem",
  title: "Company Inner Block",
  fields: [
    {
      name: "paragraph",
      type: "simpleBlockContent",
      title: "Paragraph",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "paragraph",
    },
  },
  prepare({ title, subtitle }) {
    return {
      title: "Company inner Block",
      subtitle,
    };
  },
};
