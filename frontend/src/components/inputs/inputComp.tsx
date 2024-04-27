import { ReactNode } from "react";
import { FieldError } from "react-hook-form";
import styled from "styled-components";

interface InputTextProps {
    children: ReactNode,
    label?: string,
    disabled?: boolean,
    obrigatorio?: boolean,
    $disabled?: boolean,
    email?: boolean,
    erro?: FieldError
}

export const InputText = ({children, erro}: InputTextProps) => {
  
    return (
      <>
        <DivInput $erro={erro}>
          { children } 
        </DivInput>
      </>
    )
  };
  
  
  const DivInput = styled.div<InputTextProps>`
    width: 100%;
  
    position: relative;
  
    color: ${props => props.$erro ? props.theme.cores.alertas.perigo : props.theme.cores.cinza.cinza2};
  
    border-radius: 8px;
    border: 1px solid ${props => props.$erro ? props.theme.cores.alertas.perigo : props.theme.cores.cinza.cinza11};
  
    > svg {
      fill: ${props => props.$erro ? props.theme.cores.alertas.perigo : props.theme.cores.cinza.cinza2};
      cursor: pointer;
      position: absolute;
      right: 15px;
      font-size: 20px;
      bottom: 13.5px;
    }
  `;