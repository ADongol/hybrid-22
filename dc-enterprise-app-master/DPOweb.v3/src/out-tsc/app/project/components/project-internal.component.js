"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var toastr_service_1 = require("../../shared/services/toastr.service");
var user_service_1 = require("../../shared/services/user.service");
var enums_1 = require("../../shared/enums/enums");
var project_service_1 = require("../../project/services/project.service");
var ProjectInternalComponent = /** @class */ (function () {
    function ProjectInternalComponent(router, route, toastrSvc, userSvc, enums, http, projectSvc) {
        this.router = router;
        this.route = route;
        this.toastrSvc = toastrSvc;
        this.userSvc = userSvc;
        this.enums = enums;
        this.http = http;
        this.projectSvc = projectSvc;
        this.canViewPipelineData = false;
        this.canEditPipelineData = false;
        this.defaultItem = { text: "Select ...", value: null };
    }
    ProjectInternalComponent.prototype.ngOnInit = function () {
        this.canViewPipelineData = this.userSvc.hasAccess(this.user, this.enums.SystemAccessEnum.ViewPipelineData);
        this.canEditPipelineData = this.userSvc.hasAccess(this.user, this.enums.SystemAccessEnum.EditPipelineData);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ProjectInternalComponent.prototype, "user", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ProjectInternalComponent.prototype, "project", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ProjectInternalComponent.prototype, "projectEditForm", void 0);
    ProjectInternalComponent = __decorate([
        core_1.Component({
            selector: 'project-internal',
            templateUrl: './project-internal.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute,
            toastr_service_1.ToastrService, user_service_1.UserService,
            enums_1.Enums, http_1.Http, project_service_1.ProjectService])
    ], ProjectInternalComponent);
    return ProjectInternalComponent;
}());
exports.ProjectInternalComponent = ProjectInternalComponent;
;
//# sourceMappingURL=project-internal.component.js.map