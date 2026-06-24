
export default function AddToAnkiButton() {
  const addCard = () => {
    const deck = "films";
    const front = "hellow";
    const back = "Привет";

    const url =
      `intent://x-callback-url/addnote#Intent;` +
      `package=com.ichi2.anki;` +
      `S.deck=${encodeURIComponent(deck)};` +
      `S.model=Basic;` +
      `S.field.0=${encodeURIComponent(front)};` +
      `S.field.1=${encodeURIComponent(back)};` +
      `end`;

    window.location.href = url;
  };

  return (
    <button onClick={addCard}>
      Add to AnkiDroid
    </button>
  );
}