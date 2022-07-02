import { Component, ElementRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from '../shared/services/toastr.service';
import { ToolsService } from './tools.service'; 
//import { KeepHtmlPipe } from '../shared/pipes/keep-html.pipe';
import { UserService } from '../shared/services/user.service';
import { WebConfigService } from '../shared/services/webconfig.service';
import { User } from '../shared/models/user';

@Component({
    selector: "tools",
    templateUrl: "app/tools/tools.component.html",
    styleUrls: ["app/tools/tools.component.css"],
    providers: [ToolsService]
})
export class ToolsComponent implements OnInit{
 
    private tools: any = [];
    public user: any;
    public webconfig: any;
    
    constructor(private router: Router, private route: ActivatedRoute,
        private toolsService: ToolsService, private userSvc: UserService,
        private webConfigSvc: WebConfigService )
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

                    if (this.tools[i].toolId == 120) {
                        this.tools[i].accessUrl = this.webconfig.routeConfig.lcstURLTool + 
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
    

     