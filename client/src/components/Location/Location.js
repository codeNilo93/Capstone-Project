import styled from 'styled-components'

function Location({ image, title, description, lat, lng, category }) {
  return (
    <Wrapper>
      <StyledDescription>
        <StyledImage src={image} alt="" />
        <CardTitle>{title}</CardTitle>
        <p>{category}</p>
      </StyledDescription>
    </Wrapper>
  )
}

export default Location

const Wrapper = styled.li`
  overflow: hidden;
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  height: auto;
  padding-right: 5px;
  margin-bottom: 10px;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`

const StyledDescription = styled.section`
font-weight: bold
  flex: 2;
  padding: 10px 0 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.2rem;
  }
`

const StyledImage = styled.img`
  margin: auto;
  border-radius: 2%;
  width: 50%;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`
const CardTitle = styled.p`
  font-weight: bold;
  text-decoration: underline;
`
