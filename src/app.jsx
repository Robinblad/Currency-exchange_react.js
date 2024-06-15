import React, { useState, useEffect } from 'react';
import './main.css';

const App = () => {
  const [currency1, setCurrency1] = useState('');
  const [selectedCurrencies1, setSelectedCurrencies1] = useState({ source: '', quotes: {} });
  const [currency2, setCurrency2] = useState('');
  const [selectedCurrencies2, setSelectedCurrencies2] = useState({ source: '', quotes: {} });
  const [sourceAmount, setSourceAmount] = useState('');
  const [exchangedAmount, setExchangedAmount] = useState('');
  const [exchangedPrice, setExchangedPrice] = useState('');
  const [firstButtonId, setFirstButtonId] = useState(null);
  const [secondButtonId, setSecondButtonId] = useState(null);
  const [pressedButton1, setPressedButton1] = useState([
    { name: 'Euro', label: 'EUR', isColor: false, backgroundColor: 'green', id: 0 },
    { name: 'US Dollar', label: 'USD', isColor: false, backgroundColor: 'green', id: 1 },
    { name: 'Australian Dollar', label: 'AUD', isColor: false, backgroundColor: 'green', id: 2 },
    { name: 'Argentine Peso', label: 'ARS', isColor: false, backgroundColor: 'green', id: 3 },
    { name: 'Brazilian Real', label: 'BRL', isColor: false, backgroundColor: 'green', id: 4 },
    { name: 'Canadian Dollar', label: 'CAD', isColor: false, backgroundColor: 'green', id: 5 },
    { name: 'Swiss Franc', label: 'CHF', isColor: false, backgroundColor: 'green', id: 6 },
    { name: 'Chinese Yuan', label: 'CNY', isColor: false, backgroundColor: 'green', id: 7 },
    { name: 'Danish Krone', label: 'DKK', isColor: false, backgroundColor: 'green', id: 8 },
    { name: 'Egyptian Pound', label: 'EGP', isColor: false, backgroundColor: 'green', id: 9 },
    { name: 'Georgian Lari', label: 'GEL', isColor: false, backgroundColor: 'green', id: 10 },
    { name: 'British Pound Sterling', label: 'GBP', isColor: false, backgroundColor: 'green', id: 11 },
    { name: 'Israeli New Sheqel', label: 'ILS', isColor: false, backgroundColor: 'green', id: 12 },
    { name: 'Indian Rupee', label: 'INR', isColor: false, backgroundColor: 'green', id: 13 },
    { name: 'Japanese Yen', label: 'JPY', isColor: false, backgroundColor: 'green', id: 14 },
    { name: 'Kyrgystani Som', label: 'KGS', isColor: false, backgroundColor: 'green', id: 15 },
    { name: 'South Korean Won', label: 'KRW', isColor: false, backgroundColor: 'green', id: 16 },
    { name: 'Kazakhstani Tenge', label: 'KZT', isColor: false, backgroundColor: 'green', id: 17 },
    { name: 'Mexican Peso', label: 'MXN', isColor: false, backgroundColor: 'green', id: 18 },
    { name: 'Malaysian Ringgit', label: 'MYR', isColor: false, backgroundColor: 'green', id: 19 },
    { name: 'Norwegian Krone', label: 'NOK', isColor: false, backgroundColor: 'green', id: 20 },
    { name: 'New Zealand Dollar', label: 'NZD', isColor: false, backgroundColor: 'green', id: 21 },
    { name: 'Polish Zloty', label: 'PLN', isColor: false, backgroundColor: 'green', id: 22 },
    { name: 'Russian Ruble', label: 'RUB', isColor: false, backgroundColor: 'green', id: 23 },
    { name: 'Swedish Krona', label: 'SEK', isColor: false, backgroundColor: 'green', id: 24 },
    { name: 'Singapore Dollar', label: 'SGD', isColor: false, backgroundColor: 'green', id: 25 },
    { name: 'Thai Baht', label: 'THB', isColor: false, backgroundColor: 'green', id: 26 },
    { name: 'Turkish Lira', label: 'TRY', isColor: false, backgroundColor: 'green', id: 27 },
    { name: 'New Taiwan Dollar', label: 'TWD', isColor: false, backgroundColor: 'green', id: 28 },
    { name: 'Ukrainian Hryvnia', label: 'UAH', isColor: false, backgroundColor: 'green', id: 29 },
    { name: 'Uzbekistan Som', label: 'UZS', isColor: false, backgroundColor: 'green', id: 30 },
    { name: 'Vietnamese Dong', label: 'VND', isColor: false, backgroundColor: 'green', id: 31 },
  ]);
  
  const [pressedButton2, setPressedButton2] = useState([
    { name: 'Euro',  label: 'EUR', isColor: false, backgroundColor: 'green', id: 32 },
    { name: 'US Dollar',  label: 'USD', isColor: false, backgroundColor: 'green', id: 33 },
    { name: 'Australian Dollar',  label: 'AUD', isColor: false, backgroundColor: 'green', id: 34 },
    { name: 'Argentine Peso',  label: 'ARS', isColor: false, backgroundColor: 'green', id: 35 },
    { name: 'Brazilian Real',  label: 'BRL', isColor: false, backgroundColor: 'green', id: 36 },
    { name: 'Canadian Dollar',  label: 'CAD', isColor: false, backgroundColor: 'green', id: 37 },
    { name: 'Swiss Franc',  label: 'CHF', isColor: false, backgroundColor: 'green', id: 38 },
    { name: 'Chinese Yuan',  label: 'CNY', isColor: false, backgroundColor: 'green', id: 39 },
    { name: 'Danish Krone',  label: 'DKK', isColor: false, backgroundColor: 'green', id: 40 },
    { name: 'Egyptian Pound',  label: 'EGP', isColor: false, backgroundColor: 'green', id: 41 },
    { name: 'Georgian Lari',  label: 'GEL', isColor: false, backgroundColor: 'green', id: 42 },
    { name: 'British Pound Sterling',  label: 'GBP', isColor: false, backgroundColor: 'green', id: 43 },
    { name: 'Israeli New Sheqel',  label: 'ILS', isColor: false, backgroundColor: 'green', id: 44 },
    { name: 'Indian Rupee',  label: 'INR', isColor: false, backgroundColor: 'green', id: 45 },
    { name: 'Japanese Yen',  label: 'JPY', isColor: false, backgroundColor: 'green', id: 46 },
    { name: 'Kyrgystani Som',  label: 'KGS', isColor: false, backgroundColor: 'green', id: 47 },
    { name: 'South Korean Won',  label: 'KRW', isColor: false, backgroundColor: 'green', id: 48 },
    { name: 'Kazakhstani Tenge',  label: 'KZT', isColor: false, backgroundColor: 'green', id: 49 },
    { name: 'Mexican Peso',  label: 'MXN', isColor: false, backgroundColor: 'green', id: 50 },
    { name: 'Malaysian Ringgit',  label: 'MYR', isColor: false, backgroundColor: 'green', id: 51 },
    { name: 'Norwegian Krone',  label: 'NOK', isColor: false, backgroundColor: 'green', id: 52 },
    { name: 'New Zealand Dollar',  label: 'NZD', isColor: false, backgroundColor: 'green', id: 53 },
    { name: 'Polish Zloty',  label: 'PLN', isColor: false, backgroundColor: 'green', id: 54 },
    { name: 'Russian Ruble',  label: 'RUB', isColor: false, backgroundColor: 'green', id: 55 },
    { name: 'Swedish Krona',  label: 'SEK', isColor: false, backgroundColor: 'green', id: 56 },
    { name: 'Singapore Dollar',  label: 'SGD', isColor: false, backgroundColor: 'green', id: 57 },
    { name: 'Thai Baht',  label: 'THB', isColor: false, backgroundColor: 'green', id: 58 },
    { name: 'Turkish Lira',  label: 'TRY', isColor: false, backgroundColor: 'green', id: 59 },
    { name: 'New Taiwan Dollar',  label: 'TWD', isColor: false, backgroundColor: 'green', id: 60 },
    { name: 'Ukrainian Hryvnia',  label: 'UAH', isColor: false, backgroundColor: 'green', id: 61 },
    { name: 'Uzbekistan Som',  label: 'UZS', isColor: false, backgroundColor: 'green', id: 62 },
    { name: 'Vietnamese Dong',  label: 'VND', isColor: false, backgroundColor: 'green', id: 63 },
  ]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  function handleFormChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    fetch('/submit', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      setFormSubmitted(true);
    });

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  }

  const handleClickButton1 = (id) => {
    const clickedButton1 = pressedButton1.find(button => button.id === id);
    if (clickedButton1) {
      setFirstButtonId(clickedButton1.id);
    }
    
  };
  
  const handleClickButton2 = (id) => {
    const clickedButton2 = pressedButton2.find(button => button.id === id);
    if (clickedButton2) {
      setSecondButtonId(clickedButton2.id);
    }
    
  };

  useEffect(() => {
    const fetchCurrencyQuotes = () => {
      fetch(`http://api.exchangerate.host/live?access_key=84c816472a292bd2cdcecaf8aebfd35a&currencies=${currency1},${currency2}`)
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            const { quotes } = data;
            setSelectedCurrencies1(prevState => ({ ...prevState, quotes }));
            setSelectedCurrencies2(prevState => ({ ...prevState, quotes }));
          } else {
            console.error('Invalid API response:', data);
          }
        })
        .catch(error => {
          console.error('Error fetching currency quotes:', error);
        });
    };

    fetchCurrencyQuotes();
  }, [currency1, currency2]);

  const handlePressedButton1 = (currency) => {
    setPressedButton1((prevData) => {
      const newData = [...prevData];
      newData.forEach((button) => {
        button.isColor = false;
        if (button.label === currency) {
          button.isColor = true;
          setCurrency2(currency);
        }
      });
      return newData;
    });
  };
  
  const handlePressedButton2 = (currency) => {
    setPressedButton2((prevData) => {
      const newData = [...prevData];
      newData.forEach((button) => {
        button.isColor = false;
        if (button.label === currency) {
          button.isColor = true;
          setCurrency1(currency);
        }
      });
      return newData;
    });
  };

  const handleExchange = () => {
    const quoteValue1 = selectedCurrencies1.quotes[`USD${currency1}`];
    const quoteValue2 = selectedCurrencies2.quotes[`USD${currency2}`];

    if ((firstButtonId === 0 || firstButtonId === 2 || firstButtonId === 3 || firstButtonId === 4 || firstButtonId === 5 || firstButtonId === 6 || firstButtonId === 7 || firstButtonId === 8 || firstButtonId === 9 || firstButtonId === 10 || firstButtonId === 11 || firstButtonId === 12 || firstButtonId === 13 || firstButtonId === 14 || firstButtonId === 15 || firstButtonId === 16 || firstButtonId === 17 || firstButtonId === 18 || firstButtonId === 19 || firstButtonId === 20 || firstButtonId === 21 || firstButtonId === 22 || firstButtonId === 23 || firstButtonId === 24 || firstButtonId === 25 || firstButtonId === 26 || firstButtonId === 27 || firstButtonId === 28 || firstButtonId === 29 || firstButtonId === 30 || firstButtonId === 31) && secondButtonId === 33) 
    {
      const exchangedPrice = 1 / quoteValue2;
      setExchangedPrice(parseFloat(exchangedPrice.toFixed(3)));  
      const exchangedAmount = 1 / quoteValue2 * sourceAmount;
      setExchangedAmount(parseFloat(exchangedAmount.toFixed(3)));  
    } 
    else if (firstButtonId === 1 && secondButtonId === 32) 
    {
      const exchangedPrice = quoteValue1;
      setExchangedPrice(parseFloat(exchangedPrice.toFixed(3)));  
      const exchangedAmount = quoteValue1 * sourceAmount;
      setExchangedAmount(parseFloat(exchangedAmount.toFixed(3))); 
    }
    else if ((firstButtonId === 0 || firstButtonId === 2 || firstButtonId === 3 || firstButtonId === 4 || firstButtonId === 5 || firstButtonId === 6 || firstButtonId === 7 || firstButtonId === 8 || firstButtonId === 9 || firstButtonId === 10 || firstButtonId === 11 || firstButtonId === 12 || firstButtonId === 13 || firstButtonId === 14 || firstButtonId === 15 || firstButtonId === 16 || firstButtonId === 17 || firstButtonId === 18 || firstButtonId === 19 || firstButtonId === 20 || firstButtonId === 21 || firstButtonId === 22 || firstButtonId === 23 || firstButtonId === 24 || firstButtonId === 25 || firstButtonId === 26 || firstButtonId === 27 || firstButtonId === 28 || firstButtonId === 29 || firstButtonId === 30 || firstButtonId === 31) && (secondButtonId === 32 || secondButtonId === 34 || secondButtonId === 35 || secondButtonId === 36 || secondButtonId === 37 || secondButtonId === 38 || secondButtonId === 39 || secondButtonId === 40 || secondButtonId === 41 || secondButtonId === 42 || secondButtonId === 43 || secondButtonId === 44 || secondButtonId === 45 || secondButtonId === 46 || secondButtonId === 47 || secondButtonId === 48 || secondButtonId === 49 || secondButtonId === 50 || secondButtonId === 51 || secondButtonId === 52 || secondButtonId === 53 || secondButtonId === 54 || secondButtonId === 55 || secondButtonId === 56 || secondButtonId === 57 || secondButtonId === 58 || secondButtonId === 59 || secondButtonId === 60 || secondButtonId === 61 || secondButtonId === 62 || secondButtonId === 63))
    {
      const exchangedPrice = (1 * quoteValue1) / quoteValue2;
      setExchangedPrice(parseFloat(exchangedPrice.toFixed(3)));  
      const exchangedAmount = (sourceAmount * quoteValue1) / quoteValue2;
      setExchangedAmount(parseFloat(exchangedAmount.toFixed(3))); 
    }
    else if (firstButtonId === 1 && (secondButtonId === 34 || secondButtonId === 35 || secondButtonId === 36 || secondButtonId === 37 || secondButtonId === 38 || secondButtonId === 39 || secondButtonId === 40 || secondButtonId === 41 || secondButtonId === 42 || secondButtonId === 43 || secondButtonId === 44 || secondButtonId === 45 || secondButtonId === 46 || secondButtonId === 47 || secondButtonId === 48 || secondButtonId === 49 || secondButtonId === 50 || secondButtonId === 51 || secondButtonId === 52 || secondButtonId === 53 || secondButtonId === 54 || secondButtonId === 55 || secondButtonId === 56 || secondButtonId === 57 || secondButtonId === 58 || secondButtonId === 59 || secondButtonId === 60 || secondButtonId === 61 || secondButtonId === 62 || secondButtonId === 63))
    {
      const exchangedPrice = quoteValue1;
      setExchangedPrice(parseFloat(exchangedPrice.toFixed(3)));  
      const exchangedAmount = quoteValue1 * sourceAmount;
      setExchangedAmount(parseFloat(exchangedAmount.toFixed(3))); 
    }

    setPressedButton1(pressedButton1.map(button => ({ ...button, isColor: false })));
    setPressedButton2(pressedButton2.map(button => ({ ...button, isColor: false })));
  };

  const handleReset = () => {
    if (
    exchangedAmount !== '' && exchangedPrice !== '') {
      setExchangedAmount('');
      setExchangedPrice('');

    }
  };

  const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
  };
  
  const randomColorCore = () => {
    setPressedButton1(pressedButton1.map(button => ({ ...button, backgroundColor: randomColor() })));
    setPressedButton2(pressedButton2.map(button => ({ ...button, backgroundColor: randomColor() })));
  };

  let currencyBlockInputStyle = {
    backgroundColor: '#aaaaaa5a',
    color: '#fff',
    border: 'none',
    outline: 'none',
    fontSize: '1.1em',
    fontFamily: 'Audiowide, sans-serif',
    letterSpacing: '1px',
    margin: '0',
    width: 'inherit',
    paddingLeft: '7vw',
    textAlign: 'center'
  };

  return (
    <div className='currency-exchange'>
      <h1>Currency Exchange</h1>
      <div className='currency-blocks'>
      <div className='currency-block__wrapper'>
        <label className='currency-block__label'>YOU GIVE:</label>
        <div className='currency-block'>
      {pressedButton1.map((button, index) => (
        <button 
        key={index}
        onClick={() => {handlePressedButton1(button.label); handleReset(); handleClickButton1(button.id); {randomColorCore}}} 
        className="tooltip"
        data-tooltip={button.name}
        style={{ backgroundColor: button.isColor ? button.backgroundColor : null }} onMouseOver={randomColorCore} 
      >
        {button.label}
      </button>
      
      ))}
    </div>
      </div>
      <div className='currency-block__wrapper'>
        <label className='currency-block__label'>YOU GET:</label>
        <div className='currency-block'>
      {pressedButton2.map((button, index) => (
        <button
        key={index}
        onClick={() => {handlePressedButton2(button.label); handleReset(); handleClickButton2(button.id); {randomColorCore}}}
        className="tooltip"
        data-tooltip={button.name}
        style={{ backgroundColor: button.isColor ? button.backgroundColor : null }} onMouseOver={randomColorCore} 
      >
        {button.label} 
      </button>
      
      ))}
    </div>
    </div>
      </div>
      <div className='currency-inputs'>
        <div className='initialisator'>
          
          
            <input className='currency-block__input' type="number" value={sourceAmount} onChange={(e) => setSourceAmount(e.target.value)} placeholder="amount" style={currencyBlockInputStyle} />
            <button className='exchange__button' onClick={handleExchange}>Exchange</button>
      
        </div>
      {exchangedAmount !== '' ? ( 
        <div className='currency-output'>
        {(firstButtonId === 0 || firstButtonId === 2 || firstButtonId === 3 || firstButtonId === 4 || firstButtonId === 5 || firstButtonId === 6 || firstButtonId === 7 || firstButtonId === 8 || firstButtonId === 9 || firstButtonId === 10 || firstButtonId === 11 || firstButtonId === 12 || firstButtonId === 13 || firstButtonId === 14 || firstButtonId === 15 || firstButtonId === 16 || firstButtonId === 17 || firstButtonId === 18 || firstButtonId === 19 || firstButtonId === 20 || firstButtonId === 21 || firstButtonId === 22 || firstButtonId === 23 || firstButtonId === 24 || firstButtonId === 25 || firstButtonId === 26 || firstButtonId === 27 || firstButtonId === 28 || firstButtonId === 29 || firstButtonId === 30 || firstButtonId === 31) && secondButtonId === 33  && (
          <div className='currency-output__wrapper'>
            <div className='currency-output__one'>
              <p>{`1 ${currency2} = ${exchangedPrice} ${currency1}`}</p>
            </div>
            <div className='currency-output__sum'>
              <p>{`${sourceAmount} ${currency2} = ${exchangedAmount} ${currency1}`}</p>
            </div>
          </div>
        )}
        {firstButtonId === 1 && secondButtonId === 32 && (
          <div className='currency-output__wrapper'>
            <div className='currency-output__one'>
              <p>{`1 ${currency2} = ${exchangedPrice} ${currency1}`}</p>
            </div>
            <div className='currency-output__sum'>
              <p>{`${sourceAmount} ${currency2} = ${exchangedAmount} ${currency1}`}</p>
            </div>
          </div>
        )}
        { (firstButtonId === 0 || firstButtonId === 2 || firstButtonId === 3 || firstButtonId === 4 || firstButtonId === 5 || firstButtonId === 6 || firstButtonId === 7 || firstButtonId === 8 || firstButtonId === 9 || firstButtonId === 10 || firstButtonId === 11 || firstButtonId === 12 || firstButtonId === 13 || firstButtonId === 14 || firstButtonId === 15 || firstButtonId === 16 || firstButtonId === 17 || firstButtonId === 18 || firstButtonId === 19 || firstButtonId === 20 || firstButtonId === 21 || firstButtonId === 22 || firstButtonId === 23 || firstButtonId === 24 || firstButtonId === 25 || firstButtonId === 26 || firstButtonId === 27 || firstButtonId === 28 || firstButtonId === 29 || firstButtonId === 30 || firstButtonId === 31) && (secondButtonId === 32 || secondButtonId === 34 || secondButtonId === 35 || secondButtonId === 36 || secondButtonId === 37 || secondButtonId === 38 || secondButtonId === 39 || secondButtonId === 40 || secondButtonId === 41 || secondButtonId === 42 || secondButtonId === 43 || secondButtonId === 44 || secondButtonId === 45 || secondButtonId === 46 || secondButtonId === 47 || secondButtonId === 48 || secondButtonId === 49 || secondButtonId === 50 || secondButtonId === 51 || secondButtonId === 52 || secondButtonId === 53 || secondButtonId === 54 || secondButtonId === 55 || secondButtonId === 56 || secondButtonId === 57 || secondButtonId === 58 || secondButtonId === 59 || secondButtonId === 60 || secondButtonId === 61 || secondButtonId === 62 || secondButtonId === 63) && (
          <div className='currency-output__wrapper'>
            <div className='currency-output__one'>
              <p>{`1 ${currency2} = ${exchangedPrice} ${currency1}`}</p>
            </div>
            <div className='currency-output__sum'>
              <p>{`${sourceAmount} ${currency2} = ${exchangedAmount} ${currency1}`}</p>
            </div>
          </div>
        )}
        { firstButtonId === 1 && (secondButtonId === 34 || secondButtonId === 35 || secondButtonId === 36 || secondButtonId === 37 || secondButtonId === 38 || secondButtonId === 39 || secondButtonId === 40 || secondButtonId === 41 || secondButtonId === 42 || secondButtonId === 43 || secondButtonId === 44 || secondButtonId === 45 || secondButtonId === 46 || secondButtonId === 47 || secondButtonId === 48 || secondButtonId === 49 || secondButtonId === 50 || secondButtonId === 51 || secondButtonId === 52 || secondButtonId === 53 || secondButtonId === 54 || secondButtonId === 55 || secondButtonId === 56 || secondButtonId === 57 || secondButtonId === 58 || secondButtonId === 59 || secondButtonId === 60 || secondButtonId === 61 || secondButtonId === 62 || secondButtonId === 63) && (
          <div className='currency-output__wrapper'>
            <div className='currency-output__one'>
              <p>{`1 ${currency2} = ${exchangedPrice} ${currency1}`}</p>
            </div>
            <div className='currency-output__sum'>
              <p>{`${sourceAmount} ${currency2} = ${exchangedAmount} ${currency1}`}</p>
            </div>
          </div>
        )}
      </div>
      ) : (
        <div className='currency-output__wrapper'> 
          <div>
            <p className='currency-output__ratio'>ratio</p>
          </div>
          <div>
            <p className='currency-output__result'>result</p>
          </div>
          </div>
      )}
      </div>
            <form className="form" onSubmit={handleFormSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleFormChange} placeholder="Name" style={{ margin: '0', color: 'white'}}/>
        <input type="email" name="email" value={formData.email} onChange={handleFormChange} placeholder="Email" style={{ margin: '0', color: 'white'}}/>
        <textarea name="message" value={formData.message} onChange={handleFormChange} placeholder="Your Message"></textarea>
        <button className="form__button" type="submit" >Submit</button>
      </form>

      {formSubmitted && <p>Form submitted successfully!</p>}
      <p className="rights">Made by Robinblad</p>
    </div>
  );
};

