import styled from 'styled-components'

const ListReactive = styled.div`
  display: flex;
  width: 100vw;

  div {
    width: 70%;
    margin: 2rem auto;
    background-color: white;
    border: 1px solid grey;
    border-radius: 5px;
    padding: 1rem;

    table {
      width: 100%;
      border-collapse: collapse;
      display: flex;
      flex-direction: column;

      thead {
        background-color: blue;
        color: white;

        tr {
          display: flex;
          justify-content: space-between;
        }
      }

      th {
        padding: 1rem;
        text-align: center;
        font-size: 1.5rem;
      }

      tbody {
        tr {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          
          td {
            font-size: 1.5rem;
          }
        }
      }

      .edit {
        color: green;
        text-decoration: none;
        fons-size: 1.5rem;
      }

      .delete {
        background-color: transparent;
        border: none;
        fons-size: 2rem;
        color: red;
        text-decoration: underline;
      }
    }
  }
  
`
export { ListReactive }
