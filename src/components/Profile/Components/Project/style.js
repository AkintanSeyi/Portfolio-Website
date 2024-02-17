


import { keyframes, styled } from "@mui/material";
//import image from ""

export const  Project = styled("div")({

    width : "100vw",
    height : "100vh",
    overflow : "hidden",
    color : "white",
    position : "relative",
   backgroundColor : "black"

});


export const  Project_Container  = styled("div")({

    width : "100%",
    height : "100%",
   paddingTop : "3.5rem",

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



export const  Project_Container_Box  = styled("div")({


    width : "100%",
    height : "70vh",
  //  padding : "1rem 2.5rem 2.5rem 2.5rem",
    overflowY : "scroll",
    overflowX : "hidden",
  marginTop : "1rem",
padding : ".5rem .5rem 0rem .5rem",
    position : "relative",

    "@media (max-width : 57em)" : {
      height : "78vh",
    },

    "@media (max-width : 34.25em)" : {
      height : "78vh",
    },

    "@media (max-width : 23.75em)" : {
      height : "72vh",
    },



 });


export const  Project_Container_Box_Location_Header = styled("p")({


    fontSize : "1.2rem",
  // display : "block",
  marginBottom : ".4rem",
  marginRight :".2rem"


 });

 export const  Project_Container_Box_Scroll  = styled("div")({


    width : "100%",
    height : "80%",
padding : "1rem",
position : "absolute",





 });





 export const  Project_Head  = styled("p")({

    fontSize : "2.5rem",
    textAlign : "center",
    textTransform : "capitalize",
    width : "100%",
    display : "flex",
    justifyContent : "center",
    alignItems : "center"
    ,

    "@media (max-width : 50em)" : {

      fontSize : "1.65rem"
    },
    "@media (max-width : 37.5em)" : {
      fontSize : "1.45rem"

   },







});


export const  Project_Inner_Box  = styled("div")({

    width : "fit-content",
    height : "fit-content",

    marginBottom : "1.5rem",
    paddingBottom : "1.3rem",
    "@media (max-width : 75em)" : {
      marginBottom : "0rem"
    //  width : "100%"

    },




});


export const  Project_Holder  = styled("div")({

    width : "100vw",
       height : "40vh",
       display : "flex",
       marginBottom : ".3rem",
       borderBottom : "1px solid white",
      // backgroundColor : "red",


      // alignItems : "center",

      "@media (max-width : 75em)" : {
         flexDirection : "column",
         height : "fit-content",
         justifyContent : "center",
         alignItems : "center",
        width : "87vw"

       },



 });

 export const  Project_DataItems_Holder  = styled("div")({

    width : "45%",
       height : "100%",
       padding : "1rem",
       marginRight : "1.5rem",
    //   borderBottom : "1px solid white",
      // justifyContent : "center",
       display : "flex",
       alignItems : "center",
       flexDirection : "column",

       "@media (max-width : 75em)" : {
         width : "100%",
         textAlign : "center"

       },













 });


 export const  Project_Image  = styled("img")({

    width : "100%%",
       height : "100%",
        objectFit : "cover",
        filter : "brightness(90%)",
        borderRadius : "4px",
position : "relative",


"@media (max-width : 75em)" : {
   width : "100%",
       height : "80%",

},

 });

 export const  Project_Image_Link  = styled("p")({

   fontSize : "1.4rem",
   position : "absolute",
   top : "50%",
   left : "50%",

   "@media (max-width : 75em)" : {
      top :  "0%",
      left : "0%"

  },



 });


 export const  Project_Image_Holder  = styled("div")({

    width : "47%",
       height : "100%",
       padding : "1rem",
       marginRight : "1.5rem",
      // borderBottom : "1px solid white",
       justifyContent : "center",
       display : "flex",
       alignItems : "center",
       flexDirection : "column",

       "@media (max-width : 75em)" : {
           width : "90%",
           textAlign : "center",
           marginRight : "0rem",

       },



 });


 export const  Project_About_Paragraph  = styled("p")({

   fontSize : "1.4rem",
   textTransform :"capitalize",
   marginTop : ".5rem",
   "@media (max-width : 37.5em)" : {
      fontSize : "1rem"

},


 });


 export const  Project_Button  = styled("p")({


    width : "fit-content",
    paddingBottom : "2px",
    borderBottom : "3px solid white",
   marginRight : "1.2rem",
   cursor : "pointer",
   textTransform : "capitalize",



   "&:hover" : {

    transform: "translateY(-.2rem)",
    transition : "all .1s"


  },

  "@media (max-width : 37.5em)" : {
   fontSize : "1.09rem",


},









 });


 export const  Project_Button_Holder  = styled("div")({

      display : "flex",
      justifyContent : "center",
      fontSize: "1.3rem",
      alignItems : "center",
      width : "100%",
      height : "fit-content",
      marginTop : "1rem",

      "@media (max-width : 37.5em)" : {
        marginLeft : "1rem",


      },



  });




export const  About_Footer_Box  = styled("div")({


    width : "100%",
  color : "white",

    display : "flex",
    justifyContent : "space-evenly",
    alignItems : "center",
    fontSize : "1.5rem",
    textTransform : "capitalize",



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


