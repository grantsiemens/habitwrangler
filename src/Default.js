import styled from "styled-components";

const StatusBarContainer = styled.div`
    display: flex;
    align-items: center;
`;

const CurrentDay = styled.div`
    background:grey;
    width: 70px; height: 70px;
    margin: 5px;
    text-align: center;
  //rewrite to theme
    border: 1px solid orange;
`;

const ProgressContainer = styled.div`
    display: flex;
`;

const ProgressBox = styled.div`
  width: 33px; height: 33px;
  background:grey;
  margin: 5px;
`;

//Index Function
function Default(){

    return(
<StatusBar/>
    )
}
function StatusBar(){
    return(
        <>
            <StatusBarContainer>
                <CurrentDay>13</CurrentDay>
                <ProgressContainer>
                    <ProgressBox/>
                    <ProgressBox/>
                    <ProgressBox/>
                    <ProgressBox/>
                    <ProgressBox/>
                    <ProgressBox/>
                    <ProgressBox/>
                </ProgressContainer>
            </StatusBarContainer>
        </>
    )
}



export default Default;