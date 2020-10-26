import sanityClient from '../sanityClient'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient)

const imageHelper = (source) => builder.image(source)

export default ({ app }, inject) => {
  inject('imageHelper', imageHelper)
}
