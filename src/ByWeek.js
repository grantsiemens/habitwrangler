import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  >span{
    padding: 8px 4px;
  }
`;

const Column = styled.span`
  background-color: ghostwhite;
  box-shadow: 0px 1px 2px;
  text-align: center;
  input {
    display: ${(props) => props.assigned};
  }
`;

const Input = styled.input`
`;


//Index Function
function ByWeek(){
    const Tasks = [
        {id: 1, title: "put away dishes", dayassigned: ["","","","","","",""], daychecked: ["checked","","checked","","checked","","checked"]},

    ];

    return(
        <>
            <WeekdayHeader />


                {Tasks.map((item) =>
                    <Grid>
                        <Column key={item.id}>{item.title}</Column>
                        {item.daychecked.map((daychecked) =>
                            <>
                                <Column assigned={daychecked} key={daychecked}>

                                    <Input type="checkbox" {daychecked}></Input>

                                </Column>
                            </>
                            )}

                    </Grid>
                )}
        </>
    )
}

function WeekdayHeader(){
const DaysOfWeek = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
return(
    <Grid>
        {DaysOfWeek.map((item) =>
        <Column key={item}>{item}</Column>
        )}
    </Grid>
)
}

export default ByWeek;