import Vue from 'vue'
Vue.directive("gd",(el,binding)=>{ // bind update
    //console.log(el);
	var dis = Number(el.getAttribute("dis"));
    el.addEventListener("scroll",()=>{
    	var st = el.scrollTop;
         //console.log(st);
         //console.log(st>dis);
    	if(st>dis){
    		binding.value.flag=true;
    	}
    	else{
    		binding.value.flag=false;
        } 
    })
})