import { getDomainUrl } from '../formatBookmark'

describe('formatBookmark', () => {
  it('getDomainUrl', () => {
    expect(getDomainUrl('https://google.com')).toEqual('google.com')
    expect(getDomainUrl('https://toto.google.com')).toEqual('toto.google.com')
    expect(getDomainUrl('https://google.com:9000')).toEqual('google.com')
  })
})
