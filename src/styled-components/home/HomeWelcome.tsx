import styled from 'styled-components'

const HomeWelcome = styled.div`
  width: 100%;

  .cardText {
    margin-top: 5rem;
    .welcome {
      font-size: 3rem;
      color: blue;
      font-weight: 700;
    }

    .info {
      font-size: 2rem;
      color: grey;
    }

    .containerInfo {
      display: flex;
      flex-direction: column;
      align-items: start;
      margin-top: 2rem;

      .container {
        display: flex;
        align-items: center;

        i {
          font-size: 4rem;
          color: black;
        }
  
        div {
          margin-left: 3rem;
          
          h3 {
            font-size: 3rem;
            color: blue;
          }
  
          p {
            font-size: 2rem;
            color: grey;
          }
      }
    }
  }
`
export { HomeWelcome }
