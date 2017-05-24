import _ from 'lodash'

import I18n from '../i18n/I18n'

import request from 'superagent'

const Error = {
  NO_INTERNET: 'NO_INTERNET',
  UNKNOWN: 'UNKNOWN',
}

function ApiError(code, message) {
  return {
    code,
    message
  }
}

class ApiManager {

  ContentTypes = {
    FORM_URL_ENCODE: 'application/x-www-form-urlencoded'
  }

  /**
  * The default ApiManager configuration.
  * @type {Object}
  */
  config = {

    /**
    * A middleware used in case of error.
    * Must return true if the middleware have taking care of the error.
    * Use to handle 401, 500, etc.
    *
    * @param error
    * @param res If undefined, the request have encounter a connexion error.
    * @type Function
    *
    * Example of middleware:
    *
    * ```
    * errorMiddleware: (error, res, success, failure) => {
    * if (!_.isNil(res)) {
    *       if (res.statusCode === 401) {
    *         console.error('[API] 401, redirect to login')
    *         return true
    *       }
    *
    *       if (res.statusCode === 500) {
    *         console.log(res)
    *         Logger.error('API 500', res)
    *         // redirect to error 500 page
    *         return true
    *       }
    *     }
    *     return false
    *   }
    * ```
    */
    errorMiddleware: (error: Object, res: Object, success: Function, failure: Function) => { return false },

    /**
    * Function that must return an object.
    *
    * Example:
    * {
    *  Authorization:  'toto',
    *  OtherHeader: 'toto42'
    * }
    *
    * Note that the headers set to the request's params have the priority over the headers given
    * by the middleware.
    *
    * @type Function
    */
    headersMiddleware: () => { return {} },

    /**
    * @type string
    */
    apiUrl: '',
  }

  configure(configuration: Object) {
    this.config = _.merge(this.config, configuration)
  }

  //
  // ------------- Tools
  //

  getApiUrl(defaultUrl = null): string {
    if (defaultUrl !== null) {
      return defaultUrl
    }

    return this.config.apiUrl
  }

  /**
  * Merge headersParam with the headers given by the headersMiddleware.
  * Priority is given to the params headers over the middleware headers.
  */
  getHeaders(headersParam: Object): Object {
    const headersToSet = _.merge(this.config.headersMiddleware(), headersParam)

    return headersToSet
  }

  /**
  * Handle an HTTP response.
  * Calls the success callback in case of success
  * Calls the failure callback in case of error and if the errorMiddleware does not handle the error.
  *
  * @param error
  * @param res
  * @param success the closure called on success. Take a json object as parameter.
  * @param failure the closure called on failure. Take an ApiError as parameter.
  */
  handleResponse(error: Object, res: Object, success: Function, failure: Function) {
    if (!_.isUndefined(res) && this.isSuccessResponse(res.statusCode)) {
      if (!_.isEmpty(res.text)) {
        try {
          success(JSON.parse(res.text))
        } catch (e) {
          success(res.text)
        }
      } else {
        success()
      }
    } else {
      const errorMiddlewareUsed = this.config.errorMiddleware(error, res, success, failure)

      if (!errorMiddlewareUsed) {
        if (_.isUndefined(res)) { // no internet connexion / no response
          const apiError = ApiError(Error.NO_INTERNET, 'No internet connectivity')
          apiError.localizedMessage = I18n.tr('api_error.no_internet')
          failure(apiError)
        } else {
          console.log('get api errors')
          failure(this.createApiError(res.text))
        }
      }
    }
  }

  /**
  * Parse the HTTP response body to create an ApiError object.
  * @param responseBody The HTTP response body.
  * @returns {ApiError} A populate ApiError object.
  */
  createApiError(responseBody: string): ApiError {
    const error = ApiError(Error.UNKNOWN, 'Something went wrong, please try again')

    if (!_.isNull(responseBody) && !_.isUndefined(responseBody)) {
      try {
        const json = JSON.parse(responseBody)

        if (json) {
          if (!_.isEmpty(json.code)) {
            error.setCode(json.code)
            error.setMessage(json.message)
          }
        }
      } catch (syntaxError) { // SyntaxError exception
        error.setDetail(responseBody)
      }
    }

    return error
  }

  /**
  *
  * @param statusCode the response status code
  * @returns {boolean} True if the status code indicate a successful response
  */
  isSuccessResponse(statusCode: number): boolean {
    return statusCode >= 200 && statusCode < 300
  }

  //
  // ------------- Requests tools for the API
  //

  /**
  * Create an HTTP GET request.
  * @param endpoint The API endpoint (see ApiEndpoints).
  * @param query The query use on the url.
  * @param success the closure called on success. Take a json object as parameter.
  * @param failure the closure called on failure. Take an ApiError as parameter.
  */
  get(options: Object) {
    const { url, endpoint, query, headers, success, failure }  = options

    request
    .get(`${this.getApiUrl(url)}${endpoint}`, null, null)
    .query(query)
    .set('Accept', 'application/json')
    .set(this.getHeaders(headers))
    .end((error: Object, res: Object) => {
      this.handleResponse(error, res,
        (json: Object) => {
          success(json)
        },
        (apiError: ApiError) => {
          failure(apiError)
        }
      )
    })
  }

