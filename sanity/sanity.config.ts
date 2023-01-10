import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import { schemaTypes } from './schemas'
import pageinfo from './schemas/pageinfo'
import experience from './schemas/experience';
import project from './schemas/project';
import skill from './schemas/skill';
import social from './schemas/social';

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: 'an0lwaxj',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes
  },
})
