import Content from './content.json' assert { type: "json" }
import Row from './row.json' assert { type: "json" }
import Column from './column.json' assert { type: "json" }
import Page from './page.json' assert { type: "json" }
import Section from './section.json' assert { type: "json" }
import MenuItem from './menu_item.json' assert { type: "json" }
import Global from './global.json' assert { type: "json" }

const components = ({ storyblok }) => {

  const upload = async () => {
  
    const components = [
      Content,
      Row,
      Column,
      Section,
      Page,
      MenuItem,
      Global,
    ]

    components.forEach((component) => {
      try {
        storyblok.post('/components', {
          component,
        })
      } catch(err) {
        // console.log(err)
      }
    })

  }

  return {
    upload,
  }
}

export default components