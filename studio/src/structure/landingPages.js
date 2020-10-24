import S from "@sanity/desk-tool/structure-builder";
import PreviewIFrame from "../../src/components/previewIFrame";

import { MdMenu } from "react-icons/lib/md";

export default S.listItem()
  .title("Page Builder")
  .title("Pages")
  .schemaType("page")
  .child(
    S.documentList("page")
      .title("Pages")
      .menuItems(S.documentTypeList("page").getMenuItems())
      .filter('_type == "page" && _id != "frontpage"')
  );
