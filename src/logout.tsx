const Logout=()=>{  

    return(

        <a href='/login' onClick={()=>localStorage.clear()} className="btn btn-default btn-sm Logout">

        <span className="fa fa-sign-out"></span> Log out</a>

    )

}



export default Logout;