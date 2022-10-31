import styled from 'styled-components'

const Container = styled.div`
div {
  display: flex;
  width: 100%;
  
  h2 {
    font-size: 2rem;
    color: blue;
    text-align: center;
  }
}

div {
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 5rem;

  input {
    width: 100%;
    height: 5rem;
    margin: 1rem 0;
    padding: 0 1rem;
    border: 1px solid grey;
    border-radius: 5px;
    font-size: 1.5rem;
  }

  .button {
    width: 100%;
    height: 5rem;
    margin: 1rem 0;
    padding: 0 1rem;
    border: 1px solid grey;
    border-radius: 5px;
    font-size: 1.5rem;
    background-color: blue;
    color: white;
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;
  }

  .list {
    text-decoration: underline;
    font-size: 1.5rem;
    color: grey;
  }
}

`
export { Container }
