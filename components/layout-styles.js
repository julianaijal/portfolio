import styled from "styled-components"
// change styled. to tw. work with tailwind components
import tw from "tailwind-styled-components"


export const Wrapper = styled.div`
  max-width: 36rem;
  padding: 1rem;
  margin: 3rem auto 6rem;
  border: 1px solid;
  box-shadow: 0 8px 30px rgb(0 0 0 / 12%);
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HomeButton = styled.div`
  margin: 3rem 0 0;
`