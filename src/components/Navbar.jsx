import './Navbar.css';

const Navbar = () => {
  return (
    <div className="top-bar-container">
      <div className="search-bar">
        <img
          src="icons/search-normal.png"
          alt="search"
         style={{height:'20px',widht:'20px'}}
        />
        <input
          type="text"
          placeholder="Search for anything..."
          className="text-input"
        />
      </div>

      <div className="top-bar-right">
        <div className="action-buttons">
        <img src="/icons/calendar-2.png" alt="calendar-icon" style={{ width: '26px', height: '26px', cursor: 'pointer' }} />
      <img src="/icons/message-question.png" alt="" style={{ width: '26px', height: '26px', cursor: 'pointer' }} />
        <img src="/icons/notification.png" alt="" style={{ width: '26px', height: '26px', cursor: 'pointer' }} />

        </div>
        <div style={{ display: 'flex', flexDirection: 'row'}}>
      <div className='profile-details'>
        <div style={{ fontSize: '1rem',  fontWeight: 'normal', color: '#333333' }}>
          Anima Agrawal
        </div>
        <div style={{ fontSize: '0.875rem',color: '#666666', fontWeight: 'normal' }}>
          U.P, India
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
        <img src="icons/avatar.png" alt="avatar" style={{ width: '38px', height: '38px' , marginRight:'20px' }} />
        <img src="icons/arrow-down.png" alt="avatar" style={{ width: '18px', height: '18px' }} />
      </div>
    </div>
      </div>
    </div>
  );
};

export default Navbar;
