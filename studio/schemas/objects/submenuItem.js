export default {
  title: "Call to action",
  name: "submenuItem",
  type: "object",
  // fieldsets: [
  //   {
  //     title: "Link",
  //     name: "link",
  //     description: "Only the first value of these will be used",
  //   },
  // ],
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Landing page",
      name: "landingPageRoute",
      type: "reference",
      // fieldset: "link",
      to: [{ type: "route" }],
    },
    // {
    //   title: "Path",
    //   name: "route",
    //   fieldset: "link",
    //   description: "Example: /blog",
    //   type: "string",
    // },
    // {
    //   title: "External link",
    //   name: "link",
    //   type: "string",
    //   description: "Example: https://www.sanity.io",
    //   fieldset: "link",
    // },
  ],
  preview: {
    select: {
      title: "title",
      landingPage: "landingPageRoute.slug.current",
    },
    prepare({ title, landingPage }) {
      let subtitle = `Route: /${landingPage}`;
      return {
        title,
        subtitle,
      };
    },
  },
};
