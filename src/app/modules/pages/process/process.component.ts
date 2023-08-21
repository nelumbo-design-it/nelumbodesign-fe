import { Component } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent {
  public dataTimeline: any[] = [
    {number: '01', image: 'https://gaaga.wpengine.com/wp-content/uploads/2023/05/Gaaga-Process-Img-1.png', title: 'Gather The Ideas', description: 'Ued vehicula mattis purus. Curabitur at pretium odio, sit amet tincidunt erat. Pellentesque fringilla rutrum nisl, nec vulputate libero mattis vel. Integer bibendum metus ac metus varius, eget vestibulum arcu.'},
    {number: '02', image: 'https://gaaga.wpengine.com/wp-content/uploads/2023/05/Gaaga-Process-Img-1.png', title: 'Create Modules', description: 'Ued vehicula mattis purus. Curabitur at pretium odio, sit amet tincidunt erat. Pellentesque fringilla rutrum nisl, nec vulputate libero mattis vel. Integer bibendum metus ac metus varius, eget vestibulum arcu.'},
    {number: '03', image: 'https://gaaga.wpengine.com/wp-content/uploads/2023/05/Gaaga-Process-Img-1.png', title: 'Integrate & Execute', description: 'Ued vehicula mattis purus. Curabitur at pretium odio, sit amet tincidunt erat. Pellentesque fringilla rutrum nisl, nec vulputate libero mattis vel. Integer bibendum metus ac metus varius, eget vestibulum arcu.'},
  ]
}