export default App;
















//import React, { useState, useEffect } from 'react';

//const App = () => {
//  const [currency1, setCurrency1] = useState('');
//  const [selectedCurrencies1, setSelectedCurrencies1] = useState({ source: '', quotes: {} });
//  const [currency2, setCurrency2] = useState('');
//  const [selectedCurrencies2, setSelectedCurrencies2] = useState({ source: '', quotes: {} });
//  const [sourceAmount, setSourceAmount] = useState('');
//  const [exchangedAmount, setExchangedAmount] = useState('');
//  const [exchangedPrice, setExchangedPrice] = useState('');
//  const [pressedButton1, setPressedButton1] = useState([
//    { label: 'EUR', isColor: false, backgroundColor: 'green' },
//    { label: 'USD', isColor: false, backgroundColor: 'green' },
//    { label: 'GBP', isColor: false, backgroundColor: 'green' },
//	{ label: 'JPY', isColor: false, backgroundColor: 'green' },
//    { label: 'AUD', isColor: false, backgroundColor: 'green' },
//    { label: 'CAD', isColor: false, backgroundColor: 'green' },
//	{ label: 'CHF', isColor: false, backgroundColor: 'green' },
//  ]);
//  const [pressedButton2, setPressedButton2] = useState([
//    { label: 'EUR', isColor: false, backgroundColor: 'green' },
//    { label: 'USD', isColor: false, backgroundColor: 'green' },
//    { label: 'GBP', isColor: false, backgroundColor: 'green' },
//	{ label: 'JPY', isColor: false, backgroundColor: 'green' },
//    { label: 'AUD', isColor: false, backgroundColor: 'green' },
//    { label: 'CAD', isColor: false, backgroundColor: 'green' },
//	{ label: 'CHF', isColor: false, backgroundColor: 'green' },
//  ]);

