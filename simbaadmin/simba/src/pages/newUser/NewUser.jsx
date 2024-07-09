import "./newUser.css"

export default function NewUser() {
  return (
    <div className="newUser">
        <h1 className="newUserTitle">New User</h1>
        <form className="newUserForm">
            <div className="newUserItem">
                <label >Username</label>
                <input type="text" placeholder="yonn" />
            </div>
            <div className="newUserItem">
                <label >Full Name</label>
                <input type="text" placeholder="yonny tekk" />
            </div>
            <div className="newUserItem">
                <label >Email</label>
                <input type="email" placeholder="yon@gmail.com" />
            </div>
            <div className="newUserItem">
                <label >Password</label>
                <input type="password" placeholder="password" />
            </div>
            <div className="newUserItem">
                <label >Phone</label>
                <input type="text" placeholder="+2519888888" />
            </div>
            <div className="newUserItem">
                <label >Gender</label>
                <div className="NewUserGender">
                <input type="radio" name="gender" id="male" value="male" />
                <label for="male">Male</label>
                <input type="radio" name="gender" id="Female" value="Female" />
                <label for="female">Female</label>
                </div>
            </div>
            <div className="newUserItem">
                <label >Gender</label>
                <div className="NewUserGender">
                <input type="radio" name="gender" id="male" value="male" />
                <label for="male">Male</label>
                <input type="radio" name="gender" id="Female" value="Female" />
                <label for="female">Female</label>
                </div>
            </div>
            <div className="newUserItem">
                <label >Active</label>
               <select className="newUserSelect" name="active" id="active">

                <option value="yes">Yes</option>
                <option value="no">No</option>
               </select>
            </div>         
<button className="newUserButton"> Create</button>
            
        </form>
    </div>
  )
}
