import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculator';
  calValue:number=0;
  funcT:any='NoFunction';
  calNumber:string='noValue';
  firstNumber:number=0;
  secondNumber:number=0;

  onClickValue(val:string,type:any){
    console.log(val," ",type)
    if(type=='number'){
      this.onNumberClick(val);
    }
    else if(type=="function"){
       this.onFunctionClick(val);
    }
  }


  onNumberClick(val:string){
   
  if (val === '.' && this.calNumber.includes('.')) {
    return; 
  }
     if(this.calNumber!= 'noValue'){
      this.calNumber=this.calNumber+val;
     }else{
      this.calNumber=val;
     }
     this.calValue=parseFloat(this.calNumber);
  }


  onFunctionClick(val:string){

    if(val=='c'){
      this.clearAll();
    }
 else if(this.funcT== "NoFunction"){
this.firstNumber=this.calValue;
this.calValue=0;
this.calNumber='noValue';
this.funcT=val;

    }else{
      this.secondNumber=this.calValue;
      this.valueCalculate(val);
    }
  }

  valueCalculate(val:string){
    if(this.funcT=='+'){
      const Total=this.firstNumber+this.secondNumber;
          this.totalAssignValues(Total,val);
          if(val=='='){
            this.onEqualPress();
          }
    }
    if(this.funcT=='-'){
      const Total=this.firstNumber-this.secondNumber;
     this.totalAssignValues(Total,val);
      if(val=='='){
            this.onEqualPress();
          }
    }
    if(this.funcT=='*'){
      const Total=this.firstNumber*this.secondNumber;
          this.totalAssignValues(Total,val);
           if(val=='='){
            this.onEqualPress();
          }

    }
    if(this.funcT=='/'){
      const Total=this.firstNumber/this.secondNumber;
         this.totalAssignValues(Total,val);
          if(val=='='){
            this.onEqualPress();
          }

    }
     if(this.funcT=='%'){
      const Total=this.firstNumber/this.secondNumber;
         this.totalAssignValues(Total,val);
          if(val=='='){
            this.onEqualPress();
          }

    }
  }

  totalAssignValues(Total:number,val:string){
 this.calValue=Total;
      this.firstNumber=Total;
      this.secondNumber = 0;
      this.calNumber='noValue';
      this.funcT=val;
  }

  onEqualPress(){
    this.firstNumber=0;
    this.secondNumber=0;
    this.funcT='NoFunction';
    this.calNumber='noValue';
  }

  clearAll(){
    this.firstNumber=0;
    this.secondNumber=0;
    this.calValue=0;
    this.funcT='NoFunction';
    this.calNumber='noValue';
  }
}
