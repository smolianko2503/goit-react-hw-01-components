import styled from 'styled-components';
import { getRandomHexColor } from '../getColor';

export const Statistic = styled.section`
  width: 270px;
  height: 130px;

  border: 1px solid #757575;
  border-radius: 4px;
  padding-top: 20px;

  overflow: hidden;

  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.h2`
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  text-transform: uppercase;

  margin-bottom: 30px;
`;

export const StatList = styled.ul`
  width: 100%;
  height: 60px;
  display: flex;
  padding: 0;
`;

export const Item = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${getRandomHexColor};

  align-items: center;
  justify-content: center;
`;

export const Label = styled.span`
  font-size: 10px;

  margin-bottom: 8px;
`;

export const Percentage = styled.span`
  font-size: 13px;
`;
