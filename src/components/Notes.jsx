import { useContext } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { AlertContext } from '../context/alert/alertContext';

export const Notes = ({ notes, onRemove }) => {
  const alert = useContext(AlertContext);
  const onClickRemove = (id) => {
    onRemove(id);
    alert.show('Note has been deleted', 'danger');
  };
  return (
    <TransitionGroup component="ul" className="list-group">
      {notes.map((note) => (
        <CSSTransition key={note.id} classNames={'note'} timeout={800}>
          <li className="list-group-item notes">
            <div className="d-flex align-items-center">
              <strong>{note.title}</strong>
              <small>{note.date}</small>
            </div>
            <button
              onClick={() => onClickRemove(note.id)}
              type="button"
              className="btn btn-outline-danger btn-sm">
              &times;
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
