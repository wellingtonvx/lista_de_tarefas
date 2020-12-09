import React from 'react';
import './style.css';

import { FaPlus } from 'react-icons/fa';

export default function Form(props) {
  return (
    <form onSubmit={props.handleSubmit} action="#" className="form">
      <input
        onChange={props.handleChange}
        type="text"
        value={props.novaTarefa}
      />

      <button>
        <FaPlus />
      </button>
    </form>
  );
}
