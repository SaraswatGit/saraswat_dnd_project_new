import Board from './Board';
import './Projects.css';

const Projects = () => {
 const users = [
    {image:`avatars/user1.png`},{image:`avatars/user2.png`},{image:`avatars/user3.png`},{image:`avatars/user4.png`}
 ]
  return (
    <div className="main-area-container">
      <div className="flex flex-row items-center justify-between">
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
      <div style={{ fontWeight: 'bold', color: '#333333' }} className='project-name-heading'>
        Mobile App
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '3px' }}>
        <img src="icons/arrow-square-up.png" alt="" style={{ width: '30px', height: '30px' }} />
        <img src="icons/link.png" alt="" style={{ width: '30px', height: '30px' }} />
      </div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '7px', cursor: 'pointer' }}>
            <img
              src="icons/add-square-purple.png"
              alt=""
              style={{height:'18px',width:'18px'}}
            />
            <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#5030E5' }}>Invite</div>
          </div>
          <div className="user-images">
            <div style={{ display: 'flex', alignItems: 'center' }}>
            {users.map((user) => (
             <div
             style={{
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               width: '30px',
               height: '30px',
               borderRadius: '50%',
               marginLeft:'-5px'
             }}
           >
             <img src={user.image} alt="avatar" />
           </div>
          ))}
  <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              marginLeft:'-5px',
              backgroundColor:'lightpink'
            }}
          >
         +2
          </div>
            </div>
          </div>
    </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '10px', marginBottom: '42px'}} >
        <div style={{display:'flex', flexDirection:'row',alignItems:'center',justifyContent:'center', gap:'15px'}}>
          <button className="button-container">
            <img
              src="icons/filter.png"
              alt=""
              className="image-class"
            />
            <div className="text-class">
              Filter
            </div>
            <img
              src="icons/arrow-down.png"
              alt="arrow-down"
              style={{marginLeft:'6%'}}
              className="image-class"
            />
          </button>
          <button className="button-container">
            <img
              src="icons/calendar.png"
              alt="calendar-icon"
              className="image-class"
            />
            <div className="text-class">
              Today
            </div>
            <img
              src="icons/arrow-down.png"
              alt="arrow-down-icon"
              style={{marginLeft:'6%'}}
              className="image-class"
            />
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', columnGap: '12px', }}>
      <button style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: '8px', paddingBottom: '7px', borderWidth: '1px',height:'100%', width:'110px', borderColor: '#718096', borderRadius: '0.375rem', paddingLeft: '10px'}}>
        <img src="icons/profile-2user.png" alt="profile-icon" style={{ width: '24px', height: '24px', }} />
        <div style={{ fontSize: '0.875rem', fontWeight: '500', color: '#718096', paddingLeft: '4px',   }}>Share</div>
      </button>
      <div style={{ height: '24px', borderWidth: '1px', borderColor: '#718096'}}></div>
      <button style={{ backgroundColor: '#1d4ed8', borderRadius: '0.375rem' }} className='resp-img-class'>
        <img src="icons/pause.png" alt="list-icon" style={{ width: '34px', height: '24px' }} />
      </button>
      <button>
        <img src="icons/tiles.png" alt="tiles-icon" style={{  width: '24px', height: '24px', '@media (min-width: 768px)': { display: 'block' } }} />
      </button>
    </div>
      </div>

      <Board />
    </div>
  );
};

export default Projects;
