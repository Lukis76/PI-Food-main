import styled from 'styled-components'
import { center } from '../../style/shorcuts'
import { useRef, useState } from 'react'

export const AddImg = ({ setError, setNewRecipe, error }) => {
  // let file = ''
  // const [valid, setValid] = useState({
  //   locura: 'automatica',
  //   imgextensionValid: '',
  // })
  // const inputRef = useRef()
  // const marcoRef = useRef()
  // const textRef = useRef()

  // const handleDragOver = (e) => {
  //   e.preventDefault()
  //   marcoRef.current.classList.add('img-active')
  //   textRef.current.textContent = 'release to upload file'
  // }

  // const handleDragLeave = (e) => {
  //   e.preventDefault()
  //   marcoRef.current.classList.remove('img-active')
  //   textRef.current.textContent = 'drag and drop image'
  // }

  // const handleDrop = (e) => {
  //   e.preventDefault()
  //   if (e.dataTransfer.files.length) {
  //     setValid((state) => {
  //       return {
  //         ...state,
  //         imgextensionValid: 'more than one file is not supported',
  //       }
  //     })
  //   } else {
  //     const file = e.dataTransfer.files[0]
  //     processFile(file)
  //   }
  // }

  // const processFile = (file) => {
  //   const docType = file.type
  //   const valiudExtension = ['image/png', 'image/jpeg', 'image/jpg']
  //   if (valiudExtension.includes(docType)) {
  //     setValid({ ...valid, imgextensionValid: '' })
  //   } else {
  //     setValid({ ...valid, imgextensionValid: 'invalid file extension' })
  //   }
  // }
  // console.log('console programatico => ', valid)

  // const handleChange = (e) => {

  // }

  const handleBlur = (e) => {
    if(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig.test(e.target.value)) {
      setNewRecipe(state => ({...state, img: e.target.value}))
      setError(state => ({...state, validImg: ''}))

    } else {
      setError(state => ({...state, validImg: 'this link is not valid'}))

    } 
    if(e.target.value === '') {
      setError(state => ({...state, validImg: 'image link field required'}))
    }
  }
  return (
    <ContentAddImg>
    <div>
        <input
          // autoFocus
          type='text'
          name='name'
          // onChange={handleChange}
          onBlur={handleBlur}
          placeholder=' '
        />
        <label>link img</label>
      </div>
      {/* <Box
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
      <p id='preview'>{valid.imgextensionValid}</p> */}
      <p>{error.validImg}</p>
    </ContentAddImg>
  )
}

const ContentAddImg = styled.div`
  width: 100%;
  ${center()}
  margin: 1rem 0;
  div {
    ${center()}
    width: 100%;
    position: relative;
    label {
      width: 100%;
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      color: #5757577e;
      position: absolute;
      top: 0;
      left: 5px;
      transform: translateY(8px);
      transition: transform 0.5s, color 0.3s;
      z-index: 100;
    }
    input {
      width: 100%;
      background: none;
      color: #706c6c;
      font-family: 'Roboto', sans-serif;
      /* font-size: 1rem; */
      padding: 0.4rem 0.3rem;
      border: none;
      outline: none;
      border-bottom: 1px solid #5757577e;
      &:focus + label,
      &:not(:placeholder-shown) + label {
        transform: translateY(-12px) scale(0.7);
        transform-origin: left top;
        color: #3866f2;
        z-index: 100;
      }
      z-index: 110;
    }
  }
  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin-top: 0.5rem;
    font-size: 0.7rem;
    border-radius: 1rem;
    color: red;
  }
`

// const Box = styled.div`
//   position: relative;
//   ${center()}
//   height: 8rem;
//   width: 100%;
//   border-radius: 1rem;
//   border: 0.3rem dashed #ddd;
//   transition: background 0.5s ease;
//   &.active {
//     transform: scale(1.08);
//     transition: transform 0.2s ease;
//   }
//   label {
//     font-weight: 700;
//     color: #575757ee;
//   }
//   span {
//     margin: 0.3rem;
//     color: #575757ee;
//     font-weight: 700;
//   }
// `

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
