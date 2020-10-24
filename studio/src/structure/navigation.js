import S from "@sanity/desk-tool/structure-builder";
import PreviewIFrame from "../../src/components/previewIFrame";

import { MdMenu } from "react-icons/md";

export default S.listItem()
  .title("Navigation")
  .child(
    S.list()
      .title("Menus and Routes")
      .items([
        S.listItem()
          .title("Navigation Menus")
          .icon(MdMenu)
          .schemaType("navigationMenu")
          .child(
            S.documentTypeList("navigationMenu").title("Navigation Menus")
          ),
        S.listItem()
          .title("Footer Menus")
          .icon(MdMenu)
          .schemaType("footerMenu")
          .child(S.documentTypeList("footerMenu").title("Footer Menus")),
        S.listItem()
          .title("Routes")
          .schemaType("route")
          .child(
            S.documentTypeList("route")
              .title("Routes")
              .child((documentId) =>
                S.document()
                  .documentId(documentId)
                  .schemaType("route")
                  .views([S.view.form(), PreviewIFrame()])
              )
          ),
      ])
  );
