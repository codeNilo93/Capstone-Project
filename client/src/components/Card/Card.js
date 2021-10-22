import styled from "styled-components";




function Card (
    {image,
        title,
    description,
    category,}
) {
    return (
        <Wrapper>
        <StyledImage src={image} alt="that looks nice!" />
        <StyledDescription>
        <h3>{title}</h3>
        <p>Show Me more</p>
        </StyledDescription>
        </Wrapper>

    )
}

export default Card

const Wrapper = styled.li`
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
flex: 2;
padding: 10px 0 10px 0;
display: flex;
flex-direction: column;
justify-content: space-between;
h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.2rem;
}
`

const StyledImage = styled.img`
width: 50%;
flex: 1;
background-color: #f6f6f6;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px 0 0 5px;
img {
  box-shadow: var(--box-shadow);
  -webkit-box-shadow: var(--box-shadow);
  max-width: 80%;
  max-height: 130px;
  margin: 1rem;
}
`