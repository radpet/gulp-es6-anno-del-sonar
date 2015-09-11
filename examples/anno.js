import 'angular-ui-router';
import 'ocLazyLoad';
import {Inject, Service} from 'app/app';
import {Eventbus} from 'services/eventbus/eventbus';
import {RouterStateChangeStartEvent} from 'common/router/router-state-change-start-event';
import {RouterStateChangeSuccessEvent} from 'common/router/router-state-change-success-event';
@Component({
    selector: 'seip-generic-dialog',
    properties: {
        content: 'content',
    }
})
@View({
    template: '<div ng-bind-html="genericDialog.content | toTrustedHtml"></div>',
})
/**
 * Generic dialog controller.
 */
export class GenericDialog {

}

@param

@Service
@Inject({
    asfasfasf
})
@Inject("$state", '$rootScope', Eventbus)
export class Router {

}