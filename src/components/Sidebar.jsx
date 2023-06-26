import React from 'react';
import './Sidebar.css';


const Sidebar = () => {

  const optionStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: '1rem',
    padding:'3%',
    borderRadius:'5%',
    cursor:'pointer'
  };
  const menus = [
    {
      name: 'Home',
      icon: 'icons/category.png',
    },
    {
      name: 'Messages',
      icon: 'icons/message.png',
    },
    {
      name: 'Tasks',
      icon: 'icons/task-square.png',
    },
    {
      name: 'Members',
      icon: 'icons/profile-2user.png',
    },
    {
      name: 'Settings',
      icon: 'icons/setting-2.png',
    },
  ];

  const projects = [
    {
      name: 'Mobile App',
      color: 'green',
    },
    {
      name: 'Website Redesign',
      color: 'orange',
    },
    {
      name: 'Design System',
      color: 'lightGray',
    },
    {
      name: 'Wireframes',
      color: 'lightBlue',
    },
  ];

  return (
    <div className="container">
      <div className="container-header">
          <div className="icon-area">
            <img src="/icons/logo.png" alt="logo" className="icon" />
            <h2 className="project-name">Project&nbsp;M.</h2>
          </div>
          <div>
            <img src="icons/arrow.png" alt="arrow" className="arrow-icon" />
          </div>
      </div>
      <div className="menu-items">
        <div className="menu-item">
          {menus.map((menu) => (
            <div
              className="inner-item"
            >
              <img src={menu.icon} alt={menu.name} style={{width:'25px',height:'25px'}} />
              <div>{menu.name}</div>
            </div>
          ))}
        </div>

        <hr style={{width:'95%',color:'gray', marginTop:'8%', marginBottom:'8%'}}/>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: '10px' ,marginBottom:'6%' }}>
    <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#4B5563' }}>MY PROJECTS</div>
    <img src="icons/add-square.png" alt="add" style={{ width: '14px', height: '14px' }} />
  </div>

          <div className="space-y-[20px]">
            {

            projects.map((project) => (

              <div className={project.name==='Mobile App'?'highlightedOption':'normalOption'} style={optionStyles}>
                <div className="project-item">
                  <div
                   style={{width: '12px', height: '12px', backgroundColor: project.color, borderRadius: '50%' }}
                  ></div>
                  <div>
                  {project.name}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '25px', borderRight: '1px solid #D1D5DB' }}>
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, transform: 'translateX(-50%)' ,left:'50%' }}>
          <div style={{ height: '66px', width: '66px', borderRadius: '50%', backgroundColor: '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ backgroundColor: '#FBBF24', opacity: 0.7,filter: 'blur(18px)', borderRadius: '50%', width: '33px', height: '33px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}></div>
            <img src="icons/lamp-on.png" alt="lamp" style={{ position: 'absolute', width: '30px', height: '30px', inset: '27%' }} />
          </div>
        </div>
        <div style={{ marginTop: '32px', marginBottom: '2px', paddingLeft: '12px', paddingRight: '16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', padding: '3px', borderRadius: '2rem', border: '1px solid #F3F4F6', backgroundColor: '#F3F4F6' }}>
            <div style={{ fontSize: '0.875rem', fontWeight: '500', color: '#000000', marginBottom: '12px', paddingTop: '37px' }}>
              Thoughts Time
            </div>
            <div style={{ fontSize: '0.75rem', fontWeight: 'normal', textAlign: 'center', color: '#666666' }}>
              We don’t have any notice for you, till then you can share your thoughts with your peers.
            </div>
            <div style={{ paddingLeft: '3px', paddingRight: '5px', paddingTop: '14px', paddingBottom: '5px', marginTop: '5px', marginBottom: '5px', fontSize: '0.75rem', fontWeight: '500', color: '#000000', backgroundColor: '#FFFFFF', borderRadius: '0.75rem', textAlign: 'center' }}>
              <input type="text" placeholder="Write a message" style={{ width: '100%', textAlign: 'center', outline: 'none' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
