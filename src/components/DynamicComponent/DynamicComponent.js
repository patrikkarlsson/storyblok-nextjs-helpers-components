import localComponents from "./.."
import React from 'react'

class DynamicComponent {
  constructor(components, renderRichText, blokResolvers, theme, storyblokEditable) {
    this.renderRichText = renderRichText
    this.blokResolvers = blokResolvers,
    this.theme = theme
    this.components = components
    this.localComponents = localComponents
    this.storyblokEditable = storyblokEditable
  }

  render(blok, key) {
    if (typeof this.components[blok.component] !== 'undefined') {
      const Component = this.components[blok.component]
      return (<Component storyblokEditable={this.storyblokEditable} key={key} blok={blok} theme={this.theme} />)
    }

    if (typeof this.localComponents[blok.component] !== 'undefined') {
      const Component = this.localComponents[blok.component]
    
      return (
        <Component storyblokEditable={this.storyblokEditable} blokResolvers={this.blokResolvers} key={key} renderRichText={this.renderRichText} blok={blok} theme={this.theme}>
          {blok.body ?
            blok.body.map((b) => {
              return this.render(b, b._uid)
            })
            : null
          }
        </Component>
      )
    }
  }
}

export default DynamicComponent