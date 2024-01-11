import { playersdata } from "../players"
import  Player from './Player'
const showname =()=>{
    alert("")
}
const  Playerslist = () =>{
    const showname =(name)=>{
        alert(`player ${name}`)
    }
    const list ={display:"grid"  ,gridTemplateColumns:"repeat(2,2fr)",justifyItems:"center", gap:"2rem", textAlign: "center"}
    return(
        <div style={list}>
            {
                playersdata.map(player => {return <Player key={Math.random()}  pro= {player}  fun={ () => showname(player.name)}/> })
            }
        </div>
    )
}
export default Playerslist
