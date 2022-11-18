import React from 'react';
import { styled, Typography } from '@mui/material';

const CellStyle = styled(Typography)<{
  isPositive?: boolean;
}>`
  color: ${(props) => (props.isPositive ? 'green' : 'red')};
`;

const ChangeCell: React.FC<{
  children: number | string;
  isPositive: boolean;
}> = ({ children }) => {
  return (
    <CellStyle textAlign='right' variant={'body2'}>
      {Number(+children * 100).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}
    </CellStyle>
  );
};

export default ChangeCell;
