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

    let down_arrow = document.querySelector(".down_arrow")
    down_arrow.classList.toggle("a_down_arrow")


 }

 function prisbox(event){
    let filter_pop_box = document.querySelector(".filter_pop_box")
    filter_pop_box.classList.toggle("activate_prisbox")
    
    let down_arrow = document.querySelector(".down_arrow")
    down_arrow.classList.toggle("activate_down_arrow")
    
    let lågt_högt = document.querySelector(".lågt_högt")
    lågt_högt.classList.toggle("activate_lågt_högt")

    let högt_lågt = document.querySelector(".högt_lågt")
    högt_lågt.classList.toggle("activate_högt_lågt")
 }

 function low2high(event){
 
    let first = document.querySelector(".first")
 first.classList.toggle("a_first")
 
 let second = document.querySelector(".second")
 second.classList.toggle("a_second")
 
 let third = document.querySelector(".third")
 third.classList.toggle("a_third")
 
 let fourth = document.querySelector(".fourth")
 fourth.classList.toggle("a_fourth")

 let fifth = document.querySelector(".fifth")
 fifth.classList.toggle("a_fifth")

 let sixth = document.querySelector(".sixth")
 sixth.classList.toggle("a_sixth")

 let seventh = document.querySelector(".seventh")
 seventh.classList.toggle("a_seventh")

 let eigth = document.querySelector(".eigth")
 eigth.classList.toggle("a_eigth")
 }
