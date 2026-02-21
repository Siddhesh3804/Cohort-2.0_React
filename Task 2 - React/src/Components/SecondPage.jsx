import React from 'react'

const SecondPage = () => {
  return (
    <div id="secondpage">
        <div id="second-head">
            <h3 id="about-horizon">About Horizon</h3>
            <p>At Horizon, we don't just play tennis — we live it. Since 2021,<br />our club has been a home for players of all levels, from eager <br />beginners to seasoned pros.</p>
        </div>

        <div id="second-cards">
            <div id="card1">
                <img src="https://thumbs.dreamstime.com/b/tennis-court-icon-vector-tennis-illustration-sign-sport-symbol-logo-tennis-court-icon-vector-tennis-illustration-sign-sport-345662786.jpg" alt=""/>
                <p>Professional hard courts <br /><span>with tournament-grade lighting & climate control — play in</span> perfect conditions, in any season.</p>
                
                <div id="card1-bottom">
                    <div id="game-outer">
                        <div id="game-inner"></div>
                    </div>
                    <p>Game Mode</p>
                </div>
            </div>

            <div id="card2">
                <button>Private & Group Lessons</button>
            </div>

            <div id="card3">
                <h1>100+</h1>
                <h3>Pro Coaches</h3>
                <p>Certified professionals ready to boost your <br />game from first serve to tournament level.</p>

                <div id="card3-bottom">
                    <div id="beginner">
                        <p>Beginner</p>
                        <p>55</p>
                    </div>
                    <div id="intermediate">
                        <p>Intermediate</p>
                        <p>40</p>
                    </div>
                    <div id="advanced">
                        <p>Advanced</p>
                        <p>35</p>
                    </div>
                </div>

            </div>
        </div>

        <div id="second-bottom">
            <p id="state-head">A few more facts about us in numbers</p>

            <div id="second-states">
                <div id="state1">
                    <h2>12 000+</h2>
                    <p>Hours of play annually</p>
                </div>
                <div id="state2">
                    <h2>89%</h2>
                    <p>Player Retention Rate</p>
                </div>
                <div id="state3">
                    <h2>1,200+</h2>
                    <p>Active Members</p>
                </div>
                <div id="state4">
                    <h2>125+</h2>
                    <p>Annual Tournaments</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default SecondPage