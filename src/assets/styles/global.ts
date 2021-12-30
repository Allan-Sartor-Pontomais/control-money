import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
:root {
    --background: #f0f2f5;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: var(--background);
}
`