//  useEffect(() => {
//    const fetchCurrencyQuotes = () => {
//      fetch(`http://api.exchangerate.host/live?access_key=955189bd7d6d27bf197d37c5b5a4e19a&currencies=${currency1},${currency2}`)
//        .then(response => response.json())
//        .then(data => {
//          if (data.success) {
//            const { quotes } = data;
//            setSelectedCurrencies1(prevState => ({ ...prevState, quotes }));
//            setSelectedCurrencies2(prevState => ({ ...prevState, quotes }));
//          } else {
//            console.error('Invalid API response:', data);
//          }
//        })
//        .catch(error => {
//          console.error('Error fetching currency quotes:', error);
//        });
//    };

//    fetchCurrencyQuotes();
//  }, [currency1, currency2]);

//  const handlePressedButton1 = (currency) => {
//    setPressedButton1((prevData) => {
//      const newData = [...prevData];
//      newData.forEach((button) => {
//        button.isColor = false;
//        if (button.label === currency) {
//          button.isColor = true;
//          setCurrency2(currency);
//        }
//      });
//      return newData;
//    });
//  };
  
//  const handlePressedButton2 = (currency) => {
//    setPressedButton2((prevData) => {
//      const newData = [...prevData];
//      newData.forEach((button) => {
//        button.isColor = false;
//        if (button.label === currency) {
//          button.isColor = true;
//          setCurrency1(currency);
//        }
//      });
//      return newData;
//    });
//  };



