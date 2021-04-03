import React from 'react'
// import gotovo from "./img/11.svg"
import logo from "./img/standart.svg"
import vector from './img/Vector.svg'
import vecto from './img/Vecto.svg'
import frame from './img/Frame.svg'
import styles from './button.module.scss'



export default function Header() {
    return (
        <div>
            {/* <img src={gotovo} alt=""/> */}
            <img className= {styles.logo} src={logo} alt=""/> 
          <img className= {styles.vector} src={vector} alt=""/><span className= {styles.serv} > Сервисы</span>
            <img className= {styles.vecto} src={vecto} alt=""/><span className= {styles.serv2} >Поиск</span> 
            <img src={frame} alt=""/>
        
          
      
        </div>
    
    )
}
