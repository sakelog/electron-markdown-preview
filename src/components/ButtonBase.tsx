import React from 'react';
import { Button } from '@chakra-ui/react';

type PropsType = {
  children: React.ReactNode;
  icon?: React.ReactElement;
  clickFunction?: React.MouseEventHandler<HTMLButtonElement>;
};

const ButtonBase = (props: PropsType) => {
  return (
    <Button
      colorScheme="blue"
      leftIcon={props.icon}
      onClick={props.clickFunction}
      size="sm"
    >
      {props.children}
    </Button>
  );
};

export default ButtonBase;
