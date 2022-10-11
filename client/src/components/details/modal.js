import styled from 'styled-components'
import { center } from '../../style/shorcuts'

export const Modal = ({ setModal, msg, handler }) => {
  return (
    <>
      <Overlay>
        <Content>
          <h2>{msg}</h2>
          <Btn>
            <button onClick={handler}>OK</button>
            <button onClick={() => setModal((state) => !state)}>Cancel</button>
          </Btn>
        </Content>
      </Overlay>
    </>
  )
}

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.7;
  ${center()}
`

const Content = styled.div`
  ${center('column')}
  justify-content: space-around;
  width: 100%;
  max-width: 22rem;
  height: 100%;
  max-height: 15rem;
  border-radius: 1rem;
  background: white;
  padding: 1rem;
  h2 {
    width: 100%;
    margin: 1rem 0;
    text-align: center;
  }
`

const Btn = styled.div`
  width: 100%;
  ${center('row')}
  justify-content: space-around;
  button {
    padding: 0.5rem 1rem;
    background: #09f;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 0.5rem;
    & ~ button {
      background: red;
    }
    &:hover {
      scale: 1.05;
      transition: sclale 0.2s ease;
    }
  }
`