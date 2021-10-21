import styled from "styled-components";

function Card (
    {title,
    description,
    category,}
) {
    return (
        <Wrapper>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{category}</p>
        </Wrapper>

    )
}

export default Card

const Wrapper = styled.li`
border-radius: 5px;
margin 20px;
display: flex;
gap: 10px;
min-height: 150px;
box-shadow: 5px 4px 10px 0px rgba(0, 0, 0, 0.25);
`