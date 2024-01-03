import React, { useEffect, useState } from "react";
import * as Style from "./style";
import * as Styling from "../Experience/style";
import { Link, useNavigate } from "react-router-dom";
import { TiArrowRightThick } from "react-icons/ti";
import AOS from "aos";
import "aos/dist/aos.css";
import organization from "./organizations";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const navigate = useNavigate();

  return (
    <Style.About>
      <Style.About_Container className="Home_backgroundImage">
        <Style.About_Head data-aos="fade-down">
          <span
            className="companyname_style"
            style={{
              textAlign: "center",
              borderBottom: "2.5px solid white",
              width: "fit-content",
            }}
          >
            {" "}
            About Me{" "}
          </span>
        </Style.About_Head>

        <Styling.About_Orgaization_Box>
          <Styling.About_Orgaization_Box_Scroll className="organization_scroll">
            <Style.About_Paragraph data-aos="fade-left">
              Hi , My name is Akintan Seyi , i'm an Software engineer , I
              operate on FrontEnd, Backend , Web-Design and Flutter. I’m a well
              Detailed-oriented , organized and meticulous employees . Work at
              fast pace to meet tight deadlines . Enthusiastic team player ready
              to contribute to the company success , about 3 years of experience
              working to outline organizational needs and translate them into
              extensive lines of code that supports objectives. Adept creation
              of script using HTML, CSS , JAVASCRIPT and REACT js, Redux ,
              Typescript , Web socket , Material Ui to convoy unique branding
              and promote sales and marketing opportunities .
            </Style.About_Paragraph>

            <Style.About_BoxHolder data-aos="fade-right">
              <Style.About_Box>
                <Style.About_Box_Paragraph
                  className="about_box"
                  onClick={() => navigate("/experience")}
                >
                  <Style.About_Box_Paragraph_Span>
                    3+
                  </Style.About_Box_Paragraph_Span>
                  years of experience
                </Style.About_Box_Paragraph>
              </Style.About_Box>

              <Style.About_Box>
                <Style.About_Box_Paragraph
                  className="about_box"
                  onClick={() => navigate("/project")}
                >
                  <Style.About_Box_Paragraph_Span_Certificate>
                    Private Projects
                  </Style.About_Box_Paragraph_Span_Certificate>
                </Style.About_Box_Paragraph>
              </Style.About_Box>

              <Style.About_Box>
                <Style.About_Box_Paragraph
                  className="about_box"
                  onClick={() => navigate("/certificate")}
                >
                  <Style.About_Box_Paragraph_Span_Certificate>
                    Software Certificate
                  </Style.About_Box_Paragraph_Span_Certificate>
                </Style.About_Box_Paragraph>
              </Style.About_Box>
              <Style.About_Box>
                <Style.About_Box_Paragraph
                  className="about_box"
                  onClick={() => navigate("/skills")}
                >
                  <Style.About_Box_Paragraph_Span_Certificate>
                    Skills Acquired
                  </Style.About_Box_Paragraph_Span_Certificate>
                </Style.About_Box_Paragraph>
              </Style.About_Box>
            </Style.About_BoxHolder>
          </Styling.About_Orgaization_Box_Scroll>
        </Styling.About_Orgaization_Box>

        {/*
  <Style.About_ParagraphContainer>

<Style.About_Paragraph   data-aos="fade-left" >
   Hi , My name is Akintan Seyi , i'm an Software engineer  , I operate on FrontEnd, Backend , Web-Design and Flutter. I’m a well Detailed-oriented , organized and meticulous employees . Work at fast pace to meet tight deadlines . Enthusiastic team player ready to contribute to the company success , about 3 years of experience working to outline organizational needs and translate them into extensive lines of code that supports objectives. Adept creation of script using HTML, CSS , JAVASCRIPT and REACT js, Redux , Typescript , Web socket , Material Ui to convoy unique branding and promote sales and marketing opportunities .
</Style.About_Paragraph>

  <Style.About_BoxHolder data-aos="fade-right" >
  <Style.About_Box   >
    <Style.About_Box_Paragraph className='about_box' onClick={() => navigate("/experience")}  >
        <Style.About_Box_Paragraph_Span>
          3+
        </Style.About_Box_Paragraph_Span>
        years of experience
    </Style.About_Box_Paragraph>
  </Style.About_Box>

  <Style.About_Box>
  <Style.About_Box_Paragraph className='about_box'  onClick={() => navigate("/project")}  >
        <Style.About_Box_Paragraph_Span_Certificate  >
        Private Projects
        </Style.About_Box_Paragraph_Span_Certificate>

    </Style.About_Box_Paragraph>
  </Style.About_Box>

  <Style.About_Box>
  <Style.About_Box_Paragraph className='about_box'    onClick={() => navigate("/certificate")} >
        <Style.About_Box_Paragraph_Span_Certificate  >
          Software Certificate
        </Style.About_Box_Paragraph_Span_Certificate>

    </Style.About_Box_Paragraph>
  </Style.About_Box>
  <Style.About_Box   >
  <Style.About_Box_Paragraph  className='about_box'  onClick={() => navigate("/experience")}  >
        <Style.About_Box_Paragraph_Span>
          4+
        </Style.About_Box_Paragraph_Span>
       organizations
    </Style.About_Box_Paragraph>
  </Style.About_Box>


  </Style.About_BoxHolder>





</Style.About_ParagraphContainer>

*/}

        <Styling.About_Footer_Box style={{ marginTop: "1rem" }}>
          <Styling.About_Footer_Box_Button
            onClick={() => navigate(-1)}
            className="companyname_style"
          >
            GO BACK
          </Styling.About_Footer_Box_Button>

          <Styling.About_Footer_Box_Button
            onClick={() => navigate("/skills")}
            className="companyname_style"
          >
            SKILLS ACQUIRED
          </Styling.About_Footer_Box_Button>
        </Styling.About_Footer_Box>

        {/*
<Style.About_Footer_Box>
    <Link to= "/"  style={{textDecoration : "none" , color : "white"}}>
    <Style.About_Footer_Box_Button  className='companyname_style'  >
  GO BACK
  </Style.About_Footer_Box_Button>
    </Link>

  <Style.About_Footer_Box_Button  className='companyname_style'  onClick={() => navigate("/skills")} >
  SKILLS ACQUIRED
  </Style.About_Footer_Box_Button>

        </Style.About_Footer_Box>

  */}
      </Style.About_Container>
    </Style.About>
  );
};

export default About;
