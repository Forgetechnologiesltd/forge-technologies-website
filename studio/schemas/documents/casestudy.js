export default {
  name: "casestudy",
  type: "document",
  title: "CaseStudy",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "Titles should be catchy, descriptive, and not too long",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description:
        "Some frontends will require a slug to be set to be able to show the post",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "publishedAt",
      type: "datetime",
      title: "Published at",
      description: "This can be used to schedule post for publishing",
    },
    {
      name: "mainImage",
      type: "mainImage",
      title: "Main image",
    },
    {
      name: "pdfLinkOrId",
      type: "file",
      title: "PDF link or ID",
    },
    {
      name: "excerpt",
      type: "excerptPortableText",
      title: "List Excerpt",
    },
    {
      name: "detailTopTitle",
      type: "string",
      title: "Detail top title",
      description: "Titles should be catchy, descriptive, and not too long",
    },
    {
      name: "detailTopBody",
      type: "bodyPortableText",
      title: "Detail Top Body",
    },
    {
      name: "industry",
      type: "string",
      title: "Detail Left industry",
    },
    {
      name: "services",
      type: "bodyPortableText",
      title: "Detail Left Services",
      description: "One line One service",
    },
    {
      name: "highlight1",
      type: "bodyPortableText",
      title: "Highlight List 1 (left)",
    },
    {
      name: "highlight2",
      type: "bodyPortableText",
      title: "Highlight List 2 (center)",
    },
    {
      name: "highlight3",
      type: "bodyPortableText",
      title: "Highlight List 3 (right)",
    },
    {
      name: "detailBottomTitle",
      type: "string",
      title: "Detail Bottom title",
      description: "Titles should be catchy, descriptive, and not too long",
    },
    {
      name: "detailBottomBody",
      type: "bodyPortableText",
      title: "Detail Bottom Body",
    },
    {
      name: "detailQuote",
      type: "bodyPortableText",
      title: "Detail Quote",
    },
    {
      name: "detailQuoteName",
      type: "string",
      title: "Detail Quote Name",
    },
    {
      name: "detailQuoteTitle",
      type: "string",
      title: "Detail Quote Title",
    },
    {
      name: "detailQuoteCompany",
      type: "string",
      title: "Detail Quote Company",
    },
    {
      name: "detailQuoteCompanyLogo",
      type: "mainImage",
      title: "Main image",
      title: "Detail Quote Company Logo",
    },
  ],
  orderings: [
    {
      name: "publishingDateAsc",
      title: "Publishing date new–>old",
      by: [
        {
          field: "publishedAt",
          direction: "asc",
        },
        {
          field: "title",
          direction: "asc",
        },
      ],
    },
    {
      name: "publishingDateDesc",
      title: "Publishing date old->new",
      by: [
        {
          field: "publishedAt",
          direction: "desc",
        },
        {
          field: "title",
          direction: "asc",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      publishedAt: "publishedAt",
      slug: "slug",
      media: "mainImage",
    },
    prepare({ title = "No title", publishedAt, slug = {}, media }) {
      const path = `/case-studies/${slug.current}`;
      return {
        title,
        media,
        subtitle: publishedAt ? path : "Missing publishing date",
      };
    },
  },
};
