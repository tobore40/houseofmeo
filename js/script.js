

 const menu = document.querySelector(".menu");
 const menuMain = menu.querySelector(".menu-main");
 const goBack = menu.querySelector(".go-back");
 const menuTrigger = document.querySelector(".mobile-menu-trigger");
 const closeMenu = menu.querySelector(".mobile-menu-close");
 let subMenu;
 menuMain.addEventListener("click", (e) =>{
 	if(!menu.classList.contains("active")){
 		return;
 	}
   if(e.target.closest(".menu-item-has-children")){
   	 const hasChildren = e.target.closest(".menu-item-has-children");
      showSubMenu(hasChildren);
   }
 });
 goBack.addEventListener("click",() =>{
 	 hideSubMenu();
 })
 menuTrigger.addEventListener("click",() =>{
 	 toggleMenu();
 })
 closeMenu.addEventListener("click",() =>{
 	 toggleMenu();
 })
 document.querySelector(".menu-overlay").addEventListener("click",() =>{
 	toggleMenu();
 })
 function toggleMenu(){
 	menu.classList.toggle("active");
 	document.querySelector(".menu-overlay").classList.toggle("active");
 }
 function showSubMenu(hasChildren){
    subMenu = hasChildren.querySelector(".sub-menu");
    subMenu.classList.add("active");
    subMenu.style.animation = "slideLeft 0.5s ease forwards";
    const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
    menu.querySelector(".current-menu-title").innerHTML=menuTitle;
    menu.querySelector(".mobile-menu-head").classList.add("active");
 }

 function  hideSubMenu(){  
    subMenu.style.animation = "slideRight 0.5s ease forwards";
    setTimeout(() =>{
       subMenu.classList.remove("active");	
    },300); 
    menu.querySelector(".current-menu-title").innerHTML="";
    menu.querySelector(".mobile-menu-head").classList.remove("active");
 }
 
 window.onresize = function(){
 	if(this.innerWidth >991){
 		if(menu.classList.contains("active")){
 			toggleMenu();
 		}

 	}
 }


/*lightBox*/
 

const filterContainer = document.querySelector(".special-filter"),
filterBtns = filterContainer.children,
totalFilterBtn = filterBtns.length,
specialItems = document.querySelectorAll(".special-item"),
totalSpecialItem = specialItems.length; 

for(let i=0; i<totalFilterBtn; i++){
    filterBtns[i].addEventListener("click", function(){
        filterContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");

        const filterValue = this.getAttribute("data-filter");
        for(let k=0; k<totalSpecialItem; k++){
         if(filterValue === specialItems[k].getAttribute("data-category")){
             specialItems[k].classList.remove("hide");
             specialItems[k].classList.add("show");
         } 
         else {
             specialItems[k].classList.remove("show");
             specialItems[k].classList.add("hide");
         }
         if(filterValue === "all"){
          specialItems[k].classList.remove("hide");
          specialItems[k].classList.add("show");
         }  
        }
    })
}

const lightbox = document.querySelector(".lightbox"),
  lightboxImg = lightbox.querySelector(".lightbox-img"),
  lightboxClose = lightbox.querySelector(".lightbox-close"),
  lightboxText = lightbox.querySelector(".caption-text"),
  lightboxCounter = lightbox.querySelector(".caption-counter");
  let itemIndex = 0;
  
  for(let i=0; i<totalSpecialItem; i++){
      specialItems[i].addEventListener("click", function(){
          itemIndex = i;
          changeItem();
          toggleLightbox();
      })
  }

  function nextItem() {
      if(itemIndex === totalSpecialItem-1){
      itemIndex = 0;    
      }
      else{
       itemIndex++   
      }
      changeItem();
  }

  function prevItem() {
      if(itemIndex === 0){
      itemIndex = totalSpecialItem-1;   
      }
      else{
       itemIndex--;  
      }
      changeItem();
  }

  function toggleLightbox(){
      lightbox.classList.toggle("open");
  }

  function changeItem(){
    imgSrc = specialItems[itemIndex].querySelector(".special-img img").getAttribute("src");
    lightboxImg.src = imgSrc;
    lightboxText.innerHTML = specialItems[itemIndex].querySelector("h4").innerHTML;
    lightboxCounter.innerHTML = (itemIndex+1) + " of " + totalSpecialItem;
  }

  lightbox.addEventListener("click",function(event){
   if(event.target === lightboxClose || event.target === lightbox){
      toggleLightbox();
   }
  }) 


//   Counter up

const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = count + inc;
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});
