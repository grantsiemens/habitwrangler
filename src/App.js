import ByWeek from './ByWeek.js';
import styled from "styled-components";

const Site = styled.div `
  font-family: Cantarell;
  @media (min-width: 768px){
  width: 80%;
    border-radius: 5px;
    box-shadow: 1px 1px 3px  1px rebeccapurple;
  }
`
const HeaderHeading = styled.div`
  color: white;
  background: rebeccapurple;
  display: block;
  border-radius: 3px;
  padding: 10px;
  margin-bottom: 20px;
  text-align: center;
`


function App() {
  return (
<Site>
  <Header />
  <ByWeek />
</Site>
  );
}

function Header(){
  return(
      <HeaderHeading><h1>HabitFactory.io</h1></HeaderHeading>
  )
}




export default App;
