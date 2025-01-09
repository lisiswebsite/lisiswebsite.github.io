document.addEventListener('DOMContentLoaded', () => {
  const gridItems = document.querySelectorAll('.grid-item');
  const viewSelect = document.getElementById('view-select');
  const gridContainer = document.querySelector('.grid-container');
  const defenseOnlyItems = document.querySelectorAll('.defense-only');
  const offenseForm = document.querySelector('.offense-form');
  const defenseForm = document.querySelector('.defense-form');

  viewSelect.addEventListener('change', (event) => {
    if (event.target.value === 'defense') {
      gridContainer.classList.add('defense');
      gridItems.forEach(item => {
        if (!item.classList.contains('defense-only')) {
          item.style.display = 'none';
        }
      });
      defenseOnlyItems.forEach(item => {
        item.style.display = 'flex';
      });
      offenseForm.style.display = 'none';
      defenseForm.style.display = 'block';
    } else {
      gridContainer.classList.remove('defense');
      gridItems.forEach(item => {
        item.style.display = 'flex';
      });
      defenseOnlyItems.forEach(item => {
        item.style.display = 'none';
      });
      offenseForm.style.display = 'block';
      defenseForm.style.display = 'none';
    }
  });

  gridItems.forEach((item) => {
    const scriptSrc = item.getAttribute('data-script');
    const numberElementId = item.getAttribute('data-number');
    const resultElementId = item.getAttribute('data-result');

    // Create elements for number and result
    const numberElement = document.createElement('div');
    numberElement.id = numberElementId;
    numberElement.className = 'number';
    numberElement.textContent = '1';

    const resultElement = document.createElement('div');
    resultElement.id = resultElementId;
    resultElement.className = 'result';

    const numberResultContainer = document.createElement('div');
    numberResultContainer.className = 'number-result-container';
    numberResultContainer.appendChild(numberElement);
    numberResultContainer.appendChild(resultElement);

    item.appendChild(numberResultContainer);

    const script = document.createElement('script');
    script.src = scriptSrc;
    script.onload = () => {
      initializePlayerBox(numberElementId, resultElementId);
    };
    document.body.appendChild(script);
  });

  // Submission success message for offense form
  const offenseScriptURL = 'https://script.google.com/macros/s/AKfycbw11xMtBjPecdJLSzcCjx-kPSPqHvwNZVoRwrgUHGwIbr1mzTfYlD0zucwtoNV45TIp/exec';
  const offenseFormElement = document.forms['offense'];

  offenseFormElement.addEventListener('submit', e => {
    e.preventDefault();
    fetch(offenseScriptURL, { method: 'POST', body: new FormData(offenseFormElement) })
      .then(response => alert("Success"))
      .then(() => { window.location.reload(); })
      .catch(error => console.error('Error!', error.message));
  });

  // Submission success message for defense form
  const defenseScriptURL = 'https://script.google.com/macros/s/AKfycbzkOHTtK-dzvW49I2Og4MMR3ziZg-hxAXR4XpF0W5uQCl_i_mWpTV1IfJOhCltCgIWcFQ/exec';
  const defenseFormElement = document.forms['defense'];

  defenseFormElement.addEventListener('submit', e => {
    e.preventDefault();
    fetch(defenseScriptURL, { method: 'POST', body: new FormData(defenseFormElement) })
      .then(response => alert("Success"))
      .then(() => { window.location.reload(); })
      .catch(error => console.error('Error!', error.message));
  });

  // Initially show the offense form and hide the defense form
  offenseForm.style.display = 'block';
  defenseForm.style.display = 'none';
});