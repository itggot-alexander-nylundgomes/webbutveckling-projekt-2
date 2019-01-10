function doStuff(event){
    let fullmeny = document.querySelector(".fullmeny")
 fullmeny.classList.toggle("activate")
 }

 function doStuff_clothes(event){
    let nav = document.querySelector("nav")
    nav.classList.toggle("activate_clothes_menu")
    
    let clothestxt = document.querySelector(".clothestxt")
    clothestxt.classList.toggle("activate_clothes_text")

    let lowertxt = document.querySelector(".lowertxt")
    lowertxt.classList.toggle("activate_lowertxt")

    let filter_pop_box = document.querySelector(".filter_pop_box")
    filter_pop_box.classList.toggle("activate_filter_pop_box")
 }

 function prisbox(event){
    let activate_filter_pop_box = document.querySelector(".activate_filter_pop_box")
    activate_filter_pop_box.classList.toggle("activate_prisbox")
 }

 