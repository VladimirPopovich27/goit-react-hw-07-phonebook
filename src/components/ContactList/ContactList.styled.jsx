import styled from "@emotion/styled";

export const NameList = styled.ul`
list-style: square inside;
margin-left: 100px;

`;

export const ListItem = styled.li`
display:flex;
justify-content: space-between;
width: 320px;
font-weight: 500;
&:not(:last-child){
    margin-bottom: 10px;
}

`;
export const DeleteButton = styled.button`
background-color: #40E0D0;
cursor: pointer;
border-radius: 4px;

`