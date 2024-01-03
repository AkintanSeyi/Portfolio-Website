import React, { useEffect, useState } from "react";
import * as Style from "./style";
import { Link, useNavigate } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import organization from "../About/organizations";

const Experience = () => {
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
            organizations worked with
          </span>
        </Style.About_Head>

        <Style.About_Orgaization_Box>
          <Style.About_Orgaization_Box_Scroll className="organization_scroll">
            {organization.map((item, index) => {
              return (
                <Style.About_Orgaization_Box_Inner_Box key={index}>
                  <Style.About_Orgaization_Box_Header_Holder_ComapanyHolder>
                    <Style.About_Orgaization_Box_Header_Company className="companyname_style">
                      {item.companyName}
                    </Style.About_Orgaization_Box_Header_Company>
                    <Style.About_Orgaization_Box_Experience_Span>
                      -
                    </Style.About_Orgaization_Box_Experience_Span>
                    <Style.About_Orgaization_Box_Header>
                      {item.Position}
                    </Style.About_Orgaization_Box_Header>
                  </Style.About_Orgaization_Box_Header_Holder_ComapanyHolder>

                  <Style.About_Orgaization_Box_Header_Holder>
                    <Style.About_Orgaization_Box_Sub_Header>
                      {item.dateStarted}
                    </Style.About_Orgaization_Box_Sub_Header>

                    <Style.About_Orgaization_Box_Experience_Span_Sub>
                      -
                    </Style.About_Orgaization_Box_Experience_Span_Sub>

                    <Style.About_Orgaization_Box_Sub_Header>
                      {item.dateEnded}
                    </Style.About_Orgaization_Box_Sub_Header>
                  </Style.About_Orgaization_Box_Header_Holder>

                  <Style.About_Orgaization_Box_Header_Holder>
                    <Style.About_Orgaization_Box_Location_Header>
                      {item.companyLocation}
                    </Style.About_Orgaization_Box_Location_Header>

                    <Style.About_Orgaization_Box_Location_Header>
                      ({item.type})
                    </Style.About_Orgaization_Box_Location_Header>
                  </Style.About_Orgaization_Box_Header_Holder>

                  <Style.About_Orgaization_Box_Experience_Section>
                    <Style.About_Orgaization_Box_Experience_Text>
                      1: {item.aboutOne}
                    </Style.About_Orgaization_Box_Experience_Text>

                    <Style.About_Orgaization_Box_Experience_Text>
                      2: {item.aboutTwo}
                    </Style.About_Orgaization_Box_Experience_Text>

                    {item.aboutThree && (
                      <>
                        <Style.About_Orgaization_Box_Experience_Text>
                          3: {item.aboutThree}
                        </Style.About_Orgaization_Box_Experience_Text>
                      </>
                    )}

                    {item.aboutFour && (
                      <>
                        <Style.About_Orgaization_Box_Experience_Text>
                          4: {item.aboutFour}
                        </Style.About_Orgaization_Box_Experience_Text>
                      </>
                    )}
                  </Style.About_Orgaization_Box_Experience_Section>
                </Style.About_Orgaization_Box_Inner_Box>
              );
            })}
          </Style.About_Orgaization_Box_Scroll>
        </Style.About_Orgaization_Box>

        <Style.About_Footer_Box style={{ marginTop: "1rem" }}>
          <Style.About_Footer_Box_Button
            onClick={() => navigate(-1)}
            className="companyname_style"
          >
            GO BACK
          </Style.About_Footer_Box_Button>

          <Style.About_Footer_Box_Button
            onClick={() => navigate("/skills")}
            className="companyname_style"
          >
            SKILLS ACQUIRED
          </Style.About_Footer_Box_Button>
        </Style.About_Footer_Box>
      </Style.About_Container>
    </Style.About>
  );
};

export default Experience;
