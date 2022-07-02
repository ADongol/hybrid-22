import { Component, ElementRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ToastrService } from '../../shared/services/toastr.service';
import { UserService } from '../../shared/services/user.service';
import { ProjectGridComponent } from './project-grid.component';
import { Enums } from '../../shared/enums/enums';

declare var jQuery: any;

@Component({
    selector: 'projects',
    templateUrl: './projects.component.html',
    //directives: [ProjectsGridComponent, ProjectsEditAllGridComponent, ProjectsGridFilterComponent],
    providers: [ToastrService]
})
export class ProjectsComponent implements OnInit {
    elementRef: ElementRef;
    private toastrSvc: any;

    public user: any;
    public canViewProject: boolean = false;

    public projectsGridDataSource: any;
    public projectListModelData: any;

    constructor(elementRef: ElementRef, private router: Router, private route: ActivatedRoute,
        toastrService: ToastrService, private userSvc: UserService, private enums: Enums) {
        this.elementRef = elementRef;
        this.toastrSvc = toastrService;        

        this.user = this.route.snapshot.data['currentUser'].model;
    }

    ngOnInit() {

        this.userSvc.isAuthenticated().then((resp: any) => {
            if (!resp.isok || resp.model != true) {
                window.location.href = "/v3/#/account/login";
            }
        });

        this.canViewProject = this.userSvc.hasAccess(this.user, this.enums.SystemAccessEnum.ViewProject);     
    }
}