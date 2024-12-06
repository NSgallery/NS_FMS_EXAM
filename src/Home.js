
import logo_member from './member.png';

function Home() {
    return (
      <div>
          <h3>Home</h3>
          <div class="w3-card-4">
            <img src={logo_member} width="200" height="200" />
            <div class="w3-container w3-center">
              <p>Welcome All Users</p>
            </div>
          </div>
        
      </div>
    );
  }
  
  export default Home;
  