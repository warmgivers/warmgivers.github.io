$(()=>{
  /* Flip cards */
  let cards = document.querySelectorAll('.flip-card-inner')

  cards.forEach((card)=>{
    card.addEventListener('click', (e)=>{
      let rotate = e.currentTarget.style.transform
      if (rotate == 'rotateY(-180deg)')
        e.currentTarget.style.transform = 'rotateY(0deg)'
      else
        e.currentTarget.style.transform = 'rotateY(-180deg)'
    })
  })
  
  document.querySelector('#popup_close').addEventListener('click', close_popup)
})
  
const close_popup = () => {
  document.querySelector('#popup').style.display = 'none'
  document.querySelector('#popup_bg').style.display = 'none'
}

// collapse navbar when anchorred 
const collapse = ()=>{
  $("#navbarNav").collapse('hide')
}

// set link hightlight for clicked nav-item
$(()=>{
  let links = document.querySelectorAll('.nav-item')
  for (let i=0; i<links.length; i++){
    links[i].addEventListener("click", (e)=>{
      let active_link = document.querySelector(".active")
      let clicked_link = links[i]
      active_link.classList.remove('active')
      clicked_link.classList.add("active")
    })
  }
})

// show the popup details of different services
const service = [{
  service_name:'匿名傳情',
  img_src: "./img/popup1_img.png",
  url: "https://www.surveycake.com/s/Al2xa",
  intro: [
    "匿名服務是一個神秘又有吸引力的傳情方式，雖然使用人數不如卡片，若可以運用想像力，也能夠達成意想不到的效果！<br><br> 在此服務中，您可以像使用電子郵件一樣，打下想跟對方說的話，我們會為您匿名寄送。除此之外，您也可以善用這個服務，傳達平常不敢開口說出的話、詢問對方想要的禮物、或者是一個掛念在心中許久的道歉。", 
  
    "價格：Free 🔥<br>時程：1-3個工作天（假日不計）<br>服務流程：填寫表單 -> 三天內寄出 -> 對方成功收到匿名信囉！"
  ]
},  {
  service_name: '客製化卡片',
  img_src: "./img/popup2_img.png",
  url: "https://www.surveycake.com/s/6QMz7",
  intro: [
    "根據統計，一封精挑細選的客製化卡片是最能表達心意的形式，也是目前最多客人選擇使用的服務。<br><br>在此服務中，您可以上傳喜歡的照片，我們會將這份共同回憶製作成卡片封面。內容部分，則可以分別選擇電腦字型、自己手寫拍照上傳、或是專人代寫的方式呈現卡片文字，根據不同需求傳遞您的心意。", 

    "價格：60～100NT<br>時程：5 -7 個工作天（假日不計）<br>服務流程：填寫表單 -> 確認匯款 -> 一週內寄出 -> 對方成功收到卡片囉！"
  ]}]

// show the popup for different sevices  
const showDetail = (e)=>{
  let service_id = e.dataset.service_id
  
  let popup = document.querySelector('#popup')
  let popup_bg = document.querySelector('#popup_bg')

  let popup_title = popup.children.popup_name
  let popup_txt = popup.children[0].children.popup_txt
  let popup_img = popup.children[0].children[1]
  let popup_link = popup_txt.children.popup_btn.children[0]
  
  /* show the popup */
  popup.style.display = ''
  popup_bg.style.display = ''

  /* set different values for different services */
  // service name
  popup_title.innerHTML = service[service_id-1].service_name
  // url link
  popup_link.setAttribute('href', service[service_id-1].url)
  // intro text
  popup_txt.children.popup_intro.innerHTML = service[service_id-1].intro[0]
  popup_txt.children.popup_cost.innerHTML = service[service_id-1].intro[1]
  // service img
  popup_img.children.popup_img.setAttribute('src', service[service_id-1].img_src)

}
