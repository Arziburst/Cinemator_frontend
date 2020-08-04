import styled from 'styled-components';

// Styles
import { TableStyles, TheadStyles, TbodyStyles } from '../styles';

export const Table = styled(TableStyles)``;

export const Thead = styled(TheadStyles)`
    tr {
        background-color: ${({ theme }) => theme.requisite.primary};
        color: #fff;

        th {
            text-align: center;
        }
    }
`;

export const Tbody = styled(TbodyStyles)`
    tr {
        background-color: ${({ theme }) => theme.requisite.typePrimary};
        color: #fff;
        border-bottom: 1px solid ${({ theme }) => theme.requisite.primary};

        &:hover {
            background-color: ${({ theme }) => theme.requisite.hoverSecondary};
        }
    }
`;
