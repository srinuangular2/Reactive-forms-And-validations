import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  regForm:FormGroup;
 

  constructor(private mybuilder:FormBuilder) { 
    this.regForm=this.mybuilder.group({

      uname:new FormControl(null,[Validators.required,Validators.minLength(6)]),
      pwd:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
      email:new FormControl(null,[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      country:new FormControl('',[Validators.required])
    });

  }

  ngOnInit() {
    
  }
  postData(data){

    console.log(data);
    
      }
    


}
