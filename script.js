/**
 * HEARTBREAK STORY SCRIPT - ERLANG DITOLAK CINDY (26 NOVEMBER)
 * Pure Vanilla JavaScript for Maximum Compatibility & Smooth Performance
 */

(function () {
  'use strict';

  // --- CONFIGURATION & STATE ---
  const DEFAULT_CONFIG = {
    boyName: 'Erlang',
    girlName: 'Cindy',
    startYear: 2026, // 2 Juli 2026 (Waktu pertama DM di IG)
    startMonth: 6,   // Month is 0-indexed: 6 = Juli
    startDay: 2,
    startHour: 0,
    startMinute: 0
  };

  let config = { ...DEFAULT_CONFIG };

  // Load saved config from localStorage if available
  try {
    const saved = localStorage.getItem('heartbreakConfig');
    if (saved) {
      const parsed = JSON.parse(saved);
      // Migrate previous default years if needed to 2 Juli 2026
      config = {
        ...DEFAULT_CONFIG,
        ...parsed,
        startYear: parsed.startYear === 2024 || parsed.startYear === 2023 ? 2026 : (parsed.startYear || 2026),
        startMonth: (parsed.startMonth === 10 && (parsed.startYear === 2024 || parsed.startYear === 2023)) ? 6 : (parsed.startMonth ?? 6),
        startDay: (parsed.startDay === 26 && (parsed.startYear === 2024 || parsed.startYear === 2023)) ? 2 : (parsed.startDay ?? 2)
      };
    }
  } catch (e) {
    console.warn('localStorage not accessible:', e);
  }

  // Erlang's sincere & mature thoughts when his photo is clicked
  const BOY_QUOTES = [
    'Mungkin bukan aku orang yang tepat untuk kamu pilih, dan aku menerimanya dengan lapang dada 🌿',
    'Aku selalu happy kalau Cindy happy... bahagiamu adalah prioritasku 💚',
    'Even with no contact, loving and wishing the best for you always 🍃',
    'Terima kasih untuk 86 hari cerita indah yang pernah kita lewati sejak 2 Juli 2026 ✨',
    'Tak ada sesal sedikit pun pernah mengenal dan menyayangimu dengan tulus 🕊️',
    'Semoga kamu selalu dikelilingi kebaikan, kesehatan, dan senyum yang tulus 🌻',
    'Di sini aku selalu mendoakan yang terbaik untuk setiap langkah masa depanmu, Cindy 🌿'
  ];

  // Cindy's heartfelt words when her photo is clicked
  const GIRL_QUOTES = [
    'Ga nolak, aku loh menyelamatkan kamu dari aku... love is supposed to be easy 🍃',
    'Aku sayang sama kamu juga, tapi aku pengen kamu dapat kebahagiaan yang utuh 🌿',
    'Kamu orang baik, kamu pantes dapat yang terbaik tanpa beban ✨',
    'Makasih udah selalu tulus dan sabar sama aku ya Erlang 💚',
    'Tetap jaga kesehatan, kejar mimpimu, dan selalu bahagia ya 🌻'
  ];

  // Cindy's reasons paired with Erlang's peaceful acceptance
  const REJECTION_REASONS = [
    'Cindy: "Gak nolak, aku loh menyelamatkan kamu dari aku..." — Erlang: "Aku menghargai kejujuranmu, Cin. Sekarang aku ikhlas menerimanya 🌿"',
    'Cindy: "Love is supposed to be easy..." — Erlang: "Kamu benar, cinta seharusnya menenangkan. Bahagiamu adalah nomor satu 🍃"',
    'Cindy: "Aku tau kamu pantes dapet yang lebih baik..." — Erlang: "Mungkin bukan aku orangnya, tapi bahagiamu tetap jadi bahagiaku juga ✨"',
    'Cindy: "Aku complicated banget, takut membebani kamu..." — Erlang: "Aku gak pernah merasa terbebani menyayangimu, tapi aku ingin kamu bahagia bebas 💚"',
    'Cindy: "Orang yang kayak kamu harusnya gak sama orang kayak aku..." — Erlang: "Bagi aku kamu tetap orang baik, dan aku selalu mendoakanmu 🌻"',
    'Cindy: "Karena sayang aja gak cukup..." — Erlang: "Aku paham, Cin. Even in no contact, aku tetep ikhlas dan mendoakan yang terbaik 🕊️"',
    'Cindy: "Aku gamau kamu dapet omongan jelek gegara aku..." — Erlang: "Terima kasih sudah peduli. Sekarang kita melangkah dengan damai 🍃"'
  ];

  // Calming nature & mature typewriter phrases
  const TYPEWRITER_PHRASES = [
    '"Mungkin bukan aku orang yang tepat untuk kamu pilih, dan aku menerimanya... 🌿"',
    '"Aku happy kalau Cindy happy... bahagiamu adalah bahagiaku juga 🍃"',
    '"Even with no contact, loving and wishing the best for you always 💚"',
    '"Terima kasih untuk 86 hari memori indah sejak 2 Juli 2026 ✨"',
    '"Di bawah naungan alam yang tenang, aku selalu mendoakan yang terbaik untukmu 🕊️"',
    '"Persembahan penuh ketulusan dan kedewasaan dari seorang IT guy yang lugu 🌻"'
  ];

  // --- DOM ELEMENTS ---
  const curtainOverlay = document.getElementById('curtainOverlay');
  const openCurtainBtn = document.getElementById('openCurtainBtn');

  const vinylDisc = document.getElementById('vinylDisc');
  const musicPlayer = document.getElementById('musicPlayer');
  const playBtn = document.getElementById('playBtn');
  const musicTitle = document.getElementById('musicTitle');
  const musicStatus = document.getElementById('musicStatus');
  const bgmAudio = document.getElementById('bgmAudio');

  const nameBoy = document.getElementById('nameBoy');
  const nameGirl = document.getElementById('nameGirl');
  const labelBoy = document.getElementById('labelBoy');
  const labelGirl = document.getElementById('labelGirl');
  const letterSignName = document.getElementById('letterSignName');

  const imgBoy = document.getElementById('imgBoy');
  const imgGirl = document.getElementById('imgGirl');
  const boyFrame = document.getElementById('boyFrame');
  const girlFrame = document.getElementById('girlFrame');

  const changeBoyPhotoBtn = document.getElementById('changeBoyPhotoBtn');
  const changeGirlPhotoBtn = document.getElementById('changeGirlPhotoBtn');
  const directBoyFileInput = document.getElementById('directBoyFileInput');
  const directGirlFileInput = document.getElementById('directGirlFileInput');

  const centerBeatHeart = document.getElementById('centerBeatHeart');
  const interactiveHeartEmblem = document.getElementById('interactiveHeartEmblem');

  const countDays = document.getElementById('countDays');
  const countHours = document.getElementById('countHours');
  const countMinutes = document.getElementById('countMinutes');
  const countSeconds = document.getElementById('countSeconds');

  const typewriterText = document.getElementById('typewriterText');

  // Interactive buttons
  const sendLoveBtn = document.getElementById('sendLoveBtn');
  const openLetterBtn = document.getElementById('openLetterBtn');
  const reasonsBtn = document.getElementById('reasonsBtn');
  const settingsBtn = document.getElementById('settingsBtn');

  // Modals
  const letterModal = document.getElementById('letterModal');
  const closeLetterBtn = document.getElementById('closeLetterBtn');
  const letterLoveBurstBtn = document.getElementById('letterLoveBurstBtn');

  const reasonModal = document.getElementById('reasonModal');
  const closeReasonBtn = document.getElementById('closeReasonBtn');
  const reasonText = document.getElementById('reasonText');
  const nextReasonBtn = document.getElementById('nextReasonBtn');

  // WhatsApp Chat Elements
  const waChatSection = document.getElementById('waChatSection');
  const waMessagesBox = document.getElementById('waMessagesBox');
  const waMessagesList = document.getElementById('waMessagesList');
  const waAvatarBoy = document.getElementById('waAvatarBoy');
  const waAvatarGirl = document.getElementById('waAvatarGirl');
  const waOpenAddModalBtn = document.getElementById('waOpenAddModalBtn');
  const waJumpBottomBtn = document.getElementById('waJumpBottomBtn');

  // WhatsApp Add Message Modal Elements
  const waAddMessageModal = document.getElementById('waAddMessageModal');
  const closeWaAddModalBtn = document.getElementById('closeWaAddModalBtn');
  const waModalChatForm = document.getElementById('waModalChatForm');
  const modalMessageTextarea = document.getElementById('modalMessageTextarea');
  const modalSendBtn = document.getElementById('modalSendBtn');

  const settingsModal = document.getElementById('settingsModal');
  const closeSettingsBtn = document.getElementById('closeSettingsBtn');
  const saveSettingsBtn = document.getElementById('saveSettingsBtn');
  const resetSettingsBtn = document.getElementById('resetSettingsBtn');

  const inputBoyFile = document.getElementById('inputBoyFile');
  const inputBoyUrl = document.getElementById('inputBoyUrl');
  const inputGirlFile = document.getElementById('inputGirlFile');
  const inputGirlUrl = document.getElementById('inputGirlUrl');
  const inputSongFile = document.getElementById('inputSongFile');
  const inputSongUrl = document.getElementById('inputSongUrl');

  // --- AUDIO SYNTHESIZER (Melancholic Sad Piano / Music Box) ---
  let audioCtx = null;
  let isMusicPlaying = false;
  let synthInterval = null;
  let currentNoteIdx = 0;
  let customAudioLoaded = false;

  function initAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  // Gentle acoustic & nature chimes frequencies (Warm, Peaceful, Sincere, Hopeful)
  // Pentatonic & Major chord progression: C4, E4, G4, A4, C5, D5, E5, G5
  const NATURE_MELODY_FREQS = [
    261.63, 329.63, 392.00, 523.25, 440.00, 392.00, 329.63, 261.63, // C4 E4 G4 C5 A4 G4 E4 C4
    293.66, 349.23, 440.00, 587.33, 523.25, 440.00, 349.23, 293.66, // D4 F4 A4 D5 C5 A4 F4 D4
    329.63, 392.00, 493.88, 659.25, 587.33, 493.88, 392.00, 329.63, // E4 G4 B4 E5 D5 B4 G4 E4
    349.23, 440.00, 523.25, 659.25, 523.25, 440.00, 392.00, 261.63  // F4 A4 C5 E5 C5 A4 G4 C4
  ];

  function playNatureNote(freq) {
    if (!audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      // Soft warm tone (gentle sine wave + acoustic decay)
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      const now = audioCtx.currentTime;
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(0.12, now + 0.06);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(now);
      osc.stop(now + 1.85);
    } catch (e) {
      console.warn('Synth note error:', e);
    }
  }

  // Gentle nature chime / click SFX
  function playClickSfx(isNature = false) {
    if (!audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const now = audioCtx.currentTime;

      osc.type = 'sine';
      const baseFreq = isNature ? 784 : 523.25; // G5 or C5 warm chime
      osc.frequency.setValueAtTime(baseFreq, now);
      osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.9, now + 0.18);

      gain.gain.setValueAtTime(0.10, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.25);
    } catch (e) {}
  }

  function startSynthMelody() {
    if (synthInterval) clearInterval(synthInterval);
    currentNoteIdx = 0;
    synthInterval = setInterval(() => {
      if (isMusicPlaying && !customAudioLoaded) {
        const freq = NATURE_MELODY_FREQS[currentNoteIdx];
        playNatureNote(freq);
        currentNoteIdx = (currentNoteIdx + 1) % NATURE_MELODY_FREQS.length;
      }
    }, 600); // Calming peaceful tempo
  }

  function stopSynthMelody() {
    if (synthInterval) {
      clearInterval(synthInterval);
      synthInterval = null;
    }
  }

  function toggleMusic(forcePlay = null) {
    initAudioContext();
    const shouldPlay = forcePlay !== null ? forcePlay : !isMusicPlaying;

    if (shouldPlay) {
      if (bgmAudio && bgmAudio.src && !bgmAudio.error) {
        bgmAudio.play().then(() => {
          customAudioLoaded = true;
          setMusicUI(true, 'Memutar lagu latar 🍃');
        }).catch(() => {
          customAudioLoaded = false;
          startSynthMelody();
          setMusicUI(true, 'Melodi Ketenangan Alam 🌿');
        });
      } else {
        customAudioLoaded = false;
        startSynthMelody();
        setMusicUI(true, 'Melodi Ketenangan Alam 🌿');
      }
    } else {
      if (bgmAudio) bgmAudio.pause();
      stopSynthMelody();
      setMusicUI(false, 'Musik dijeda ⏸️');
    }
  }

  function setMusicUI(playing, statusText) {
    isMusicPlaying = playing;
    if (playing) {
      vinylDisc.classList.add('spinning');
      playBtn.textContent = '❚❚';
      musicStatus.textContent = statusText || 'Memutar 🌧️';
    } else {
      vinylDisc.classList.remove('spinning');
      playBtn.textContent = '▶';
      musicStatus.textContent = statusText || 'Klik untuk memutar 💔';
    }
  }

  if (bgmAudio) {
    bgmAudio.addEventListener('error', () => {
      if (isMusicPlaying && customAudioLoaded) {
        customAudioLoaded = false;
        startSynthMelody();
      }
    });
  }

  // --- PERSISTENT AUDIO & INDEXEDDB ENGINE ---
  const activeSongName = document.getElementById('activeSongName');
  const AUDIO_DB_NAME = 'cilang_audio_db';
  const AUDIO_STORE_NAME = 'saved_songs';
  const AUDIO_DB_VERSION = 1;

  function openAudioDB() {
    return new Promise((resolve) => {
      if (!window.indexedDB) {
        resolve(null);
        return;
      }
      try {
        const req = indexedDB.open(AUDIO_DB_NAME, AUDIO_DB_VERSION);
        req.onupgradeneeded = (e) => {
          const db = e.target.result;
          if (!db.objectStoreNames.contains(AUDIO_STORE_NAME)) {
            db.createObjectStore(AUDIO_STORE_NAME, { keyPath: 'id' });
          }
        };
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => resolve(null);
      } catch (err) {
        resolve(null);
      }
    });
  }

  async function saveAudioBlobToDB(blob, fileName, title) {
    try {
      const db = await openAudioDB();
      if (!db) return false;
      return new Promise((resolve) => {
        const tx = db.transaction([AUDIO_STORE_NAME], 'readwrite');
        const store = tx.objectStore(AUDIO_STORE_NAME);
        store.put({
          id: 'active_song',
          blob: blob,
          name: fileName,
          title: title,
          savedAt: Date.now()
        });
        tx.oncomplete = () => resolve(true);
        tx.onerror = () => resolve(false);
      });
    } catch (e) {
      console.warn('saveAudioBlobToDB error:', e);
      return false;
    }
  }

  async function getAudioBlobFromDB() {
    try {
      const db = await openAudioDB();
      if (!db) return null;
      return new Promise((resolve) => {
        const tx = db.transaction([AUDIO_STORE_NAME], 'readonly');
        const store = tx.objectStore(AUDIO_STORE_NAME);
        const req = store.get('active_song');
        req.onsuccess = () => resolve(req.result || null);
        req.onerror = () => resolve(null);
      });
    } catch (e) {
      return null;
    }
  }

  async function clearAudioBlobFromDB() {
    try {
      const db = await openAudioDB();
      if (!db) return;
      const tx = db.transaction([AUDIO_STORE_NAME], 'readwrite');
      tx.objectStore(AUDIO_STORE_NAME).delete('active_song');
    } catch (e) {}
  }

  function fileToBase64(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target.result);
      reader.onerror = () => resolve(null);
      reader.readAsDataURL(file);
    });
  }

  function updatePresetButtonsUI(activeUrl) {
    document.querySelectorAll('.preset-song-btn').forEach(btn => {
      const btnUrl = btn.dataset.songUrl;
      if (btnUrl && (btnUrl === activeUrl || (activeUrl && activeUrl.endsWith(btnUrl)))) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  function applyActiveSong(src, title, source = 'url', saveToLocal = true) {
    if (!bgmAudio) return;
    
    // Normalize and assign source
    if (bgmAudio.src !== src && bgmAudio.getAttribute('src') !== src) {
      bgmAudio.src = src;
    }
    customAudioLoaded = true;

    const displayTitle = title || 'Lagu Kenangan 🎵';
    if (musicTitle) {
      musicTitle.textContent = displayTitle;
    }
    if (activeSongName) {
      activeSongName.textContent = displayTitle;
    }

    updatePresetButtonsUI(src);

    if (saveToLocal && source !== 'indexeddb') {
      try {
        localStorage.setItem('savedSongUrl', src);
        localStorage.setItem('savedSongTitle', displayTitle);
      } catch (e) {}
    }

    if (isMusicPlaying) {
      bgmAudio.play().catch(() => {});
    }
  }

  async function initPersistentAudio() {
    try {
      // 1. Check IndexedDB for a custom uploaded file
      const localRecord = await getAudioBlobFromDB();
      if (localRecord && localRecord.blob) {
        const objectUrl = URL.createObjectURL(localRecord.blob);
        applyActiveSong(objectUrl, localRecord.title || localRecord.name || 'File MP3 Tersimpan 🎵', 'indexeddb', false);
        return;
      }

      // 2. Check localStorage for previously saved song URL or preset
      const savedSongUrl = localStorage.getItem('savedSongUrl');
      const savedSongTitle = localStorage.getItem('savedSongTitle');
      if (savedSongUrl) {
        applyActiveSong(savedSongUrl, savedSongTitle || 'Lagu Kenangan 🎵', 'local', false);
        return;
      }

      // 3. Fallback to default assets/music.mp3
      applyActiveSong('assets/music.mp3', 'Melodi Ketenangan Alam 🍃', 'default', false);
    } catch (e) {
      console.warn('initPersistentAudio error:', e);
    }
  }

  // Initialize persistent audio immediately
  initPersistentAudio();

  // --- SYNC PHOTOS HELPER ---
  function setBoyPhoto(src) {
    if (imgBoy) imgBoy.src = src;
    if (waAvatarBoy) waAvatarBoy.src = src;
  }

  function setGirlPhoto(src) {
    if (imgGirl) imgGirl.src = src;
    if (waAvatarGirl) waAvatarGirl.src = src;
  }

  // --- HEARTBREAK COUNTER (Dihitung dari 2 Juli sampai Hari Ini) ---
  function updateLoveCounter() {
    const now = new Date();
    // 2 Juli (Bulan 6 = Juli di JavaScript Date)
    const currentYear = now.getFullYear();
    const startYear = (currentYear < 2026) ? currentYear : 2026;
    let startDate = new Date(startYear, 6, 2, 0, 0, 0);

    let diff = now.getTime() - startDate.getTime();
    if (diff < 0) {
      // Jika waktu sistem sebelum 2 Juli tahun tersebut, gunakan 2 Juli tahun sebelumnya
      startDate = new Date(currentYear - 1, 6, 2, 0, 0, 0);
      diff = Math.max(0, now.getTime() - startDate.getTime());
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    if (countDays) countDays.textContent = days.toLocaleString('id-ID');
    if (countHours) countHours.textContent = String(hours).padStart(2, '0');
    if (countMinutes) countMinutes.textContent = String(minutes).padStart(2, '0');
    if (countSeconds) countSeconds.textContent = String(seconds).padStart(2, '0');
  }

  setInterval(updateLoveCounter, 1000);
  updateLoveCounter();

  // --- TYPEWRITER EFFECT ---
  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  function typeWriter() {
    const currentPhrase = TYPEWRITER_PHRASES[phraseIdx];

    if (isDeleting) {
      typewriterText.textContent = currentPhrase.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 40;
    } else {
      typewriterText.textContent = currentPhrase.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 85;
    }

    if (!isDeleting && charIdx === currentPhrase.length) {
      typingSpeed = 2400; // Pause at end of sentence
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % TYPEWRITER_PHRASES.length;
      typingSpeed = 600;
    }

    setTimeout(typeWriter, typingSpeed);
  }

  typeWriter();

  // --- FLOATING NATURE PARTICLES & HEARTS (LIGHTWEIGHT BURST FX) ---
  const NATURE_SYMBOLS = ['🌿', '🍃', '🌱', '✨', '💚', '🌻', '🕊️', '🤍'];

  function spawnBurstHearts(x, y, count = 10) {
    for (let i = 0; i < count; i++) {
      const heart = document.createElement('div');
      heart.className = 'floating-heart-burst';
      heart.textContent = NATURE_SYMBOLS[Math.floor(Math.random() * NATURE_SYMBOLS.length)];

      const size = Math.random() * 16 + 14;
      const tx = (Math.random() - 0.5) * 180;
      const ty = -(Math.random() * 150 + 60);
      const rot = (Math.random() - 0.5) * 90;

      heart.style.left = `${x}px`;
      heart.style.top = `${y}px`;
      heart.style.fontSize = `${size}px`;
      heart.style.setProperty('--tx', `${tx}px`);
      heart.style.setProperty('--ty', `${ty}px`);
      heart.style.setProperty('--rot', `${rot}deg`);

      document.body.appendChild(heart);

      setTimeout(() => {
        if (heart.parentNode) {
          heart.parentNode.removeChild(heart);
        }
      }, 1400);
    }
  }

  // --- SAD SPEECH BUBBLE FOR PHOTOS ---
  function showCuteBubble(frameElement, quoteList) {
    const existing = frameElement.querySelector('.cute-bubble');
    if (existing) existing.remove();

    const quote = quoteList[Math.floor(Math.random() * quoteList.length)];
    const bubble = document.createElement('div');
    bubble.className = 'cute-bubble';
    bubble.textContent = quote;

    frameElement.appendChild(bubble);

    requestAnimationFrame(() => {
      bubble.classList.add('show');
    });

    setTimeout(() => {
      bubble.classList.remove('show');
      setTimeout(() => bubble.remove(), 400);
    }, 3200);
  }

  // --- 3D TILT EFFECT ON CARDS ---
  function handleTilt(e, card) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(600px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.03, 1.03, 1.03)`;
  }

  function resetTilt(card) {
    card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  }

  [boyFrame, girlFrame].forEach(wrapper => {
    const frame = wrapper.querySelector('.photo-frame');
    frame.addEventListener('mousemove', e => handleTilt(e, frame));
    frame.addEventListener('mouseleave', () => resetTilt(frame));
  });

  // --- INTERACTIVE EVENTS ---

  // Curtain entrance
  openCurtainBtn.addEventListener('click', () => {
    initAudioContext();
    curtainOverlay.classList.add('hidden');
    toggleMusic(true);

    const rect = openCurtainBtn.getBoundingClientRect();
    spawnBurstHearts(rect.left + rect.width / 2, rect.top, 25);
    playClickSfx(true);
    scrollChatToBottom(false);
  });

  // Music toggle
  musicPlayer.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMusic();
    playClickSfx();
  });

  // Photo Click (Erlang)
  boyFrame.querySelector('.photo-frame').addEventListener('click', (e) => {
    if (e.target.closest('.photo-change-btn')) return;
    const rect = boyFrame.getBoundingClientRect();
    spawnBurstHearts(rect.left + rect.width / 2, rect.top + rect.height / 3, 12);
    showCuteBubble(boyFrame, BOY_QUOTES);
    playClickSfx(true);
  });

  // Photo Click (Cindy)
  girlFrame.querySelector('.photo-frame').addEventListener('click', (e) => {
    if (e.target.closest('.photo-change-btn')) return;
    const rect = girlFrame.getBoundingClientRect();
    spawnBurstHearts(rect.left + rect.width / 2, rect.top + rect.height / 3, 12);
    showCuteBubble(girlFrame, GIRL_QUOTES);
    playClickSfx();
  });

  // Camera buttons for direct photo replacement
  changeBoyPhotoBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    directBoyFileInput.click();
  });

  changeGirlPhotoBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    directGirlFileInput.click();
  });

  // Helper to compress photo before uploading to cloud and localStorage (Fast & multi-device friendly)
  function compressImage(file, maxDimension = 800, quality = 0.85) {
    return new Promise((resolve) => {
      if (!file || !file.type.startsWith('image/')) {
        resolve(null);
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          let w = img.width;
          let h = img.height;
          if (w > maxDimension || h > maxDimension) {
            if (w > h) {
              h = Math.round((h * maxDimension) / w);
              w = maxDimension;
            } else {
              w = Math.round((w * maxDimension) / h);
              h = maxDimension;
            }
          }
          const canvas = document.createElement('canvas');
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, w, h);
          const compressed = canvas.toDataURL('image/jpeg', quality);
          resolve(compressed);
        };
        img.onerror = () => resolve(e.target.result);
        img.src = e.target.result;
      };
      reader.onerror = () => resolve(null);
      reader.readAsDataURL(file);
    });
  }

  directBoyFileInput.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (file) {
      const dataUrl = await compressImage(file);
      if (dataUrl) {
        setBoyPhoto(dataUrl);
        try { localStorage.setItem('savedBoyPhoto', dataUrl); } catch (err) {}
        pushMediaToCloud({ boyPhoto: dataUrl });
        spawnBurstHearts(window.innerWidth / 3, window.innerHeight / 2, 20);
        playClickSfx(true);
      }
    }
  });

  directGirlFileInput.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (file) {
      const dataUrl = await compressImage(file);
      if (dataUrl) {
        setGirlPhoto(dataUrl);
        try { localStorage.setItem('savedGirlPhoto', dataUrl); } catch (err) {}
        pushMediaToCloud({ girlPhoto: dataUrl });
        spawnBurstHearts((window.innerWidth * 2) / 3, window.innerHeight / 2, 20);
        playClickSfx(true);
      }
    }
  });

  // Center Broken Heart Click
  [centerBeatHeart, interactiveHeartEmblem].forEach(el => {
    if (!el) return;
    el.addEventListener('click', (e) => {
      const rect = el.getBoundingClientRect();
      spawnBurstHearts(rect.left + rect.width / 2, rect.top + rect.height / 2, 25);
      playClickSfx(true);
    });
  });

  // --- BUTTON ACTIONS ---

  // Tangis 26 November Button
  sendLoveBtn.addEventListener('click', (e) => {
    const rect = sendLoveBtn.getBoundingClientRect();
    spawnBurstHearts(rect.left + rect.width / 2, rect.top, 25);
    playClickSfx(true);

    setTimeout(() => {
      spawnBurstHearts(window.innerWidth / 2, window.innerHeight / 2, 20);
    }, 200);
  });

  // Surat Tak Tersampaikan Modal
  openLetterBtn.addEventListener('click', () => {
    letterModal.classList.add('active');
    playClickSfx();
  });

  closeLetterBtn.addEventListener('click', () => {
    letterModal.classList.remove('active');
  });

  letterLoveBurstBtn.addEventListener('click', () => {
    const rect = letterLoveBurstBtn.getBoundingClientRect();
    spawnBurstHearts(rect.left + rect.width / 2, rect.top, 25);
    playClickSfx(true);
    setTimeout(() => {
      letterModal.classList.remove('active');
    }, 600);
  });

  // Alasan Cindy Nolak Modal
  let currentReasonIdx = 0;
  function showNextReason() {
    currentReasonIdx = (currentReasonIdx + 1) % REJECTION_REASONS.length;
    reasonText.style.animation = 'none';
    requestAnimationFrame(() => {
      reasonText.textContent = `"${REJECTION_REASONS[currentReasonIdx]}"`;
      reasonText.style.animation = 'popIn 0.3s ease-out';
    });
  }

  reasonsBtn.addEventListener('click', () => {
    reasonModal.classList.add('active');
    showNextReason();
    playClickSfx();
  });

  closeReasonBtn.addEventListener('click', () => {
    reasonModal.classList.remove('active');
    playClickSfx();
  });

  nextReasonBtn.addEventListener('click', () => {
    showNextReason();
    const rect = nextReasonBtn.getBoundingClientRect();
    spawnBurstHearts(rect.left + rect.width / 2, rect.top, 10);
    playClickSfx(true);
  });

  // Settings Modal (Ganti Foto Cindy, Foto Erlang & Lagu MP3)
  settingsBtn.addEventListener('click', () => {
    settingsModal.classList.add('active');
    playClickSfx();
  });

  closeSettingsBtn.addEventListener('click', () => {
    settingsModal.classList.remove('active');
    playClickSfx();
  });

  // Preset Song 1-Click Select Buttons
  document.querySelectorAll('.preset-song-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const url = btn.dataset.songUrl;
      const title = btn.dataset.songName;
      if (!url) return;

      // Clear local IndexedDB blob override so preset song takes over
      await clearAudioBlobFromDB();
      applyActiveSong(url, title, 'preset', true);
      toggleMusic(true);

      // Instantly sync preset song to Firebase RTDB
      pushMediaToCloud({ songUrl: url, songTitle: title });

      if (inputSongFile) inputSongFile.value = '';
      if (inputSongUrl) inputSongUrl.value = '';

      spawnBurstHearts(window.innerWidth / 2, window.innerHeight / 2, 20);
      playClickSfx(true);
    });
  });

  saveSettingsBtn.addEventListener('click', async () => {
    let cloudMediaPayload = {};

    // 1. Process Boy Photo (File or URL)
    if (inputBoyFile && inputBoyFile.files[0]) {
      const dataUrl = await compressImage(inputBoyFile.files[0]);
      if (dataUrl) {
        setBoyPhoto(dataUrl);
        try { localStorage.setItem('savedBoyPhoto', dataUrl); } catch (err) {}
        cloudMediaPayload.boyPhoto = dataUrl;
      }
    } else if (inputBoyUrl && inputBoyUrl.value.trim()) {
      const url = inputBoyUrl.value.trim();
      setBoyPhoto(url);
      try { localStorage.setItem('savedBoyPhoto', url); } catch (err) {}
      cloudMediaPayload.boyPhoto = url;
    }

    // 2. Process Girl Photo (File or URL)
    if (inputGirlFile && inputGirlFile.files[0]) {
      const dataUrl = await compressImage(inputGirlFile.files[0]);
      if (dataUrl) {
        setGirlPhoto(dataUrl);
        try { localStorage.setItem('savedGirlPhoto', dataUrl); } catch (err) {}
        cloudMediaPayload.girlPhoto = dataUrl;
      }
    } else if (inputGirlUrl && inputGirlUrl.value.trim()) {
      const url = inputGirlUrl.value.trim();
      setGirlPhoto(url);
      try { localStorage.setItem('savedGirlPhoto', url); } catch (err) {}
      cloudMediaPayload.girlPhoto = url;
    }

    // 3. Process Song (File or URL with IndexedDB and Cloud Sync)
    if (inputSongFile && inputSongFile.files[0]) {
      const file = inputSongFile.files[0];
      const title = file.name.replace(/\.[^/.]+$/, "");

      // A. Save permanently to browser's IndexedDB (never lost on refresh)
      await saveAudioBlobToDB(file, file.name, title);
      const objectUrl = URL.createObjectURL(file);
      applyActiveSong(objectUrl, title, 'indexeddb', false);
      toggleMusic(true);

      // B. If file size is <= 2.5MB, convert to Base64 to sync to Cindy's phone via Firebase RTDB
      if (file.size <= 2.5 * 1024 * 1024) {
        const base64Audio = await fileToBase64(file);
        if (base64Audio) {
          cloudMediaPayload.songUrl = base64Audio;
          cloudMediaPayload.songTitle = title;
        }
      }
    } else if (inputSongUrl && inputSongUrl.value.trim()) {
      const url = inputSongUrl.value.trim();
      await clearAudioBlobFromDB();
      applyActiveSong(url, 'Lagu Kenangan 🎵', 'url', true);
      cloudMediaPayload.songUrl = url;
      cloudMediaPayload.songTitle = 'Lagu Kenangan 🎵';
      toggleMusic(true);
    }

    if (Object.keys(cloudMediaPayload).length > 0) {
      await pushMediaToCloud(cloudMediaPayload);
    }

    settingsModal.classList.remove('active');
    spawnBurstHearts(window.innerWidth / 2, window.innerHeight / 2, 25);
    playClickSfx(true);
  });

  resetSettingsBtn.addEventListener('click', async () => {
    try {
      localStorage.removeItem('savedBoyPhoto');
      localStorage.removeItem('savedGirlPhoto');
      localStorage.removeItem('savedSongUrl');
      localStorage.removeItem('savedSongTitle');
    } catch (e) {}

    await clearAudioBlobFromDB();
    applyActiveSong('assets/music.mp3', 'Melodi Ketenangan Alam 🍃', 'default', false);

    setBoyPhoto('assets/boy-placeholder.svg');
    setGirlPhoto('assets/girl-placeholder.svg');
    pushMediaToCloud({
      boyPhoto: 'assets/boy-placeholder.svg',
      girlPhoto: 'assets/girl-placeholder.svg',
      songUrl: 'assets/music.mp3',
      songTitle: 'Melodi Ketenangan Alam 🍃'
    });

    if (inputBoyFile) inputBoyFile.value = '';
    if (inputBoyUrl) inputBoyUrl.value = '';
    if (inputGirlFile) inputGirlFile.value = '';
    if (inputGirlUrl) inputGirlUrl.value = '';
    if (inputSongFile) inputSongFile.value = '';
    if (inputSongUrl) inputSongUrl.value = '';

    settingsModal.classList.remove('active');
    playClickSfx();
  });

  // --- WHATSAPP CHAT BERDUA ENGINE (ERLANG & CINDY) ---
  const DEFAULT_CHAT_MESSAGES = [];
  const CHAT_STORAGE_KEY = 'erlangCindyChatMessages_v2';
  const CHAT_PAGE_SIZE = 12; // Ukuran pesan per halaman lazy loading
  let chatVisibleCount = CHAT_PAGE_SIZE;
  let isLazyLoadingChat = false;

  let chatMessages = [];
  // Default Cloud Database URL (Firebase Realtime Database)
  // Masukkan URL Firebase di sini agar SEMUA perangkat (Laptop, HP, HP Cindy) langsung otomatis tersinkronisasi tanpa perlu setting manual di HP
  const DEFAULT_CLOUD_DB_URL = 'https://cilang-apps-default-rtdb.firebaseio.com';
  let cloudDbUrl = localStorage.getItem('erlangCindyFirebaseUrl') || DEFAULT_CLOUD_DB_URL;

  // Load cached messages (Start clean without dummy data)
  try {
    const saved = localStorage.getItem(CHAT_STORAGE_KEY);
    if (saved) {
      chatMessages = JSON.parse(saved) || [];
    } else {
      chatMessages = [];
    }
  } catch (e) {
    chatMessages = [];
  }

  const MONTH_NAMES_ID = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];

  function formatWatermarkTime(dateObjOrTimestamp) {
    if (!dateObjOrTimestamp) return '';
    const d = (typeof dateObjOrTimestamp === 'number' || typeof dateObjOrTimestamp === 'string')
      ? new Date(dateObjOrTimestamp)
      : dateObjOrTimestamp;
    
    if (isNaN(d.getTime())) return String(dateObjOrTimestamp);

    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const month = MONTH_NAMES_ID[d.getMonth()] || '';
    const year = d.getFullYear();

    // Watermark: Jam, Tanggal, Bulan, Tahun (misal: "01:52 • 26 September 2026")
    return `${hours}:${minutes} • ${day} ${month} ${year}`;
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // Scroll to bottom of WhatsApp chat without causing page window jump
  function scrollChatToBottom(smooth = false) {
    if (!waMessagesBox) return;
    if (smooth) {
      waMessagesBox.scrollTo({
        top: waMessagesBox.scrollHeight,
        behavior: 'smooth'
      });
    } else {
      waMessagesBox.scrollTop = waMessagesBox.scrollHeight;
    }
  }

  // Load older messages lazily when scrolling up
  function loadOlderChatMessages() {
    if (isLazyLoadingChat) return;
    const totalCount = chatMessages.length;
    if (chatVisibleCount >= totalCount) return;

    isLazyLoadingChat = true;
    const lazyLoader = document.getElementById('waLazyLoader');
    if (lazyLoader) {
      lazyLoader.classList.add('loading');
      lazyLoader.innerHTML = `<span class="wa-lazy-spinner"></span> <span>Memuat pesan terdahulu... ⏳</span>`;
    }

    setTimeout(() => {
      if (!waMessagesBox) {
        isLazyLoadingChat = false;
        return;
      }
      const oldScrollHeight = waMessagesBox.scrollHeight;
      const oldScrollTop = waMessagesBox.scrollTop;

      // Increase visible message count by CHAT_PAGE_SIZE
      chatVisibleCount = Math.min(totalCount, chatVisibleCount + CHAT_PAGE_SIZE);

      // Re-render WITHOUT scrolling to bottom
      renderWhatsAppChat(false);

      // Seamless scroll position retention so user doesn't feel any jump
      const newScrollHeight = waMessagesBox.scrollHeight;
      const heightDiff = newScrollHeight - oldScrollHeight;
      waMessagesBox.scrollTop = oldScrollTop + heightDiff;

      isLazyLoadingChat = false;
    }, 280);
  }

  // Helper: Build single message row DOM node
  function createMessageRowElement(msg, isLatest) {
    const isErlang = msg.sender === 'Erlang' || (msg.sender && msg.sender.includes('Erlang'));
    const row = document.createElement('div');
    row.className = `wa-row ${isErlang ? 'wa-row-erlang' : 'wa-row-cindy'}${isLatest ? ' wa-row-latest' : ''}`;
    if (msg.id) row.dataset.msgId = msg.id;

    const bubbleClass = `${isErlang ? 'wa-bubble-erlang' : 'wa-bubble-cindy'}${isLatest ? ' wa-bubble-latest' : ''}`;
    const senderLabel = isErlang ? `${config.boyName} 🤵🏻` : `${config.girlName} 👸🏻`;

    const checkmark = (!isErlang) ? '<span class="wa-checkmarks" title="Terbaca">✓✓</span>' : '';
    const latestBadge = isLatest ? '<span class="wa-latest-pill">Terbaru 📌</span>' : '';

    let watermarkText = '';
    if (msg.timestamp) {
      watermarkText = formatWatermarkTime(msg.timestamp);
    } else if (msg.time && (msg.time.includes('September') || msg.time.includes('•') || msg.time.length > 8)) {
      watermarkText = msg.time;
    } else {
      watermarkText = msg.time ? `${msg.time} • 26 September 2026` : formatWatermarkTime(new Date());
    }

    row.innerHTML = `
      <div class="wa-bubble ${bubbleClass}">
        <span class="wa-bubble-author">${escapeHtml(senderLabel)}</span>
        <div class="wa-bubble-text">${escapeHtml(msg.text)}</div>
        <div class="wa-bubble-meta">
          ${latestBadge}
          <span class="wa-bubble-watermark" title="Waktu: Jam, Tanggal, Bulan, Tahun">${escapeHtml(watermarkText)}</span>
          ${checkmark}
        </div>
      </div>
    `;
    return row;
  }

  // Helper: Append single new message directly without destroying DOM or flickering
  function appendSingleChatMessage(newMsg, smoothScroll = true) {
    if (!waMessagesList) return;

    // Remove empty chat state if present
    const emptyDiv = waMessagesList.querySelector('.wa-empty-chat');
    if (emptyDiv) {
      waMessagesList.innerHTML = '';
    }

    // Demote previously latest bubble
    const prevLatestRow = waMessagesList.querySelector('.wa-row-latest');
    if (prevLatestRow) {
      prevLatestRow.classList.remove('wa-row-latest');
      const prevBubble = prevLatestRow.querySelector('.wa-bubble');
      if (prevBubble) prevBubble.classList.remove('wa-bubble-latest');
      const prevBadge = prevLatestRow.querySelector('.wa-latest-pill');
      if (prevBadge) prevBadge.remove();
    }

    // Create and append the new bubble
    const newRow = createMessageRowElement(newMsg, true);
    const bottomAnchor = document.getElementById('waChatBottomAnchor');
    if (bottomAnchor) {
      waMessagesList.insertBefore(newRow, bottomAnchor);
    } else {
      waMessagesList.appendChild(newRow);
      const anchor = document.createElement('div');
      anchor.id = 'waChatBottomAnchor';
      anchor.className = 'wa-bottom-anchor';
      waMessagesList.appendChild(anchor);
    }

    // Scroll internally inside the chat box
    scrollChatToBottom(smoothScroll);
  }

  // Render WhatsApp Bubbles (Sort by timestamp, latest at bottom, lazy loading older messages)
  function renderWhatsAppChat(scrollToBottom = true) {
    if (!waMessagesList) return;
    waMessagesList.innerHTML = '';

    // Empty state if no messages yet
    if (!chatMessages || chatMessages.length === 0) {
      waMessagesList.innerHTML = `
        <div class="wa-empty-chat">
          <span class="wa-empty-icon">🥀</span>
          <h4>Belum Ada Pesan yang Dikirim</h4>
          <p>Klik tombol <strong>"Tambah Pesan"</strong> di bawah untuk mulai menuliskan obrolan antara ${escapeHtml(config.boyName)} dan ${escapeHtml(config.girlName)}.</p>
        </div>
      `;
      if (waJumpBottomBtn) waJumpBottomBtn.classList.remove('visible');
      return;
    }

    // Sort ascending by timestamp (chronological)
    chatMessages.sort((a, b) => (Number(a.timestamp) || 0) - (Number(b.timestamp) || 0));

    const totalCount = chatMessages.length;
    if (chatVisibleCount < CHAT_PAGE_SIZE) chatVisibleCount = CHAT_PAGE_SIZE;

    const startIndex = Math.max(0, totalCount - chatVisibleCount);
    const visibleMessages = chatMessages.slice(startIndex);

    // Older messages trigger
    if (startIndex > 0) {
      const loaderDiv = document.createElement('div');
      loaderDiv.className = 'wa-lazy-loader';
      loaderDiv.id = 'waLazyLoader';
      loaderDiv.title = 'Scroll ke atas atau klik untuk memuat pesan terdahulu';
      loaderDiv.innerHTML = `
        <span class="wa-lazy-spinner"></span>
        <span class="wa-lazy-text">Gulir ke atas untuk memuat pesan lama (${startIndex} tersisa)...</span>
      `;
      loaderDiv.addEventListener('click', () => {
        loadOlderChatMessages();
      });
      waMessagesList.appendChild(loaderDiv);
    } else {
      const startDiv = document.createElement('div');
      startDiv.className = 'wa-start-indicator';
      startDiv.innerHTML = `<span>🥀 Awal mula cerita obrolan • 2 Juli 2026</span>`;
      waMessagesList.appendChild(startDiv);
    }

    visibleMessages.forEach((msg, idx) => {
      const globalIdx = startIndex + idx;
      const isLatest = (globalIdx === totalCount - 1);
      const row = createMessageRowElement(msg, isLatest);
      waMessagesList.appendChild(row);
    });

    // Anchor div at bottom
    const anchor = document.createElement('div');
    anchor.id = 'waChatBottomAnchor';
    anchor.className = 'wa-bottom-anchor';
    waMessagesList.appendChild(anchor);

    if (scrollToBottom) {
      scrollChatToBottom(false);
    }
  }

  // Fetch messages from Cloud (Firebase REST API) with smart diffing (no blinking, no unnecessary redraws)
  async function fetchMessagesFromCloud(silent = false) {
    if (!cloudDbUrl) return;

    try {
      let url = cloudDbUrl.trim().replace(/\/+$/, '');
      if (!url.endsWith('.json')) url += '/messages.json';

      const res = await fetch(url);
      if (!res.ok) throw new Error('Cloud fetch failed');
      const data = await res.json();

      if (data) {
        const fetchedList = [];
        Object.keys(data).forEach(key => {
          fetchedList.push({ id: key, ...data[key] });
        });

        // Urutkan berdasarkan timestamp ascending
        fetchedList.sort((a, b) => (Number(a.timestamp) || 0) - (Number(b.timestamp) || 0));

        if (fetchedList.length > 0) {
          const oldCount = chatMessages.length;

          // Bandingkan apakah data identik
          const isIdentical = (oldCount === fetchedList.length) &&
            (oldCount === 0 || 
             (chatMessages[oldCount - 1].id === fetchedList[fetchedList.length - 1].id &&
              chatMessages[oldCount - 1].text === fetchedList[fetchedList.length - 1].text));

          if (isIdentical) {
            // Data sudah sama, skip render untuk menghemat baterai & CPU!
            return;
          }

          // Jika hanya ada pesan baru yang bertambah di akhir
          if (oldCount > 0 && fetchedList.length > oldCount && fetchedList[oldCount - 1]?.id === chatMessages[oldCount - 1]?.id) {
            const newItems = fetchedList.slice(oldCount);
            chatMessages = fetchedList;
            try {
              localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(chatMessages));
            } catch (e) {}

            newItems.forEach(msg => appendSingleChatMessage(msg, !silent));
            if (!silent) playClickSfx(true);
            return;
          }

          // Initial load atau perubahan struktur
          chatMessages = fetchedList;
          try {
            localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(chatMessages));
          } catch (e) {}

          renderWhatsAppChat(!silent);

          if (!silent && chatMessages.length > oldCount) {
            playClickSfx(true);
          }
        }
      }
    } catch (err) {
      if (!silent) console.warn('Cloud sync note:', err.message);
    }
  }

  // Push message to Cloud
  async function pushMessageToCloud(msgObj) {
    if (!cloudDbUrl) return;

    try {
      let url = cloudDbUrl.trim().replace(/\/+$/, '');
      if (!url.endsWith('.json')) url += '/messages.json';

      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(msgObj)
      });
    } catch (e) {
      console.warn('Push to cloud error:', e);
    }
  }

  // Push media (photos/song) to Cloud
  async function pushMediaToCloud(mediaObj) {
    if (!cloudDbUrl || !mediaObj || Object.keys(mediaObj).length === 0) return;

    try {
      let baseUrl = cloudDbUrl.trim().replace(/\/+$/, '');
      let mediaEndpoint = baseUrl;
      if (mediaEndpoint.endsWith('.json')) {
        mediaEndpoint = mediaEndpoint.replace(/\/messages\.json$/, '/media.json').replace(/\.json$/, '/media.json');
      } else {
        mediaEndpoint += '/media.json';
      }

      await fetch(mediaEndpoint, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mediaObj)
      });
    } catch (e) {
      console.warn('Push media to cloud error:', e);
    }
  }

  // Fetch media (photos/song) from Cloud
  async function fetchMediaFromCloud() {
    if (!cloudDbUrl) return;

    try {
      let baseUrl = cloudDbUrl.trim().replace(/\/+$/, '');
      let mediaEndpoint = baseUrl;
      if (mediaEndpoint.endsWith('.json')) {
        mediaEndpoint = mediaEndpoint.replace(/\/messages\.json$/, '/media.json').replace(/\.json$/, '/media.json');
      } else {
        mediaEndpoint += '/media.json';
      }

      const res = await fetch(mediaEndpoint);
      if (!res.ok) return;
      const data = await res.json();

      if (data) {
        if (data.boyPhoto && imgBoy && imgBoy.src !== data.boyPhoto) {
          setBoyPhoto(data.boyPhoto);
          try { localStorage.setItem('savedBoyPhoto', data.boyPhoto); } catch (e) {}
        }
        if (data.girlPhoto && imgGirl && imgGirl.src !== data.girlPhoto) {
          setGirlPhoto(data.girlPhoto);
          try { localStorage.setItem('savedGirlPhoto', data.girlPhoto); } catch (e) {}
        }
        if (data.songUrl) {
          const localRecord = await getAudioBlobFromDB();
          if (!localRecord) {
            const currentSrc = bgmAudio ? (bgmAudio.getAttribute('src') || bgmAudio.src) : '';
            if (currentSrc !== data.songUrl) {
              applyActiveSong(data.songUrl, data.songTitle || 'Lagu Kenangan 🎵', 'cloud', true);
            }
          }
        }
      }
    } catch (e) {
      // Silent error for optional media sync
    }
  }

  // Open "Tambah Pesan" Modal
  if (waOpenAddModalBtn && waAddMessageModal) {
    waOpenAddModalBtn.addEventListener('click', () => {
      if (modalMessageTextarea) {
        modalMessageTextarea.value = '';
      }
      waAddMessageModal.classList.add('active');
      setTimeout(() => {
        if (modalMessageTextarea) modalMessageTextarea.focus();
      }, 100);
      playClickSfx();
    });
  }

  // Close "Tambah Pesan" Modal
  if (closeWaAddModalBtn && waAddMessageModal) {
    closeWaAddModalBtn.addEventListener('click', () => {
      waAddMessageModal.classList.remove('active');
      playClickSfx();
    });
  }

  // Quick Emoji Buttons inside Add Message Modal
  document.querySelectorAll('.modal-quick-emojis .btn-emoji-tag').forEach(btn => {
    btn.addEventListener('click', () => {
      const emoji = btn.getAttribute('data-emoji');
      if (modalMessageTextarea && emoji) {
        modalMessageTextarea.value += emoji;
        modalMessageTextarea.focus();
      }
    });
  });

  // Submit New Message from Modal Form
  if (waModalChatForm) {
    waModalChatForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const selectedRole = document.querySelector('input[name="modalSenderRole"]:checked');
      const sender = selectedRole ? selectedRole.value : 'Erlang';
      const text = modalMessageTextarea ? modalMessageTextarea.value.trim() : '';

      if (!text) return;

      const now = new Date();
      const timestamp = now.getTime();
      const watermarkFormatted = formatWatermarkTime(now);

      const newMsg = {
        id: 'msg-' + timestamp,
        sender: sender,
        text: text,
        time: watermarkFormatted,
        timestamp: timestamp
      };

      // Optimistic UI update: append directly without tearing down DOM or flickering
      chatMessages.push(newMsg);
      chatVisibleCount = Math.max(chatVisibleCount, chatMessages.length);
      try {
        localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(chatMessages));
      } catch (e) {}

      appendSingleChatMessage(newMsg, true);

      // Close modal and reset textarea
      if (modalMessageTextarea) modalMessageTextarea.value = '';
      if (waAddMessageModal) waAddMessageModal.classList.remove('active');

      // Push to Firebase Cloud (if configured)
      pushMessageToCloud(newMsg);

      // Also send to Netlify Form in background if hosted on Netlify
      try {
        const formData = new FormData(waModalChatForm);
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString()
        }).catch(() => {});
      } catch (e) {}

      // Visual & Sound Feedback
      if (waOpenAddModalBtn) {
        const rect = waOpenAddModalBtn.getBoundingClientRect();
        spawnBurstHearts(rect.left + rect.width / 2, rect.top, 16);
      }
      playClickSfx(sender === 'Erlang');
    });
  }

  // Scroll event on waMessagesBox (Reverse Lazy Loading on scroll up & Jump-to-bottom button)
  if (waMessagesBox) {
    waMessagesBox.addEventListener('scroll', () => {
      // 1. Lazy loading check: Ketika scroll mendekati atas (<= 50px), muat batch pesan sebelumnya
      if (waMessagesBox.scrollTop <= 50) {
        if (!isLazyLoadingChat && chatMessages.length > chatVisibleCount) {
          loadOlderChatMessages();
        }
      }

      // 2. Tombol shortcut kembali ke pesan terbaru
      if (waJumpBottomBtn) {
        const distFromBottom = waMessagesBox.scrollHeight - waMessagesBox.scrollTop - waMessagesBox.clientHeight;
        if (distFromBottom > 75) {
          waJumpBottomBtn.classList.add('visible');
        } else {
          waJumpBottomBtn.classList.remove('visible');
        }
      }
    });

    if (waJumpBottomBtn) {
      waJumpBottomBtn.addEventListener('click', () => {
        scrollChatToBottom(true);
        waJumpBottomBtn.classList.remove('visible');
        playClickSfx();
      });
    }
  }

  // Auto scroll to bottom of chat container when user scrolls down to chat section
  if ('IntersectionObserver' in window && waChatSection) {
    const chatObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          scrollChatToBottom(false);
        }
      });
    }, { threshold: 0.15 });
    chatObserver.observe(waChatSection);
  }

  window.addEventListener('load', () => {
    scrollChatToBottom(false);
  });

  // Auto-sync initial local cache to Firebase if Firebase is currently empty
  async function autoSyncLocalToCloudIfEmpty() {
    if (!cloudDbUrl) return;

    try {
      // 1. Check if media exists in cloud
      let baseUrl = cloudDbUrl.trim().replace(/\/+$/, '');
      const mediaRes = await fetch(baseUrl + '/media.json');
      if (mediaRes.ok) {
        const cloudMedia = await mediaRes.json();
        if (!cloudMedia) {
          const savedBoy = localStorage.getItem('savedBoyPhoto');
          const savedGirl = localStorage.getItem('savedGirlPhoto');
          const savedSong = localStorage.getItem('savedSongUrl');
          const savedSongTitle = localStorage.getItem('savedSongTitle');
          const seedMedia = {};
          if (savedBoy) seedMedia.boyPhoto = savedBoy;
          if (savedGirl) seedMedia.girlPhoto = savedGirl;
          if (savedSong) {
            seedMedia.songUrl = savedSong;
            seedMedia.songTitle = savedSongTitle || 'Lagu Kenangan 🎵';
          }
          if (Object.keys(seedMedia).length > 0) {
            await pushMediaToCloud(seedMedia);
          }
        }
      }

      // 2. Check if messages exist in cloud
      const msgRes = await fetch(baseUrl + '/messages.json');
      if (msgRes.ok) {
        const cloudMsgs = await msgRes.json();
        if (!cloudMsgs && chatMessages && chatMessages.length > 0) {
          for (const msg of chatMessages) {
            await pushMessageToCloud(msg);
          }
        }
      }
    } catch (e) {}
  }

  // Initial render & Cloud fetch on page load
  renderWhatsAppChat(true);
  (async () => {
    await autoSyncLocalToCloudIfEmpty();
    fetchMessagesFromCloud(true);
    fetchMediaFromCloud();
  })();

  // Background auto-polling (every 4.5 seconds so Erlang & Cindy see new chats and photo/music updates live!)
  // Background auto-polling (smart poll: only when tab is visible, every 6 seconds)
  setInterval(() => {
    if (cloudDbUrl && !document.hidden) {
      fetchMessagesFromCloud(true);
      fetchMediaFromCloud();
    }
  }, 6000);

  // Close modals when clicking backdrop
  [letterModal, reasonModal, settingsModal, waAddMessageModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
        }
      });
    }
  });

  function applyConfig() {
    nameBoy.textContent = config.boyName;
    nameGirl.textContent = config.girlName;
    labelBoy.textContent = `${config.boyName} (Belajar Ikhlas) 🍃`;
    labelGirl.textContent = `${config.girlName} (Semoga Bahagia) ✨`;
    letterSignName.textContent = `${config.boyName} 🌿`;
    updateLoveCounter();
  }

  try {
    const savedBoyImg = localStorage.getItem('savedBoyPhoto');
    if (savedBoyImg) {
      setBoyPhoto(savedBoyImg);
    } else {
      // Auto-detect permanent boy photo from assets if placed before deploy
      const testBoy = new Image();
      testBoy.onload = () => { setBoyPhoto(testBoy.src); };
      testBoy.src = 'assets/boy.jpg';
    }

    const savedGirlImg = localStorage.getItem('savedGirlPhoto');
    if (savedGirlImg) {
      setGirlPhoto(savedGirlImg);
    } else {
      // Auto-detect permanent girl photo from assets if placed before deploy
      const testGirl = new Image();
      testGirl.onload = () => { setGirlPhoto(testGirl.src); };
      testGirl.src = 'assets/girl.jpg';
    }
  } catch (e) {}

  applyConfig();

  // --- BACKGROUND CANVAS (LIGHTWEIGHT NATURE FALLING LEAVES & GOLDEN SPORES) ---
  const canvas = document.getElementById('loveCanvas');
  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  class Particle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : -20;
      this.size = Math.random() * 6 + 6;
      this.speedY = Math.random() * 1.2 + 0.6;
      this.speedX = Math.sin(Math.random() * Math.PI) * 0.7 - 0.2;
      this.angle = Math.random() * Math.PI * 2;
      this.angularSpeed = (Math.random() - 0.5) * 0.03;
      this.opacity = Math.random() * 0.35 + 0.25;
      
      const rand = Math.random();
      if (rand < 0.55) {
        this.type = 'leaf';
        this.color = Math.random() > 0.5 ? '#74c69d' : '#52b788';
      } else if (rand < 0.8) {
        this.type = 'spore';
        this.color = '#ffd166';
      } else {
        this.type = 'petal';
        this.color = '#d8f3dc';
      }
    }

    update() {
      this.y += this.speedY;
      this.x += this.speedX + Math.sin(this.y * 0.015) * 0.4;
      this.angle += this.angularSpeed;

      if (this.y > height + 20 || this.x < -20 || this.x > width + 20) {
        this.reset();
      }
    }

    draw() {
      if (this.type === 'spore') {
        // High performance glowing circle (no save/restore)
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 0.32, 0, Math.PI * 2);
        ctx.fill();
        return;
      }

      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      ctx.globalAlpha = this.opacity;
      ctx.fillStyle = this.color;

      ctx.beginPath();
      const s = this.size;
      // Smooth organic leaf / petal shape using quadratic curves
      ctx.moveTo(0, -s);
      ctx.quadraticCurveTo(s * 0.65, 0, 0, s);
      ctx.quadraticCurveTo(-s * 0.65, 0, 0, -s);
      ctx.fill();

      ctx.restore();
    }
  }

  // Adaptive particle count for maximum 60fps smoothness and low battery load
  const isMobileScreen = (window.innerWidth || 800) < 768;
  const PARTICLE_COUNT = isMobileScreen ? 8 : 13;
  const particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle());

  let isCanvasActive = true;
  let animFrameId = null;

  function animateCanvas() {
    if (!isCanvasActive) return;
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    animFrameId = requestAnimationFrame(animateCanvas);
  }

  // Pause canvas when user switches tab or locks phone screen to conserve battery and CPU
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      isCanvasActive = false;
      if (animFrameId) cancelAnimationFrame(animFrameId);
    } else {
      if (!isCanvasActive) {
        isCanvasActive = true;
        animFrameId = requestAnimationFrame(animateCanvas);
      }
    }
  });

  animateCanvas();

})();
