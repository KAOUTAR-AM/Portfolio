import React, { useState } from 'react'
import './Skills.css';
import { SKILLS } from '../../utils/data';
import SkillCard from '../Skills/SkillsCard/SkillsCard';
import SkillsInfoCard from '../Skills/SkillsInfoCard/SkillsInfoCard';
const Skills = () => {
  const [selectedSkill,setSelectedSkill]=useState(SKILLS[0]);
  const handleSelectSkill= (data)=>{setSelectedSkill(data)};
  return (
    <section className='skills-container'>
        <h5>Technical Proficiency</h5>
      <div className='skills-content'>
        <div className='skills'>
        {SKILLS.map((item)=>(

            <SkillCard 
            key={item.title}
            iconUrl={item.icon}
            title={item.title}
            inActive={selectedSkill.title ===item.title}
            onClick={()=>{
              handleSelectSkill(item);
            }}
            />
        ))}

        </div>
        <div className='Skills-info'>
            <SkillsInfoCard 
             heading={selectedSkill.title}
             Skills={selectedSkill.skills}
            />
        </div>
      </div>
    </section>
  )
}

export default Skills