import React, {useState} from 'react';
import prisons from './data.js';
import '../App.css'


const App = () => {
  const [prisonsData, setPrisonsData] = useState(prisons);
  return (
    <div className='app'>
      {/* phần menu */}
      <div className='menu inline'>
        <div className='title-menu'><b>Khu vực quản trị</b></div>
        <div className='menu-item'>
          trang chủ
        </div>
        <div className='menu-item'>Quản lý phạm nhân</div>
        <div className='menu-item active'>Khu vực phòng giam</div>
        <div className='menu-item'>Khu vực người thân</div>
        <div className='menu-item'>quản lý nhân viên</div>
      </div>
      {/* phần danh sách chính */}
      <div className='container inline'>
        {/* tiêu đề */}
        <div className='title pl-10'><h3>Danh sách phòng giam</h3></div>
        <div className='action pl-10'><button className='add-prison'>Thêm phòng giam</button></div>
        <div className='table-content'>
          {/* danh sách dữ liệu */}
          <table className='table-container' border={1}>
                <thead>
                  <tr>
                    <th>Mã phòng giam</th>
                    <th>Tên phòng</th>
                    <th>Số lượng nhân viên</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {/* phần dữ liệu được bind động từ file data.js */}
                  {prisonsData.map((employee, index) => ( 
                    <tr>
                        <td>{employee.code}</td>
                        <td>{employee.name}</td>
                        <td>{employee.quantity}</td>
                        <td>
                          <button>Sửa</button>
                          <button>Xóa</button>
                        </td>
                    </tr>
                  ))}
                </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;