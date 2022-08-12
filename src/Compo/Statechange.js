export default class Statechange extends Component{
    constructor(props)
    {
      super(props);
      this.state={
        val:false
      }
    }
  
    componentDidMount() 
    {
    
      this.setState({
          val:true
        })
  
    }
     componentDidUpdate()
     {
      if(this.state.val){
      this.setState({
        val:false
      })
      }
     }
     componentWillUnmount()
     {
      // this.setState({
      //   val:false
      // })
     }
    render() {
        console.log(this.state.val);
      return (
        <div>
         {this.state.val && <Data/>}
  
        </div>
      )
    }
  }
  
  