import styled from 'styled-components'

const HomeLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .cardHome {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 5rem;

    h1 {
      font-size: 5rem;
      font-weight: 800;
      color: #000;
      margin-bottom: 0rem;
    }

    h2 {
      margin-top: 0rem;
      font-size: 3rem;
      font-weight: 700;
      color: blue;
      span {
        color: black;
      }
    }

    h3 {
      margin-top: 0rem;
      font-size: 1.5rem;
      font-weight: 700;
      color: grey;
    }
  }

  .btnGoogle {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    border-radius: 8px;
    width: 300px;
    height: 50px;
    text-decoration: none;

    .bi-google {
      font-size: 2rem;
      color: orange;
    }

    .text {
      font-size: 1.5rem;
      color: #fff;
      margin-left: 10px;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 700;
    }
  }
`
export { HomeLogin }
