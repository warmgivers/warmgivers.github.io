$(()=>{
  let iconList = document.getElementsByClassName("case_icon")
  for (let i=0; i<iconList.length; i++){
    iconList[i].addEventListener("click", e=>{
      e.stopPropagation()
      let card = e.currentTarget.parentNode
      let flip_id = card.dataset.flip
      let flip_to = document.getElementById(flip_id)
      console.log(card, "\n", flip_to)
      card.style.opacity = 0
      card.style.zIndex = 0
      flip_to.style.opacity = 1
      flip_to.style.zIndex = 1
    })
  }
})