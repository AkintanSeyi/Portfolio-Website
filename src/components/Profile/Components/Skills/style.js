
import { keyframes, styled } from "@mui/material";
//import image from ""

export const SkillsHolder  = styled("div")({

    width : "100vw",
    height : "fit-content",
    color : "white",



});


export const SkillsHolderHeader  = styled("h2")({



    marginBottom : "1rem",
    textTransform : "uppercase",

    color : "white",

    "@media (max-width : 57em)" : {
      fontSize : "1.4rem"
    },

});


export const SkillsHolderHeaderBox  = styled("div")({

     width : "fit-content",
     padding : ".5rem",
     height : "fit-content",
     border : "1px solid white",
     marginRight : "1rem",
     display : "inline-block",
     marginBottom : "1rem",
     textTransform : "capitalize",

     "@media (max-width : 57em)" : {
      fontSize : ".8rem"
    },

});




export const SkillsHolderInnerHolder  = styled("div")({

    width : "80%",
  //  overflow : "hidden",
    height : "fit-content",
   // display : "grid",

  //  justifyContent: "start",
  //  alignItems : "center",
    borderBottom : "1px solid white",
    fontSize : "1rem",
    marginBottom : "2rem"



});


