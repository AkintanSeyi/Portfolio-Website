


import { keyframes, styled } from "@mui/material";


export const  HomePage= styled("div")({

    width : "100vw",
    height : "100vh",
  // backgroundImage : `url("../../images/rain.png")`,
   backgroundColor : "black",


});


export const  HomePage_Container  = styled("div")({

    width : "100%",
    height : "100%",
    display : "flex",
    justifyContent : "center",
    alignItems : "center",
    flexDirection : "column"




});

export const  HomePage_img  = styled("img")({

  width : "100%",
  height : "100%",
  objectFit : 'cover',
  borderRadius : "12.5rem   5rem   5rem  3rem",





});


const buttonBorder = keyframes `

  0%{

    border : 2.5px solid red
  }

  10% {
    border : 2.5px solid orange
  }

  20% {
    border : 2.5px solid yellow
  }
  30% {
    border : 2.5px solid green
  }

 40% {

    border : 2.5px solid blue

 }

 50% {
    border : 2.5px solid indigo
  }.5

 60% {
    border : 2.5px solid violet
 }

 70% {
    border : 2.5px solid #00FFFF
  }

 80% {
    border : 2.5px solid  olive
 }

 90% {
    border : 2.5px solid gold
  }

 100% {

    border : 2.5px solid magenta

 }

`



const spin = keyframes `

  0%{

    border : 5px solid gold

  }

  10% {
    border : 5px solid blue
  }

  20% {
    border : 5px solid green
  }
  30% {
    border : 5px solid violet
  }

 40% {

    border : 5px solid magenta

 }

 50% {
    border : 5px solid indigo
  }

 60% {
    border : 5px solid yellow
 }

 70% {
    border : 5px solid plum
  }

 80% {
    border : 5px solid  orange
 }

 90% {
    border : 5px solid peru
  }

 100% {

    border : 5px solid #708090

 }

`




export const  HomePage_ImageContainer  = styled("div")({

    width : "12.5rem",
    height : "12.5rem",
    borderRadius : "12.5rem   5rem   5rem  3rem",
    backgroundColor : "white",
   // animation :  `${spin} 6s ease infinite`,
    border : "5px solid white",
    transition :'all 2s',

    "@media (max-width : 75em)" : {

       width : "10.5rem",
       height : "10.5rem",
      // borderRadius : "1rem"

    }





});


export const  HomePage_IconHolder  = styled("span")({

 marginLeft : ".5rem"



});




export const  HomePage_Paragraph  = styled("p")({

  fontSize : "2rem",
  textTransform : "capitalize",
  fontWeight : "bold",
  color : "white",
  marginTop : ".5rem",
 display : "flex",
 alignItems : "center",
 justifyContent : "space-between",

 "@media (max-width : 75em)" : {

  fontSize : "1.7rem",
 // borderRadius : "1rem"

}
,
"@media (max-width : 44em)" : {

  fontSize : "1.5rem",
 // borderRadius : "1rem"

}





});








export const  HomePage_Button  = styled("Button")({

    width : "fit-content",
    height : "3.5rem",
    padding : ".4rem",
    borderRadius : ".2rem",
    backgroundColor : "rgb(26, 24, 24)",
    border : "2.5px solid white",
  //  animation :  `${buttonBorder}  5s ease infinite`,
    fontSize : "1.3rem",
    textTransform : "uppercase",
    fontWeight : "bold",
    marginTop : "0.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent : "center",
    cursor : "pointer",
    color : "white",

    "@media (max-width : 75em)" : {

      fontSize : "1rem",
     // borderRadius : "1rem"
     height : "3.0rem"

    }

,


"@media (max-width : 44em)" : {

  fontSize : "0.8rem",
 // borderRadius : "1rem"

}
,



    "&:hover" : {

      transform: "translateY(-.2rem)",
      transition : "all .3s"


    }






});







