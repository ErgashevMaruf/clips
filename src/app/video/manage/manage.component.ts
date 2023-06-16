import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  videoOrder = '2'
  constructor(private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.videoOrder = params['sort'] === '2' ? params['sort'] : '1';
    })
    console.log(this.route.queryParams.subscribe(param => {
      console.log(param['sort']);
    }));

  }
  sort($event: Event) {
    const { value } = ($event.target as HTMLSelectElement)
    // this.router.navigateByUrl(`/manage?sort=${value}`)
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        sort: value
      }
    })
  }
}
