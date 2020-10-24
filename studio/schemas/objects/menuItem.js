export default {
  title: "Call to action",
  name: "menuItem",
  type: "object",
  fieldsets: [
    {
      title: "Link",
      name: "link",
      description: "Only the first value of these will be used",
    },
  ],
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "No link",
      name: "noLink",
      fieldset: "link",
      type: "boolean",
    },
    {
      title: "Landing page",
      name: "landingPageRoute",
      type: "reference",
      fieldset: "link",
      to: [{ type: "route" }],
    },
    {
      title: "Path",
      name: "route",
      fieldset: "link",
      description: "Example: /blog",
      type: "string",
    },
    {
      title: "External link",
      name: "link",
      type: "string",
      description: "Example: https://www.sanity.io",
      fieldset: "link",
    },
    {
      title: "Submenu",
      type: "array",
      name: "submenu",
      of: [{ type: "submenuItem" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      landingPage: "landingPageRoute.slug.current",
      route: "route",
      link: "link",
      submenu: "submenu.title",
    },
    prepare({ title, landingPage, route, link, submenu }) {
      let subtitle = "Not set";
      if (landingPage) {
        subtitle = `Route: /${landingPage}`;
      }
      if (route) {
        subtitle = `Route: ${route}`;
      }
      if (link) {
        subtitle = `External: ${link}`;
      }
      if (submenu) {
        subtitle = `Submenu: ${submenu}`;
      }
      return {
        title,
        subtitle,
      };
    },
  },
};
