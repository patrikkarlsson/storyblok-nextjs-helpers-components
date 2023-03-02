import components from './components'
import DynamicComponent from './components/DynamicComponent/DynamicComponent'
import AppContext from './context/AppContext'
import StoryblokHelper from './storyblok/storyblok'

import {
  generateColors,
  generateMQ,
  generateFontNames,
  DefaultTheme,
  generateTypographySettings,
  generateSpacing,
  generateFontFaces,
} from './styled'

import styled, { css, ThemeProvider, createGlobalStyle } from 'styled-components'

export {
  components as default,
  DynamicComponent,
  AppContext,
  generateColors,
  generateMQ,
  generateFontNames,
  generateTypographySettings,
  generateSpacing,
  DefaultTheme,
  generateFontFaces,
  StoryblokHelper,
  styled,
  css,
  ThemeProvider,
  createGlobalStyle
}