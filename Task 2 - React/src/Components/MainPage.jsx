import React from 'react'

const MainPage = () => {
  return (
    <div id="mainpage">
      <h1 id="heading">Unleash Your Inner Champion Today.<br/>All In One Place.</h1>
      <p id="description">Join the ultimate tennis experience — where passion meets performance,<br/>and every swing brings you closer to victory.</p>
      <button id="startbutton">Start your own journey</button>

      <div id="main-bottom">
        <div id="bottom-start">
          <p id="bottom-txt">Train with real professionals. <br/>Get the real results.</p>
        </div>

        <div id="bottom-end">
          <a href="#">Instagram</a><i class="ri-arrow-right-up-long-line"></i>
          <a href="#">Facebook</a><i class="ri-arrow-right-up-long-line"></i>
          <a href="#">Tik Tok</a><i class="ri-arrow-right-up-long-line"></i>
        </div>
      </div>
    </div>
  )
}

export default MainPage