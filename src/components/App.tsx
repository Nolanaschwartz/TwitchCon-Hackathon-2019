import React from 'react';
import Authentication from "../utils/authentication";

class App extends React.Component {
  private Authentication: Authentication;
  private twitch: string | undefined | boolean | null;

  constructor(props: object){
    super(props);
    this.Authentication = new Authentication();
    // @ts-ignore
    this.twitch = window.Twitch ? window.Twitch.ext : null;
    this.state={
      finishedLoading:false,
      theme:'light',
      isVisible:true
    }
  }

  contextUpdate(context: object, delta: string){
    if(delta.includes('theme')){
      this.setState(()=>{
        // @ts-ignore
        return {theme:context.theme}
      })
    }
  }

  visibilityChanged(isVisible: boolean){
    this.setState(()=>{
      return {
        isVisible
      }
    })
  }

  componentDidMount(){
    if(this.twitch){
      // @ts-ignore
      this.twitch.onAuthorized((auth)=>{
        this.Authentication.setToken(auth.token, auth.userId);
        // @ts-ignore
        if(!this.state.finishedLoading){
          // if the component hasn't finished loading (as in we've not set up after getting a token), let's set it up now.

          // now we've done the setup for the component, let's set the state to true to force a rerender with the correct data.
          this.setState(()=>{
            return {finishedLoading:true}
          })
        }
      })

      // @ts-ignore
      this.twitch.onVisibilityChanged((isVisible,_c)=>{
        this.visibilityChanged(isVisible)
      });

      // @ts-ignore
      this.twitch.onContext((context,delta)=>{
        this.contextUpdate(context,delta)
      });
    }
  }

  componentWillUnmount(){
    if(this.twitch){
      // @ts-ignore
      this.twitch.unlisten('broadcast', ()=>console.log('successfully unlistened'))
    }
  }

  render() {
    // @ts-ignore
    if(this.state.finishedLoading && this.state.isVisible){
      // @ts-ignore
      return (
        <div className="App">
          <div className="App-light" >
            <p>Hello world!</p>
            <p>My token is: {this.Authentication.state.token}</p>
            <p>My opaque ID is {this.Authentication.getOpaqueId()}.</p>
            <div>{this.Authentication.isModerator() ? <p>I am currently a mod, and here's a special mod button <input value='mod button' type='button'/></p>  : 'I am currently not a mod.'}</div>
            <p>I have {this.Authentication.hasSharedId() ? `shared my ID, and my user_id is ${this.Authentication.getUserId()}` : 'not shared my ID'}.</p>
          </div>
        </div>
      )
    }else{
      return (
        <div className="App">
          No State
        </div>
      )
    }
  }
}

export default App;
