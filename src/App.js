import React, { useState, useEffect } from 'react';
import QuoteCard from './components/QuoteCard';
import SavedQuotes from './components/SavedQuotes';

import './App.css';

const App = () => {

  const [loading, setLoading] = useState(true);
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  const fetchQuote = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      const data = await response.json();
      setQuote(data[0]);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching the quote:', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const saveQuote = (quote) => {
    setSavedQuotes([...savedQuotes, quote]);
  };

  return (
    <div className="app">
      <h1>Random Quotes</h1>
      <QuoteCard quote={quote} onSave={saveQuote} setSavedQuotes = {setSavedQuotes} loading = {loading} />
      <button onClick={fetchQuote} className="new-quote-btn">Get New Quote</button>
      
      <SavedQuotes savedQuotes={savedQuotes} />
    </div>
  );
};

export default App;
