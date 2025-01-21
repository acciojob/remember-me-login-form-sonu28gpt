//your JS code here. If required.
let existBtn=document.querySelector('#existing');
function exist(){
        let userDetail=(localStorage.getItem('user'))?localStorage.getItem('user'):'{}';
        // console.log(typeof userDetail);
        userDetail=JSON.parse(userDetail)
        console.log(userDetail,Object.keys(userDetail))   
        if(Object.keys(userDetail).length){
         
        	document.querySelector('#existing').style.display='block';
        }else{
			existBtn.style.display='none';
		}
}
existBtn.addEventListener('click',()=>{
	  let userDetail=(localStorage.getItem('user'))?localStorage.getItem('user'):'{}';
        // console.log(typeof userDetail);
        userDetail=JSON.parse(userDetail)
  alert(`Logged in as ${userDetail.username}`);
})

let form=document.querySelector('form');


form.addEventListener('submit',(e)=>{
  e.preventDefault();
  let data=new FormData(form);
  let dataObj=Object.fromEntries(data);
	let {username ,password}=dataObj;
    form.reset();
	  if(!username || !password){
		  return ;
	  }
    if(dataObj?.check){
      console.log('hi');
      localStorage.setItem('user',JSON.stringify(dataObj));

    }else{
      localStorage.clear();
      // existBtn.style.display='none';
    }
    alert(`Logged in as ${username}`);
    exist();
})
   
exist();