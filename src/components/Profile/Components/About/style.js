


import { keyframes, styled } from "@mui/material";



export const  About = styled("div")({

    width : "100vw",
    height : "100vh",
    overflow : "hidden",
    color : "white",
   backgroundColor : "black",
   position : "relative",





});


export const  About_Container  = styled("div")({

    width : "100%",
    height : "100%",
   paddingTop : "3.45rem",

position : "absolute",

"@media (max-width : 26.8em)" : {
  top : "-1rem",
  height : "105%",
  overflow : "hidden",

},
   "@media (max-width : 25em)" : {
    top : "-2.3rem",
    height : "105%",
    overflow : "hidden",

  }











});

export const  About_Head  = styled("p")({

    fontSize : "2.5rem",
    textAlign : "center",
    textTransform : "capitalize",
    width : "100%",
    display : "flex",
    justifyContent : "center",
    alignItems : "center",


    "@media (max-width : 50em)" : {

      fontSize : "1.7rem"
    }







});





export const  About_ParagraphContainer  = styled("div")({

    width : "100%",
    height : "70vh",
    padding : "2rem",
    display : "inline-block",
    position : "relative",



});



export const  About_Paragraph  = styled("p")({

  position : "relative",
  letterSpacing : ".2rem",
  //fontSize : "1.6rem",
  fontSize : "1rem",


  "@media (max-width : 75em)" : {
    fontSize : ".85rem",
   letterSpacing : "0.1rem",
 },

 "@media (max-width : 57em)" : {
   fontSize : ".85rem"
 },

    "@media (max-width : 34.4em)" : {
      fontSize : ".8rem"
    },

 "@media (max-width : 34.4em)" : {
      fontSize : ".75rem"
    },


    "@media (max-width : 26.8em)" : {
      fontSize : ".73rem"
    },

    "@media (max-width : 23.1em)" : {
      fontSize : ".73rem"
    },
    "@media (max-width : 19em)" : {
      fontSize : ".70rem"

    },










});



export const  About_BoxHolder  = styled("div")({

     display : "flex",
     justifyContent : "space-evenly",
     alignItems : "center",
     width : "100%",
     height : "64%",
      marginTop : "3rem",
   //  backgroundColor : "green",

     "@media (max-width : 57em)" : {
      display : "grid",
      gridTemplateColumns : "1fr  1fr",
      gridTemplateRows : "1frrem  1frrem",
      gridGap : "1rem",
      height : "73%",
      marginTop : ".5rem",
      marginBottom : ".5rem",
    },



    "@media (max-width : 37.4em)" : {
     height : "57%",
     gridTemplateColumns : "1fr  1fr",
     gridTemplateRows : "1fr  1fr",
     marginTop : "1.5rem",
    },

    "@media (max-width : 25em)" : {
      height : "57%",
      gridTemplateColumns : "1fr  1fr",
      gridTemplateRows : "6.5rem  6.5rem",
      marginTop : "1.5rem",
     },


    "@media (max-width : 19em)" : {
      height : "50.5%",
      gridTemplateColumns : "1fr  1fr",
     gridTemplateRows : "3.5rem  3.5rem",
     marginTop : "2rem",
     gridRowGap : "4rem"
    },








  });


export const  About_Box_Paragraph  = styled("p")({


fontSize : "1.4rem",
fontWeight : "bold",

"@media (max-width : 75em)" : {
   fontSize : "1rem",
 },

 "@media (max-width : 34.25em)" : {
   fontSize : ".85rem"
 },








 });

 export const  About_Box_Paragraph_Span  = styled("span")({


    fontSize : "2.3rem",
    display : "block",
    fontWeight : "bold",

    "@media (max-width : 75em)" : {
      fontSize : "1.6rem",
    },
    "@media (max-width : 34.4em)" : {
      fontSize : "1.5rem"
    },





 });

 export const  About_Box_Paragraph_Span_Certificate  = styled("span")({


    fontSize : "2.3rem",
    display : "block",
    fontWeight : "bold",
    marginLeft : ".8rem",
    "@media (max-width : 75em)" : {
      fontSize : "1.5rem",
    },


 "@media (max-width : 34.25em)" : {
   fontSize : "1.2rem"
 },




 });





