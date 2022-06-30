import { connect } from "react-redux";
const Decide = ({ decideDesign }) => {
    const { back, head, eyeColor, skinColor, clothesType, themeColor1, themeColor2} = decideDesign;

    return(
        <div className='additional-right'>
           {back && <p>back attachments: <strong>{back}</strong></p> }
           {head && <p>head attachments: <strong>{head}</strong></p> }
           {eyeColor && <p>eye color: <strong>{eyeColor}</strong></p> }
           {skinColor && <p>skin color: <strong>{skinColor}</strong></p> }
           {clothesType && <p>clothesType: <strong>{clothesType}</strong></p> }
           {themeColor1 && <p>theme color(1) <strong>{themeColor1}</strong></p> }
           {themeColor2 && <p>theme color(2) <strong>{themeColor2}</strong></p> }
        </div>
    )
}

export default connect(st => st)(Decide);
