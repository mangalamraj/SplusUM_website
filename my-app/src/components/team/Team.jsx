import React from 'react'
import './team.css'
const Team = () => {
  return (
    <div className="team_section">
        <div className="heading_team">
            TEAM MEMBERS
        </div>
        <div style={{marginBottom:'0'}} className="hr1_team"></div>
        <div className="team_main_section">
            <div className="main_card">
             <div className="personal_image">
             <img src="	https://arcstudio.liquid-themes.com/wp-content/uploads/2022/03/3-Hover.jpg" alt=""/>
             </div>
             <div className="card_name">
                <h3> Daniel Mark  <small>/ Architect</small></h3>
             </div>
             <div className="card_para">
              <p>Through a unique combination of engineering, construction and design disciplines.</p>
             </div>
            </div>
            <div className="main_card">
             <div className="personal_image">
             <img src="	https://arcstudio.liquid-themes.com/wp-content/uploads/2022/03/Rectangle.jpg" alt=""/>
             </div>
             <div className="card_name">
                <h3> Matthew Clark  <small>/ Architect</small></h3>
             </div>
             <div className="card_para">
              <p>Urban design draws together the many strands of place-making, environmental stewardship.</p>
             </div>
            </div>
            <div className="main_card2">
             
             <div className="t_det"><h6>Extra infos</h6> </div>
             <div className="card_name">
               
             </div>
             <div className="card_para">
              <p>Through a unique combination of engineering, construction and design disciplines.</p>
           
             </div>
            </div>
 
 
        </div>
    </div>
  )
}
export default Team