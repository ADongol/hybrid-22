
import { Component, OnInit, Input, Output, EventEmitter, ViewChildren } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';

import { ToastrService } from '../../shared/services/toastr.service';
import { UserService } from '../../shared/services/user.service';
import { Enums } from '../../shared/enums/enums';

import { ProjectService } from '../../project/services/project.service';

declare var jQuery: any;

@Component({
    selector: 'project-internal',
    templateUrl: './project-internal.component.html'
})
export class ProjectInternalComponent implements OnInit {

    @Input() user: any;
    @Input() project: any;
    @Input() projectEditForm: any;

    public canViewPipelineData: boolean = false;
    public canEditPipelineData: boolean = false;

    public defaultItem: { text: string, value: number } = { text: "Select ...", value: null };

    constructor(private router: Router, private route: ActivatedRoute,
        private toastrSvc: ToastrService, private userSvc: UserService,
        private enums: Enums, private http: Http, private projectSvc: ProjectService) {
    }

    ngOnInit() {
        this.canViewPipelineData = this.userSvc.hasAccess(this.user, this.enums.SystemAccessEnum.ViewPipelineData);
        this.canEditPipelineData = this.userSvc.hasAccess(this.user, this.enums.SystemAccessEnum.EditPipelineData);
    }
};