//  const handleExchange = () => {
//    const quoteValue1 = selectedCurrencies1.quotes[`USD${currency1}`];
//    const quoteValue2 = selectedCurrencies2.quotes[`USD${currency2}`];
    
    
//    if (Object.keys(selectedCurrencies1.quotes) == 'USDEUR') {
//      const exchangedAmount = sourceAmount / quoteValue2;
//      setExchangedAmount(exchangedAmount);
//      const exchangedPrice = sourceAmount / quoteValue2;
//      setExchangedPrice(exchangedPrice);
//    } else if (quoteValue1 && quoteValue2) {
//      const exchangedAmount = (sourceAmount * quoteValue1) / quoteValue2;
//      setExchangedAmount(exchangedAmount);
//      const exchangedPrice = (1 * quoteValue1) / quoteValue2;
//      setExchangedPrice(exchangedPrice);
//    } else if (Object.keys(selectedCurrencies1.quotes).length == 1 && Object.keys(selectedCurrencies2.quotes).length == 1)  {
//      const exchangedAmount = sourceAmount * quoteValue1;
//      setExchangedAmount(exchangedAmount);
//      const exchangedPrice = quoteValue1;
//      setExchangedPrice(exchangedPrice);
//    }
//    setPressedButton1(pressedButton1.map(button => ({ ...button, isColor: false })));
//    setPressedButton2(pressedButton2.map(button => ({ ...button, isColor: false })));
//  };
  

