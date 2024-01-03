import React, { useEffect, useState } from "react";
import * as Style from "../Project/style";
import * as Styling from "../Experience/style";
import { Link, useNavigate } from "react-router-dom";
import { TiArrowRightThick } from "react-icons/ti";
import AOS from "aos";
import "aos/dist/aos.css";
import certificateFile from "./certificateFile";

const Certificate = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const navigate = useNavigate();

  return (
    <Style.Project className="Home_backgroundImage">
      <Style.Project_Container>
        <Style.Project_Head data-aos="fade-down">
          <span
            className="companyname_style"
            style={{
              textAlign: "center",
              borderBottom: "2.5px solid white",
              width: "fit-content",
            }}
          >
            CERTIFICATES OBTAINED
          </span>
        </Style.Project_Head>

        <Style.Project_Container_Box>
          <Style.Project_Container_Box_Scroll>
            {certificateFile.map((item, index) => {
              return (
                <Style.Project_Inner_Box key={index}>
                  <Style.Project_Holder>
                    <Style.Project_Image_Holder>
                      <Style.Project_Image src={item.image} alt="img" />
                    </Style.Project_Image_Holder>

                    <Style.Project_DataItems_Holder>
                      <Style.Project_Head>
                        <span
                          className="companyname_style"
                          style={{ textAlign: "center", width: "fit-content" }}
                        >
                          {item.name}
                        </span>
                      </Style.Project_Head>

                      <Style.Project_About_Paragraph>
                        {item.p}
                      </Style.Project_About_Paragraph>
                    </Style.Project_DataItems_Holder>
                  </Style.Project_Holder>
                </Style.Project_Inner_Box>
              );
            })}
          </Style.Project_Container_Box_Scroll>
        </Style.Project_Container_Box>

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
      </Style.Project_Container>
    </Style.Project>
  );
};

export default Certificate;
