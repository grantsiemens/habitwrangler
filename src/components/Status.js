//Status Row
import Window from "./Window";
import styled from "styled-components";
import {Flex} from '../styles/components'

const CurrentDay = styled.div`
    background: ${props => props.theme.colorSecondary1};
    display: flex;
    width: 40px; height: 40px;
    text-align: center;
    align-items: center;
    box-shadow: ${props => props.theme.colorPrimary2} 1px 1px 3px 1px;
    margin-left: 3px;
    margin-right: 3px;
    font-size: small;
    line-height: 1.1em;
`;

const ProgressBar = styled.div`
  background: ${props => props.theme.colorSecondary1};
  width: 33px; height: 33px;
  margin: 6px;
  box-shadow: inset 0.1em 0.1em 0.1em 0 rgba(255,255,255,0.6), inset -0.2em -0.2em 0.2em 0 rgba(0,0,0,0.5);
`;



const Status = () => {
    return(
        <Window t="stats" tPos="2" content={
            <Flex>
                <ProgressBar/>
                <ProgressBar/>
                <CurrentDay></CurrentDay>
                <ProgressBar/>
                <ProgressBar/>
                <ProgressBar/>
                <ProgressBar/>
            </Flex>
        }
        />
    )
}

export default Status