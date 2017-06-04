import map from 'lodash/map'

export const generateSlides = content => {
  const div = document.createElement('div');
  div.innerHTML = content;

  const slides = div.querySelectorAll('.slide')

  console.log('slides', slides)

  return map(slides, slide => slide.innerHTML)
}
