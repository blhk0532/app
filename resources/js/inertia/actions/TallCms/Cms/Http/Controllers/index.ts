import PreviewController from './PreviewController'
import ContactFormController from './ContactFormController'
import CommentController from './CommentController'
import MediaDownloadController from './MediaDownloadController'
import RobotsController from './RobotsController'
import SitemapController from './SitemapController'

const Controllers = {
    PreviewController: Object.assign(PreviewController, PreviewController),
    ContactFormController: Object.assign(ContactFormController, ContactFormController),
    CommentController: Object.assign(CommentController, CommentController),
    MediaDownloadController: Object.assign(MediaDownloadController, MediaDownloadController),
    RobotsController: Object.assign(RobotsController, RobotsController),
    SitemapController: Object.assign(SitemapController, SitemapController),
}

export default Controllers