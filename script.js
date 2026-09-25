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

  // Erlang's sad thoughts when his photo is clicked (from real chat)
  const BOY_QUOTES = [
    'Makasih udah nolak ya Cindy, aku sayang sama kamu 🥀',
    'Aku udah berapa kali nembak kamu? 7 kali, nomornya Ronaldo 💔',
    'Sayang banget 2 juta 5 ratus 90 ribu... 🥀',
    'Yahh... gaada lagi yang bisa nemenin cerita di malam hari :((',
    'Gaada yang bisa nyanyiin Olivia Rodrigo - Purple lagi :(( 💜',
    'Tangan udah gemeter, ngoding sambil nangis di subuh 26 September 😭',
    'Persembahan dari aku seorang IT guy yang lugu sebelum kita tanpa komunikasi lagi 🥀'
  ];

  // Cindy's rejection words when her photo is clicked (from real chat)
  const GIRL_QUOTES = [
    'Ga nolak, aku loh menyelamatkan kamu dari aku 💔',
    'Aku sayang sama kamu juga, banget banget... tapi love is supposed to be easy 🌧️',
    'Aku complicated banget, aku tau aku bakal membebani kamu nantinya 🥀',
    'Orang yang kayak kamu harusnya gak sama orang yang kayak aku, aku tau...',
    'I dont deserve you at all... please tidur aja, besok kamu kerja pagi 🌧️'
  ];

  // Cindy's real rejection reasons directly from the chat
  const REJECTION_REASONS = [
    'Gak nolak, aku loh menyelamatkan kamu dari aku.',
    'Aku complicated banget, aku tau aku bakal membebani kamu nantinya.',
    'Aku tau kamu pantes dapet yang lebih baik, jauh lebih baik... biar kamu gaperlu banyak menyesuaikan diri lagi karena emang udah cocok dari awal.',
    'Aku sayang banget sama kamu sampe aku bisa tau kalau aku pasti, pasti banget, bakal nyusahin kamu kedepannya.',
    'Orang yang kayak kamu harusnya gak sama orang yang kayak aku, aku tau.',
    'I\'m trying my best to save you from me... tapi aku tau kamu pasti bakal susah nantinya kalau sama aku, love is supposed to be easy.',
    'Aku gak deserve nerima kebaikan-kebaikan kamu. Aku gak cukup baik, gak cukup keren, gak cukup hebat, gak cukup cantik buat kamu.',
    'Karena sayang aja gak cukup... apakah sayang aku ini bisa bikin semuanya jadi less complicated? Enggak juga. Apakah sayang aku ini bisa bikin kamu happy sama aku? Tetep enggak juga.',
    'Aku gamau kamu dapet omongan yang jelek-jelek gegara kamu macarin aku. Aku ini emang masalah buat semua orang.',
    'Aku juga pengen banget jadi sesuatu yang "cukup" untuk kamu, tapi aku bukan apa-apa...',
    'Serius aku nolak bukan karena aku gak sayang kamu atau apa, tapi aku tau kalau kamu sama aku pasti banyak banget masalah yang harus kita lewatin nantinya.'
  ];

  // Melancholic typewriter subtitle phrases
  const TYPEWRITER_PHRASES = [
    '"Makasih udah nolak aku 7 kali, 7 adalah nomornya Ronaldo..."',
    '"Sayang banget 2 juta 5 ratus 90 ribu..."',
    '"Gaada lagi yang bisa nemenin cerita di malam hari... gaada yang nyanyiin Olivia Rodrigo - Purple lagi"',
    '"Gak nolak, aku loh menyelamatkan kamu dari aku... - Cindy"',
    '"Ngoding sambil nangis... persembahan dari seorang IT guy yang lugu"',
    '"2 Juli 2026 pertama DM di IG, subuh 26 September 2026 harus merelakan..."'
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
  const waRefreshBtn = document.getElementById('waRefreshBtn');
  const waCloudSetupBtn = document.getElementById('waCloudSetupBtn');
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

  // Cloud Sync Modal Elements
  const cloudModal = document.getElementById('cloudModal');
  const closeCloudBtn = document.getElementById('closeCloudBtn');
  const inputFirebaseUrl = document.getElementById('inputFirebaseUrl');
  const testCloudBtn = document.getElementById('testCloudBtn');
  const cloudStatusFeedback = document.getElementById('cloudStatusFeedback');
  const saveCloudBtn = document.getElementById('saveCloudBtn');
  const resetCloudBtn = document.getElementById('resetCloudBtn');

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

  // Sad ballad frequencies in A Minor & D Minor (Emotional, Heart-wrenching)
  // Chords: Am -> Em -> Fmaj7 -> G -> Dm -> Am
  const SAD_MELODY_FREQS = [
    440.00, 523.25, 659.25, 523.25, 440.00, 329.63, 392.00, 493.88, // A4 C5 E5 C5 A4 E4 G4 B4
    349.23, 440.00, 523.25, 659.25, 523.25, 440.00, 392.00, 493.88, // F4 A4 C5 E5 C5 A4 G4 B4
    293.66, 349.23, 440.00, 587.33, 523.25, 440.00, 392.00, 349.23, // D4 F4 A4 D5 C5 A4 G4 F4
    440.00, 493.88, 523.25, 440.00, 392.00, 329.63, 293.66, 220.00  // A4 B4 C5 A4 G4 E4 D4 A3
  ];

  function playSadNote(freq) {
    if (!audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      // Soft melancholic tone (sine + gentle reverb decay)
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      const now = audioCtx.currentTime;
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(0.14, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(now);
      osc.stop(now + 1.65);
    } catch (e) {
      console.warn('Synth note error:', e);
    }
  }

  // Sad teardrop / click SFX
  function playClickSfx(isTear = false) {
    if (!audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const now = audioCtx.currentTime;

      osc.type = 'sine';
      const baseFreq = isTear ? 880 : 440;
      osc.frequency.setValueAtTime(baseFreq, now);
      osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.5, now + 0.2);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.28);
    } catch (e) {}
  }

  function startSynthMelody() {
    if (synthInterval) clearInterval(synthInterval);
    currentNoteIdx = 0;
    synthInterval = setInterval(() => {
      if (isMusicPlaying && !customAudioLoaded) {
        const freq = SAD_MELODY_FREQS[currentNoteIdx];
        playSadNote(freq);
        currentNoteIdx = (currentNoteIdx + 1) % SAD_MELODY_FREQS.length;
      }
    }, 550); // Slower tempo for sad feeling
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
          setMusicUI(true, 'Memutar lagu galau 🌧️');
        }).catch(() => {
          customAudioLoaded = false;
          startSynthMelody();
          setMusicUI(true, 'Melodi Patah Hati 💔');
        });
      } else {
        customAudioLoaded = false;
        startSynthMelody();
        setMusicUI(true, 'Melodi Patah Hati 💔');
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

  // --- FLOATING TEARS & BROKEN HEARTS (BURST FX) ---
  const SAD_SYMBOLS = ['💔', '🥀', '🌧️', '💧', '🩹', '✨', '🖤'];

  function spawnBurstHearts(x, y, count = 18) {
    for (let i = 0; i < count; i++) {
      const heart = document.createElement('div');
      heart.className = 'floating-heart-burst';
      heart.textContent = SAD_SYMBOLS[Math.floor(Math.random() * SAD_SYMBOLS.length)];

      const size = Math.random() * 20 + 16;
      const tx = (Math.random() - 0.5) * 260;
      const ty = -(Math.random() * 200 + 80);
      const rot = (Math.random() - 0.5) * 120;

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
      }, 2100);
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

  directBoyFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setBoyPhoto(event.target.result);
        try {
          localStorage.setItem('savedBoyPhoto', event.target.result);
        } catch (err) {}
      };
      reader.readAsDataURL(file);
    }
  });

  directGirlFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setGirlPhoto(event.target.result);
        try {
          localStorage.setItem('savedGirlPhoto', event.target.result);
        } catch (err) {}
      };
      reader.readAsDataURL(file);
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

  // Tap anywhere on screen to spawn teardrop/broken heart
  document.addEventListener('click', (e) => {
    if (e.target.closest('button') || e.target.closest('input') || e.target.closest('.modal-card')) {
      return;
    }
    spawnBurstHearts(e.clientX, e.clientY, 3);
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
  });

  saveSettingsBtn.addEventListener('click', () => {
    let cloudMediaPayload = {};

    // 1. Process Boy Photo (File or URL)
    if (inputBoyFile && inputBoyFile.files[0]) {
      const r = new FileReader();
      r.onload = e => {
        setBoyPhoto(e.target.result);
        try { localStorage.setItem('savedBoyPhoto', e.target.result); } catch (err) {}
        cloudMediaPayload.boyPhoto = e.target.result;
        pushMediaToCloud(cloudMediaPayload);
      };
      r.readAsDataURL(inputBoyFile.files[0]);
    } else if (inputBoyUrl && inputBoyUrl.value.trim()) {
      const url = inputBoyUrl.value.trim();
      setBoyPhoto(url);
      try { localStorage.setItem('savedBoyPhoto', url); } catch (err) {}
      cloudMediaPayload.boyPhoto = url;
    }

    // 2. Process Girl Photo (File or URL)
    if (inputGirlFile && inputGirlFile.files[0]) {
      const r = new FileReader();
      r.onload = e => {
        setGirlPhoto(e.target.result);
        try { localStorage.setItem('savedGirlPhoto', e.target.result); } catch (err) {}
        cloudMediaPayload.girlPhoto = e.target.result;
        pushMediaToCloud(cloudMediaPayload);
      };
      r.readAsDataURL(inputGirlFile.files[0]);
    } else if (inputGirlUrl && inputGirlUrl.value.trim()) {
      const url = inputGirlUrl.value.trim();
      setGirlPhoto(url);
      try { localStorage.setItem('savedGirlPhoto', url); } catch (err) {}
      cloudMediaPayload.girlPhoto = url;
    }

    // 3. Process Song (File or URL)
    if (inputSongFile && inputSongFile.files[0]) {
      const url = URL.createObjectURL(inputSongFile.files[0]);
      bgmAudio.src = url;
      customAudioLoaded = true;
      musicTitle.textContent = inputSongFile.files[0].name.replace(/\.[^/.]+$/, "");
      toggleMusic(true);
    } else if (inputSongUrl && inputSongUrl.value.trim()) {
      const url = inputSongUrl.value.trim();
      bgmAudio.src = url;
      customAudioLoaded = true;
      musicTitle.textContent = "Lagu Kenangan 🎵";
      cloudMediaPayload.songUrl = url;
      cloudMediaPayload.songTitle = "Lagu Kenangan 🎵";
      toggleMusic(true);
    }

    if (Object.keys(cloudMediaPayload).length > 0) {
      pushMediaToCloud(cloudMediaPayload);
    }

    settingsModal.classList.remove('active');
    spawnBurstHearts(window.innerWidth / 2, window.innerHeight / 2, 25);
    playClickSfx(true);
  });

  resetSettingsBtn.addEventListener('click', () => {
    try {
      localStorage.removeItem('savedBoyPhoto');
      localStorage.removeItem('savedGirlPhoto');
    } catch (e) {}

    setBoyPhoto('assets/boy-placeholder.svg');
    setGirlPhoto('assets/girl-placeholder.svg');
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

  let chatMessages = [];
  let cloudDbUrl = localStorage.getItem('erlangCindyFirebaseUrl') || '';

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

  // Scroll to bottom of WhatsApp chat like official WhatsApp
  function scrollChatToBottom(smooth = false) {
    if (!waMessagesBox) return;

    const doScroll = () => {
      waMessagesBox.scrollTo({
        top: waMessagesBox.scrollHeight + 1000,
        behavior: smooth ? 'smooth' : 'auto'
      });
      const bottomAnchor = document.getElementById('waChatBottomAnchor');
      if (bottomAnchor) {
        bottomAnchor.scrollIntoView({
          behavior: smooth ? 'smooth' : 'auto',
          block: 'end'
        });
      }
    };

    doScroll();
    requestAnimationFrame(doScroll);
    setTimeout(doScroll, 40);
    setTimeout(doScroll, 120);
    setTimeout(doScroll, 300);
  }

  // Render WhatsApp Bubbles (Sort by timestamp, latest at bottom)
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

    // Sort ascending by timestamp (chat chronologically: oldest at top, newest at bottom)
    chatMessages.sort((a, b) => (Number(a.timestamp) || 0) - (Number(b.timestamp) || 0));

    const totalCount = chatMessages.length;

    chatMessages.forEach((msg, idx) => {
      const isErlang = msg.sender === 'Erlang' || (msg.sender && msg.sender.includes('Erlang'));
      const isLatest = (idx === totalCount - 1);

      const row = document.createElement('div');
      row.className = `wa-row ${isErlang ? 'wa-row-erlang' : 'wa-row-cindy'}${isLatest ? ' wa-row-latest' : ''}`;

      const bubbleClass = `${isErlang ? 'wa-bubble-erlang' : 'wa-bubble-cindy'}${isLatest ? ' wa-bubble-latest' : ''}`;
      const senderLabel = isErlang ? `${config.boyName} 🤵🏻` : `${config.girlName} 👸🏻`;

      // Sesuai layout: Erlang di kiri, Cindy di kanan. Cindy sebagai bubble di kanan mendapat checkmarks WhatsApp terbaca
      const checkmark = (!isErlang) ? '<span class="wa-checkmarks" title="Terbaca">✓✓</span>' : '';
      const latestBadge = isLatest ? '<span class="wa-latest-pill">Terbaru 📌</span>' : '';

      // Watermark jam, tanggal, bulan, tahun
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

      waMessagesList.appendChild(row);
    });

    // Anchor div at bottom for 100% reliable scrollIntoView
    const anchor = document.createElement('div');
    anchor.id = 'waChatBottomAnchor';
    anchor.className = 'wa-bottom-anchor';
    waMessagesList.appendChild(anchor);

    if (scrollToBottom) {
      scrollChatToBottom(false);
    }
  }

  // Fetch messages from Cloud (Firebase REST API)
  async function fetchMessagesFromCloud(silent = false) {
    if (!cloudDbUrl) return;

    try {
      // Normalize URL
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

        if (fetchedList.length > 0) {
          const oldCount = chatMessages.length;
          chatMessages = fetchedList;
          try {
            localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(chatMessages));
          } catch (e) {}

          renderWhatsAppChat(true);

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
        if (data.songUrl && bgmAudio && bgmAudio.src !== data.songUrl) {
          bgmAudio.src = data.songUrl;
          customAudioLoaded = true;
          musicTitle.textContent = data.songTitle || 'Lagu Kenangan 🎵';
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

      // Optimistic UI update
      chatMessages.push(newMsg);
      try {
        localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(chatMessages));
      } catch (e) {}

      renderWhatsAppChat(true);

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

  // Manual Refresh Button (F5 trigger / Refresh)
  if (waRefreshBtn) {
    waRefreshBtn.addEventListener('click', async () => {
      waRefreshBtn.classList.add('spinning');
      await fetchMessagesFromCloud(false);
      renderWhatsAppChat(true);
      playClickSfx();
      setTimeout(() => waRefreshBtn.classList.remove('spinning'), 600);
    });
  }

  // Floating Jump to Bottom Button (WhatsApp Style)
  if (waMessagesBox && waJumpBottomBtn) {
    waMessagesBox.addEventListener('scroll', () => {
      const distFromBottom = waMessagesBox.scrollHeight - waMessagesBox.scrollTop - waMessagesBox.clientHeight;
      if (distFromBottom > 75) {
        waJumpBottomBtn.classList.add('visible');
      } else {
        waJumpBottomBtn.classList.remove('visible');
      }
    });

    waJumpBottomBtn.addEventListener('click', () => {
      scrollChatToBottom(true);
      waJumpBottomBtn.classList.remove('visible');
      playClickSfx();
    });
  }

  // Auto scroll to bottom when user scrolls down to chat section
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

  // Cloud Modal Open / Close
  if (waCloudSetupBtn && cloudModal) {
    waCloudSetupBtn.addEventListener('click', () => {
      if (inputFirebaseUrl) inputFirebaseUrl.value = cloudDbUrl;
      cloudModal.classList.add('active');
      playClickSfx();
    });
  }

  if (closeCloudBtn && cloudModal) {
    closeCloudBtn.addEventListener('click', () => {
      cloudModal.classList.remove('active');
    });
  }

  if (testCloudBtn) {
    testCloudBtn.addEventListener('click', async () => {
      const url = inputFirebaseUrl ? inputFirebaseUrl.value.trim() : '';
      if (!url) {
        if (cloudStatusFeedback) {
          cloudStatusFeedback.style.display = 'block';
          cloudStatusFeedback.style.background = 'rgba(239, 68, 68, 0.2)';
          cloudStatusFeedback.style.color = '#fca5a5';
          cloudStatusFeedback.style.border = '1px solid #ef4444';
          cloudStatusFeedback.innerHTML = '⚠️ Masukkan URL Firebase terlebih dahulu.';
        }
        return;
      }

      if (cloudStatusFeedback) {
        cloudStatusFeedback.style.display = 'block';
        cloudStatusFeedback.style.background = 'rgba(123, 44, 191, 0.2)';
        cloudStatusFeedback.style.color = '#e0aaff';
        cloudStatusFeedback.style.border = '1px solid #7b2cbf';
        cloudStatusFeedback.innerHTML = '⏳ Sedang menguji koneksi ke database...';
      }

      try {
        let testUrl = url.replace(/\/+$/, '');
        if (!testUrl.endsWith('.json')) testUrl += '/messages.json';
        const res = await fetch(testUrl);
        if (res.ok) {
          if (cloudStatusFeedback) {
            cloudStatusFeedback.style.background = 'rgba(34, 197, 94, 0.2)';
            cloudStatusFeedback.style.color = '#86efac';
            cloudStatusFeedback.style.border = '1px solid #22c55e';
            cloudStatusFeedback.innerHTML = '✅ Terhubung! Database Firebase aktif dan siap digunakan untuk chat, foto &amp; lagu.';
          }
        } else {
          throw new Error('Status ' + res.status);
        }
      } catch (err) {
        if (cloudStatusFeedback) {
          cloudStatusFeedback.style.background = 'rgba(239, 68, 68, 0.2)';
          cloudStatusFeedback.style.color = '#fca5a5';
          cloudStatusFeedback.style.border = '1px solid #ef4444';
          cloudStatusFeedback.innerHTML = '❌ Gagal terhubung. Pastikan URL benar dan database di-set ke Test Mode (Read &amp; Write: true).';
        }
      }
    });
  }

  if (saveCloudBtn) {
    saveCloudBtn.addEventListener('click', async () => {
      const enteredUrl = inputFirebaseUrl ? inputFirebaseUrl.value.trim() : '';
      cloudDbUrl = enteredUrl;
      try {
        if (enteredUrl) {
          localStorage.setItem('erlangCindyFirebaseUrl', enteredUrl);
        } else {
          localStorage.removeItem('erlangCindyFirebaseUrl');
        }
      } catch (e) {}

      if (cloudModal) cloudModal.classList.remove('active');
      if (enteredUrl) {
        await fetchMessagesFromCloud(false);
      }
      renderWhatsAppChat(true);
      playClickSfx(true);
    });
  }

  if (resetCloudBtn) {
    resetCloudBtn.addEventListener('click', () => {
      cloudDbUrl = '';
      if (inputFirebaseUrl) inputFirebaseUrl.value = '';
      try {
        localStorage.removeItem('erlangCindyFirebaseUrl');
      } catch (e) {}
      if (cloudModal) cloudModal.classList.remove('active');
      playClickSfx();
    });
  }

  // Initial render & Cloud fetch on page load
  renderWhatsAppChat(true);
  fetchMessagesFromCloud(true);
  fetchMediaFromCloud();

  // Background auto-polling (every 4.5 seconds so Erlang & Cindy see new chats and photo/music updates live!)
  setInterval(() => {
    if (cloudDbUrl) {
      fetchMessagesFromCloud(true);
      fetchMediaFromCloud();
    }
  }, 4500);

  // Close modals when clicking backdrop
  [letterModal, reasonModal, settingsModal, cloudModal, waAddMessageModal].forEach(modal => {
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
    labelBoy.textContent = `${config.boyName} (Ditolak 7x) 🥀`;
    labelGirl.textContent = `${config.girlName} ("Save You") 💔`;
    letterSignName.textContent = `${config.boyName} 🥀`;
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

  // --- BACKGROUND CANVAS (FALLING RAINDROPS, TEARS & BROKEN HEARTS) ---
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
      this.size = Math.random() * 8 + 6;
      this.speedY = Math.random() * 2.2 + 1.2;
      this.speedX = (Math.random() - 0.5) * 0.5;
      this.angle = Math.random() * Math.PI * 2;
      this.angularSpeed = (Math.random() - 0.5) * 0.02;
      this.opacity = Math.random() * 0.45 + 0.25;
      
      const rand = Math.random();
      if (rand < 0.5) {
        this.type = 'raindrop';
        this.color = '#70d6ff';
      } else if (rand < 0.8) {
        this.type = 'broken_heart';
        this.color = '#ff758f';
      } else {
        this.type = 'rose_petal';
        this.color = '#9d4edd';
      }
    }

    update() {
      this.y += this.speedY;
      this.x += Math.sin(this.angle) * 0.6 + this.speedX;
      this.angle += this.angularSpeed;

      if (this.y > height + 20 || this.x < -20 || this.x > width + 20) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      ctx.globalAlpha = this.opacity;
      ctx.fillStyle = this.color;

      if (this.type === 'raindrop') {
        // Slanted raindrop line
        ctx.strokeStyle = '#70d6ff';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-2, this.size * 1.8);
        ctx.stroke();
      } else if (this.type === 'broken_heart') {
        // Mini broken heart
        const s = this.size * 0.6;
        ctx.beginPath();
        ctx.moveTo(0, s * 0.3);
        ctx.bezierCurveTo(-s, -s * 0.5, -s * 1.2, s * 0.6, 0, s * 1.2);
        ctx.bezierCurveTo(s * 1.2, s * 0.6, s, -s * 0.5, 0, s * 0.3);
        ctx.fill();
      } else {
        // Wilted petal
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(this.size, -this.size / 2, this.size, this.size, 0, this.size * 1.3);
        ctx.bezierCurveTo(-this.size, this.size, -this.size, -this.size / 2, 0, 0);
        ctx.fill();
      }

      ctx.restore();
    }
  }

  const particles = Array.from({ length: 42 }, () => new Particle());

  function animateCanvas() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    requestAnimationFrame(animateCanvas);
  }

  animateCanvas();

})();
