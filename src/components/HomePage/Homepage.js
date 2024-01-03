import React, { useEffect, useState } from "react";
import * as Style from "./style";
import { Link, useNavigate } from "react-router-dom";
import * as Styling from "../Profile/Components/Experience/style";
import { TiArrowRightThick } from "react-icons/ti";
import { MdOutlineWavingHand } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const Homepage = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <Style.HomePage>
      <Style.HomePage_Container className="Home_backgroundImage">
        <Style.HomePage_ImageContainer
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <Style.HomePage_img
            src={require("../../images/323975454_2191134737736628_5751669062532143065_n.jpg")}
            alt="Img"
          />
        </Style.HomePage_ImageContainer>
        <Style.HomePage_Paragraph data-aos="fade-left">
          {" "}
          PatriciaSon website{" "}
        </Style.HomePage_Paragraph>
        <Link
          to="/profile"
          style={{ textDecoration: "none", cursor: "pointer" }}
        >
          <Style.HomePage_Button data-aos="fade-right">
            Learn about Me
          </Style.HomePage_Button>
        </Link>
      </Style.HomePage_Container>
    </Style.HomePage>
  );
};

export default Homepage;