export const  About_Box  = styled("div")({

    border : "2px solid white",
    width : "15rem",
    borderTop : "2px solid transparent",
    borderRadius : "1rem 3rem 1rem 3rem",
    height : "15rem",
    display : "flex",
    justifyContent : "center",

    alignItems : "center",
    fontSize : "1.7rem",
    textTransform : "capitalize",



    "@media (max-width : 75em)" : {
      width : "13rem",
    },


    "@media (max-width : 59.4em)" : {
      width : "11rem",
    }
,

"@media (max-width : 57em)" : {
   width : "100%",
   height : "9rem",
 },

"@media (max-width : 34.4em)" : {
   width : "100%",
   height : "7.6rem",
 },



    "@media (max-width : 34.25em)" : {
      height : "7.6rem",
    },

    "@media (max-width : 19em)" : {
      height : "6.6rem",

    },








 });


 export const  About_Footer_Box  = styled("div")({


    width : "100%",
  color : "white",
 //   backgroundColor : "red",
    position : "absolute",
    bottom : "15.5%",
    right : "0rem",

    display : "flex",
    justifyContent : "space-evenly",
    alignItems : "center",
    fontSize : "1.5rem",
    textTransform : "capitalize",

    "@media (max-width : 75em)" : {
      fontSize : "1.25rem",
    },

    "@media (max-width : 34.25em)" : {
      fontSize : "1rem",
      bottom : "10.5%",
    //  marginTop : "-4rem",
    },

    "@media (max-width : 23.1em)" : {
      fontSize : ".9rem",
    },






 });


 export const  About_Footer_Box_Button  = styled("p")({


    width : "fit-content",
    paddingBottom : "2px",
    borderBottom : "3px solid white",
   // marginRight : "2rem"
   cursor : "pointer",





   "&:hover" : {

    transform: "translateY(-.2rem)",
    transition : "all .1s"


  }



 });



 export const  About_Orgaization_Box  = styled("div")({


    width : "100%",
    height : "70vh",
  //  padding : "1rem 2.5rem 2.5rem 2.5rem",
    overflowY : "scroll",
    overflowX : "hidden",
  marginTop : "1rem",
    position : "relative",

 });

 export const  About_Orgaization_Box_Scroll  = styled("div")({


    width : "100%",
    height : "80%",
padding : "1rem",
position : "absolute",





 });


 export const  About_Orgaization_Box_ComapnyName  = styled("p")({

    fontSize : "2rem",
    borderBottom : "2.5px solid white",
    width : "fit-content"



 });

 export const  About_Orgaization_Box_Inner_Box  = styled("div")({

      width : "fit-content",
      height : "fit-content",
        borderBottom : "1px solid white",
      marginBottom : "1.5rem",
      paddingBottom : "1.3rem"



 });

 export const  About_Orgaization_Box_Header  = styled("p")({

    fontSize : "2rem",
   // display : "block",
   marginRight : ".5rem",


 });


 export const  About_Orgaization_Box_Sub_Header  = styled("p")({

   fontSize : "1.3rem",
  // display : "block",
  marginRight : ".5rem"

});


export const  About_Orgaization_Box_Experience_Text  = styled("p")({

   fontSize : "1.3rem",
  // display : "block",
  marginBottom : ".4rem"

});



 export const  About_Orgaization_Box_Header_Holder  = styled("div")({

   width : "100%",
      height : "fit-content",
      display : "flex",
      marginBottom : ".3rem"

     // alignItems : "center"


});

export const  About_Orgaization_Box_Experience_Section  = styled("div")({

   width : "100%",
      height : "fit-content",


     // alignItems : "center"


});






