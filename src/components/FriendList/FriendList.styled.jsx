import styled from 'styled-components';

export const FriendItems = styled.ul`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  width: 400px;
`;

export const Item = styled.li`
  display: flex;

  align-items: center;

  margin-bottom: 15px;

  width: 100%;
  height: 110px;

  border: 1px solid #ababab;
  border-radius: 2px;
  box-shadow: 2px 2px 2px #d8e0ea;
`;

export const Status = styled.span`
  width: 25px;
  height: 25px;

  margin-left: 16px;
  margin-right: 16px;

  background-color: ${props => {
    return props.isActive ? 'green' : 'red';
  }};

  border-radius: 50%;
`;

export const Avatar = styled.img`
  width: 95px;
  height: 95px;
  outline: 1px solid green;
  border-radius: 5px;
`;

export const Name = styled.p`
  margin-left: 18px;
  margin-right: auto;

  font-size: 24px;
  font-weight: bold;
`;
