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
var router_1 = require("@angular/router");
var toastr_service_1 = require("../../shared/services/toastr.service");
var user_service_1 = require("../../shared/services/user.service");
var enums_1 = require("../../shared/enums/enums");
var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(elementRef, router, route, toastrService, userSvc, enums) {
        this.router = router;
        this.route = route;
        this.userSvc = userSvc;
        this.enums = enums;
        this.canViewProject = false;
        this.elementRef = elementRef;
        this.toastrSvc = toastrService;
        this.user = this.route.snapshot.data['currentUser'].model;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.userSvc.isAuthenticated().then(function (resp) {
            if (!resp.isok || resp.model != true) {
                window.location.href = "/v3/#/account/login";
            }
        });
        this.canViewProject = this.userSvc.hasAccess(this.user, this.enums.SystemAccessEnum.ViewProject);
    };
    ProjectsComponent = __decorate([
        core_1.Component({
            selector: 'projects',
            templateUrl: './projects.component.html',
            //directives: [ProjectsGridComponent, ProjectsEditAllGridComponent, ProjectsGridFilterComponent],
            providers: [toastr_service_1.ToastrService]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, router_1.Router, router_1.ActivatedRoute,
            toastr_service_1.ToastrService, user_service_1.UserService, enums_1.Enums])
    ], ProjectsComponent);
    return ProjectsComponent;
}());
exports.ProjectsComponent = ProjectsComponent;
//# sourceMappingURL=projects.component.js.map