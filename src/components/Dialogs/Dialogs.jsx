import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>
          <NavLink to="/dialogs/1">Dimych</NavLink>
        </div>
        <div className={s.dialog + ' ' + s.active}>
          <NavLink to="/dialogs/2">Farych</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3">Angel</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/4">Princess</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/5">Knight</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>How is your doing dude?</div>
        <div className={s.message}>Yo</div>
      </div>
    </div>
  );
};

export default Dialogs;
