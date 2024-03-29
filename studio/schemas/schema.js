// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import localeString from "./objects/localeString";

// document schemas
import navMenu from "./documents/navMenu";
import author from "./documents/author";
import category from "./documents/category";
import post from "./documents/post";
import casestudy from "./documents/casestudy";
import page from "./documents/page";
import siteSettings from "./documents/siteSettings";
import route from "./documents/route";
import footerMenu from "./documents/footerMenu";
import collaboratorList from "./documents/collaboratorList";

import experiment from "./objects/experiment";
import simpleBlockContent from "./objects/simpleBlockContent";

import * as plugs from "./plugs";
import plugDefaultFields from "./plugs/_plugDefaultFields";

// Object types
import { instagram, videoEmbed } from "./objects/embeds";
import cta from "./objects/cta";
import menuItem from "./objects/menuItem";
import collaboratorItem from "./objects/collaboratorItem";
import bodyPortableText from "./objects/bodyPortableText";
import excerptPortableText from "./objects/excerptPortableText";
import mainImage from "./objects/mainImage";
import authorReference from "./objects/authorReference";
import link from "./objects/link";
import socialLink from "./objects/socialLink";
import teamMember from "./objects/teamMember";
import variation from "./objects/variation";
import openGraph from "./objects/openGraph";
import latex from "./latex";
import submenuItem from "./objects/submenuItem";
import everyman from "./objects/everyman";
import wildcard from "./objects/wildcard";
import tabbableContent from "./objects/tabbableContent";
import youtube from "./objects/youtube"

const allPlugs = Object.values(plugs).map((plug) => {
  return { ...plug, fields: plugDefaultFields.concat(plug.fields) };
});

export default createSchema({
  name: "blog",
  types: schemaTypes // Built-in types
    // Our custom types
    .concat([
      latex,
      localeString,
      variation,
      openGraph,
      experiment,
      route,
      socialLink,
      link,
      simpleBlockContent,
      cta,
      menuItem,
      collaboratorItem,
      submenuItem,
      everyman,
      tabbableContent,
      footerMenu,
      collaboratorList,
      siteSettings,
      post,
      casestudy,
      navMenu,
      page,
      category,
      author,
      teamMember,
      mainImage,
      authorReference,
      instagram,
      videoEmbed,
      bodyPortableText,
      excerptPortableText,
      wildcard,
      youtube,
    ])
    .concat(allPlugs),
});
