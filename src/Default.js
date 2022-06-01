import styled from "styled-components";

const PrimaryContainer = styled.div`
`
const SecondaryContainer = styled.div`
  border: ${props => props.theme.colorPrimary1} 5px solid;
  display: inline-block;
`

const SectionHeading = styled.div`
  background-color: ${props => props.theme.colorPrimary1};
  display: inline-block;
  width:100%;
  text-align: center;
`

const StatusBarFlex = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
`;

const CurrentDay = styled.div`
    background: ${props => props.theme.colorSecondary1};
    border: 2px solid ${props => props.theme.colorPrimary2};
    width: 40px; height: 40px;
    text-align: center;
`;

const ProgressContainer = styled.div`
    display: flex;
`;

const ProgressBox = styled.div`
  background: ${props => props.theme.colorSecondary1};
  width: 33px; height: 33px;
  margin: 5px;
  box-shadow: inset 0.1em 0.1em 0.1em 0 rgba(255,255,255,0.6), inset -0.2em -0.2em 0.2em 0 rgba(0,0,0,0.5);
`;

//Index Function
function Default(){

    return(
<Dash/>
    )
}
function Dash(){
    return(
        <>
            <PrimaryContainer>
                <SecondaryContainer>
                    <SectionHeading><h1>Wednesday, May the Third.</h1></SectionHeading>
            <StatusBarFlex>

                <ProgressContainer>
                    <ProgressBox/>
                    <ProgressBox/>
                    <CurrentDay>Nov 13</CurrentDay>
                    <ProgressBox/>
                    <ProgressBox/>
                    <ProgressBox/>
                    <ProgressBox/>
                </ProgressContainer>
            </StatusBarFlex>
                </SecondaryContainer>
            </PrimaryContainer>
        </>
    )
}



export default Default;