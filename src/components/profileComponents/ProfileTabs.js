function ProfileTabs() {
    return (
        <form className="form-container">
            <div className="form">
                <label for="account-fn">User Name</label>
                <input className="form-control" type="text" required/>
            </div>

            <div className="form">
                <label for="account-email">Email Address</label>
                <input className="form-control" type="email" required/>
            </div>

            <div className="form">
                <label for="account-pass">New Password</label>
                <input className="form-control" type="password" required/>
            </div>

            <div className="form">
                <label for="account-confirm-pass">Confirm Password</label>
                <input className="form-control" type="password" required/>
            </div>

            <button type="submit">Update Profile</button>
        </form>
    )
};

export default ProfileTabs;