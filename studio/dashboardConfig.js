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
                  buildHookId: '5eb9b74d5401a78a83a10a14',
                  title: 'Sanity Studio',
                  name: 'sanity-landing-1-studio',
                  apiId: '909a6a05-e93c-4e44-a99e-1a993ce017fb'
                },
                {
                  buildHookId: '5eb9b74d411ae08aded874e2',
                  title: 'Landing pages Website',
                  name: 'sanity-landing-1',
                  apiId: '7fadbb2d-7fd8-400e-a026-053050ae2629'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/3882501676/sanity-landing-1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-landing-1.netlify.app', category: 'apps'}
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
