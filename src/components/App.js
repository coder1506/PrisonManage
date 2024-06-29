import React, {useState} from 'react';
import problems from './Data.js';
import '../styles/App.css'
import DeleteConfirmation from './ConfirmDelete.js';


const App = () => {
  // khai báo biến
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [problemsData, setProblemsData] = useState(problems);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [delSuccess, setDelSuccess] = useState(false);
  /**
   * xử lý đóng popup xác nhận xóa
   */
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  /**
   * xử lý mở popup xác nhận xóa
   */
  const handleDeleteClick = (ID) => {
    setItemToDelete(ID);
    setIsModalOpen(true);
  };

  /**
   * xử lý xóa dữ liệu
   */
  const handleConfirmDelete = () => {
    setProblemsData(problemsData.filter((item) => item.id !== itemToDelete))
    // Xử lý logic xóa ở đây
    setIsModalOpen(false);

    setDelSuccess(true);

    setTimeout(() => {
      setDelSuccess(false);
    }, 3000);
  };

  return (
    <div className='app'>
      {/* phần danh sách chính */}
      <div className='container inline'>
        {/* tiêu đề */}
        <div className='title pl-10'><h3>Danh sách sự có máy tính</h3></div>
        <div className='action pl-10'><button className='add-problem'>Thêm sự cố</button></div>
        {delSuccess && <div className='alert-text'>Xóa thành công! Dữ liệu sự cố đã được xóa khỏi hệ thống.</div>}
        <div className='table-content'>
          {/* danh sách dữ liệu */}
          <table className='table-container' border={1}>
                <thead>
                  <tr>
                    <th>Mã sự cố</th>
                    <th>Mô tả sự cố</th>
                    <th>Ngày báo cáo</th>
                    <th>Phòng thực hành</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {/* phần dữ liệu được bind động từ file data.js */}
                  {problemsData.map((problem, index) => ( 
                    <tr>
                        <td>{problem.code}</td>
                        <td>{problem.des}</td>
                        <td>{problem.date}</td>
                        <td>{problem.room}</td>
                        <td>
                          <button >Sửa</button>
                          <button onClick={() => handleDeleteClick(problem.id)}>Xóa</button>
                        </td>
                    </tr>
                  ))}
                </tbody>
                {/* form popup xác nhận xóa */}
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