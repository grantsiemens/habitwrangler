import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  >span{
    padding: 8px 4px;
  }
`;

const Column = styled.span`
  background-color: ghostwhite;
  border: 1px solid lightgrey;
  text-align: center;
  input {
    display: ${(props) => props.assigned ? "" : "none"};
  }
`;

const Input = styled.input`
`;

const CategoryBanner = styled.div`
  background: ghostwhite;
  width: 100%;
  height: 35px;
  border-top: solid 1px lightgrey;
  text-align: center;

`;

//Index Function
function ByWeek(){

    return(
<CategoryTasks/>
    )
}
function CategoryTasks(){
    const Tasks = [
        {id: 1, title: "put away dishes", dayassigned: [[true, true],[true, true],[true, false],[false, false],[true, false],[false, false],[true, false]]},
        {id: 2, title: "do math", dayassigned: [[false, true],[true, true],[true, false],[false, false],[true, false],[false, false],[true, false]]},
        {id: 3, title: "do dishes", dayassigned: [[false, true],[true, true],[true, false],[false, false],[true, false],[false, false],[true, false]]},

    ];

    return(
        <>
            <CategoryBanner>Morning</CategoryBanner>
            <Grid>
                <WeekdayHeader/>
            {Tasks.map((item) =>
                <>

                    {item.dayassigned.map((dayassigned) =>
                        <>
                            <Column assigned={dayassigned[0]} >
                                <Input type="checkbox" checked={dayassigned[1]}></Input>
                            </Column>
                        </>
                    )}
                </>
            )}
            </Grid>
        </>
    )
}

function WeekdayHeader(){
const DaysOfWeek = ["M", "T", "W", "T", "F", "S", "S"];
return(
    <>
        {DaysOfWeek.map((item) =>
        <Column key={item}>{item}</Column>
        )}
    </>
)
}

export default ByWeek;