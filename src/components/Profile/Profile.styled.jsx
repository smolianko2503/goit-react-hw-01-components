import styled from "styled-components";


export const UserProfile = styled.div`
width: 250px;
  height: 330px;
  border: 1px solid #d8e0ea;
  border-radius: 5px;

  box-shadow: 2px 2px 2px #d8e0ea;
  overflow: hidden;

  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
`;

export const Description = styled.div`
width: 100%;
  height: 255px;
  padding: 25px;`;

export const Avatar = styled.img`
display: block;
width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid #757575;

  margin-right: auto;
  margin-left: auto;
  margin-bottom: 25px;`;

export const Name = styled.p`
font-size: 16px;
  font-weight: bold;

  margin-bottom: 10px;

  text-align: center;`;

export const Tag = styled.p`
text-align: center;

  margin-bottom: 10px;`;

export const Location = styled.p`
  text-align: center;`;

export const Stats = styled.ul`
 display: flex;
  height: 75px;
  padding: 0;
   margin-right: auto;
  margin-left: auto;`;

export const StatsiItem = styled.li`
 display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f3f6f9;
  height: 75px;
  width: 100%;

  border: 1px solid #e4e9f0;`;

export const Label = styled.span`
font-size: 14px;
  color: #a6b0bb;
  margin-bottom: 6px;`;

export const Quantity = styled.span`
font-size: 14px;
  font-weight: bold;`;

