import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function AddEmployee(props) {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [img, setImg] = useState('');

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <button className="block mx-auto m-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" onClick={handleShow}>
            + Add Employee
        </button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Update Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={(e) => {
                    handleClose();
                    e.preventDefault() 
                    props.newEmployee(name, role, img)
                }} 
                id="editmodal" class="w-full max-w-sm">
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Name
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Enter Name" id="name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Role
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Enter Role" id="role" type="text" value={role} onChange={(e) => setRole(e.target.value)} />
                    </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Image URL
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="https://www.google.com" id="name" type="text" value={img} onChange={(e) => setImg(e.target.value)}/>
                    </div>
                </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded" onclick={handleClose}>
                Close
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" form="editmodal">
                Update
            </button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default AddEmployee;