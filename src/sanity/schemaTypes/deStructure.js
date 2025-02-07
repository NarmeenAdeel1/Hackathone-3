import S from '@sanity/desk-tool/structure-builder'

const deskStructure = () =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('product').title('Products').child(
        S.document().views([
          S.view.form().permission('create', 'editor')
        ])
      ),
      S.documentTypeListItem('order').title('Orders'),
    ])

export default deskStructure
