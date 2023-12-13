import { createGlobalStyle } from "styled-components";
import { defaultTheme } from "./defaultTheme";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.cdnfonts.com/css/made-outer-sans-alt');
@import url('https://fonts.cdnfonts.com/css/bruno-ace-sc');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background-color: ${defaultTheme.background};
    font-family: ${defaultTheme.fonts.primary};
    display: flex;
    /* align-items: center; */
    justify-content: center;
    height: 100vh;

}


`;
export default GlobalStyles;
