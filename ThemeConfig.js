import { createGlobalStyle} from "styled-components"

export const lightTheme = {
  body: '#b0c4de',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
  abcd: '#bdbbbb',
}

export const darkTheme = {
  body: '#363537',
  abcd: '#ffffff',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  input{
    background: ${({ theme }) => theme.abcd};
  }
`