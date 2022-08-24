import S from "@sanity/desk-tool/structure-builder";
import {
  GoMegaphone as BlogIcon,
  GoChecklist as ApprovedIcon,
  GoEye as ReviewIcon,
  GoCircleSlash as RejectedIcon,
  GoArchive as AllIcon,
} from "react-icons/go";

import PreviewIFrame from "../components/previewIFrame";

export const icons = {
  BlogIcon,
  ApprovedIcon,
  ReviewIcon,
  RejectedIcon,
  AllIcon,
};

const blog = S.listItem()
  .title("Case Studies")
  .icon(BlogIcon)
  .child(
    S.documentList("casestudy")
      .title("Case Studies")
      .menuItems(S.documentTypeList("casestudy").getMenuItems())
      .filter('_type == "casestudy"')
  );
export default blog;
