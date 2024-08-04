button.addEventListener('click', () => {
    const value = button.textContent;
    console.log(`Button clicked: ${value}`); // Debugging line
  
    switch (value) {
      case 'C':
        console.log('Clear display');
        clearDisplay();
        break;
      case '<':
        console.log('Backspace');
        backspace();
        break;
      // Add similar logs to other cases if needed
      case '=':
        console.log('Calculate result');
        calculate();
        break;
      // Other cases
    }
  });
  