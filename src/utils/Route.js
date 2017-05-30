import _ from 'lodash'

/**
 * Define a route.
 */
export default class Route {

  // The name (identifier) of the route.
  name: string = ''

  // The path of the route. Ex: /home or /restaurants/:id
  path: string = ''

  disable: boolean = false

  authRequired: boolean = true

  /**
   * Construct a new Route object.
   * @param name The name (identifier) of the route.
   * @param path The path of the route. Ex: /home or /restaurants/:id
   * @param handler The handler for this route. A null handler disable the route
   * @param handler Define if the route is restrict to loggedIn user
   * @param disable
   */
  constructor(name: string, path: string, authRequired: boolean = true,
    disable: boolean = false) {
    this.name = name
    this.path = path
    this.authRequired = authRequired
    this.disable = disable
  }

  /*
   * Replace params. On url definition, params start with ':'
   */
  generatePathWithParams(params: Object) {
    let path = this.path;
    _.forIn(params, (param, key) => {
      path = path.replace(`:${key}`, param)
    })

    return path
  }

  getPath(): string {
    return this.path
  }
}
