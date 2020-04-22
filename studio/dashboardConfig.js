export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea0779c5ef18e7d9b09ce2e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-kh4u69o3',
                  apiId: 'fddd25b1-7efc-4339-be8c-fd3c18441a1d'
                },
                {
                  buildHookId: '5ea0779d5b92d00f1cbdaa51',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-otqp2p9a',
                  apiId: 'c74ab24f-f4db-4d7b-9e00-e1e1c060b236'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/biswaranjanpati/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-otqp2p9a.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
