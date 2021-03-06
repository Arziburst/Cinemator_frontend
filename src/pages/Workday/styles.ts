// Core
import styled from 'styled-components';

// Styles
import { EntityContainer, EntityHeader, EntityInfo } from '../styles';

export const Container = styled(EntityContainer)`
    background-color: ${({ theme }) => theme.workday.containerBg};
`;

export const Header = styled(EntityHeader)`
    background-color: ${({ theme }) => theme.workday.anotherSecondary};
    border-bottom: 1px solid #fff;
`;

export const Info = styled(EntityInfo)`
    background-color: ${({ theme }) => theme.workday.anotherSecondary};
`;
