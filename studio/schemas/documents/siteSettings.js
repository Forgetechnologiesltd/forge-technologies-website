export default {
  name: "siteSettings",
  type: "document",
  title: "Site Settings",
  __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "navMenu",
      type: "reference",
      title: "Navigation menu",
      // weak: true, // Uncomment if you want to be able to delete navigation even though pages refer to it
      to: [{ type: "navigationMenu" }],
      description: "Which nav menu should be shown, if any",
    },
    {
      title: "Footer menus",
      name: "footerNav",
      type: "array",
      description: "Links for the footer",
      of: [
        {
          name: "footerNavItem",
          type: "reference",
          title: "Footer menu",
          // weak: true, // Uncomment if you want to be able to delete navigation even though pages refer to it
          to: [{ type: "footerMenu" }],
        },
      ],
    },
    {
      name: "footerText",
      type: "simpleBlockContent",
      title: "Footer text",
      description: "Text in the footer for registration and other small print",
    },
    {
      title: "Open graph",
      name: "openGraph",
      description:
        "These will be the default meta tags on all pages that have not set their own",
      type: "openGraph",
    },
    {
      title: "Accreditations",
      name: "collaborators",
      type: "array",
      description: "Footer bottom accreditations logos",
      of: [
        {
          name: "collaboratorsItem",
          type: "reference",
          title: "accreditation List",
          to: [{ type: "collaboratorList" }],
        },
      ],
    },
  ],
};
