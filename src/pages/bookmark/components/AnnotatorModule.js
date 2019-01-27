
/**
 * @doc http://docs.annotatorjs.org/en/latest/module-development.html
 */
const AnnotatorModule = (options) => {

  return {
    start: (app) => {
      app.notify("Hello, world!")
    },

    /**
     * Called when a new annotation is created.
     * @param  {[type]} annotation [description]
     * @return {[type]}            [description]
     */
    annotationCreated: (annotation) => {
      console.log('annotationCreated', annotation)
      // TODO: send to api
    },

    /**
     * Called when an annotation is updated.
     * @type {[type]}
     */
    annotationUpdated: (annotation) => {

    },

    /**
     * Called immediately before an annotation is deleted. Use if you need to conditionally cancel deletion, for example.
     * @param  {[type]} annotation [description]
     * @return {[type]}            [description]
     */
    beforeAnnotationDeleted: (annotation) => {

    },

    /**
     * Called when an annotation is deleted.
     * @type {[type]}
     */
     annotationDeleted: (annotation) => {

     },
     
    /**
     * Called immediately before an annotation is created. Modules may use this hook to modify the annotation before it is saved.
     * @type {[type]}
     */
    beforeAnnotationCreated: (annotation) => {

    },

    /**
     * Called with annotations retrieved from storage using load()
     * @param  {[type]} annotation [description]
     * @return {[type]}            [description]
     */
    annotationsLoaded: (annotation) => {
      console.log('annotationsLoaded', annotation)
    },
  }
}

export default AnnotatorModule
