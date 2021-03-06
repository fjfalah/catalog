import marked from 'marked'

const renderer = new marked.Renderer()
const linkRenderer = renderer.link

renderer.link = (href, title, text) => {
  const html = linkRenderer.call(renderer, href, title, text)
  return html.replace(/^<a /, '<a target="_blank" rel="nofollow" style="color: #ff9532" ')
}

const parse = (inputText) => {
  return marked(inputText, { renderer })
}

export default {
  parse,
}