//  const handleReset = () => {
//    if (
//    exchangedAmount !== '' && exchangedPrice !== '') {
//      setExchangedAmount('');
//      setExchangedPrice('');
//    }
//  };

//console.log(Object.keys(selectedCurrencies1.quotes));


//  return (
//    <div>
//      <h1>Currency Exchange</h1>
//      <div>
//        <label>From:</label>
//        <div>
//      {pressedButton1.map((button, index) => (
//        <button
//        key={index}
//        onClick={() => {handlePressedButton1(button.label); handleReset()}}
//        style={{ backgroundColor: button.isColor ? button.backgroundColor : null }}
//      >
//        {button.label}
//      </button>
//      ))}
//    </div>
//      </div>
//      <div>
//        <label>To:</label>
//        <div>
//      {pressedButton2.map((button, index) => (
//        <button
//        key={index}
//        onClick={() => {handlePressedButton2(button.label); handleReset()}}
//        style={{ backgroundColor: button.isColor ? button.backgroundColor : null }}
//      >
//        {button.label}
//      </button>
//      ))}
//    </div>
//      </div>
//      <div>
//        <label>Amount:</label>
//        <input type="number" value={sourceAmount} onChange={(e) => setSourceAmount(e.target.value)} />
//      </div>
//      <button onClick={handleExchange}>Exchange</button>
//      {exchangedAmount !== '' && ( 
//        <>
//  <div>
//  {Object.keys(selectedCurrencies1.quotes).length === 1 && Object.keys(selectedCurrencies2.quotes).length === 1 ? (
//    Object.entries(selectedCurrencies1.quotes).map(([currencyKey, currencyValue]) => (
//      <p key={currencyKey}>{`1 ${currency2} = ${currencyValue} ${currencyKey.substring(3)}`}</p>
//    ))
//  ) : (
//    <p>{`1 ${currency2} = ${exchangedPrice} ${currency1}`}</p>
//  )}
//</div>
//        <div>
//          <p>{`${sourceAmount} ${currency2} = ${exchangedAmount} ${currency1}`}</p>
//        </div>
//        </>
//      )}
//    </div>
//  );
//};

