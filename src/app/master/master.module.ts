import { NgModule } from '@angular/core';// declares it is module
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { ViewMultipleCountryComponent } from './geography/countries/view-multiple-country/view-multiple-country.component';
import { EditCountryComponent } from './geography/countries/edit-country/edit-country.component';
import { GeographyService } from './geography/geography.service';
import { BusinessUnitServiceService } from './businessunit/business-unit.service';
import { EducationService } from './education/education.service';
import { AddCountryComponent } from './geography/countries/add-country/add-country.component';
import { DeleteCountryComponent } from './geography/countries/delete-country/delete-country.component';
import { ViewMultipleStateComponent } from './geography/states/view-multiple-states/view-multiple-states.component';
import { EditStatesComponent } from './geography/states/edit-states/edit-states.component';
import { AddStatesComponent } from './geography/states/add-states/add-states.component';
import { DeleteStatesComponent } from './geography/states/delete-states/delete-states.component';
import { ViewMultipleCitiesComponent } from './geography/city/view-multiple-cities/view-multiple-cities.component';
import { AddCityComponent } from './geography/city/add-city/add-city.component';
import { EditCityComponent } from './geography/city/edit-city/edit-city.component';
import { ViewMultiplePincodeComponent } from './geography/pincode/view-multiple-pincode/view-multiple-pincode.component';
import { EditPincodeComponent } from './geography/pincode/edit-pincode/edit-pincode.component';
import { AddPincodeComponent } from './geography/pincode/add-pincode/add-pincode.component';
import { DeletePincodeComponent } from './geography/pincode/delete-pincode/delete-pincode.component';
import { ViewMultipleBusinessUnitComponent } from './businessunit/businessunit/view-multiple-business-unit/view-multiple-business-unit.component';
import { EditBusinessUnitComponent } from './businessunit/businessunit/edit-business-unit/edit-business-unit.component';
import { AddBusinessUnitComponent } from './businessunit/businessunit/add-business-unit/add-business-unit.component';
import { DeleteBusinessUnitComponent } from './businessunit/businessunit/delete-business-unit/delete-business-unit.component';
import { ViewMultipleCourseComponent } from './education/course/view-multiple-course/view-multiple-course.component';
import { AddCourseComponent } from './education/course/add-course/add-course.component';
import { EditCourseComponent } from './education/course/edit-course/edit-course.component';
import { DeleteCourseComponent } from './education/course/delete-course/delete-course.component';
import { ViewMultipleInstitutionComponent } from './education/institution/view-multiple-institution/view-multiple-institution.component';
import { AddInstitutionComponent } from './education/institution/add-institution/add-institution.component';
import { EditInstitutionComponent } from './education/institution/edit-institution/edit-institution.component';
import { DeleteInstitutionComponent } from './education/institution/delete-institution/delete-institution.component';
import { ViewMultipleUniverstiesComponent } from './education/universities/view-multiple-universties/view-multiple-universties.component';
import { AddUniverstiesComponent } from './education/universities/add-universties/add-universties.component';
import { EditUniverstiesComponent } from './education/universities/edit-universties/edit-universties.component';
import { DeleteUniverstiesComponent } from './education/universities/delete-universties/delete-universties.component';
import { FunctionComponent } from './function/function/function/function.component';
import { SubFunctionComponent } from './function/subfunction/sub-function/sub-function.component';
import { FunctionService } from './function/function.service';
import { CostCodeService } from './costcode/costcode.service';
import { ViewEntityComponent } from './entity/viewentity/view-entity/view-entity.component';
import { EditEntityComponent } from './entity/editentity/edit-entity/edit-entity.component';
import { DeleteEntityComponent } from './entity/deletentity/delete-entity/delete-entity.component';
import { AddEntityComponent } from './entity/addentity/add-entity/add-entity.component';
import { EntityService } from './entity/entity.service';
import { AddFunctionComponent } from './function/function/addfunction/add-function/add-function.component';
import { DeleteFunctionComponent } from './function/function/deletefunction/delete-function/delete-function.component';
import { AddSubFunctionComponent } from './function/subfunction/addsubfunction/add-sub-function/add-sub-function.component';
import { DeleteSubFunctionComponent } from './function/subfunction/deletesubfunction/delete-sub-function/delete-sub-function.component';
import { EditFunctionComponent } from './function/function/editfunction/edit-function/edit-function.component';
import { EditDepartmentComponent } from './department/department/edit-department/edit-department.component';
import { AddDepartmentComponent } from './department/department/add-department/add-department.component';
import { DeleteDepartmentComponent } from './department/department/delete-department/delete-department.component';
import { ViewSubDepartmentComponent } from './department/subdepartment/view-sub-department/view-sub-department.component';
import { EditSubDepartmentComponent } from './department/subdepartment/edit-sub-department/edit-sub-department.component';
import { AddSubDepartmentComponent } from './department/subdepartment/add-sub-department/add-sub-department.component';
import { DeleteSubDepartmentComponent } from './department/subdepartment/delete-sub-department/delete-sub-department.component';
import { ViewDepartmentComponent } from './department/department/view-department/view-department.component';
import { DepartmentService } from './department/department.service';
import { EditSubFunctionComponent } from './function/subfunction/editsubfunction/edit-sub-function/edit-sub-function.component';
import { ViewCostCodeComponent } from './costcode/view-cost-code/view-cost-code.component';
import { EditCostCodeComponent } from './costcode/edit-cost-code/edit-cost-code.component';
import { AddCostCodeComponent } from './costcode/add-cost-code/add-cost-code.component';
import { DeleteCostCodeComponent } from './costcode/delete-cost-code/delete-cost-code.component';
import { ViewEmployerComponent } from './employer/view-employer/view-employer.component';
import { EditEmployerComponent } from './employer/edit-employer/edit-employer.component';
import { AddEmployerComponent } from './employer/add-employer/add-employer.component';
import { DeleteEmployerComponent } from './employer/delete-employer/delete-employer.component';
import { ViewFunctionalDesignationComponent } from './functionaldesignation/view-functional-designation/view-functional-designation.component';
import { EditFunctionalDesignationComponent } from './functionaldesignation/edit-functional-designation/edit-functional-designation.component';
import { AddFunctionalDesignationComponent } from './functionaldesignation/add-functional-designation/add-functional-designation.component';
import { DeleteFunctionalDesignationComponent } from './functionaldesignation/delete-functional-designation/delete-functional-designation.component';
import { ViewIndustriesComponent } from './industries/view-industries/view-industries.component';
import { EditIndustriesComponent } from './industries/edit-industries/edit-industries.component';
import { AddIndustriesComponent } from './industries/add-industries/add-industries.component';
import { DeleteIndustriesComponent } from './industries/delete-industries/delete-industries.component';
import { ViewInterventionDayComponent } from './interventionday/view-intervention-day/view-intervention-day.component';
import { EditInterventionDayComponent } from './interventionday/edit-intervention-day/edit-intervention-day.component';
import { AddInterventionDayComponent } from './interventionday/add-intervention-day/add-intervention-day.component';
import { DeleteInterventionDayComponent } from './interventionday/delete-intervention-day/delete-intervention-day.component';
import { ViewJobandComponent } from './jobband/view-joband/view-joband.component';
import { EditJobandComponent } from './jobband/edit-joband/edit-joband.component';
import { AddJobandComponent } from './jobband/add-joband/add-joband.component';
import { DeleteJobandComponent } from './jobband/delete-joband/delete-joband.component';
import { VeiwJobBandDesignationComponent } from './jobband-designation/veiw-job-band-designation/veiw-job-band-designation.component';
import { EditJobBandDesignationComponent } from './jobband-designation/edit-job-band-designation/edit-job-band-designation.component';
import { AddJobBandDesignationComponent } from './jobband-designation/add-job-band-designation/add-job-band-designation.component';
import { DeleteJobBandDesignationComponent } from './jobband-designation/delete-job-band-designation/delete-job-band-designation.component';
import { ViewModuleComponent } from './module/view-module/view-module.component';
import { EditModuleComponent } from './module/edit-module/edit-module.component';
import { AddModuleComponent } from './module/add-module/add-module.component';
import { DeleteModuleComponent } from './module/delete-module/delete-module.component';
import { ViewOrganizationComponent } from './organization/view-organization/view-organization.component';
import { EditOrganizationComponent } from './organization/edit-organization/edit-organization.component';
import { AddOrganizationComponent } from './organization/add-organization/add-organization.component';
import { DeleteOrganizationComponent } from './organization/delete-organization/delete-organization.component';
import { ViewRoleComponent } from './role/view-role/view-role.component';
import { EditRoleComponent } from './role/edit-role/edit-role.component';
import { AddRoleComponent } from './role/add-role/add-role.component';
import { DeleteRoleComponent } from './role/delete-role/delete-role.component';
import { ViewStageComponent } from './stage/view-stage/view-stage.component';
import { EditStageComponent } from './stage/edit-stage/edit-stage.component';
import { AddStageComponent } from './stage/add-stage/add-stage.component';
import { DeleteStageComponent } from './stage/delete-stage/delete-stage.component';
import { ViewTargetAudienceComponent } from './target-audience/view-target-audience/view-target-audience.component';
import { EditTargetAudienceComponent } from './target-audience/edit-target-audience/edit-target-audience.component';
import { AddTargetAudienceComponent } from './target-audience/add-target-audience/add-target-audience.component';
import { DeleteTargetAudienceComponent } from './target-audience/delete-target-audience/delete-target-audience.component';
import { EmployerService } from './employer/employer.service';
import { IndustriesService } from './industries/industries.service';
import { InterventionDayService } from './interventionday/interventionday.service';
import { JobBandService } from './jobband/jobband.service';
import { JobBandDesignationService } from './jobband-designation/jobbanddesignation.service';
import { FunctionalDesignationService } from './functionaldesignation/functionaldesignation.service';
import { RoleService } from './role/role.service';
import { StageService } from './stage/stage.service';
import { EditStatusReasonComponent } from './status-reason/edit-status-reason/edit-status-reason.component';
import { AddStatusReasonComponent } from './status-reason/add-status-reason/add-status-reason.component';
import { DeleteStatusReasonComponent } from './status-reason/delete-status-reason/delete-status-reason.component';
import { ViewStatusReasonComponent } from './status-reason/view-status-reason/view-status-reason.component';
import { StatusReasonService } from './status-reason/status-reason.service';
import { TargetAudienceService } from './target-audience/taget-audience.service';
import { ModuleService } from './module/module.service';
import { MasterComponent } from './master.component';
import { DocumnetsService } from './documnets/documnets.service';
import { ViewDocumnetsComponent } from './documnets/viewdocuments/documents.component';
import { EditDocumentsComponent} from './documnets/editdocuments/editdocuments.component';
import { AddDocumentsComponent } from './documnets/adddocuments/adddocuments.component';








