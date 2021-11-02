import styled from 'styled-components'
import { useState } from 'react'
function Location({
  imgUrl,
  title,
  description,
  lat,
  lng,
  category,
  street,
  zipcode,
  city,
}) {
  const [showDetails, setshowDetails] = useState(false)

  const handleDetailsButtonClick = () => {
    setshowDetails(showDetails ? false : true)
  }

  return (
    <Wrapper>
      <StyledDescription>
        <StyledImage src={imgUrl} alt="Image of location" />
        <CardTitle>{title}</CardTitle>
        <InformationRow>
          <ButtonMore onClick={handleDetailsButtonClick}>
            {showDetails ? 'less' : 'more'}
          </ButtonMore>
          <CategoryTag>{category}</CategoryTag>
        </InformationRow>
        {showDetails ? (
          <HiddenWrapper>
            <HiddenDescription>"{description}"</HiddenDescription>
            <HiddenHeading>Address</HiddenHeading>
            <p>
              {street}, {zipcode}, {city}
            </p>
            <HiddenHeading>Coordinates</HiddenHeading>
            <p>latitude: {lat}</p>
            <p>longitude: {lng}</p>
          </HiddenWrapper>
        ) : null}
      </StyledDescription>
    </Wrapper>
  )
}

export default Location

const HiddenDescription = styled.p`
  word-break: break-all;
  padding-top: 10px;
  font-style: oblique;
`

const HiddenHeading = styled.p`
  font-weight: bold;
`

const Wrapper = styled.li`
  overflow: hidden;
  border-radius: 5px;
    background-color: #fff;
  display: flex;
  justify-content: space-between;
  height: auto;
  padding-right: 5px;
  margin-bottom: 10px;
  border 5px outset #cb2d3e;
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
  max-width: 100%;
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

const InformationRow = styled.section`
  padding-left: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const HiddenWrapper = styled.section`
  font-size: 15px;
  margin: 5px;
`

const ButtonMore = styled.button`
  width: 50%;
  background-color: #fab371;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  font-size: 10px;
  margin-top: 15px;
  border: 3px outset #fab371;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`

const CategoryTag = styled.div`
  font-variant: small-caps;
  font-size: 1rem;
  margin: auto;
  padding: 7px;
  width: auto;
  height: auto;
  border: 3px outset white;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`
