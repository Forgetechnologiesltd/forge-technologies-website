export default {
  type: "object",
  name: "icon",
  title: "Icons",
  fields: [
    {
      name: "icon",
      type: "string",
      title: "Icon",
      options: {
        list: [
          { title: "3d_rotation", value: "3d_rotation" },
          { title: "Accessibility", value: "accessibility" },
          { title: "Accessible", value: "accessible" },
          { title: "Addchart", value: "addchart" },
          { title: "Alarm", value: "alarm" },
          { title: "Analytics", value: "analytics" },
          { title: "Anchor", value: "anchor" },
          { title: "Android", value: "android" },
          { title: "Announcement", value: "announcement" },
          { title: "Api", value: "api" },
          { title: "Article", value: "article" },
          { title: "Assessment", value: "assessment" },
          { title: "Assignment", value: "assignment" },
          { title: "Autorenew", value: "autorenew" },
          { title: "Backup", value: "backup" },
          { title: "Book", value: "book" },
          { title: "Bookmark", value: "bookmark" },
          { title: "Bookmarks", value: "bookmarks" },
          { title: "Build", value: "build" },
          { title: "Cached", value: "cached" },
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
