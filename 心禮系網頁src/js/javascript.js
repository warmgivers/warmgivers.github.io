$(()=>{
  let cards = document.querySelectorAll('.flip-card-inner')

  cards.forEach((card)=>{
    card.addEventListener('click', (e)=>{
      let rotate = e.currentTarget.style.transform
      if (rotate == 'rotateY(-180deg)'){
        e.currentTarget.style.transform = 'rotateY(0deg)'
      }
      else{
        e.currentTarget.style.transform = 'rotateY(-180deg)'
      }
    })
  })
  document.querySelector('#popup_close').addEventListener('click', close_popup)
  
  function close_popup() {
    document.querySelector('#popup').style.display = 'none'
    document.querySelector('#popup_bg').style.display = 'none'
  }
})

// collapse navbar when anchorred 
const collapse = ()=>{
  $("#navbarNav").collapse('hide')
}

// set link hightlight for clicked nav-item
let links = document.querySelectorAll('.nav-item')
for (let i=0; i<links.length; i++){
  links[i].addEventListener("click", (e)=>{
    document.querySelector(".active").classList.remove('active')
    links[i].classList.add("active")
  })
}

// show the popup details of different services
const service = [{
  url: "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.surveycake.com%2Fs%2F6QMz7%3Ffbclid%3DIwAR0axAec_QADxJZnoIyAWQzZZqC03ZhqNGgsN4xmm6SA_y5fxtY1RQOBkfU&h=AT38e_54hNCAfLK1XMxD_ltomfGfYG3ak4zg4tSFsLNA4IP_GoqxQvsUhnBS-7R8M58bfOxYrKVGZxrXlEJkROcPvWifQCJigQwZRSHzLQ9dSE7QpZlb8iVLl1fUXwiVIvVvqjACIsjeZIILIr14-w",
  img_src: "",
  popup_intro: ""
},  {
  url: "",
  img_src: "",
  popup_intro: ""

}]
var showDetail = (e)=>{
  let service_id = e.dataset.service_id
  document.querySelector('#popup_bg').style.display = ''
  let popup = document.querySelector('#popup')
  let popup_txt = popup.children[0].children.popup_txt
  let popup_img = popup.children[0].children[1]
  // show the popup
  popup.style.display = ''
  // set different values for different services
  let link = popup_txt.children.popup_btn.children[0]
  link.innerHTML = `寄送${service_id}`
  link.setAttribute('href', service[service_id-1].url)

}
  