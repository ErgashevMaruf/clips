import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { UploadComponent } from './upload/upload.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UploadComponent
  ],
  imports: [
    CommonModule,
    VideoRoutingModule,
    SharedModule
  ]
})
export class VideoModule { }