  /**
  * Create an HTTP GET request.
  * @param endpoint The API endpoint (see ApiEndpoints).
  * @param query The query use on the url.
  * @param success the closure called on success. Take a json object as parameter.
  * @param failure the closure called on failure. Take an ApiError as parameter.
  */
  delete(options: Object) {
    const { url, endpoint, query, headers, success, failure }  = options

    request.delete(`${this.getApiUrl(url)}${endpoint}`, null)
    .query(query)
    .set('Accept', 'application/json')
    .set(this.getHeaders(headers))
    .end((error: Object, res: Object) => {
      this.handleResponse(error, res,
        (json: Object) => {
          success(json)
        },
        (apiError: ApiError) => {
          failure(apiError)
        })
      }
    )
  }

  post(options: Object) {
    const { url, endpoint, data, headers, query, success, failure }  = options

    request.post(`${this.getApiUrl(url)}${endpoint}`, null, null)
    .type('json')
    .query(query)
    .send(JSON.stringify(data))
    .set('Accept', 'application/json')
    .set(this.getHeaders(headers))
    .end((error: Object, res: Object) => {
      this.handleResponse(error, res,
        (json: Object) => {
          success(json)
        },
        (apiError: ApiError) => {
          failure(apiError)
        })
      }
    )
  }

  /**
  * Send a multipart form
  *
  * @param endpoint
  * @param data: example: { otherParameters: JSON.stringify(entity) }
  * @param files: example: { imageCover: // png file here // }
  * @param success
  * @param failure
  */
  postMultipart(options: Object) {
    const { url, endpoint, data, files, headers, query, success, failure }  = options

    const req = request.post(`${this.getApiUrl(url)}${endpoint}`, null, null)
    .query(query)

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        req.field(key, data[key])
      }
    }

    for (const key in files) {
      if (files.hasOwnProperty(key)) {
        console.log('put multipart, attach file', key)
        req.attach(key, files[key])
      }
    }

    req.set('Accept', 'application/json')
    .set(this.getHeaders(headers))
    .end((error: Object, res: Object) => {
      this.handleResponse(error, res,
        (json: Object) => {
          success(json)
        },
        (apiError: ApiError) => {
          failure(apiError)
        })
      }
    )
  }

  /**
  * Create an HTTP PUT request.
  * Note this function will use the 'json' (application/json) format instead of the 'form' format
  * (application/x-www-form-urlencoded)
  *
  * See: https://visionmedia.github.io/superagent/#post-/-put-requests
  *
  * @param endpoint The API endpoint (see ApiEndpoints).
  * @param data The data to send.
  * @param success the closure called on success. Take a json object as parameter.
  * @param failure the closure called on failure. Take an ApiError as parameter.
  */
  put(options: Object) {
    const { url, endpoint, data, headers, query, success, failure }  = options

    request.put(`${this.getApiUrl(url)}${endpoint}`, null, null)
    .type('json')
    .send(JSON.stringify(data))
    .query(query)
    .set('Accept', 'application/json')
    .set(this.getHeaders(headers))
    .end((error: Object, res: Object) => {
      this.handleResponse(error, res,
        (json: Object) => {
          success(json)
        },
        (apiError: ApiError) => {
          failure(apiError)
        })
      }
    )
  }

  /**
  * Send a multipart form
  *
  * @param endpoint
  * @param data: example: { otherParameters: JSON.stringify(entity) }
  * @param files: example: { imageCover: // png file here // }
  * @param success
  * @param failure
  */
  putMultipart(options: Object) {
    const { url, endpoint, data, files, headers, query, success, failure }  = options

    const req = request.put(`${this.getApiUrl(url)}${endpoint}`, null, null)
    .query(query)

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        req.field(key, data[key])
      }
    }

    console.log('[put multipart] files', files)
    for (const key in files) {
      if (files.hasOwnProperty(key)) {
        const file = files[key]

        // handle file keys with '.' in it.
        if (!_.isUndefined(file) && !_.isNull(file)) {
          console.log('[put multipart] attach file', key)
          req.attach(key, file)
        } else {
          console.log('[put multipart] could not attach file', key)
        }
      }
    }

    req.set('Accept', 'application/json')
    .set(this.getHeaders(headers))
    .end((error: Object, res: Object) => {
      this.handleResponse(error, res,
        (json: Object) => {
          success(json)
        },
        (apiError: ApiError) => {
          failure(apiError)
        }
      )
    }
  )
}

//
// Requests tools for extern APIs
//

/**
* Create an HTTP GET request.
*/
getExtern(options: Object) {
  const { url, query, headers, success, failure }  = options

  request
  .get(url)
  .query(query)
  .set(headers)
  .end((error: Object, res: Object) => {
    if (!_.isNil(res) && this.isSuccessResponse(res.statusCode)) {
      success(res)
    } else {
      failure(error, res)
    }
  })
}

/**
* Create an HTTP GET request.
*/
postExtern(options: Object) {
  const { url, data, headers, success, failure }  = options

  request
  .post(url)
  .send(data)
  .set(headers)
  .end((error: Object, res: Object) => {
    if (!_.isNil(res) && this.isSuccessResponse(res.statusCode)) {
      success(res)
    } else {
      failure(error, res)
    }
  })
}

}

let _apiManagerInstance = new ApiManager()

export default _apiManagerInstance