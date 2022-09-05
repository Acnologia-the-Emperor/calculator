import './App.css'
import * as $ from 'jquery';

var str = "";
var operator = "";
var after = "";
var str2 = "";
var truth = 0;




function App() {
  function calculate(){
    
    if(operator === "+"){
      // alert();

      str = parseInt(str) + parseInt(str2);
      str2 = ""
      document.getElementById("write").innerHTML = str.toString();
    }
    if(operator === "-"){
      str = parseInt(str) - parseInt(str2);
      str2 = ""
      document.getElementById("write").innerHTML = str.toString();
    }
    if(operator === "x"){
      str = parseInt(str) * parseInt(str2);
      str2 = ""
      document.getElementById("write").innerHTML = str.toString();
    }
    if(operator === "/"){
      str = parseInt(str)/ parseInt(str2);
      str2 = ""
      document.getElementById("write").innerHTML = str.toString();
    }

  }
  
  return(
    <>
    <body>
      <div class="write" id="write">0</div>
      
      <div class="button">
        <div class="numbers">
          <button  value='7'>7</button>
          <button  value='8'>8</button>
          <button  value='9'>9</button>
          <button class="operator" value="/">/</button>
        </div>
        

        
        <div class="numbers">
          <button value="4">4</button>
          <button value="5">5</button>
          <button value="6">6</button>

          <button class="operator" value="x">x</button>
        </div>
        
        
        
        <div class="numbers">
          
            <button value="1">1</button>
            <button value="2">2</button>
            <button value="3">3</button>
            <button class="operator" value="+">+</button>
        </div>
        
        <div class="numbers">
          <button value=".">.</button>
          <button value="0">0</button>
          <button onClick={calculate}>=</button>
          <button class="operator" value="-">-</button>

        </div>
        
        <button class="clear">Clear</button>

      </div>
    
      </body>
    </>
  );

}

  // if(document.getElementsByClassName("button") && document.getElementsByClassName("numbers")){
  //   alert("aids");
  

  // for numbers
  $("button").on('click',function(e) {
    var fired_button = $(this).val();
    if(truth === 0){
      str += fired_button;
      document.getElementById("write").innerHTML = str;
    }
    else if(truth === 1 && fired_button != "+" && fired_button !== "-" && fired_button !== "x" && fired_button != "/"){
      str2 += fired_button;
      document.getElementById("write").innerHTML = str2;
    }
    
    
  });
  

  $(".clear").on('click',function(e) {
    str= "";
    document.getElementById("write").innerHTML = str;
    truth = 0;
    operator = "";
    after = "";
    str2 = "";
  });

  $(".operator").on('click',function(e) {
    // after = str;
    // str = "";
    document.getElementById("write").innerHTML = "";
    operator = $(this).val();
    truth = 1;
  });


export default App;
