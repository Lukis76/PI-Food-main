import styled from 'styled-components'
import { center } from '../../style/shorcuts'
import { useRef, useState } from 'react'

export const AddImg = () => {
  let file = ''
  const [valid, setValid] = useState({
    locura: 'automatica',
    imgextensionValid: '',
  })
  const inputRef = useRef()
  const marcoRef = useRef()
  const textRef = useRef()

  const handleDragOver = (e) => {
    e.preventDefault()
    marcoRef.current.classList.add('img-active')
    textRef.current.textContent = 'release to upload file'
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    marcoRef.current.classList.remove('img-active')
    textRef.current.textContent = 'drag and drop image'
  }

  const handleDrop = (e) => {
    e.preventDefault()
    if (e.dataTransfer.files.length) {
      setValid((state) => {
        return {
          ...state,
          imgextensionValid: 'more than one file is not supported',
        }
      })
    } else {
      const file = e.dataTransfer.files[0]
      processFile(file)
    }
  }

  const processFile = (file) => {
    const docType = file.type
    const valiudExtension = ['image/png', 'image/jpeg', 'image/jpg']
    if (valiudExtension.includes(docType)) {
      setValid({ ...valid, imgextensionValid: '' })
    } else {
      setValid({ ...valid, imgextensionValid: 'invalid file extension' })
    }
  }
  console.log('console programatico => ', valid)
  return (
    <ContentAddImg>
      <Box
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        ref={marcoRef}
      >
        <label ref={textRef}>drag and drop image</label>
        <span>o</span>
        <Btn
          onClick={(e) => {
            e.preventDefault()
            inputRef.current.click()
          }}
        >
          select image
        </Btn>
        <input type='file' name='img' id='input-file' hidden ref={inputRef} />
      </Box>
      <p id='preview'>{valid.imgextensionValid}</p>
    </ContentAddImg>
  )
}

const ContentAddImg = styled.div`
  width: 100%;
  ${center()}
  margin: 1rem 0;
  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin-top: 0.5rem;
    font-size: 0.7rem;
    border-radius: 1rem;
    color: red;
  }
`

const Box = styled.div`
  position: relative;
  ${center()}
  height: 8rem;
  width: 100%;
  border-radius: 1rem;
  border: 0.3rem dashed #ddd;
  transition: background 0.5s ease;
  &.active {
    transform: scale(1.08);
    transition: transform 0.2s ease;
  }
  label {
    font-weight: 700;
    color: #575757ee;
  }
  span {
    margin: 0.3rem;
    color: #575757ee;
    font-weight: 700;
  }
`

const Btn = styled.button`
  font-size: 1rem;
  background: #09f;
  padding: 0.3rem 0.8rem;
  border-radius: 0.4rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
    transition: transform 0.2s ease;
  }
`
