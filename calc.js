let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenValue;
for( let item of buttons){
	item.addEventListener('click', (event)=>{
		 let buttontext= event.target.innerText;
		if(buttontext=='X')
		{
			buttontext ='*';
			screenValue += buttontext;
			screen.value = screenValue;

		}
		else if(buttontext =='C'){
              screenValue ="";
			screen.value= screenValue;
		}
		else if(buttontext =='='){
			screen.value = eval(screenValue);
		}
		else
		{
			screenValue += buttontext;
			screen.value= screenValue;
		}
	})
}