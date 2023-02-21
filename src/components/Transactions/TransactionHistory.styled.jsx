import styled from 'styled-components';

export const Table = styled.table`
  width: 900px;

  margin-left: auto;
  margin-right: auto;

  border: 1px solid #ededed;
  border-radius: 4px;

  box-shadow: 2px 2px 2px #d8e0ea;

  border-spacing: 0;
`;

export const Head = styled.thead`
  background-color: #00bcd5;
  height: 50px;
`;

export const HeadCell = styled.th`
  color: white;
  text-transform: uppercase;
  outline: 1px solid white;
`;

export const Row = styled.tr`
  height: 50px;

  :nth-child(2n) {
    background-color: #ecf1f4;
  }
`;

export const Cell = styled.td`
  text-align: center;
  text-transform: capitalize;

  outline: 1px solid #f9f9f9;
`;
