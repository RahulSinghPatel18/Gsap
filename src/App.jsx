import { useGSAP } from '@gsap/react'
import React, { useRef, useState } from 'react'
import gsap from 'gsap'



const App = () => {
// 1stexample
  // useGSAP(()=>{
  //   gsap.from(".circule1",{
  //     rotate:360,
  //     opacity:1,
  //     scale:0,
  //     delay:1,
  //     duration:2,
  //     repeat:100
  //   })
  // },{scope:".main1"})



  // 2nd example
  const boxRef = useRef(null)
  const [btn, setbtn] = useState(0)
  const [btn2, setbtn2] = useState(0)

const btnclickedrotate = ()=>{
const random = gsap.utils.random(-500,500,100)
setbtn(random)
}
const btnclickedmove = ()=>{
  const random = gsap.utils.random(-500,500,100)
  setbtn2(random)
  }
useGSAP(()=>{
  gsap.to(".circule1",{
    rotate:btn,
    ease:'back',
    duration:2,

  })
},[btn])
useGSAP(()=>{
  gsap.to(".circule2",{
    x:btn,
    ease:'back',
    duration:2,

  })
},[btn2])

  return (
    // 1st example
    // <div>
    //    <div className='main1'>
    //   <div  className='circule1'> </div>
    //   <div  className='circule2'> </div>
    // </div>
    // <div className='main2'>
    //   <div  className='circule2'> </div>
    //   <div  className='circule1'> </div>
    // </div>
    // </div>

    // 2nd example
  <div>
      <div className='main1'>
    <div ref={boxRef} className='circule1'></div>
    <div ref={boxRef} className='circule2'></div>
    </div>
  <div className='gap'>
  <button onClick={btnclickedrotate} style={{padding:"18px 25px", backgroundColor:"skyblue"}}> Rotate</button>
    <button onClick={btnclickedmove} style={{padding:"18px 25px", backgroundColor:"skyblue"}}> Move</button>
    
  </div>
  </div>

  )
}

export default App
