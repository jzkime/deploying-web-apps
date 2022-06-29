const Design = ({designs}) => {
    const { 
        back1, back2, backQues,
        head1, head2, headQues,
        clothesTop1, clothesTop2, clothesQuesTop,
        clothesBottom1, clothesBottom2, clothesQuesBottom,
        eyeColorQues,
        skinColorQues} 
        = designs;

    return (
    <div className='additional-left'>
        <p>Left: true/first option <br/> Right: false/second option</p>
            {back1 && 
            <div className="ques-table">
                <div className='quesLeft'>
                    <p>{back1}</p>
                </div>

                <div className='quesMid'>
                    <h4>back attachment</h4>
                    <p>{backQues}</p>
                </div>

                <div className='quesRight'>
                    <p>{back2}</p>
                </div>
            </div>
            } 

            {eyeColorQues && 
            <div className="ques-table">
                <div className="quesMid"> 
                <h4>eye color? </h4>
                <p>{eyeColorQues}</p>
                </div> 
            </div> 
            }

            {headQues && 
            <div className="ques-table">
                <div className="quesLeft">
                    <p>{head1}</p>
                </div>
                <div className="quesMid">
                    <h4>head attachment</h4>
                    <p>{headQues}</p>
                </div>
                <div className="quesRight">
                    <p>{head2}</p>
                </div>
            </div>
            }
            {clothesQuesTop && 
            <div className="ques-table">
                <div className="quesLeft">
                    <p>{clothesTop1}</p>
                </div>
                <div className="quesMid">
                    <h4>clothes type: top</h4>
                    <p>{clothesQuesTop}</p>
                </div>
                <div className="quesRight">
                    <p>{clothesTop2}</p>
                </div>
            </div>
            }
            {clothesQuesBottom && 
            <div className="ques-table">
                <div className="quesLeft">
                    <p>{clothesBottom1}</p>
                </div>
                <div className="quesMid">
                    <h4>clothes type: bottom</h4>
                    <p>{clothesQuesBottom}</p>
                </div>
                <div className="quesRight">
                    <p>{clothesBottom2}</p>
                </div>
            </div>
            }
            {skinColorQues && 
            <div className="quesMid"> 
                <h4>skin color? </h4>
                <p>{skinColorQues}</p>
            </div> 
            }
            </div>
    )
}

export default Design;