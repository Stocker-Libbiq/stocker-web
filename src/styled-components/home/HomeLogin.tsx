import styled from 'styled-components'

const HomeLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  width: 50%;
  height: 100%;

  .cardHome {
    display: flex;
    flex-direction: column;
    text-align: center;
    h1{
      font-size: 4rem;
    }
    h2{
      font-size: 3rem;
      color: #0A74D6;
      
      span{
        color: black;
      }
    }
    h3{
      font-size: 2rem;
      font-weight: 400;
    }
  }

  .btnGoogle {
    width: 45%;
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    background: #1A1A1A;
    
    h2{
      font-size: 3rem;
      color: white;
    }

    .link{
      font-size: 2rem;
      color: white;
      margin: auto 0;
      padding: 0 1rem;
    }
  }
`
export { HomeLogin }
