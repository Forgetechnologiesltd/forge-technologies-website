export default {
  type: "object",
  name: "everyman",
  title: "The Everyman",
  description: "Content in tabs",
  fields: [
    {
      name: "tabs",
      type: "array",
      of: [{ type: "tabbableContent" }],
    },
  ],
  preview: {
    select: {
      tab0: "tabs.0.title",
      tab1: "tabs.1.title",
      tab2: "tabs.2.title",
      tab3: "tabs.3.title",
    },
    prepare: ({ tab0, tab1, tab2, tab3 }) => {
      const tabs = [tab0, tab1, tab2].filter(Boolean);
      const title = tabs.length > 0 ? `${tabs.join(", ")}` : "";
      const hasMoretabs = Boolean(tab3);
      return {
        title: hasMoretabs ? `${title}…` : title,
      };
    },
  },
};
