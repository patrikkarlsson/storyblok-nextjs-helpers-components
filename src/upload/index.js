import dotenv from 'dotenv'
dotenv.config({ silent: process.env.NODE_ENV === 'production' })
import uploader from './../storyblok/uploader.js'
import datasources from '../schemas/datasources/index.js'
import components from '../schemas/components/index.js'

const sync = async () => {
  const storyblok = uploader()
  
  await datasources({ storyblok }).upload()
  await components({ storyblok }).upload()
}

await sync()

