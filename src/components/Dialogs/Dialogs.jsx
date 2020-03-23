import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>Dimych</div>
        <div className={s.dialog + ' ' + s.active}>Farych</div>
        <div className={s.dialog}>Angel</div>
        <div className={s.dialog}>Princess</div>
        <div className={s.dialog}>Knight</div>
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
