import React , {useEffect , useState} from 'react';
import * as Style from "../Project/style";
import * as Styling from "./style";
import * as StylingFooter from "../Experience/style"
import { Link, useNavigate   } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import skillsData from './skillsData';
const Skills = () => {



    useEffect(() => {
        AOS.init();
      }, []);

      const navigate = useNavigate();




  return  (

  <Style.Project  className='Home_backgroundImage' >

  <Style.Project_Container>

  <Style.Project_Head data-aos="fade-down">
  <span  className='companyname_style' style={{textAlign : "center" ,  borderBottom : "2.5px solid white", width : "fit-content"}} >
  Skills
</span>
  </Style.Project_Head>

  <Style.Project_Container_Box>

       <Style.Project_Container_Box_Scroll>


{
  Object.keys(skillsData).map((item , index) => {



         return  (

          <Styling.SkillsHolder    key={index} >
           <Styling.SkillsHolderHeader  className='companyname_style' >
            {item}
           </Styling.SkillsHolderHeader>

            <Styling.SkillsHolderInnerHolder>

           {
            skillsData[item].map((val , num)  => {
          return (
       <Styling.SkillsHolderHeaderBox key={num} >{val}</Styling.SkillsHolderHeaderBox>
          )
            })
           }
            </Styling.SkillsHolderInnerHolder>
          </Styling.SkillsHolder>


         )
  })


}



   </Style.Project_Container_Box_Scroll>

</Style.Project_Container_Box>

<StylingFooter.About_Footer_Box  style={{marginTop : "1rem"}}  >

<StylingFooter.About_Footer_Box_Button  onClick={() => navigate(-1)}  className='companyname_style'  >
GO BACK
</StylingFooter.About_Footer_Box_Button>


<StylingFooter.About_Footer_Box_Button   onClick={() => navigate("/skills")}  className='companyname_style'   >
SKILLS ACQUIRED
</StylingFooter.About_Footer_Box_Button>

  </StylingFooter.About_Footer_Box>



</Style.Project_Container>

  </Style.Project>




)
}

export default Skills