import newBookmarkMiddlewares from '../modules/bookmark/middleware/newBookmarkMiddlewares'
import authMiddlewares from '../modules/auth/middlewares'

// TODO: remove, use modules
export default [...authMiddlewares, ...newBookmarkMiddlewares]
