import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => {
    console.log("ctx", ctx);
    return {
        wrapper: {
            width:"65%",
            minHeight:"80vh",
            background: "lightblue",
            padding: "15px",
        },
        input: {
            color: "#606267",
            padding: "10px 15px",
            fontSize: "15px",
        },
        icon: {
            color: "var(--main-color)",
            cursor: "pointer",
        },
    };
});