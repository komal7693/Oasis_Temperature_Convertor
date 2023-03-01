// Get form elements
const degreeInput = document.querySelector('.input-degree');
const degreeType = document.querySelector('#degree-type');
const convertType = document.querySelector('#convert-type');
const convertBtn = document.querySelector('.convert-btn');
const displayResult = document.querySelector('.display-result');
const error = document.querySelector('.error');

// Function to convert temperature
const convertTemperature = () => {
	event.preventDefault();
  let degree = degreeInput.value;
  let from = degreeType.value;
  let to = convertType.value;

  // Check if input is empty
  if (!degree) {
    error.textContent = 'Please enter a degree to convert.';
    return;
  }

  // Clear error message
  error.textContent = '';

  // Convert temperature based on from and to values
  switch (from) {
    case 'fahrenheit':
      switch (to) {
        case 'celsius':
          degree = (degree - 32) * (5 / 9);
          break;
        case 'kelvin':
          degree = (degree - 32) * (5 / 9) + 273.15;
          break;
      }
      break;
    case 'celsius':
      switch (to) {
        case 'fahrenheit':
          degree = (degree * 9 / 5) + 32;
          break;
        case 'kelvin':
			degree = degree + 273.15;
			break;
		}
		break;
	  case 'kelvin':
		switch (to) {
		  case 'fahrenheit':
			degree = (degree - 273.15) * (9 / 5) + 32;
			break;
		  case 'celsius':
			degree = degree - 273.15;
			break;
		}
		break;
	}
  
	// Round result to 2 decimal places
	degree = degree.toFixed(2);
  
	// Display result
	displayResult.textContent = `${degree}° ${to.charAt(0).toUpperCase() + to.slice(1)}`;
  };
  
  // Event listener for convert button click
  convertBtn.addEventListener('click', convertTemperature);
  
