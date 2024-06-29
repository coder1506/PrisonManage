import React, {useState} from 'react';
import prisons from './Data.js';
import '../styles/App.css'
import DeleteConfirmation from './ConfirmDelete.js';


const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prisonsData, setPrisonsData] = useState(prisons);
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDeleteClick = (ID) => {
    setItemToDelete(ID);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    setPrisonsData(prisonsData.filter((item) => item.id !== itemToDelete))
    // Xử lý logic xóa ở đây
    setIsModalOpen(false);

    alert('Bạn đã xóa thành công!');
  };

  return (
    <div className='app'>
      {/* phần menu */}
      <div className='menu inline'>
        <div className='title-menu'><b>Khu vực quản trị</b></div>
        <div className='menu-item'>
          Trang chủ
        </div>
        <div className='menu-item'>Quản lý phạm nhân</div>
        <div className='menu-item active'>Khu vực phòng giam</div>
        <div className='menu-item'>Khu vực người thân</div>
        <div className='menu-item'>Quản lý nhân viên</div>

        <div className='title-menu user'>Người dùng: admin</div>
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
                  {prisonsData.map((prison, index) => ( 
                    <tr>
                        <td>{prison.code}</td>
                        <td>{prison.name}</td>
                        <td>{prison.quantity}</td>
                        <td>
                          <button >Sửa</button>
                          <button onClick={() => handleDeleteClick(prison.id)}>Xóa</button>
                        </td>
                    </tr>
                  ))}
                </tbody>
                <DeleteConfirmation
                  isOpen={isModalOpen}
                  onClose={handleCloseModal}
                  onConfirm={handleConfirmDelete}
                />
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;