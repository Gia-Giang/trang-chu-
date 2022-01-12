import React from "react";
import { useRef,useEffect } from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import {BsSun,BsMoon,BsFillMoonStarsFill,BsVolumeDownFill} from "react-icons/bs";
import {ImMusic} from "react-icons/im";
import {MdOutlineCreateNewFolder} from "react-icons/md";
import {BiSlider} from "react-icons/bi";
import {ImHistory} from "react-icons/im";
class Right extends React.Component{
  constructor(){
    super();
    this.state={
      size:"30",
      Istruess:null,
      numemer:null
    }
  }
  Change=(e)=>{
    this.setState({
      Istruess:!this.state.Istruess,
      numemer:e.currentTarget.dataset.id
    })
  }
  render(){
    return(
      <>
        <div className="items_right">
          <div className="noise" data-id="0" style={{background:this.state.numemer==0 &&this.state.Istruess? "blue":false}} onClick={(e)=>{
            this.Change(e);
            console.log(e)
          }}>
            <BiSlider size={this.state.size}/>
            <div className="item_noise">
              <div className="name_moon" style={{fontSize:"30px"}}>Moon</div>
              <div className="icon_moon">
                <BsFillMoonStarsFill size="30px"/>
              </div>
              <div><BsVolumeDownFill/><input type="range" defaultValue={0} step={1} style={{width:"92%"}}></input></div>
              <div className="consonant">
                <h1 style={{fontSize:"30px",marginBottom:"20px"}}>phụ âm</h1>
                <div className="volume_consonant">
                  <h1>City traffic</h1>
                  <input type="range" defaultValue={0} step={1} ></input>
                </div>
                <div className="volume_consonant">
                  <h1>City Rain</h1>
                  <input type="range" defaultValue={0} step={1}></input>
                </div>
                <div className="volume_consonant">
                  <h1>City box</h1>
                  <input type="range" defaultValue={0} step={1}></input>
                </div>
              </div>
            </div>
          </div>
          <div className="chosse_music" data-id="1" style={{background:this.state.numemer==1 &&!this.state.Istruess? "blue":false}} onClick={(e)=>{
            this.Change(e);
          }}>
            <ImMusic size={this.state.size}/>
          </div>
          <div className="watch_latert">
            <MdOutlineCreateNewFolder size={this.state.size}/>
          </div>
          <div className="history">
            <ImHistory size={this.state.size}/>
          </div>
        </div>
      </>
    )
  }
}
function Index({aa}) {
  const [a,setA]=useState(true);
  const [b,setB]=useState(false);
  const [c,setC]=useState(0.1);
  const playerRef=useRef(null);
  const d=new App(c)
  return (
  <>
    <div className='index'>
      <ReactPlayer
      style={{opacity:aa? 1:0}}
      id="bdx1"
      url="/bdx1.mp4"
      width="100%"
      height="1064px"
      playing={true}
      loop={true}
      ref={playerRef}
      onReady={()=> playerRef.current?.seekTo(1,'seconds')}
      ></ReactPlayer>
      <ReactPlayer
      id="bdx2"
      url="/bdx2.mp4"
      width="100%"
      height="1064px"
      playing={true}
      loop={true}
      ref={playerRef}
      onReady={()=> {  return playerRef.current?.seekTo(1,'seconds') }}
      ></ReactPlayer>
      <ReactPlayer
      url="/seeyouagain.mp3"
      loop={true}
      playing={b}
      volume={c}
      >
      </ReactPlayer>
      <div className="buttonImg">
        <img src="/next.png" width="20px" height="20px"></img>
        <div className="togglePlay">
          <img src="/play.png" width="25px" height="25px" className="play" style={{display:b? "none":"block"}} onClick={()=>{
            setB(!b)
          }}></img>
          <img src="/pause.png" width="25px" height="25px" className="pause" style={{display:b? "block":"none"}} onClick={()=>{
            setB(!b)
          }}></img>
        </div>
        <img src="/prev.png"  width="20px" height="20px"></img>
      </div>
    </div>
    <div className="item_sound">
          <div className="sound_tuning">
            <h1>VoLume</h1>
            <input type="range" step="1" max="100" min="0" onChange={(e)=>{
              setC(e.target.value/100)
            }}></input>
          </div>
    </div>
  </>
  )
}
class App extends React.Component{
  constructor(hello){
    super();
    this.state={
      checked:true,
      Istrue:true,
      chao:hello
    } 
  }
  Onchange=()=>{
    this.setState({
      checked:!this.state.checked
    })
  }
  ToggleScreen=()=>{
    this.setState({
      Istrue:!this.state.Istrue,
      fullscreen:this.state.Istrue? document.documentElement.requestFullscreen():document.exitFullscreen(), 
    })
  }
  render(){
    return(
    <div id="sum">
      <div id="top">
        <img src="/logo.0cbf9e63.gif" height="100px"></img>
        <nav className="items">
          <ul>
            <li>How to works</li>
            <li>Pricing</li>
            <li>Contact us</li>
            <li>More</li>
            <li className="new">Merch</li>
          </ul>
        </nav>
        <nav className="button">
          <ul>
            <li className="toggle"><input type="checkbox" className="convert" onChange={(e)=>{this.Onchange(e)}}></input>
                <BsSun className="iconSun" style={{opacity:this.state.checked? "1":"0"}}/>
                <BsMoon className="iconMoon" style={{opacity:this.state.checked? "0":"1"}}/>
            </li>
            <li><img src="/extend.png" height="22px" width="22px" className="extend" onClick={()=>{
              this.ToggleScreen()
            }}></img></li>
            <li><button className="share">Share</button></li>
            <li><button className="signUp">Sign up</button></li>
            <li>Login</li>
          </ul>
        </nav>
      </div>
      <Index aa={this.state.checked}/>
      <Right/>
    </div>
    )
  }
}
export default App