//export default App;































//import React, { useState, useEffect } from 'react';

//const App = () => {
//  const [currency1, setCurrency1] = useState('');
//  const [selectedCurrencies1, setSelectedCurrencies1] = useState({ source: '', quotes: {} });
//  const [currency2, setCurrency2] = useState('');
//  const [selectedCurrencies2, setSelectedCurrencies2] = useState({ source: '', quotes: {} });
//  const [sourceAmount, setSourceAmount] = useState('');
//  const [exchangedAmount, setExchangedAmount] = useState('');
//  const [exchangedPrice, setExchangedPrice] = useState('');
//  const [pressedButton1, setPressedButton1] = useState([
//    { label: 'EUR', isColor: false, backgroundColor: 'green' },
//    { label: 'USD', isColor: false, backgroundColor: 'green' },
//    { label: 'GBP', isColor: false, backgroundColor: 'green' },
//	{ label: 'JPY', isColor: false, backgroundColor: 'green' },
//    { label: 'AUD', isColor: false, backgroundColor: 'green' },
//    { label: 'CAD', isColor: false, backgroundColor: 'green' },
//	{ label: 'CHF', isColor: false, backgroundColor: 'green' },
//  ]);
//  const [pressedButton2, setPressedButton2] = useState([
//    { label: 'EUR', isColor: false, backgroundColor: 'green' },
//    { label: 'USD', isColor: false, backgroundColor: 'green' },
//    { label: 'GBP', isColor: false, backgroundColor: 'green' },
//	{ label: 'JPY', isColor: false, backgroundColor: 'green' },
//    { label: 'AUD', isColor: false, backgroundColor: 'green' },
//    { label: 'CAD', isColor: false, backgroundColor: 'green' },
//	{ label: 'CHF', isColor: false, backgroundColor: 'green' },
//  ]);

