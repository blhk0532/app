import V1 from './V1'
import HittaSeController from './HittaSeController'
import HittaDataController from './HittaDataController'
import PersonerDataController from './PersonerDataController'
import RatsitDataController from './RatsitDataController'
import DataPrivateController from './DataPrivateController'
import EniroDataController from './EniroDataController'
import UpplysningDataController from './UpplysningDataController'
import MerinfoDataController from './MerinfoDataController'
import MerinfoController from './MerinfoController'
import MerinfoQueueController from './MerinfoQueueController'
import MerinfoForetagQueueController from './MerinfoForetagQueueController'
import HittaForetagQueueController from './HittaForetagQueueController'
import RatsitForetagQueueController from './RatsitForetagQueueController'
import PostNummerForetagQueueController from './PostNummerForetagQueueController'
import PostNummerApiController from './PostNummerApiController'
import PostNummerQueController from './PostNummerQueController'
import HittaQueueController from './HittaQueueController'
import RatsitQueueController from './RatsitQueueController'
import PostNummerQueueController from './PostNummerQueueController'
import SwedenPostnummerApiController from './SwedenPostnummerApiController'
import RatsitKommunApiController from './RatsitKommunApiController'
import JobQueueController from './JobQueueController'
import AiChatController from './AiChatController'
import CalendarBookingController from './CalendarBookingController'
import CalendarDataController from './CalendarDataController'

const Api = {
    V1: Object.assign(V1, V1),
    HittaSeController: Object.assign(HittaSeController, HittaSeController),
    HittaDataController: Object.assign(HittaDataController, HittaDataController),
    PersonerDataController: Object.assign(PersonerDataController, PersonerDataController),
    RatsitDataController: Object.assign(RatsitDataController, RatsitDataController),
    DataPrivateController: Object.assign(DataPrivateController, DataPrivateController),
    EniroDataController: Object.assign(EniroDataController, EniroDataController),
    UpplysningDataController: Object.assign(UpplysningDataController, UpplysningDataController),
    MerinfoDataController: Object.assign(MerinfoDataController, MerinfoDataController),
    MerinfoController: Object.assign(MerinfoController, MerinfoController),
    MerinfoQueueController: Object.assign(MerinfoQueueController, MerinfoQueueController),
    MerinfoForetagQueueController: Object.assign(MerinfoForetagQueueController, MerinfoForetagQueueController),
    HittaForetagQueueController: Object.assign(HittaForetagQueueController, HittaForetagQueueController),
    RatsitForetagQueueController: Object.assign(RatsitForetagQueueController, RatsitForetagQueueController),
    PostNummerForetagQueueController: Object.assign(PostNummerForetagQueueController, PostNummerForetagQueueController),
    PostNummerApiController: Object.assign(PostNummerApiController, PostNummerApiController),
    PostNummerQueController: Object.assign(PostNummerQueController, PostNummerQueController),
    HittaQueueController: Object.assign(HittaQueueController, HittaQueueController),
    RatsitQueueController: Object.assign(RatsitQueueController, RatsitQueueController),
    PostNummerQueueController: Object.assign(PostNummerQueueController, PostNummerQueueController),
    SwedenPostnummerApiController: Object.assign(SwedenPostnummerApiController, SwedenPostnummerApiController),
    RatsitKommunApiController: Object.assign(RatsitKommunApiController, RatsitKommunApiController),
    JobQueueController: Object.assign(JobQueueController, JobQueueController),
    AiChatController: Object.assign(AiChatController, AiChatController),
    CalendarBookingController: Object.assign(CalendarBookingController, CalendarBookingController),
    CalendarDataController: Object.assign(CalendarDataController, CalendarDataController),
}

export default Api