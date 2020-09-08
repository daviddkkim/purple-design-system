import styled from "styled-components";
import { typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';


const SIZES ={
    SMALL: "small",
    MEDIUM: "medium",
    LARGE: "large"
}

const TYPES = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
}

const BUTTON_MODIFIERS = {
   /* small: (  ) => `
        font-size: ${typeScale.helperText};
        padding: 8px 12px;
    `,
    large: (  ) => `
        font-size: ${typeScale.header5};
        padding: 16 24px;
    `,
    warning: () => `
        background-color: ${props => props.theme.status.warningColor};
        color: ${props => props.theme.textColorInverted};

        &:hover, &:focus {
            background-color: ${props => props.theme.status.warningColorHover};
            outline: 3px solid ${props => props.theme.status.warningColorHover}; 
        }

        &:active {
            background-color: ${props => props.theme.status.warningColor};
        }
    `,
    primaryButtonWarning: (  ) => `
        background-color: ${props => props.theme.status.warningColor};
        color: ${props => props.theme.textColorInverted};
    `,
    secondaryButtonWarning: (  ) => `
        background: none;
        border: 2px solid ${props => props.theme.status.warningColor};
        color: ${props => props.theme.status.warningColor};
    `,
    error: (  ) => `
        background: none;
        color: ${props => props.theme.status.errorColor};
        &:hover, &:focus {
        background-color: ${props => props.theme.status.errorColorHover};
        outline: 3px solid ${props => props.theme.status.errorColorHover};
        outline-offset: 2px;
        border: 2px solid transparent;
        }
        &:active {
        background-color: ${props => props.theme.status.errorColorActive};
        }
    `,
    primaryButtonError: (  ) => `
        background-color: ${props => props.theme.status.errorColor};
        color: ${props => props.theme.textColorInverted};
    `,
    secondaryButtonError: (  ) => `
        border: 2px solid ${props => props.theme.status.warningColor};
    `,
    success: (  ) => `
        background: none;
        color: ${props => props.theme.status.successColor};
        &:hover, &:focus {
        background-color: ${props => props.theme.status.successColorHover};
        outline: 3px solid ${props => props.theme.status.successColorHover};
        outline-offset: 2px;
        border: 2px solid transparent;
        }
        &:active {
        background-color: ${props => props.theme.status.successColorActive};
        }
    `,
    primaryButtonSuccess: (  ) => `
        background-color: ${props => props.theme.status.successColor};
        color: ${props => props.theme.textColorInverted};
    `,
    secondaryButtonSuccess: (  ) => `
        border: 2px solid ${props => props.theme.status.warningColor};
    `*/
}

export const StyledButton = styled.button`
    padding: ${ props => (
        props.size === SIZES.SMALL ? ' 8px 12px' : 
            props.size===SIZES.MEDIUM ? ' 12px 24px':
                props.size === SIZES.LARGE ? '16px 24px ': '12px 24px'
        )};

    font-size: ${ props => (
        props.size === SIZES.SMALL ? typeScale.helperText : 
            props.size===SIZES.MEDIUM ? typeScale.paragraph:
            props.size === SIZES.LARGE ? typeScale.header5: typeScale.paragraph
        )};
    
    background-color: ${ props => (
        props.type === TYPES.PRIMARY ? props.theme.primaryColor : props.theme.inverseColor
        )};
    
    border: ${ props => (
        props.type === TYPES.PRIMARY ? 'none' : 
            props.type === TYPES.SECONDARY ? '2px solid ' + props.theme.primaryColor: 'none'
        )};
    
    color: ${ props => (
        props.type === TYPES.PRIMARY ?  props.theme.textColorOnPrimary : 
            props.theme.primaryColor
        )};

    ${(props) =>
        props.containsIcon &&
        `
        svg {
            display: block;
            margin: 0;
        }
        padding: ${props.size === SIZES.SMALL ? '7' : '12'}px;
        `
    }
    border-radius: 5px;
    min-width: 100px;
    cursor: pointer;
    font-family: "Roboto Mono", monospace;
    trainsition: background-color 0.2s linear, color 0.2s linear;
    
    &:hover {
        transform: translate3d(0, -2px, 0);
        background-color: ${props => props.theme.primaryColorHover};
        color: ${props => props.theme.textColorOnPrimary}
    }

    &:focus {
        outline: 3px solid ${props => props.theme.primaryColorHover};
        outline-offset: 2px;
    }

    &:active {
        background-color : ${props => props.theme.primaryColorACtive};
        border-color: ${props => props.theme.primaryColorACtive};
        color: ${props => props.theme.textColorOnPrimary};
    }
`;
export const PrimaryButton = styled(StyledButton)`
    background-color: ${props => props.theme.primaryColor};
    border: none;
    color: ${props => props.theme.textColorOnPrimary};

    &:disabled {
        background-color: ${props => props.theme.disabled};
        color: ${props => props.theme.textOnDisabled};
        cursor: not-allowed
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(StyledButton)`
    background: none;
    border: 2px solid ${props => props.theme.primaryColor};
    color: ${props => props.theme.primaryColor};

    &:disabled {
        background: none;
        color: ${props => props.theme.textOnDisabled};
        cursor: not-allowed;
        border-color: ${props => props.theme.disabled};
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

export const TertiaryButton = styled(StyledButton)`
    background: none;
    border: none;
    color: ${props => props.theme.primaryColor};

    &:disabled {
        background: none;
        color: ${props => props.theme.textOnDisabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

export const Button = forwardRef(
    ({ children, isDisabled, isLoading, loadingText, size,type, ...rest }, ref) => {
      const content = (
        <>
          <span>{children}</span>
        </>
      );
  
      return (
        <StyledButton
          disabled={isDisabled}
          isLoading={isLoading}
          ref={ref}
          size={size}
          type={type}
          {...rest}
        >
          {content}
        </StyledButton>
      );
    }
  );

Button.propTypes = {
    children: PropTypes.node.isRequired,
    isDisabled: PropTypes.bool,
    type: PropTypes.oneOf(Object.values(TYPES)),
    containsIcon: PropTypes.bool,
    size: PropTypes.oneOf(Object.values(SIZES))
}

Button.defaultProps = {
    children: "label",
    isDisabled: false,
    type: "primary",
    containsIcon: false,
    size: "medium"
}