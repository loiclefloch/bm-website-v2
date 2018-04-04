import newBookmarkMiddlewares from '../modules/bookmark/middleware/newBookmarkMiddlewares'
import authMiddlewares from '../modules/auth/middlewares'


export default [...authMiddlewares, ...newBookmarkMiddlewares]
