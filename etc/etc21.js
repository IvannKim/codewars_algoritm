/*16번
An HTML widget for a children's game represents a clickable card matrix.
Initially, only one card is face up.
Whenever a card is clicked, the card that was previously face up is turned over to face down and the clicked card is turned over to face up.
Only one card is ever face up.
Face up cards should have content 'up' while face down cards should have content
'down'. When an 'up' card is clicked, it remains 'up'.
Write a setup function that registers card click handlers and implements the logic of the HTML widget.
For example, after clicking the top-left cell on the 2 x 2 version of the widget,
that cell should have content 'up' while all other cells should have content 'down'. */
function setup() {
  const cards = document.querySelectorAll('.card');
  const modifyCard = e => {
    if (e.currentTarget.value === 'down') {
      e.currentTarget.value = 'up';
    }
  };
  cards.forEach(element => {
    element.addEventListener('click', modifyCard, false);
  });
}

document.body.innerHTML = `
<table id="card-container">
  <tbody>
    <tr>
      <td class="card">down</td>
      <td class="card">up</td>
    </tr>
    <tr>
      <td class="card">down</td>
      <td class="card">down</td>
    </tr>
  </tbody>
</table>
`;