//  useEffect(() => {
//    const fetchCurrencyQuotes = () => {
//      fetch(`http://api.exchangerate.host/live?access_key=955189bd7d6d27bf197d37c5b5a4e19a&currencies=${currency1},${currency2}`)
//        .then(response => response.json())
//        .then(data => {
//          if (data.success) {
//            const { quotes } = data;
//            setSelectedCurrencies1(prevState => ({ ...prevState, quotes }));
//            setSelectedCurrencies2(prevState => ({ ...prevState, quotes }));
//          } else {
//            console.error('Invalid API response:', data);
//          }
//        })
//        .catch(error => {
//          console.error('Error fetching currency quotes:', error);
//        });
//    };

//    fetchCurrencyQuotes();
//  }, [currency1, currency2]);

//  const handlePressedButton1 = (currency) => {
//    setPressedButton1((prevData) => {
//      const newData = [...prevData];
//      newData.forEach((button) => {
//        button.isColor = false;
//        if (button.label === currency) {
//          button.isColor = true;
//          setCurrency2(currency);
//        }
//      });
//      return newData;
//    });
//  };
  
//  const handlePressedButton2 = (currency) => {
//    setPressedButton2((prevData) => {
//      const newData = [...prevData];
//      newData.forEach((button) => {
//        button.isColor = false;
//        if (button.label === currency) {
//          button.isColor = true;
//          setCurrency1(currency);
//        }
//      });
//      return newData;
//    });
//  };



