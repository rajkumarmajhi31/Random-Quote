import React from 'react';
import './QuoteCard.css';
import Spinner from './Spinner';

const QuoteCard = ({ quote, onSave, setSavedQuotes, loading }) => {
  return (
    <div className="quote-card">
      <p>{ loading ? <Spinner/> : `"${quote}"` }</p>
      
      <div className="buttons">
      <button onClick={() => onSave(quote)} className="quote-card-button" >Save to List</button>
      <button onClick={() => setSavedQuotes([])} className="quote-card-button">Clear Quote</button>
      </div>
    </div>
  );
};

export default QuoteCard;
