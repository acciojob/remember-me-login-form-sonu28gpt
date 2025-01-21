//your JS code here. If required.
let existBtn=document.querySelector('#existing');
function exist(){
        let username=(localStorage.getItem('username'))?localStorage.getItem('username'):'';
        // console.log(typeof userDetail);
        // userDetail=JSON.parse(userDetail)
        // console.log(userDetail,Object.keys(userDetail))   
        if(username.length){
         
        	document.querySelector('#existing').style.display='block';
        }else{
			existBtn.style.display='none';
		}
}
existBtn.addEventListener('click',()=>{
	  let userDetail=(localStorage.getItem('username'))?localStorage.getItem('username'):'';
        // console.log(typeof userDetail);
        // userDetail=JSON.parse(userDetail)
  alert(`Logged in as ${userDetail}`);
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
      localStorage.setItem('username',username);
      localStorage.setItem('password',password);

    }else{
      localStorage.clear();
      // existBtn.style.display='none';
    }
    alert(`Logged in as ${username}`);
    exist();
})
   
exist();