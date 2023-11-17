import React, { useState } from 'react'

export default function Example3() {
  
  // const [darkMode,setDarkMode] = useState({
  //     color:'black',
  //     backgroundColor:'white',
  // })
  
  // const [darkModeBtnText,setDarkModeBtnText] = useState('Enable Dark Mode')

  // const enableDarkMode = ()=>{
  //     // if darkmode is already enabled change it to normal mode
  //     if(darkMode.color === 'black'){
  //       setDarkMode({
  //         color:'white',
  //         backgroundColor:'#1c89ca'
  //       })
  //       document.body.style.backgroundColor = 'black';
  //       setDarkModeBtnText('Disable Dark Mode')
  //     }
  //     else{
  //       setDarkMode({
  //         color:'black',
  //         backgroundColor:'#1c89ca'
  //       })
  //       document.body.style.backgroundColor = 'white';
  //       setDarkModeBtnText('Enable Dark Mode')
  //     }
  // }
  
  let enableDarkModeState  = false
  const enableDarkMode = ()=>{
    if(enableDarkModeState == false){
    let length = document.getElementsByClassName('accordion-button').length
    for(let i =0 ; i<length ; i++){
      document.getElementsByClassName('accordion-button')[i].style.backgroundColor = '#1c89ca'
      document.getElementsByClassName('accordion-button')[i].style.color = 'white'
      document.getElementsByClassName('accordion-body')[i].style.backgroundColor = 'black'
      document.getElementsByClassName('accordion-body')[i].style.color = 'white'
      document.body.style.backgroundColor = 'black';
    }
    enableDarkModeState = true
    document.getElementById('heading').style.color='white'
    document.getElementById('darkmode').innerText = 'Disable Dark Mode'

  }
    else{
      enableDarkModeState = false
      let length = document.getElementsByClassName('accordion-button').length
        for(let i =0 ; i<length ; i++){
          document.getElementsByClassName('accordion-button')[i].style.backgroundColor = 'white'
          document.getElementsByClassName('accordion-button')[i].style.color = 'black'
          document.getElementsByClassName('accordion-body')[i].style.backgroundColor = 'white'
          document.getElementsByClassName('accordion-body')[i].style.color = 'black'
          document.body.style.backgroundColor = 'white';
        }
        document.getElementById('heading').style.color = 'black'
        document.getElementById('darkmode').innerText = 'Enable Dark Mode'
    }
  }
  return (
   <>
    <div className="container mt-5 ">
  <h1 id="heading" className='text-center'>Dark Mode Enabler Application</h1>    
<div class="accordion m-5" id="accordionExample">

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne" >
      <button   class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong >This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button   class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button   class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="container text-center">
  <button id="darkmode" className='btn btn-outline-primary mt-4' onClick={enableDarkMode}>Enable Dark Mode</button>
  </div>
</div>
    </div>
   </>
  )
}
