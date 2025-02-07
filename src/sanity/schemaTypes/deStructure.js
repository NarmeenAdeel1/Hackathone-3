// deskStructure.js
import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('product').title('Products').child(
        S.document().views([
          S.view.form().permission('create', 'editor') // Role-based permission
        ])
      ),
      S.documentTypeListItem('order').title('Orders'),
    ])
