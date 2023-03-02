import mediaquery from './mediaquery.js'
import row from './row.js'
import visibility from './visibility.js'
import column from './column.js'
import spacing from './spacing.js'

const datasources = ({ storyblok }) => {


  const uploadEntries = (datasource_id, entries) => {
    entries.forEach((entry) => {

      const payload = {
        datasource_entry: {
          ...entry,
          datasource_id,
        }
      }

      try {
        storyblok.post('/datasource_entries', payload)
      } catch (err) {
        storyblok.put('/datasource_entries', payload)
      }
      
    })
  }

  const upload = async () => {
    let created_datasources = await storyblok.get('/datasources')
    created_datasources = created_datasources.data.datasources.length > 0 ? created_datasources.data.datasources.map((datasource) => {
      return {
        id: datasource.id,
        slug: datasource.slug
      }
    }) : []

    const datasources = [
      {
        name: 'MediaQuery',
        slug: 'mediaquery',
        entries: mediaquery,
      },
      {
        name: 'Row',
        slug: 'row',
        entries: row,
      },
      {
        name: 'Column',
        slug: 'column',
        entries: column,
      },
      {
        name: 'Visibility',
        slug: 'visibility',
        entries: visibility,
      },
      {
        name: 'Spacing',
        slug: 'spacing',
        entries: spacing,
      },
    ]

    datasources.forEach(async ({ name, slug, entries }) => {
      const datasource = created_datasources.find(d => d.slug === slug)
      if (!datasource)  {
        const res = await storyblok.post('/datasources', {
          datasource: {
            name,
            slug,
          }
        })

        if (res.status == 201) {
          uploadEntries(res.data.datasource.id, entries)
        }
      } else {
        uploadEntries(datasource.id, entries)
      }        
    })

  }

  return {
    upload,
  }
}

export default datasources