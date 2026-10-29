// Navigasi Antar Halaman iOS
function bukaHalaman(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(s => s.classList.remove('active'));
    
    document.getElementById(screenId).classList.add('active');
    
    // Hilangkan badge merah jika WhatsApp dibuka
    if (screenId === 'whatsapp-screen' || screenId === 'chat-room-screen') {
        const badges = document.querySelectorAll('.badge, .back-text');
        badges.forEach(b => b.style.display = 'none');
    }
}

// Logika Alur Cerita
function pilihOpsi(opsiId) {
    const chatMessages = document.getElementById('chat-messages');
    const choicesArea = document.getElementById('choices-area');

    if(opsiId === 1) {
        chatMessages.innerHTML += `<div class="bubble outgoing">Aku sembunyi di lemari kamar, Ar! Cepat ke sini!</div>`;
        
        setTimeout(() => {
            chatMessages.innerHTML += `<div class="bubble incoming">Jangan bersuara sedikit pun. Gw udah di koridor lantai 3. Pegang benda tajam apa aja dekat lo!</div>`;
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);

        choicesArea.innerHTML = `
            <button class="choice-btn" style="background:#ff3b30; text-align:center; padding-left:0;" onclick="location.reload()">🔄 Tamat Bab 1 (Ulangi Cerita)</button>
        `;
    } else if(opsiId === 2) {
        chatMessages.innerHTML += `<div class="bubble outgoing">Telepon Polisi sekarang, Ar! Ada suara langkah kaki masuk ke ruang tamu!</div>`;
        
        setTimeout(() => {
            chatMessages.innerHTML += `<div class="bubble incoming">Sial, sinyal jammers aktif! Panggilan gw diblokir. Keluar lewat balkon sekarang, LARI!</div>`;
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);

        choicesArea.innerHTML = `
            <button class="choice-btn" style="background:#ff9500; text-align:center; padding-left:0;" onclick="location.reload()">🔄 Rute Bahaya (Ulangi Cerita)</button>
        `;
    }
    
    setTimeout(() => { chatMessages.scrollTop = chatMessages.scrollHeight; }, 200);
}