//  const handleExchange = () => {
//    const quoteValue1 = selectedCurrencies1.quotes[`USD${currency1}`];
//    const quoteValue2 = selectedCurrencies2.quotes[`USD${currency2}`];
    
    
//    if (Object.keys(selectedCurrencies1.quotes) == 'USDEUR') {
//      const exchangedAmount = sourceAmount / quoteValue2;
//      setExchangedAmount(exchangedAmount);
//      const exchangedPrice = 1 / quoteValue2;
//      setExchangedPrice(exchangedPrice);
//    } else if (quoteValue1 && quoteValue2) {
//      const exchangedAmount = (sourceAmount * quoteValue1) / quoteValue2;
//      setExchangedAmount(exchangedAmount);
//      const exchangedPrice = (1 * quoteValue1) / quoteValue2;
//      setExchangedPrice(exchangedPrice);
//    } else if (Object.keys(selectedCurrencies1.quotes).length == 1 && Object.keys(selectedCurrencies2.quotes).length == 1)  {
//      const exchangedAmount = sourceAmount * quoteValue1;
//      setExchangedAmount(exchangedAmount);
//      const exchangedPrice = quoteValue1;
//      setExchangedPrice(exchangedPrice);
//    }
//    setPressedButton1(pressedButton1.map(button => ({ ...button, isColor: false })));
//    setPressedButton2(pressedButton2.map(button => ({ ...button, isColor: false })));
//  };
  

//  const handleReset = () => {
//    if (
//    exchangedAmount !== '' && exchangedPrice !== '') {
//      setExchangedAmount('');
//      setExchangedPrice('');
//    }
//  };

//console.log(Object.keys(selectedCurrencies1.quotes));


//  return (
//    <div>
//      <h1>Currency Exchange</h1>
//      <div>
//        <label>From:</label>
//        <div>
//      {pressedButton1.map((button, index) => (
//        <button
//        key={index}
//        onClick={() => {handlePressedButton1(button.label); handleReset()}}
//        style={{ backgroundColor: button.isColor ? button.backgroundColor : null }}
//      >
//        {button.label}
//      </button>
//      ))}
//    </div>
//      </div>
//      <div>
//        <label>To:</label>
//        <div>
//      {pressedButton2.map((button, index) => (
//        <button
//        key={index}
//        onClick={() => {handlePressedButton2(button.label); handleReset()}}
//        style={{ backgroundColor: button.isColor ? button.backgroundColor : null }}
//      >
//        {button.label}
//      </button>
//      ))}
//    </div>
//      </div>
//      <div>
//        <label>Amount:</label>
//        <input type="number" value={sourceAmount} onChange={(e) => setSourceAmount(e.target.value)} />
//      </div>
//      <button onClick={handleExchange}>Exchange</button>
//      {exchangedAmount !== '' && ( 
//        <>
//  {/*{Object.keys(selectedCurrencies1.quotes).length === 1 && Object.keys(selectedCurrencies2.quotes).length === 1 ? (
//          <div>
//            <p>{`1 ${currency2} = ${exchangedPrice} ${currency1}`}</p>
//          </div>
//        ) : (
//          <div>
//            {Object.entries(selectedCurrencies1.quotes).map(([currencyKey, currencyValue]) => {
//              if (currencyKey === 'USDEUR') {
//                return null; // Skip USDEUR row
//              } else {
//                return (
//                  <p key={currencyKey}>{`1 ${currency2} = ${currencyValue} ${currencyKey.substring(3)}`}</p>
//                );
//              }
//            })}
//          </div>
//        )}
//                <div>
//          <p>{`${sourceAmount} ${currency2} = ${exchangedAmount} ${currency1}`}</p>
//        </div>*/}
//        </>
//      )}
//    </div>
//  );
//};

//export default App;



























