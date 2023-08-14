function displayLyrics(songTitle) {
  var lyrics = getLyrics(songTitle);
  document.getElementById('song-title').innerText = songTitle;
  document.getElementById('song-lyrics').innerText = lyrics;

}

function getLyrics(songTitle) {
  // Kode di sini untuk mendapatkan lirik lagu berdasarkan judul lagu
  // Misalnya, kita bisa menggunakan objek JavaScript untuk menyimpan lirik lagu berdasarkan judulnya
  var lyrics = '';

  if (songTitle === 'SOULMATE') {
    lyrics =
      "\n" +
      "Ketika engkau datang\n" +
      "Mengapa di saat ku\n" +
      "Tak mungkin menggapaimu\n" +
    "Meskipun tlah kau semaikan cinta\n" +
    "\n" +
      "Dibalik senyuman indah\n" +
      "Kau jadikan seakan nyata\n" +
      "Seolah kau belahan jiwa\n" +
      "Meskipun tak mungkin lagi\n" +
      "Tuk menjadi pasangankun" +
      "Namun ku yakini cinta\n" +
    "Kau kekasih hati\n" +
    "\n" +
    "Oh\n" +
    "\n" +
      "Terkadang begitu sukar (begitu sukar)\n" +
      "Untuk dimengerti (untuk dimengerti)\n" +
      "Semua ini kita terlambat (semua)\n" +
    "Meskipun tlah kau semaikan cinta\n" +
    "\n" +
      "Dibalik senyuman indah\n" +
      "Kau jadikan seakan nyata\n" +
      "Seolah kau belahan jiwa\n" +
      "Meskipun tak mungkin lagi\n" +
      "Tuk menjadi pasanganku\n" +
    "Namun ku yakini cinta kau kekasih hati\n" +
    "\n" +
    "Oh\n" +
    "\n" +
      "Meskipun tak mungkin lagi\n" +
      "Tuk menjadi pasangankun" +
      "Namun ku yakini cinta\n" +
      "Kau kekasih hati\n" +
      "Dibalik senyuman indah\n" +
    "Kau jadikan seakan nyata\n" +
    "\n" +
      "Seolah kau belahan jiwa\n" +
      "Meskipun tak mungkin lagi\n" +
      "Tuk menjadi pasanganku\n" +
      "Namun ku yakini cinta kau kekasih hati\n" +
      "Oh\n"
      ;
  } else if (songTitle === 'CANTIK') {
    lyrics =
      "\n" +
      "Cantik\n" +
      "Ingin rasa hati berbisik\n" +
      "Untuk melepas keresahan\n" +
    "Dirimu\n" +
    "\n" +
      "O cantik\n" +
      "Bukan kuingin mengganggumu\n" +
      "Tapi apa arti merindu\n" +
      "Selalu (ow)\n" +
      "Walau mentari terbit di utara\n" +
    "Hatiku hanya untukmu\n" +
    "\n" +
      "Ada hati yang termanis dan penuh cinta\n" +
      "Tentu saja kan kubalas seisi jiwa\n" +
      "Tiada lagi\n" +
      "Tiada lagi yang ganggu kita\n" +
    "Sungguh aku sayang kamu\n" +
    "\n" +
    "Cantik\n" +
    "\n" +
      "Bukan kuingin mengganggumu\n" +
      "Tapi apa arti merindu\n" +
      "Selalu (ow)\n" +
      "Walau mentari terbit di utara\n" +
    "Hatiku hanya untukmu\n" +
      "Ada hati yang termanis dan penuh cinta\n" +
    "Tentu saja kan kubalas seisi jiwa\n" +
    "\n" +
    "Tiada lagi\n" +
    "Tiada lagi yang ganggu kita\n" +
    "Ini kesungguhan\n" +
    "Sungguh aku sayang kamu\n";

  } else if (songTitle === 'CINTA SENDIRI') {
    lyrics =
      "\n" +
      "Kau ungkapkan kepadaku\n" +
      "Kan ada saatnya nanti\n" +
      "Engkau milikku satu\n" +
      "Ku menunggu dalam bimbang\n" +
    "Adakah sungguhnya aku\n" +
    "Kasih yg kau inginkan\n" +
    "\n" +
      "Biar aku yg pergi\n" +
      "Bila tak juga pasti\n" +
      "Adakah selama ini\n" +
      "Aku cinta sendiri\n" +
      "\n" +
      "Biar aku menepi\n" +
      "Bukan lelah menanti\n" +
      "Namun apalah artinya\n" +
      "Cinta pada bayangan\n" +
      "Pedih aku rasakan\n" +
      "Kenyataannya\n" +
      "Cinta tak harus\n" +
      "Saling memiliki\n" +
      "\n" +
      "Jujur aku tak yakin bisa\n" +
      "Jalani hari tanpa dirimu\n" +
      "Namun apalah artinya\n" +
      "Cinta pada bayangan\n" +
      "\n" +
      "Pedih aku rasakan\n" +
      "Kenyataannya\n" +
      "Cinta tak harus\n" +
      "Saling memiliki\n";
    
  
    } else if (songTitle === 'AKU, DIRIKU, DIRINYA') {
      lyrics =
        "\n" +
        "Tak ada yang harus kita sesali\n" +
        "Semua indah yang pernah kita alami\n" +
        "Meskipun terbatas dan tak mungkin terikat janji abadi\n" +
        "\n" +
      "Aku, dirimu, dirinya\n" +
      "Tak akan pernah mengerti tentang suratan\n" +
        "Aku, dirimu, dirinya\n" +
        "Tak resah bila sadari\n" +
        "Cinta takkan salah\n" +
        "\n" +
        "Andai waktu bisa kita putar kembali\n" +
        "Jalinan cerita mungkin tak begini\n" +
        "Aku, dirimu, dirinya\n" +
        "Tak akan pernah mengerti tentang suratan\n" +
        "Aku, dirimu, dirinya\n" +
        "Tak resah bila sadari\n" +
        "Cinta takkan salah\n" +
        "\n" +
        "Meskipun (meskipun)\n" +
        "Terbatas (terbatas) saling pandang\n" +
        "Dan tak akan lebih lagi\n";
  }

  return lyrics;
}

