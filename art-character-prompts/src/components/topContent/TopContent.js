import Character from "./Character"
import MainButtons from "./MainButtons"
import { connect } from "react-redux"
const TopContent = () => {
    return(
        <div className='main-content'>
          <Character/>
          <MainButtons/>
        </div>
    )
}
export default connect(st => st)(TopContent);