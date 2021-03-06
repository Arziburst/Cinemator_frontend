// Core
import styled from 'styled-components';

// Styles
import { EntityContainer, EntityHeader, EntityInputs } from '../styles';

export const Container = styled(EntityContainer)`
    background-color: ${({ theme }) => theme.requisite.containerBg};
`;

export const Header = styled(EntityHeader)`
    background-color: ${({ theme }) => theme.requisite.secondary};
`;

export const UpdateInputs = styled(EntityInputs)``;
