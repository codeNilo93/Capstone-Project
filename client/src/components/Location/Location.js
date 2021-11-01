import styled from 'styled-components'
import { useState } from 'react'
function Location({
  image,
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
        <StyledImage src={image} alt="Image of location" />
        <CardTitle>{title}</CardTitle>
        <InformationRow>
          <CategoryTag>Rating</CategoryTag>
          <ButtonMore onClick={handleDetailsButtonClick}>
            {showDetails ? 'less' : 'more'}
          </ButtonMore>
          <CategoryTag>{category}</CategoryTag>
        </InformationRow>
        {showDetails ? (
          <HiddenRow>
            <p>Street</p>
            <p>{street}</p>
            <p>Zip Code</p>
            <p>{zipcode}</p>
            <p>City</p>
            <p>{city}</p>
          </HiddenRow>
        ) : null}
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
  border-style: outset;
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

const HiddenRow = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  font-size: 15px;
  padding-top: 20px;
`

const ButtonMore = styled.button`
  width: auto;
  background-color: #fab371;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  font-size: 10px;
  margin-top: 15px;
  border-radius: 10px 10px 10px 10px;
`

const CategoryTag = styled.div`
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
