import LogoutController from './LogoutController'
import EmailVerificationController from './EmailVerificationController'
import EmailChangeVerificationController from './EmailChangeVerificationController'
import BlockEmailChangeVerificationController from './BlockEmailChangeVerificationController'

const Controllers = {
    LogoutController: Object.assign(LogoutController, LogoutController),
    EmailVerificationController: Object.assign(EmailVerificationController, EmailVerificationController),
    EmailChangeVerificationController: Object.assign(EmailChangeVerificationController, EmailChangeVerificationController),
    BlockEmailChangeVerificationController: Object.assign(BlockEmailChangeVerificationController, BlockEmailChangeVerificationController),
}

export default Controllers