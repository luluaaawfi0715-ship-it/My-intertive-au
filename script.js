// Navigasi Pindah Layar
function bukaHalaman(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(s => s.classList.remove('active'));
    
    document.getElementById(screenId).classList.add('active');
}

// Logika Chat Berantai
function pilihOpsi(opsiId) {
    const chatMessages = document.getElementById('chat-messages');
    const choicesArea = document.getElementById('choices-area');

    if(opsiId === 1) {
        chatMessages.innerHTML += `<div class="bubble outgoing">Aku sembunyi di lemari kamar, Ar! Cepat ke sini!</div>`;
        
        setTimeout(() => {
            chatMessages.innerHTML += `<div class="bubble incoming">Jangan bersuara. Gw udah di koridor lantai 3. Pegang benda tajam apa aja dekat lo!</div>`;
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);

        choicesArea.innerHTML = `
            <button class="choice-btn" style="background:#ff3b30;" onclick="location.reload()">🔄 Tamat Bab 1 (Klik untuk Mengulang)</button>
        `;
    } else if(opsiId === 2) {
        chatMessages.innerHTML += `<div class="bubble outgoing">Telepon Polisi sekarang, Ar! Ada suara langkah kaki di ruang tamu!</div>`;
        
        setTimeout(() => {
            chatMessages.innerHTML += `<div class="bubble incoming">Sial, sinyal gw tiba-tiba mati! Lo harus keluar dari sana SEKARANG!</div>`;
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);

        choicesArea.innerHTML = `
            <button class="choice-btn" style="background:#ff9500;" onclick="location.reload()">🔄 Mode Bahaya! (Klik untuk Mengulang)</button>
        `;
    }
    
    setTimeout(() => { chatMessages.scrollTop = chatMessages.scrollHeight; }, 200);
                   }
