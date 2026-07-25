//Vibecode is noticed eh?

// Arreglo limpio de impurezas de texto
const emojis = [
  "😀", "😁", "😂", "😃", "😄", "😅", "😆", "😇", "😈", "😉", "😊", "😋", "😌", "😍", "😎",
  "😏", "😐", "😑", "😒", "😓", "😔", "😕", "😖", "😗", "😘", "😙", "😚", "😛", "😜", "😝",
  "😞", "😟", "😠", "😡", "😢", "😣", "😤", "😥", "😦", "😧", "😨", "😩", "😪", "😫", "😬",
  "😭", "😮", "😯", "😰", "😱", "😲", "😳", "😴", "😵", "😶", "😷", "😸", "😹", "😺", "😻",
  "😼", "😽", "😾", "😿", "🙀", "🙁", "🙂", "🙃", "🙄", "🙅", "🙆", "🙇", "🙈", "🙉", "🙊",
  "🙋", "🙌", "🙍", "🙎", "🙏", "💪", "✍️", "🤳", "💅", "🤝", "👍", "👎", "👊", "✊", "🤛", 
  "🤜", "🤞", "✌️", "🤟", "🤘", "👌", "🤌", "🤏", "👈", "👉", "👆", "👇", "☝️", "✋", "🤚",
  "🌀", "🌁", "🌂", "🌃", "🌄", "🌅", "🌆", "🌇", "🌈", "🌉", "🌊", "🌋", "🌌", "🌍", "🌎", 
  "🌏", "🌐", "🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘", "🌙", "🌚", "🌛", "🌜", "🌝", 
  "🌞", "🌟", "🌠", "🌡", "🌤", "🌥", "🌦", "🌧", "🌨", "🌩", "🌪", "🌫", "🌬", "🔥", "💧",
  "🌭", "🌮", "🌯", "🌰", "🌱", "🌲", "🌳", "🌴", "🌵", "🌶", "🌷", "🌸", "🌹", "🌺", "🌻", 
  "🌼", "🌽", "🌾", "🌿", "🍀", "🍁", "🍂", "🍃", "🍄", "🍅", "🍆", "🍇", "🍈", "🍉", "🍊", 
  "🍋", "🍌", "🍍", "🍎", "🍏", "🍐", "🍑", "🍒", "🍓", "🍔", "🍕", "🍖", "🍗", "🍘", "🍙", 
  "🍚", "🍛", "🍜", "🍝", "🍞", "🍟", "🍠", "🍡", "🍢", "🍣", "🍤", "🍥", "🍦", "🍧", "🍨", 
  "🍩", "🍪", "🍫", "🍬", "🍭", "🍮", "🍯", "🍰", "🍱", "🍲", "🍳", "🍴", "🍵", "🍶", "🍷", 
  "🍸", "🍹", "🍺", "🍻", "🍼", "🍽", "🍾", "🍿", "🐀", "🐁", "🐂", "🐃", "🐄", "🐅", "🐆", 
  "🐇", "🐈", "🐉", "🐊", "🐋", "🐌", "🐍", "🐎", "🐏", "🐐", "🐑", "🐒", "🐓", "🐔", "🐕", 
  "🐖", "🐗", "🐘", "🐙", "🐚", "🐛", "🐜", "🐝", "🐞", "🐟", "🐠", "🐡", "🐢", "🐣", "🐤", 
  "🐥", "🐦", "🐧", "🐨", "🐩", "🐪", "🐫", "🐬", "💻", "🖥️", "🖨️", "⌨️", "🖱️", "💾", "📱", 
  "💡", "⚙️", "🛠️", "🔑", "🔒", "📦", "📚", "📝", "📅", "📈", "📊", "📎", "📌", "🔍", "📢", 
  "🔋", "🔌", "🧲", "🧪", "🧬", "🔭", "📡", "⚽", "🏀", "🏈", "⚾", "🥎", "🎾", "🏐", "🏉", 
  "🥏", "🏓", "🏸", "🏒", "🥍", "🏹", "🎣", "🏔", "🏕", "🏖", "🏗", "🏘", "🏙", "🏚", "🏛", 
  "🏜", "🏝", "🏞", "🏟", "🏠", "🏡", "🏢", "⚠️", "🛑", "🚫", "✅", "❌", "💯", "🔄", "🆔", 
  "ℹ️", "🔤", "🔢", "🔣", "🔠", "🎦", "📶", "🈁", "🆖", "🆗", "🆙", "🆒", "🆕", "🆓", "🔟", 
  "🎚", "🎛", "🏳️", "🏴‍☠️", "🏁", "🚩", "🎌"
];

const emoji1 = document.getElementById("emoji1");
const emoji2 = document.getElementById("emoji2");
const btn = document.getElementById("btn");

// Colocar emojis iniciales por defecto al cargar la página
emoji1.textContent = "⚔️";
emoji2.textContent = "⚔️";

btn.addEventListener("click", () => {
    // 1. Selección aleatoria de los emojis
    const randomEmoji1 = Math.floor(Math.random() * emojis.length);
    const randomEmoji2 = Math.floor(Math.random() * emojis.length);
    
    // 2. Cambiar los personajes en pantalla
    emoji1.textContent = emojis[randomEmoji1];
    emoji2.textContent = emojis[randomEmoji2];

    // 3. AGREGAR LAS CLASES DE ANIMACIÓN
    emoji1.classList.add("hit-left");
    emoji2.classList.add("hit-right");

    // 4. REMOVER LAS CLASES después de 200ms para que se pueda reiniciar el efecto [1]
    setTimeout(() => {
        emoji1.classList.remove("hit-left");
        emoji2.classList.remove("hit-right");
    }, 200); // 200 milisegundos coincide exactamente con el CSS
});