//paths for routing

const routes: Routes = [

  { path: 'master', component: MasterComponent ,data : {title: 'Master', state: 'master'}},
  { path: 'viewcountries', component: ViewMultipleCountryComponent },
  { path: 'viewstates', component: ViewMultipleStateComponent },
  { path: 'viewcities', component: ViewMultipleCitiesComponent },
  { path: 'viewpincodes', component: ViewMultiplePincodeComponent },
  { path: 'viewbusinessunit', component: ViewMultipleBusinessUnitComponent },
  { path: 'viewcourses', component: ViewMultipleCourseComponent },
  { path: 'viewinstitution', component: ViewMultipleInstitutionComponent },
  { path: 'viewuniversties', component: ViewMultipleUniverstiesComponent },
  { path: 'viewcostcode', component: ViewCostCodeComponent },
  { path: 'viewfunction', component: FunctionComponent },
  { path: 'viewsubfunction', component: SubFunctionComponent },
  { path: 'viewentity', component: ViewEntityComponent },
  { path: 'viewdepartment', component: ViewDepartmentComponent },
  { path: 'viewsubdepartment', component: ViewSubDepartmentComponent },
  { path: 'viewemployers', component: ViewEmployerComponent },
  { path: 'viewfunctionaldesignation', component: ViewFunctionalDesignationComponent },
  { path: 'viewindustries', component: ViewIndustriesComponent },
  { path: 'viewintervationday', component: ViewInterventionDayComponent },
  { path: 'viewjobband', component: ViewJobandComponent },
  { path: 'viewjobbanddesignation', component: VeiwJobBandDesignationComponent },
  { path: 'viewmodule', component: ViewModuleComponent },
  { path: 'vieworganization', component: ViewOrganizationComponent },
  { path: 'viewrole', component: ViewRoleComponent },
  { path: 'viewstage', component: ViewStageComponent },
  { path: 'viewstatusreason', component: ViewStatusReasonComponent },
  { path: 'viewtargetaudience', component: ViewTargetAudienceComponent },
  { path: 'viewdocuments', component: ViewDocumnetsComponent },




];
//module decorator
@NgModule({
  imports: [


    CommonModule,
    RouterModule.forRoot(routes, { useHash: true }),
    SharedModule.forRoot()
  ],
  providers: [GeographyService, BusinessUnitServiceService, EducationService, FunctionService, CostCodeService, EntityService, DepartmentService, EmployerService, IndustriesService, InterventionDayService, JobBandService,
    JobBandDesignationService,FunctionalDesignationService,RoleService,StageService,StatusReasonService , TargetAudienceService,ModuleService,DocumnetsService],
  declarations: [MasterComponent,ViewMultipleCountryComponent, EditCountryComponent, AddCountryComponent, DeleteCountryComponent,
    ViewMultipleStateComponent, EditStatesComponent, AddStatesComponent, DeleteStatesComponent, ViewMultipleCitiesComponent,
    AddCityComponent, EditCityComponent, ViewMultiplePincodeComponent, EditPincodeComponent, AddPincodeComponent, DeletePincodeComponent,
    ViewMultipleBusinessUnitComponent, EditBusinessUnitComponent, AddBusinessUnitComponent, DeleteBusinessUnitComponent, ViewMultipleCourseComponent,
    AddCourseComponent, EditCourseComponent, DeleteCourseComponent, ViewMultipleInstitutionComponent, AddInstitutionComponent, EditInstitutionComponent,
    DeleteInstitutionComponent, ViewMultipleUniverstiesComponent, AddUniverstiesComponent, EditUniverstiesComponent, DeleteUniverstiesComponent,
    FunctionComponent, SubFunctionComponent, ViewEntityComponent, EditEntityComponent, DeleteEntityComponent, AddEntityComponent, EditFunctionComponent, AddFunctionComponent,
    DeleteFunctionComponent, AddSubFunctionComponent, DeleteSubFunctionComponent, ViewDepartmentComponent, EditDepartmentComponent, AddDepartmentComponent, DeleteDepartmentComponent,
    ViewSubDepartmentComponent, EditSubDepartmentComponent, AddSubDepartmentComponent, DeleteSubDepartmentComponent, EditSubFunctionComponent, ViewCostCodeComponent, EditCostCodeComponent,
    AddCostCodeComponent, DeleteCostCodeComponent, ViewEmployerComponent, EditEmployerComponent, AddEmployerComponent, DeleteEmployerComponent, ViewFunctionalDesignationComponent, EditFunctionalDesignationComponent,
    AddFunctionalDesignationComponent, DeleteFunctionalDesignationComponent, ViewIndustriesComponent, EditIndustriesComponent, AddIndustriesComponent, DeleteIndustriesComponent, ViewInterventionDayComponent,
    EditInterventionDayComponent, AddInterventionDayComponent, DeleteInterventionDayComponent, ViewJobandComponent, EditJobandComponent, AddJobandComponent, DeleteJobandComponent, VeiwJobBandDesignationComponent,
    EditJobBandDesignationComponent, AddJobBandDesignationComponent, DeleteJobBandDesignationComponent, ViewModuleComponent, EditModuleComponent, AddModuleComponent, DeleteModuleComponent, ViewOrganizationComponent,
    EditOrganizationComponent, AddOrganizationComponent, DeleteOrganizationComponent, ViewRoleComponent, EditRoleComponent, AddRoleComponent, DeleteRoleComponent, ViewStageComponent, EditStageComponent, AddStageComponent,
    DeleteStageComponent, ViewTargetAudienceComponent, EditTargetAudienceComponent, AddTargetAudienceComponent, DeleteTargetAudienceComponent,EditStatusReasonComponent,AddStatusReasonComponent,ViewStatusReasonComponent,DeleteStatusReasonComponent,
    ViewDocumnetsComponent,EditDocumentsComponent,AddDocumentsComponent
  ],
  exports: [RouterModule],
})
export class MasterModule { }