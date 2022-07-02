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
var tool_list_service_1 = require("../../services/tool-list.service");
var user_service_1 = require("../../../shared/services/user.service");
var webconfig_service_1 = require("../../../shared/services/webconfig.service");
var enums_1 = require("../../../shared/enums/enums");
var ToolListComponent = /** @class */ (function () {
    function ToolListComponent(router, route, toolsService, userSvc, webConfigSvc, enums) {
        this.router = router;
        this.route = route;
        this.toolsService = toolsService;
        this.userSvc = userSvc;
        this.webConfigSvc = webConfigSvc;
        this.enums = enums;
        this.tools = [];
        this.user = this.route.snapshot.data['currentUser'].model;
    }
    ToolListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.webConfigSvc.getWebConfig().then(function (resp) {
            _this.webconfig = resp;
        }).catch(function (error) {
            console.log("error message: " + error.message);
            console.log("error stack: " + error.stack);
        });
        this.tools = this.getAllTools();
    };
    ToolListComponent.prototype.getAllTools = function () {
        var _this = this;
        return this.toolsService.getTools().subscribe(function (data) {
            _this.tools = data;
            for (var i = 0; i < _this.tools.length; i++) {
                if (_this.tools[i].accessUrl != null) {
                    _this.tools[i].clickable = true;
                    if (_this.tools[i].toolId == _this.enums.ToolAccessEnum.LCSubmittalTool) {
                        _this.tools[i].accessUrl = _this.webconfig.routeConfig.lcstURLTool +
                            "&userId=" + _this.user.userId + "&firstName=" + _this.user.firstName +
                            "&lastName=" + _this.user.lastName + "&email=" + _this.user.email;
                    }
                    if (_this.tools[i].toolId == _this.enums.ToolAccessEnum.LCSTHighEff) {
                        _this.tools[i].accessUrl = _this.webconfig.routeConfig.lcstURLHighEff + "&reqType=Tool" +
                            "&userId=" + _this.user.userId + "&firstName=" + _this.user.firstName +
                            "&lastName=" + _this.user.lastName + "&email=" + _this.user.email;
                    }
                    if (_this.tools[i].toolId == _this.enums.ToolAccessEnum.LCSTHighEffv2) {
                        _this.tools[i].accessUrl = _this.webconfig.routeConfig.lcstURLHighEffv2 + "&reqType=Tool" +
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
    ToolListComponent.prototype.convertToSafeHtml = function (description) {
        return;
    };
    ToolListComponent.prototype.ngOnDestroy = function () {
    };
    ToolListComponent = __decorate([
        core_1.Component({
            selector: "tool-list",
            templateUrl: "./tool-list.component.html",
            styleUrls: ["./tool-list.component.css"],
            providers: [tool_list_service_1.ToolListService]
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute,
            tool_list_service_1.ToolListService, user_service_1.UserService,
            webconfig_service_1.WebConfigService, enums_1.Enums])
    ], ToolListComponent);
    return ToolListComponent;
}());
exports.ToolListComponent = ToolListComponent;
//# sourceMappingURL=tool-list.component.js.map