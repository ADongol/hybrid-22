import { Component, ElementRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from '../../../shared/services/toastr.service';
import { ToolListService } from '../../services/tool-list.service';  
import { UserService } from '../../../shared/services/user.service';
import { WebConfigService } from '../../../shared/services/webconfig.service';
import { User } from '../../../shared/models/user';
import { Enums } from '../../../shared/enums/enums';

@Component({
    selector: "tool-list",
    templateUrl: "./tool-list.component.html",
    styleUrls: ["./tool-list.component.css"],
    providers: [ToolListService]
})
export class ToolListComponent implements OnInit{
 
    public tools: any = [];
    public user: any;
    public webconfig: any;
    
    constructor(private router: Router, private route: ActivatedRoute,
        private toolsService: ToolListService, private userSvc: UserService,
        private webConfigSvc: WebConfigService, private enums: Enums)
    {
        this.user = this.route.snapshot.data['currentUser'].model;
    }

    ngOnInit() {
        this.webConfigSvc.getWebConfig().then((resp: any) => {
            this.webconfig = resp;
        }).catch(error => {
            console.log("error message: " + error.message);
            console.log("error stack: " + error.stack);
            });

        this.tools = this.getAllTools();
    }

    getAllTools() {

        return this.toolsService.getTools().subscribe(data => {
            this.tools = data;

            for (var i = 0; i < this.tools.length; i++) {
                if (this.tools[i].accessUrl != null) {
                    this.tools[i].clickable = true;

                    if (this.tools[i].toolId == this.enums.ToolAccessEnum.LCSubmittalTool) {
                        this.tools[i].accessUrl = this.webconfig.routeConfig.lcstURLTool + 
                            "&userId=" + this.user.userId + "&firstName=" + this.user.firstName +
                            "&lastName=" + this.user.lastName + "&email=" + this.user.email;
                    }

                    if (this.tools[i].toolId == this.enums.ToolAccessEnum.LCSTHighEff) {
                        this.tools[i].accessUrl = this.webconfig.routeConfig.lcstURLHighEff + "&reqType=Tool" + 
                            "&userId=" + this.user.userId + "&firstName=" + this.user.firstName +
                            "&lastName=" + this.user.lastName + "&email=" + this.user.email;
                    }

                    if (this.tools[i].toolId == this.enums.ToolAccessEnum.LCSTHighEffv2) {
                        this.tools[i].accessUrl = this.webconfig.routeConfig.lcstURLHighEffv2 + "&reqType=Tool" +
                            "&userId=" + this.user.userId + "&firstName=" + this.user.firstName +
                            "&lastName=" + this.user.lastName + "&email=" + this.user.email;
                    }
                }
                else {
                    this.tools[i].downloadable = true;
                }
            }
        });       
    }

    convertToSafeHtml(description:string) {
        return 
    }

    ngOnDestroy() {
        
    }
}
    

     