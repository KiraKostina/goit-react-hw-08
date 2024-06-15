import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import {
  selectDeletedContactId,
  selectIsModalOpen,
} from '../../redux/modal/selectors';
import { closeModal } from '../../redux/modal/slice';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    background: '#000000cd',
  },
};

Modal.setAppElement('#root');

export default function ConfirmModal() {
  const isModalOpen = useSelector(selectIsModalOpen);
  const deletedContactId = useSelector(selectDeletedContactId);

  const dispatch = useDispatch();

  const handleConfirm = () => {
    dispatch(deleteContact(deletedContactId)).unwrap();
    dispatch(closeModal());
  };

  const handleClose = () => dispatch(closeModal());

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleClose}
      style={customStyles}
      contentLabel="Confirm Modal"
    >
      <p>Do you really want to delete this contact?</p>
      <button onClick={handleConfirm}>Yes</button>
      <button onClick={handleClose}>No</button>
    </Modal>
  );
}
