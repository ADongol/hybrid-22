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
var tools_service_1 = require("./tools.service");
//import { KeepHtmlPipe } from '../shared/pipes/keep-html.pipe';
var user_service_1 = require("../shared/services/user.service");
var webconfig_service_1 = require("../shared/services/webconfig.service");
var ToolsComponent = /** @class */ (function () {
    function ToolsComponent(router, route, toolsService, userSvc, webConfigSvc) {
        this.router = router;
        this.route = route;
        this.toolsService = toolsService;
        this.userSvc = userSvc;
        this.webConfigSvc = webConfigSvc;
        this.tools = [];
        this.user = this.route.snapshot.data['currentUser'].model;
    }
    ToolsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.webConfigSvc.getWebConfig().then(function (resp) {
            _this.webconfig = resp;
        }).catch(function (error) {
            console.log("error message: " + error.message);
            console.log("error stack: " + error.stack);
        });
        this.tools = this.getAllTools();
    };
    ToolsComponent.prototype.getAllTools = function () {
        var _this = this;
        return this.toolsService.getTools().subscribe(function (data) {
            _this.tools = data;
            for (var i = 0; i < _this.tools.length; i++) {
                if (_this.tools[i].accessUrl != null) {
                    _this.tools[i].clickable = true;
                    if (_this.tools[i].toolId == 120) {
                        _this.tools[i].accessUrl = _this.webconfig.routeConfig.lcstURLTool +
                            "&userId=" + _this.user.userId + "&firstName=" + _this.user.firstName +
                            "&lastName=" + _this.user.lastName + "&email=" + _this.user.email;
                    }
                }
                else {
                    _this.tools[i].downloadable = true;
                }
            }
        });
    };
    ToolsComponent.prototype.convertToSafeHtml = function (description) {
        return;
    };
    ToolsComponent.prototype.ngOnDestroy = function () {
    };
    ToolsComponent = __decorate([
        core_1.Component({
            selector: "tools",
            templateUrl: "app/tools/tools.component.html",
            styleUrls: ["app/tools/tools.component.css"],
            providers: [tools_service_1.ToolsService]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object, tools_service_1.ToolsService, user_service_1.UserService,
            webconfig_service_1.WebConfigService])
    ], ToolsComponent);
    return ToolsComponent;
    var _a, _b;
}());
exports.ToolsComponent = ToolsComponent;
//# sourceMappingURL=tools.component.js.map