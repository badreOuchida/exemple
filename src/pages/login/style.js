import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  loginInput: {
    backgroundColor: "#fff",
    borderRadius: "20px",
    outline: "none",
  },
  boxStyle: {
    backgroundColor: "#1B3255",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  bntStyle: {
    backgroundColor: "#D7EAF4!important",
    color: "#1B3255!important",
    "&:hover": {
      backgroundColor: "#D7EAF4!important",
      opacity: "0.8!important",
    },
    margin: "20px 0px!important",
    borderRadius: "20px!important",
    paddingLeft: "30px!important",
    paddingRight: "30px!important",
  },
});
