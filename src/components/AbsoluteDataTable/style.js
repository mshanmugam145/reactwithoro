import styled from 'styled-components'

// flex flex-row justify-center text-white bg-purple-500 p-2 rounded-sm
const Header = styled.div`
    display: flex;
    justify-content: center;
    color: white;
    background: #a855f7;
    padding: 1em;
    border-radius: 0.5em;
`;

const ButtonDiv = styled.div`
    margin: 0.5em;
`;
const BodyContainer = styled.div`
    margin-top: 0.5em;
`;

export default {
    Header,
    ButtonDiv,
    BodyContainer
}