import "./profile.css"
import Header from "../header"
import Footer from "../Footer"

const Profile=()=>{
    return(
        <div><Header/>
        <div class="profile-container">
            
    <div class="profile-header">
      <img src="profile-pic.png" alt="Profile Picture" class="profile-picture"/>
      <div>
        <div class="profile-name">John Doe</div>
        <div class="profile-designation">Medical Researcher | Healthcare Innovator</div>
        <div class="profile-last-online">Last online: April 5, 2024</div>
        <a href="edit-profile.html" class="edit-profile-button">Edit Profile</a>
      </div>
    </div>
    <div class="profile-details">
      <div class="detail-container">
        <div class="detail-label">Completed Papers</div>
        <div class="detail-value"><b>3</b></div>
      </div>
      <div class="detail-container">
        <div class="detail-label">Ongoing Papers</div>
        <div class="detail-value"><b>1</b></div>
      </div>
      <div class="detail-container">
        <div class="detail-label">Location:</div>
        <div class="detail-value">Chennai, India</div>
        
      </div>
      
    </div>
    <table class="papers-table">
      <thead>
        <tr>
          <th>Paper Name</th>
          <th>Date Published</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sample Paper 1</td>
          <td>April 1, 2024</td>
          <td>Category 1</td>
        </tr>
        <tr>
          <td>Sample Paper 2</td>
          <td>March 25, 2024</td>
          <td>Category 2</td>
        </tr>
      </tbody>
    </table>
    
  </div>
  <Footer/>
  </div>
    )
}

export default Profile