import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTrainingApp';
  worker = new Worker ('./my-worker.worker', {type: 'module'}); 
 

  ngOnInit() {
    if (typeof Worker !== 'undefined') {  
      // Create a new  
      const worker = new Worker('./my-worker.worker', {  
          type: 'module'  
      });  
      worker.onmessage = ({  
          data  
      }) => {  
          console.log(`page got message: ${data}`);  
      };  
      worker.postMessage('welcome');  
  } else {  
      console.log('Web Workers are not supported in this environment.');  
      
  }  
  }
 

}
