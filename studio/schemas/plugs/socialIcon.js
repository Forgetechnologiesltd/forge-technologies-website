export default {
  type: "object",
  name: "socialIcon",
  title: "Social Icons",
  fields: [
    {
      name: "icon",
      type: "string",
      title: "Icon",
      options: {
        list: [
          { title: "Twitter", value: "twitter" },
          { title: "Twitter Square", value: "twitter-square" },
          { title: "Linkedin", value: "linkedin-in" },
          { title: "Linkedin Square", value: "linkedin" },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: "icon",
    },
    prepare({ title }) {
      return {
        title,
      };
    },
  },
};
