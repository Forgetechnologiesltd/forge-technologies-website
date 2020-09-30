export default {
  name: "teamMember",
  type: "object",
  title: "Team Member",
  fields: [
    {
      name: "image",
      type: "image",
      title: "Avatar",
    },
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "jobTitle",
      type: "string",
      title: "Job Title",
    },
    {
      name: "bio",
      type: "simpleBlockContent",
      title: "Bio",
    },
    {
      name: "socialLinks",
      type: "array",
      description: "Add, edit, and reorder social media links",
      of: [{ type: "socialLink" }],
    },
  ],
  preview: {
    select: {
      content: "content",
    },
    prepare({ content }) {
      return {
        title: "Team member",
      };
    },
  },
};
