import React, { useState } from 'react';
import './TableView.css';

const TableView = ({ data }) => {
  const [slideUp, setSlideUp] = useState(false);
  const [addUser, setAddUser] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchField, setSearchField] = useState('');
  const [showImportPopup, setShowImportPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showCompanyDetails, setShowCompanyDetails] = useState(false);
  const [showAddressDetails, setShowAddressDetails] = useState(false);

  const toggleAddUser = () => {
    setAddUser(prevAddUser => !prevAddUser);
  };

  const toggleImportPopup = () => {
    setShowImportPopup(prevState => !prevState);
  };

  const handleSlide = () => {
    setSlideUp(prevSlideUp => !prevSlideUp);
    const menuHolder = document.querySelector('.menu-holder');
    const pointHolder = document.querySelector('.point-holder');
    const point = document.querySelector('.point');
    if (menuHolder) {
      menuHolder.style.top = slideUp ? '0' : '-20%';
      pointHolder.style.top = slideUp ? '8%' : '0';
      point.src = slideUp ? 'up.png' : 'down.png';
    }
  };

  const getFieldData = (item, field) => {
    const keys = field.split('.');
    let data = item;
    for (const key of keys) {
      if (data[key] !== undefined) {
        data = data[key];
      } else {
        return null;
      }
    }
    return data;
  };

  const handleSearch = (field) => {
    setSearchField(field);
    setSearchTerm('');
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleRowClick = (item) => {
    if(selectedItem){
      setSelectedItem(null);
    }
    else{
      setSelectedItem(item);
      setShowCompanyDetails(true);
      setShowAddressDetails(false);
    }
    
  };

  const handleCompanyClick = () => {
    setShowCompanyDetails(true);
    setShowAddressDetails(false);
  };

  const handleAddressClick = () => {
    setShowCompanyDetails(false);
    setShowAddressDetails(true);
  };

  const handlemenuClick = () => {
    alert("nothing programmed yet");
  };


  const filteredData = data.filter(item => {
    if (!searchTerm || !searchField) return true;
    const fieldData = getFieldData(item, searchField);
    return fieldData && fieldData.toString().toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className='holder'>
      <div className='logo-holder'>
        <img src='logo.png' alt='logo'/>
      </div>
      <p className='admin-text'><b>Admin</b></p>
      <div className='user-holder'>
        <button className='users'>Users</button>
        <button className='users'>User Groups</button>
      </div>
      <div className='menu-holder' onClick={handlemenuClick}>
        <div className='menu-item'>
          <img src='dashboard.png' alt='dashboard icon'/>
        </div>
        <div className='menu-item'>
          <img src='user.png' alt='user icon'/>
        </div>
        <div className='menu-item'>
          <img src='roles.png' alt='roles icon'/>
        </div>
        <div className='menu-item'>
          <img src='settings.png' alt='settings icon'/>
        </div>
      </div>
      <div className='point-holder' onClick={handleSlide}>
        <img className='point' src='up.png' alt='up icon'/>
      </div>
      <div className='top-right-holder'>
        <div className='notification'>
          <img src='bell.png' alt='bell icon'/>
        </div>
        <div className='profile'>
          <img id='profile-image' src='profile.jpg' alt='profile'/>
        </div>
      </div>
      <div className='middle-holder'>
        <div className='definition-holder'>
          <img src='book.png' alt='book icon'/>
          <p id='definition'>Definitions-58</p>
        </div>
        <div className='pending-holder'>
          <img src='tickcircle.png' alt='tickcircle icon'/>
          <p id='pending'>Pending</p>
        </div>
      </div>
      <div className='add-user' onClick={toggleAddUser}>
        <p id='add-user-text'><b>+</b> Add User</p>
        {addUser && (<div className='import-holder' onClick={toggleImportPopup}>
          <p >Import</p>
        </div>)}
        {showImportPopup && (
            <div className='adduser-details'>
              <div>
                <span id='description-short'>Enter below details</span> 
                <span onClick={toggleImportPopup}>      x</span>
              </div>
              <input type="text" className='adduser-input' placeholder="User Name" />
              <input type="text" className='adduser-input' placeholder="User ID" />
              <input type="text" className='adduser-input' placeholder="Email ID" />
              <input type="text" className='adduser-input' placeholder="Phone NO." />
              <select className='adduser-input' placeholder="Designation">
                <option>Designation</option>
                <option>Profession</option>
              </select>
              <div className='adduser-submit-holder'>
                <span onClick={toggleImportPopup}>Cancel</span>
                <button  onClick={toggleImportPopup}>Save and Continue</button>
              </div>
            </div>
          )}
      </div>

      <div className='below-menu'>
        <img src='menu.png' alt='menu'></img>
      </div>

      <div className='below-middle-holder'>
        <img src='officer.png' alt='admin'></img>
        <img src='officer.png' alt='officer'></img>
      </div>

      <div className='below-right-holder'>
        <img src='officer.png' alt='none'></img>
      </div>

      <div className='table-holder'>
        <table>
          <thead>
            <tr id='head-row'>
              <th> </th>
              <th>User ID</th>
              <th>User Name</th>
              <th>Email ID</th>
              <th>Phone</th>
              <th>Company Name</th>
              <th>City</th>
              <th>Website</th>
            </tr>
            <tr id='search-col'>
              <th>  </th>
              <th className='search-item' onClick={() => handleSearch('id')}>
                <img src="search.png" alt="search" />
                {searchField === 'id' && <input type="text" value={searchTerm} onChange={handleChange} autoFocus />}
              </th>
              <th className='search-item' onClick={() => handleSearch('name')}>
                <img src="search.png" alt="search" />
                {searchField === 'name' && <input type="text" value={searchTerm} onChange={handleChange} autoFocus />}
              </th>
              <th className='search-item' onClick={() => handleSearch('email')}>
                <img src="search.png" alt="search" />
                {searchField === 'email' && <input type="text" value={searchTerm} onChange={handleChange} autoFocus />}
              </th>
              <th className='search-item' onClick={() => handleSearch('phone')}>
                <img src="search.png" alt="search" />
                {searchField === 'phone' && <input type="text" value={searchTerm} onChange={handleChange} autoFocus />}
              </th>
              <th className='search-item' onClick={() => handleSearch('company.name')}>
                <img src="search.png" alt="search" />
                {searchField === 'company.name' && <input type="text" value={searchTerm} onChange={handleChange} autoFocus />}
              </th>
              <th className='search-item' onClick={() => handleSearch('address.city')}>
                <img src="search.png" alt="search" />
                {searchField === 'address.city' && <input type="text" value={searchTerm} onChange={handleChange} autoFocus />}
              </th>
              <th className='search-item' onClick={() => handleSearch('website')}>
                <img src="search.png" alt="search" />
                {searchField === 'website' && <input type="text" value={searchTerm} onChange={handleChange} autoFocus />}
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map(item => (
              <>
                <tr key={item.id} onClick={() => handleRowClick(item)}>
                  <td> <img src='tr-down.png' alt='arrow'></img> </td>
                  <td>Emp-{getFieldData(item, 'id')}</td>
                  <td>{getFieldData(item, 'name')}</td>
                  <td>{getFieldData(item, 'email')}</td>
                  <td>{getFieldData(item, 'phone')}</td>
                  <td>{getFieldData(item, 'company.name')}</td>
                  <td>{getFieldData(item, 'address.city')}</td>
                  <td>{getFieldData(item, 'website')}</td>
                </tr>
                {selectedItem && selectedItem.id === item.id && (
                  <tr className='details-row'>
                    <td colSpan="8">
                      <div className="details-holder">
                        <div className="style-row">
                          <p>&nbsp;</p>
                        </div>
                
                        <div className="other-details">
                          <div className='other-details-buttons'>
                            <button onClick={handleCompanyClick}>Company</button>
                            <button onClick={handleAddressClick}>Address</button>
                          </div>
                          
                          {showCompanyDetails && (
                          <div className="popup-row-data">
                            <div>
                              <p>Company Name: {getFieldData(item, 'company.name')}</p>
                              <p>Company Catchphrase: {getFieldData(item, 'company.catchPhrase')}</p>
                              <p>Company Business Strategy: {getFieldData(item, 'company.bs')}</p>
                            </div>
                          </div>
                          )}
                          {showAddressDetails && (
                            <div className="popup-row-data">
                              <div>
                                <p>Street: {getFieldData(item, 'address.street')}</p>
                                <p>Suite: {getFieldData(item, 'address.suite')}</p>
                                <p>City: {getFieldData(item, 'address.city')}</p>
                                <p>Zipcode: {getFieldData(item, 'address.zipcode')}</p>
                                <p>Latitude: {getFieldData(item, 'address.geo.lat')}</p>
                                <p>Longitude: {getFieldData(item, 'address.geo.lng')}</p>
                              </div>
                            </div>
                          )}
                        </div>
                        
                      </div>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableView;
