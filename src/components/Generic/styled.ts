import styled from 'styled-components';

interface FlexProps {
    align?: string;
    gap?: string;
    justify?: string;
    flexDirection?: string;
}

interface TitleProps {
    fontSize: string;
    align?: string;
    fontWeight?: string;
}

export const FlexContainer = styled.div`
    display: flex;
    align-items: ${(props: FlexProps) => props.align ?? 'center'};
    justify-content: ${(props: FlexProps) => props.justify ?? 'center'};
    flex-direction: ${(props: FlexProps) => props.flexDirection ?? 'row'};
    gap: ${(props: FlexProps) => props.gap ?? '5px'};
`;

export const Title = styled.span`
    text-align: ${(props: TitleProps) => props.align ?? 'center'};
    font-size: ${(props: TitleProps) => props.fontSize ?? '15px'};
    font-weight: ${(props: TitleProps) => props.fontWeight ?? '700'};
`;
