import styled from 'styled-components'

export const Mode = ({ setTheme }) => {
  const handleClick = () => {
    setTheme((start) => (start = !start))
  }

  return (
    <ContentMode>
      <div>
        <div onClick={handleClick}></div>
      </div>
    </ContentMode>
  )
}
const ContentMode = styled.div`
  div {
    padding: 1px;
    width: 5rem;
    border-radius: 9rem;
    ${(props) => props.theme.mode}
    background: ${(props) => props.theme.color.blueMidu};
    &:active {
      transition: justify-content 3s ease;
    }
    div {
      height: 2rem;
      width: 2rem;
      margin: 0.1rem;
      border-radius: 50%;
      background: ${(props) => props.theme.color.blank};
    }
  }
`
