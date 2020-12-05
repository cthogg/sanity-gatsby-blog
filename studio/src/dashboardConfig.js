export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fcb67563c2e9af10b93e7b3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-c764w9go',
                  apiId: 'bcc90513-c937-464b-8e85-e75cc8a0f3e8'
                },
                {
                  buildHookId: '5fcb67568a25c413f510220a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-jq87r35s',
                  apiId: 'd0a4efc5-9c1c-4853-9517-3811d3bb0e77'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cthogg/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-jq87r35s.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
