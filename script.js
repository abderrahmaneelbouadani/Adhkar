// This object holds the original, static data for all Adhkar.
const staticAdhkarData = {
    morning: {
        title: 'Morning',
        trackProgress: true,
        items: [
            {
                id: 'm1',
                arabic: "اللَّهُ لَا إِلَـٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
                transliteration: "Allahu la ilaha illa Huwa, Al-Hayyul-Qayyum. La ta'khudhuhu sinatun wa la nawm. Lahu ma fis-samawati wa ma fil-'ard. Man dhal-ladhi yashfa'u 'indahu illa bi-idhnihi. Ya'lamu ma bayna aydihim wa ma khalfahum. Wa la yuhituna bi shay'in min 'ilmihi illa bima sha'. Wasi'a kursiyyuhus-samawati wal-'ard. Wa la ya'uduhu hifdhuhuma. Wa Huwal-'Aliyyul-'Adheem.",
                translation: "Ayat al-Kursi [Al-Baqarah: 255]",
                count: 1, read: 0,
                virtue_ar: "من قالها حين يصبح أجير من الجن حتى يمسي، ومن قالها حين يمسي أجير منهم حتى يصبح.",
                virtue_en: "Whoever recites this in the morning will be protected from the jinn until the evening, and whoever recites it in the evening will be protected from them until the morning. [Al-Hakim]"
            },
            {
                id: 'm2',
                isComplex: true,
                parts: [
                    {
                        title_ar: "سورة الإخلاص:",
                        arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
                        title_en: "Surah Al-Ikhlas:",
                        transliteration: "Qul huwa Allahu ahad. Allahu assamad. Lam yalid wa lam yoolad. Wa lam yakun lahu kufuwan ahad."
                    },
                    {
                        title_ar: "سورة الفلق:",
                        arabic: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
                        title_en: "Surah Al-Falaq:",
                        transliteration: "Qul a'udhu birabbi alfalaq. Min sharri ma khalaq. Wa min sharri ghasiqin idha waqab. Wa min sharri annaffathati fee al'uqad. Wa min sharri hasidin idha hasad."
                    },
                    {
                        title_ar: "سورة الناس:",
                        arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ",
                        title_en: "Surah An-Nas:",
                        transliteration: "Qul a'udhu birabbi annas. Maliki annas. Ilahi annas. Min sharri alwaswasi alkhannas. Alladhee yuwaswisu fee sudoori annas. Mina aljinnati wannas."
                    }
                ],
                translation: "The three chapters of protection (Al-Mu'awwidhat).",
                count: 3, read: 0,
                virtue_ar: "قال رسول الله صلى الله عليه وسلم: 'قل هو الله أحد والمعوذتين حين تمسي وحين تصبح ثلاث مرات تكفيك من كل شيء.'",
                virtue_en: "The Messenger of Allah (ﷺ) said: 'Recite them three times in the morning and evening; they will suffice you against everything.' [Abu Dawud, Tirmidhi]"
            },
            {
                id: 'm3',
                arabic: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا",
                transliteration: "Raditu billahi Rabba, wa bil-Islami dina, wa bi Muhammadin sallallahu 'alayhi wa sallama nabiyya.",
                translation: "I am pleased with Allah as my Lord, with Islam as my religion and with Muhammad (ﷺ) as my Prophet.",
                count: 3, read: 0,
                virtue_ar: "قال رسول الله صلى الله عليه وسلم: 'من قالها ثلاثاً حين يصبح وحين يمسي كان حقاً على الله أن يرضيه يوم القيامة.'",
                virtue_en: "The Messenger of Allah (ﷺ) said: 'Allah has promised that anyone who says this three times every morning or evening will be pleased on the Day of Resurrection.' [Ahmad, Tirmidhi]"
            },
            {
                id: 'm4',
                arabic: "اللَّهُمَّ إِنِّي أَصْبَحْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلَائِكَتَكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ، لَا إِلَهَ إِلَّا أَنْتَ، وَحْدَكَ لَا شَرِيكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ",
                transliteration: "Allahumma inni asbahtu ush-hiduka, wa ush-hidu hamalata 'arshika, wa mala'ikataka, wa jami'a khalqika, annaka Antallah, la ilaha illa Anta, wahdaka la sharika lak, wa anna Muhammadan 'abduka wa rasuluk.",
                translation: "O Allah, I have reached the morning and I call You, the bearers of Your Throne, Your angels, and all of Your creation to witness that You are Allah, none has the right to be worshipped but You, alone, without partner, and that Muhammad is Your Servant and Messenger.",
                count: 4, read: 0,
                virtue_ar: "من قالها حين يصبح أو يمسي أربع مرات أعتقه الله من النار.",
                virtue_en: "Whoever says this four times in the morning or evening, Allah will grant him salvation from the Hellfire. [Abu Dawud]"
            },
            {
                id: 'm5',
                arabic: "اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ، فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ",
                transliteration: "Allahumma ma asbaha bi min ni'matin aw bi ahadin min khalqika, fa minka wahdaka la sharika lak, falakal-hamdu wa lakash-shukr.",
                translation: "O Allah, whatever blessing has been received by me or any of Your creation this morning is from You alone, You have no partner. For You is all praise and for You is all thanks.",
                count: 1, read: 0,
                virtue_ar: "من قالها حين يصبح فقد أدى شكر يومه، ومن قالها حين يمسي فقد أدى شكر ليلته.",
                virtue_en: "Whoever recites this in the morning has completed the thankfulness of the day, and whoever recites it in the evening has completed the thankfulness of the night. [Abu Dawud]"
            },
            {
                id: 'm6',
                arabic: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ، عَلَيْهِ تَوَكَّلْتُ، وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
                transliteration: "HasbiyAllahu la ilaha illa Huwa, 'alayhi tawakkaltu, wa Huwa Rabbul-'Arshil-'Adheem.",
                translation: "Allah is sufficient for me. There is none worthy of worship but Him. I have placed my trust in Him, He is Lord of the Majestic Throne.",
                count: 7, read: 0,
                virtue_ar: "من قالها حين يصبح وحين يمسي سبع مرات كفاه الله ما أهمه من أمر الدنيا والآخرة.",
                virtue_en: "Whoever says this seven times in the morning or evening, Allah will grant whatever he desires from this world or the next. [Ibn As-Sunni]"
            },
            {
                id: 'm7',
                arabic: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ",
                transliteration: "Allahumma bika asbahna, wa bika amsayna, wa bika nahya, wa bika namut, wa ilaykan-nushur.",
                translation: "O Allah, by You we have reached the morning, and by You we have reached the evening, by You we live and by You we die, and to You is the resurrection.",
                count: 1, read: 0,
                virtue_ar: "دعاء شامل يبدأ به المسلم يومه بالتوكل على الله.",
                virtue_en: "A comprehensive supplication acknowledging Allah's power over life, death, and our daily affairs, starting the day with complete reliance on Him."
            },
            {
                id: 'm8',
                arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ، وَغَلَبَةِ الرِّجَالِ",
                transliteration: "Allahumma inni a'udhu bika minal-hammi wal-hazan, wal-'ajzi wal-kasal, wal-bukhli wal-jubn, wa dala'id-dayn, wa ghalabatir-rijal.",
                translation: "O Allah, I seek refuge in You from anxiety and sorrow, weakness and laziness, miserliness and cowardice, the burden of debts and from being overpowered by men.",
                count: 1, read: 0,
                virtue_ar: "دعاء نبوي للوقاية من الهموم والمشاكل النفسية والجسدية.",
                virtue_en: "A powerful prayer taught by the Prophet (ﷺ) to seek refuge from common ailments of the heart and soul, such as anxiety, laziness, and debt."
            },
            {
                id: 'm9',
                arabic: "اللَّهُمَّ أَنْتَ رَبِّي، لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي، فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
                transliteration: "Allahumma Anta Rabbi la ilaha illa Anta, khalaqtani wa ana 'abduk, wa ana 'ala 'ahdika wa wa'dika mastata't, a'udhu bika min sharri ma sana't, abu'u laka bini'matika 'alayya, wa abu'u laka bidhanbi faghfirli fa'innahu la yaghfirudh-dhunuba illa Anta.",
                translation: "The Master of seeking forgiveness (Sayyid al-Istighfar).",
                count: 1, read: 0,
                virtue_ar: "قال صلى الله عليه وسلم: 'من قاله موقناً به حين يمسي فمات من ليلته دخل الجنة، ومن قاله موقناً به حين يصبح فمات من يومه دخل الجنة.'",
                virtue_en: "The Prophet (ﷺ) said: 'Whoever says it during the day with firm faith in it and dies on that day before the evening, he will be from the people of Paradise; and whoever says it in the night with firm faith in it and dies before the morning, he will be from the people of Paradise.' [Bukhari]"
            },
             {
                id: 'm10',
                arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ، اللَّهُمَّ بَارِكْ عَلَى مُحَمَّdٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ",
                transliteration: "Allahumma salli 'ala Muhammadin wa 'ala aali Muhammadin kamaa sallayta 'ala Ibraheema wa 'ala aali Ibraheema, innaka Hameedun Majeed. Allahumma baarik 'ala Muhammadin wa 'ala aali Muhammadin kamaa baarakta 'ala Ibraheema wa 'ala aali Ibraheema, innaka Hameedun Majeed.",
                translation: "O Allah, bestow Your favor on Muhammad and on the family of Muhammad as You have bestowed Your favor on Ibrahim and on the family of Ibrahim, You are Praiseworthy, Most Glorious. O Allah, bless Muhammad and the family of Muhammad as You have blessed Ibrahim and the family of Ibrahim, You are Praiseworthy, Most Glorious.",
                count: 10, read: 0,
                virtue_ar: "قال صلى الله عليه وسلم: 'من صلى عليّ حين يصبح عشراً وحين يمسي عشراً أدركته شفاعتي يوم القيامة.'",
                virtue_en: "The Prophet (ﷺ) said: 'Whoever sends blessings upon me ten times in the morning and ten times in the evening will have my intercession on the Day of Resurrection.' [At-Tabarani]"
            },
            {
                id: 'm11',
                arabic: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ",
                transliteration: "Astaghfirullaha wa atubu ilayh.",
                translation: "I seek the forgiveness of Allah and repent to Him.",
                count: 100, read: 0,
                virtue_ar: "قال رسول الله صلى الله عليه وسلم: 'والله إني لأستغفر الله وأتوب إليه في اليوم أكثر من سبعين مرة.'",
                virtue_en: "Seeking forgiveness is a means of purifying oneself from sins. The Prophet (ﷺ) himself used to say this more than seventy times a day. [Bukhari]"
            }
        ]
    },
    evening: {
        title: 'Evening',
        trackProgress: true,
        items: [
            {
                id: 'e1',
                arabic: "اللَّهُ لَا إِلَـٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
                transliteration: "Allahu la ilaha illa Huwa, Al-Hayyul-Qayyum. La ta'khudhuhu sinatun wa la nawm. Lahu ma fis-samawati wa ma fil-'ard. Man dhal-ladhi yashfa'u 'indahu illa bi-idhnihi. Ya'lamu ma bayna aydihim wa ma khalfahum. Wa la yuhituna bi shay'in min 'ilmihi illa bima sha'. Wasi'a kursiyyuhus-samawati wal-'ard. Wa la ya'uduhu hifdhuhuma. Wa Huwal-'Aliyyul-'Adheem.",
                translation: "Ayat al-Kursi [Al-Baqarah: 255]",
                count: 1, read: 0,
                virtue_ar: "من قالها حين يصبح أجير من الجن حتى يمسي، ومن قالها حين يمسي أجير منهم حتى يصبح.",
                virtue_en: "Whoever recites this in the morning will be protected from the jinn until the evening, and whoever recites it in the evening will be protected from them until the morning. [Al-Hakim]"
            },
            {
                id: 'e2',
                isComplex: true,
                parts: [ { title_ar: "سورة الإخلاص:", arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ", title_en: "Surah Al-Ikhlas:", transliteration: "Qul huwa Allahu ahad. Allahu assamad. Lam yalid wa lam yoolad. Wa lam yakun lahu kufuwan ahad." }, { title_ar: "سورة الفلق:", arabic: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا ਖَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ", title_en: "Surah Al-Falaq:", transliteration: "Qul a'udhu birabbi alfalaq. Min sharri ma khalaq. Wa min sharri ghasiqin idha waqab. Wa min sharri annaffathati fee al'uqad. Wa min sharri hasidin idha hasad." }, { title_ar: "سورة الناس:", arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّASِ ۝ إِلَٰهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ", title_en: "Surah An-Nas:", transliteration: "Qul a'udhu birabbi annas. Maliki annas. Ilahi annas. Min sharri alwaswasi alkhannas. Alladhee yuwaswisu fee sudoori annas. Mina aljinnati wannas." } ],
                translation: "The three chapters of protection (Al-Mu'awwidhat).",
                count: 3, read: 0,
                virtue_ar: "قال رسول الله صلى الله عليه وسلم: 'قل هو الله أحد والمعوذتين حين تمسي وحين تصبح ثلاث مرات تكفيك من كل شيء.'",
                virtue_en: "The Messenger of Allah (ﷺ) said: 'Recite them three times in the morning and evening; they will suffice you against everything.' [Abu Dawud, Tirmidhi]"
            },
            {
                id: 'e3',
                arabic: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا",
                transliteration: "Raditu billahi Rabba, wa bil-Islami dina, wa bi Muhammadin sallallahu 'alayhi wa sallama nabiyya.",
                translation: "I am pleased with Allah as my Lord, with Islam as my religion and with Muhammad (ﷺ) as my Prophet.",
                count: 3, read: 0,
                virtue_ar: "قال رسول الله صلى الله عليه وسلم: 'من قالها ثلاثاً حين يصبح وحين يمسي كان حقاً على الله أن يرضيه يوم القيامة.'",
                virtue_en: "The Messenger of Allah (ﷺ) said: 'Allah has promised that anyone who says this three times every morning or evening will be pleased on the Day of Resurrection.' [Ahmad, Tirmidhi]"
            },
            {
                id: 'e4',
                arabic: "اللَّهُمَّ إِنِّي أَمْسَيْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلَائِكَتَكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ، لَا إِلَهَ إِلَّا أَنْتَ، وَحْدَكَ لَا شَرِيكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ",
                transliteration: "Allahumma inni amsaytu ush-hiduka, wa ush-hidu hamalata 'arshika, wa mala'ikataka, wa jami'a khalqika, annaka Antallah, la ilaha illa Anta, wahdaka la sharika lak, wa anna Muhammadan 'abduka wa rasuluk.",
                translation: "O Allah, I have reached the evening and I call You, the bearers of Your Throne, Your angels, and all of Your creation to witness that You are Allah, none has the right to be worshipped but You, alone, without partner, and that Muhammad is Your Servant and Messenger.",
                count: 4, read: 0,
                virtue_ar: "من قالها حين يصبح أو يمسي أربع مرات أعتقه الله من النار.",
                virtue_en: "Whoever says this four times in the morning or evening, Allah will grant him salvation from the Hellfire. [Abu Dawud]"
            },
            {
                id: 'e5',
                arabic: "اللَّهُمَّ مَا أَمْسَى بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ، فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ",
                transliteration: "Allahumma ma amsa bi min ni'matin aw bi ahadin min khalqika, fa minka wahdaka la sharika lak, falakal-hamdu wa lakash-shukr.",
                translation: "O Allah, whatever blessing has been received by me or any of Your creation this evening is from You alone, You have no partner. For You is all praise and for You is all thanks.",
                count: 1, read: 0,
                virtue_ar: "من قالها حين يصبح فقد أدى شكر يومه، ومن قالها حين يمسي فقد أدى شكر ليلته.",
                virtue_en: "Whoever recites this in the morning has completed the thankfulness of the day, and whoever recites it in the evening has completed the thankfulness of the night. [Abu Dawud]"
            },
            {
                id: 'e6',
                arabic: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ، عَلَيْهِ تَوَكَّلْتُ، وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
                transliteration: "HasbiyAllahu la ilaha illa Huwa, 'alayhi tawakkaltu, wa Huwa Rabbul-'Arshil-'Adheem.",
                translation: "Allah is sufficient for me. There is none worthy of worship but Him. I have placed my trust in Him, He is Lord of the Majestic Throne.",
                count: 7, read: 0,
                virtue_ar: "من قالها حين يصبح وحين يمسي سبع مرات كفاه الله ما أهمه من أمر الدنيا والآخرة.",
                virtue_en: "Whoever says this seven times in the morning or evening, Allah will grant whatever he desires from this world or the next. [Ibn As-Sunni]"
            },
            {
                id: 'e7',
                arabic: "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ",
                transliteration: "Allahumma bika amsayna, wa bika asbahna, wa bika nahya, wa bika namut, wa ilaykal-masir.",
                translation: "O Allah, by You we have reached the evening, and by You we have reached the morning, by You we live and by You we die, and to You is our final return.",
                count: 1, read: 0,
                virtue_ar: "دعاء شامل ينهي به المسلم يومه بالتوكل على الله.",
                virtue_en: "A comprehensive supplication acknowledging Allah's power over life, death, and our daily affairs, ending the day with complete reliance on Him."
            },
            {
                id: 'e8',
                arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْzِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ، وَغَلَبَةِ الرِّجَالِ",
                transliteration: "Allahumma inni a'udhu bika minal-hammi wal-hazan, wal-'ajzi wal-kasal, wal-bukhli wal-jubn, wa dala'id-dayn, wa ghalabatir-rijal.",
                translation: "O Allah, I seek refuge in You from anxiety and sorrow, weakness and laziness, miserliness and cowardice, the burden of debts and from being overpowered by men.",
                count: 1, read: 0,
                virtue_ar: "دعاء نبوي للوقاية من الهموم والمشاكل النفسية والجسدية.",
                virtue_en: "A powerful prayer taught by the Prophet (ﷺ) to seek refuge from common ailments of the heart and soul, such as anxiety, laziness, and debt."
            },
            {
                id: 'e9',
                arabic: "اللَّهُمَّ أَنْتَ رَبِّي، لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي، فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
                transliteration: "Allahumma Anta Rabbi la ilaha illa Anta, khalaqtani wa ana 'abduk, wa ana 'ala 'ahdika wa wa'dika mastata't, a'udhu bika min sharri ma sana't, abu'u laka bini'matika 'alayya, wa abu'u laka bidhanbi faghfirli fa'innahu la yaghfirudh-dhunuba illa Anta.",
                translation: "The Master of seeking forgiveness (Sayyid al-Istighfar).",
                count: 1, read: 0,
                virtue_ar: "قال صلى الله عليه وسلم: 'من قale موقناً به حين يمسي فمات من ليلته دخل الجنة، ومن قاله موقناً به حين يصبح فمات من يومه دخل الجنة.'",
                virtue_en: "The Prophet (ﷺ) said: 'Whoever says it during the day with firm faith in it and dies on that day before the evening, he will be from the people of Paradise; and whoever says it in the night with firm faith in it and dies before the morning, he will be from the people of Paradise.' [Bukhari]"
            },
             {
                id: 'e10',
                arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ، اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ",
                transliteration: "Allahumma salli 'ala Muhammadin wa 'ala aali Muhammadin kamaa sallayta 'ala Ibraheema wa 'ala aali Ibraheema, innaka Hameedun Majeed. Allahumma baarik 'ala Muhammadin wa 'ala aali Muhammadin kamaa baarakta 'ala Ibraheema wa 'ala aali Ibraheema, innaka Hameedun Majeed.",
                translation: "O Allah, bestow Your favor on Muhammad and on the family of Muhammad as You have bestowed Your favor on Ibrahim and on the family of Ibrahim, You are Praiseworthy, Most Glorious. O Allah, bless Muhammad and the family of Muhammad as You have blessed Ibrahim and the family of Ibrahim, You are Praiseworthy, Most Glorious.",
                count: 10, read: 0,
                virtue_ar: "قال صلى الله عليه وسلم: 'من صلى عليّ حين يصبح عشراً وحين يمسي عشراً أدركته شفاعتي يوم القيامة.'",
                virtue_en: "The Prophet (ﷺ) said: 'Whoever sends blessings upon me ten times in the morning and ten times in the evening will have my intercession on the Day of Resurrection.' [At-Tabarani]"
            },
            {
                id: 'e11',
                arabic: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ",
                transliteration: "Astaghfirullaha wa atubu ilayh.",
                translation: "I seek the forgiveness of Allah and repent to Him.",
                count: 100, read: 0,
                virtue_ar: "قال رسول الله صلى الله عليه وسلم: 'والله إني لأستغفر الله وأتوب إليه في اليوم أكثر من سبعين مرة.'",
                virtue_en: "Seeking forgiveness is a means of purifying oneself from sins. The Prophet (ﷺ) himself used to say this more than seventy times a day. [Bukhari]"
            }
        ]
    },
    afterSalah: {
        title: 'After Salah',
        trackProgress: false,
        items: [
             {
                id: 'as1',
                arabic: "أَسْتَغْفِرُ اللَّهَ (ثلاثاً) اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
                transliteration: "Astaghfirullah (3 times). Allahumma Antas-Salam wa minkas-salam, tabarakta ya Dhal-Jalali wal-Ikram.",
                translation: "I seek the forgiveness of Allah (three times). O Allah, You are Peace and from You comes peace. Blessed are You, O Owner of majesty and honor."
            },
            {
                id: 'as2',
                arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ، وَلَا مُعْطِيَ لِمَا مَنَعْتَ، وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ",
                transliteration: "La ilaha illallah wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in qadir. Allahumma la mani'a lima a'tayt, wa la mu'tiya lima mana't, wa la yanfa'u dhal-jaddi minkal-jadd.",
                translation: "There is none worthy of worship but Allah alone, Who has no partner, His is the dominion and to Him belongs all praise, and He is able to do all things. O Allah, none can withhold what You have given and none can give what You have withheld, and the might of the mighty person cannot benefit him against You."
            },
            {
                id: 'as3',
                arabic: "سُبْحَانَ اللَّهِ (33 مرة) الْحَمْدُ لِلَّهِ (33 مرة) اللَّهُ أَكْبَرُ (33 مرة) ثُمَّ يَقُولُ تَمَامَ الْمِائَةِ: لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
                transliteration: "SubhanAllah (33 times), Alhamdulillah (33 times), Allahu Akbar (33 times), then complete the hundred with: La ilaha illallah wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in qadir.",
                translation: "Glory is to Allah (33 times), Praise is to Allah (33 times), Allah is the Most Great (33 times), then complete the hundred with: There is none worthy of worship but Allah alone, Who has no partner, His is the dominion and to Him belongs all praise, and He is able to do all things."
            },
             {
                id: 'as4',
                arabic: "آيَةُ الْكُرْسِيِّ: اللَّهُ لَا إِلَـٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ...",
                transliteration: "Ayat al-Kursi: Allahu la ilaha illa Huwa...",
                translation: "Recitation of Ayat al-Kursi. Whoever recites it after each prayer, nothing will be between him and Paradise except death. [An-Nasa'i]"
            },
             {
                id: 'as5',
                arabic: "سورة الإخلاص، سورة الفلق، سورة الناس (بعد كل صلاة)",
                transliteration: "Surah Al-Ikhlas, Surah Al-Falaq, Surah An-Nas (After every prayer).",
                translation: "Recitation of Surah Al-Ikhlas, Al-Falaq, and An-Nas."
            }
        ]
    },
    rabbana: {
        title: 'Rabbana Duas',
        trackProgress: false,
        items: [
             {
                id: 'rb1',
                arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
                transliteration: "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan waqina 'adhaban-nar.",
                translation: "Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire. [Al-Baqarah: 201]"
            },
            {
                id: 'rb2',
                arabic: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً ۚ إِنَّكَ أَنتَ الْوَهَّابُ",
                transliteration: "Rabbana la tuzigh quloobana ba'da idh hadaytana wa hab lana min ladunka rahmah, innaka Antal-Wahhab.",
                translation: "Our Lord, let not our hearts deviate after You have guided us and grant us from Yourself mercy. Indeed, You are the Bestower. [Aal-Imran: 8]"
            },
             {
                id: 'rb3',
                arabic: "رَبَّنَا اغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِي أَمْرِنَا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
                transliteration: "Rabbana-ghfir lana dhunoobana wa israfana fi amrina wa thabbit aqdamana wansurna 'alal-qawmil-kafirin.",
                translation: "Our Lord, forgive us our sins and the excess [committed] in our affairs and plant firmly our feet and give us victory over the disbelieving people. [Aal-Imran: 147]"
            },
            {
                id: 'rb4',
                arabic: "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
                transliteration: "Rabbana zalamna anfusana wa-in lam taghfir lana wa tarhamna lanakoonanna minal-khasireen.",
                translation: "Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers. [Al-A'raf: 23]"
            },
            {
                id: 'rb5',
                arabic: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
                transliteration: "Rabbana hab lana min azwajina wa dhurriyatina qurrata a'yunin waj'alna lil-muttaqina imama.",
                translation: "Our Lord, grant us from among our wives and offspring comfort to our eyes and make us a leader for the righteous. [Al-Furqan: 74]"
            }
        ]
    },
    forgiveness: {
        title: 'Forgiveness',
        trackProgress: false,
        items: [
            {
                id: 'f1',
                arabic: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ",
                transliteration: "Astaghfirullahal-'Adheemal-ladhi la ilaha illa Huwal-Hayyul-Qayyum wa atubu ilaih.",
                translation: "I seek the forgiveness of Allah the Mighty, Whom there is none worthy of worship except Him, the Living, the Eternal, and I repent unto Him."
            },
             {
                id: 'f2',
                arabic: "اللَّهُمَّ أَنْتَ رَبِّي، لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي، فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
                transliteration: "Allahumma Anta Rabbi, la ilaha illa Anta, khalaqtani wa ana 'abduk, wa ana 'ala 'ahdika wa wa'dika mastata't, a'udhu bika min sharri ma sana't, abu'u laka bini'matika 'alayya, wa abu'u laka bidhanbi faghfirli fa'innahu la yaghfirudh-dhunuba illa Anta.",
                translation: "The Master of seeking forgiveness (Sayyid al-Istighfar)."
            },
            {
                id: 'f3',
                arabic: "اللَّهُمَّ اغْفِرْ لِي خَطِيئَتِي وَجَهْلِي، وَإِسْرَافِي فِي أَمْرِي، وَمَا أَنْتَ أَعْلَمُ بِهِ مِنِّي",
                transliteration: "Allahumma-ghfir li khati'ati wa jahli, wa israfi fi amri, wa ma Anta a'lamu bihi minni.",
                translation: "O Allah, forgive me my sins and my ignorance, my excesses in my affairs, and whatever You know better than I."
            }
        ]
    }
};

// This variable will hold the current state of Adhkar, including read counts.
let adhkarData;

const adhkarContainer = document.getElementById('adhkar-container');
const resetBtn = document.getElementById('reset-btn');
const virtueModal = document.getElementById('virtue-modal');
const modalContent = document.getElementById('modal-content');
const modalText = document.getElementById('modal-text');
const closeModalBtn = document.getElementById('close-modal-btn');

// --- Progress Management ---

function saveProgress() {
    localStorage.setItem('adhkarProgress', JSON.stringify(adhkarData));
}

function loadProgress() {
    const savedProgress = localStorage.getItem('adhkarProgress');
     if (savedProgress) {
         adhkarData = JSON.parse(savedProgress);
         // Ensure all categories exist from static data if not in saved data
         Object.keys(staticAdhkarData).forEach(key => {
             if (!adhkarData[key]) {
                 adhkarData[key] = JSON.parse(JSON.stringify(staticAdhkarData[key]));
             }
         });
     } else {
         adhkarData = JSON.parse(JSON.stringify(staticAdhkarData));
     }
}

function updateProgressBar(category) {
    const progressBarContainer = document.getElementById('progress-bar-container');
    const categoryData = adhkarData[category];

    if (!categoryData || !categoryData.trackProgress) {
        progressBarContainer.style.opacity = '0';
        progressBarContainer.style.height = '0';
        return;
    }
    
    progressBarContainer.style.opacity = '1';
    progressBarContainer.style.height = 'auto';

    const adhkarList = categoryData.items;
    const totalRequired = adhkarList.reduce((sum, dhikr) => sum + dhikr.count, 0);
    const currentProgress = adhkarList.reduce((sum, dhikr) => sum + (dhikr.read || 0), 0);
    const percentage = totalRequired > 0 ? Math.min((currentProgress / totalRequired) * 100, 100) : 0;
    
    const progressBar = document.getElementById('progress-bar');
    if(progressBar) progressBar.style.width = `${percentage}%`;

    if(percentage >= 100) markCompletion(category);
}

function resetProgress() {
    localStorage.removeItem('adhkarProgress');
    localStorage.removeItem('adhkarHistory'); // Also clear history
    
    // Explicitly reset the data in memory to its default state
    adhkarData = JSON.parse(JSON.stringify(staticAdhkarData));
    history = {}; // This is the fix: also clear the history from memory

    const currentCategoryKey = document.querySelector('.category-btn.active').dataset.category;
    renderAdhkar(currentCategoryKey);

    const originalText = 'Reset';
    resetBtn.disabled = true;
    resetBtn.textContent = 'Reset!';
    setTimeout(() => {
        resetBtn.textContent = originalText;
        resetBtn.disabled = false;
    }, 2000);
}

// --- UI Rendering ---

function renderAdhkar(category) {
    adhkarContainer.innerHTML = '';
    const categoryData = adhkarData[category];
    if (!categoryData) return;
    
    const adhkarList = categoryData.items;
    
    adhkarList.forEach(dhikr => {
        const card = document.createElement('div');
        card.className = 'bg-white p-6 rounded-lg shadow-md border-l-4 border-emerald-500 fade-in';
        
        const readCount = dhikr.read || 0;
        const isCompleted = dhikr.count && (readCount >= dhikr.count);

        let contentHtml = '';
        if (dhikr.isComplex) {
            contentHtml = dhikr.parts.map(part => `
                <div class="mb-4">
                    <p dir="rtl" class="arabic-text text-gray-800 text-right"><b>${part.title_ar}</b><br>${part.arabic}</p>
                    <p class="mt-2 text-gray-500 italic text-sm english-text transliteration-text">${part.transliteration}</p>
                </div>
            `).join('');
        } else {
            contentHtml = `
                <p dir="rtl" class="arabic-text text-gray-800 text-right">${dhikr.arabic}</p>
                <p class="mt-4 text-gray-500 italic text-sm english-text transliteration-text">${dhikr.transliteration}</p>
            `;
        }

        card.innerHTML = `
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                <p class="text-emerald-700 font-bold text-lg">${dhikr.count ? `Repeat: ${dhikr.count}x` : ''}</p>
                <div class="flex items-center gap-2">
                    ${(dhikr.virtue_ar && dhikr.virtue_en) ? `
                    <button class="virtue-btn text-emerald-600 hover:text-emerald-800 text-sm font-semibold flex items-center gap-1" data-id="${dhikr.id}" data-category="${category}">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Virtue</span>
                    </button>` : ''}
                    <button class="copy-btn text-emerald-600 hover:text-emerald-800 text-sm font-semibold flex items-center gap-1" data-id="${dhikr.id}" data-category="${category}">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                        <span>Copy</span>
                    </button>
                </div>
            </div>
            ${contentHtml}
            <p class="mt-2 text-gray-700 text-sm english-text translation-text">${dhikr.translation}</p>
            ${dhikr.count ? `
            <div class="mt-6 flex justify-end">
                <button 
                    data-id="${dhikr.id}" 
                    data-category="${category}" 
                    class="counter-btn ${isCompleted ? 'bg-emerald-200 text-emerald-800 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-700 text-white'} font-bold py-2 px-6 rounded-full transition-colors duration-300 flex items-center gap-2"
                    ${isCompleted ? 'disabled' : ''}
                >
                    ${isCompleted ? 
                        `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg> Completed` : 
                        `Count <span class="count-display bg-white/20 text-white rounded-full px-2">${readCount}/${dhikr.count}</span>`
                    }
                </button>
            </div>` : ''}
        `;
        adhkarContainer.appendChild(card);
    });
    updateProgressBar(category);
    applySettings(false);
}

// --- Modal ---
function showModal(id, content) {
    const modal = document.getElementById(id);
    const modalContent = modal.querySelector('div[id$="-content"]');
    if(modal && modalContent) {
         if (id === 'virtue-modal') {
             modal.querySelector('#modal-text').innerHTML = `
                 <p dir="rtl" class="arabic-text text-gray-800 text-right mb-4">${content.ar}</p>
                 <p class="text-gray-600 text-sm english-text">${content.en.replace(/\[([^\]]+)\]/g, '<span class="font-semibold text-gray-500">[$1]</span>')}</p>
             `;
         }
        modal.classList.remove('hidden');
        modalContent.classList.remove('modal-leave');
        modalContent.classList.add('modal-enter');
    }
}

function hideModal(id) {
    const modal = document.getElementById(id);
    const modalContent = modal.querySelector('div[id$="-content"]');
    if(modal && modalContent) {
        modalContent.classList.remove('modal-enter');
        modalContent.classList.add('modal-leave');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }
}

// --- Settings ---
const settings = {
    fontSize: 1, showTransliteration: true, showTranslation: true,
};
const fontSizes = [
    { label: 'S', arabic: '0.9rem', english: '0.75rem' },
    { label: 'M', arabic: '1.125rem', english: '0.875rem' },
    { label: 'L', arabic: '1.375rem', english: '1rem' },
];

function saveSettings() {
    localStorage.setItem('adhkarSettings', JSON.stringify(settings));
}

function loadSettings() {
    const saved = localStorage.getItem('adhkarSettings');
    if(saved) Object.assign(settings, JSON.parse(saved));
}

function applySettings(rerender = true) {
    const size = fontSizes[settings.fontSize];
    document.documentElement.style.setProperty('--font-size-arabic', size.arabic);
    document.documentElement.style.setProperty('--font-size-english', size.english);
    document.getElementById('font-size-label').textContent = size.label;
    
    const mainContent = document.getElementById('main-content');
    mainContent.classList.toggle('hide-transliteration', !settings.showTransliteration);
    mainContent.classList.toggle('hide-translation', !settings.showTranslation);
    
    document.getElementById('toggle-transliteration').checked = settings.showTransliteration;
    document.getElementById('toggle-translation').checked = settings.showTranslation;
    
    if(rerender) {
        const currentCategory = document.querySelector('.category-btn.active').dataset.category;
        renderAdhkar(currentCategory);
    }
}

function handleCategoryClick(e) {
    const clickedBtn = e.currentTarget;
    const category = clickedBtn.dataset.category;
    
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('bg-emerald-600', 'text-white', 'shadow', 'active');
        btn.classList.add('text-emerald-600');
    });

    clickedBtn.classList.add('bg-emerald-600', 'text-white', 'shadow', 'active');
    clickedBtn.classList.remove('text-emerald-600');
    
    resetBtn.style.display = adhkarData[category].trackProgress ? 'block' : 'none';

    renderAdhkar(category);
    window.scrollTo(0, 0);
}

// --- Event Handlers ---

function handleCount(e) {
    const button = e.target.closest('.counter-btn');
    if (!button || button.disabled) return;

    const { id, category } = button.dataset;
    const dhikr = adhkarData[category].items.find(d => d.id === id);

    if (dhikr) {
        dhikr.read = (dhikr.read || 0) + 1;
        saveProgress();
        updateProgressBar(category);
        
        const countDisplay = button.querySelector('.count-display');
        if (countDisplay) countDisplay.textContent = `${dhikr.read}/${dhikr.count}`;

        if (dhikr.read >= dhikr.count) {
            button.disabled = true;
            button.className = button.className.replace('bg-emerald-600 hover:bg-emerald-700 text-white', 'bg-emerald-200 text-emerald-800 cursor-not-allowed');
            button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg> Completed`;
        }
    }
}

function handleVirtueClick(e) {
    const button = e.target.closest('.virtue-btn');
    if (!button) return;

    const { id, category } = button.dataset;
    const dhikr = adhkarData[category].items.find(d => d.id === id);
    
    if (dhikr && dhikr.virtue_ar && dhikr.virtue_en) {
        showModal('virtue-modal', { ar: dhikr.virtue_ar, en: dhikr.virtue_en });
    }
}

function handleCopyClick(e) {
    const button = e.target.closest('.copy-btn');
    if (!button) return;

    const { id, category } = button.dataset;
    const dhikr = adhkarData[category].items.find(d => d.id === id);

    if (dhikr) {
        let textToCopy = '';
        if (dhikr.isComplex) {
             textToCopy = dhikr.parts.map(p => `${p.title_ar}\n${p.arabic}\n\n${p.title_en}\n${p.transliteration}`).join('\n\n---\n\n');
        } else {
            textToCopy = `${dhikr.arabic}\n\n${dhikr.transliteration}\n\n${dhikr.translation}`;
        }

        navigator.clipboard.writeText(textToCopy).then(() => {
            const buttonSpan = button.querySelector('span');
            if (buttonSpan) {
                  const originalText = buttonSpan.textContent;
                  buttonSpan.textContent = 'Copied!';
                  setTimeout(() => { buttonSpan.textContent = originalText; }, 2000);
            }
        }).catch(err => console.error('Failed to copy text: ', err));
    }
}

function updateDateTime() {
    const now = new Date();
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    document.getElementById('date').textContent = now.toLocaleDateString('en-US', dateOptions);
    document.getElementById('time').textContent = now.toLocaleTimeString('en-US', timeOptions);
}

// --- Calendar & Streak Logic ---
let currentCalendarDate = new Date();
let history = {};

function loadHistory() {
    const saved = localStorage.getItem('adhkarHistory');
    history = saved ? JSON.parse(saved) : {};
}

function saveHistory() {
    localStorage.setItem('adhkarHistory', JSON.stringify(history));
}

function markCompletion(category) {
    const today = new Date();
    const dateString = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
    
    if (!history[dateString]) history[dateString] = [];
    if (!history[dateString].includes(category)) {
        history[dateString].push(category);
        saveHistory();
    }
}

function calculateStreak() {
    let streak = 0;
    let currentDate = new Date();
    while (true) {
        const dateString = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`;
        if (history[dateString] && (history[dateString].includes('morning') || history[dateString].includes('evening'))) {
            streak++;
            currentDate.setDate(currentDate.getDate() - 1);
        } else {
            break;
        }
    }
    document.getElementById('streak-count').textContent = `${streak} Day${streak !== 1 ? 's' : ''}`;
}

function renderCalendar(date) {
    loadHistory();
    const month = date.getMonth();
    const year = date.getFullYear();
    
    document.getElementById('month-year-label').textContent = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const calendarBody = document.getElementById('calendar-body');
    calendarBody.innerHTML = '';
    
    for (let i = 0; i < firstDayOfMonth; i++) calendarBody.innerHTML += `<div></div>`;
    
    const today = new Date();
    for (let day = 1; day <= daysInMonth; day++) {
        const dateString = `${year}-${month}-${day}`;
        const completed = history[dateString] || [];
        const isToday = day === today.getDate() && month === today.getMonth() && year === today.getFullYear();

        calendarBody.innerHTML += `
            <div class="h-9 flex items-center justify-center relative">
                <span class="${isToday ? 'today font-bold text-emerald-800' : ''} h-7 w-7 flex items-center justify-center">
                    ${day}
                </span>
                <div class="absolute bottom-1 flex gap-0.5">
                    ${completed.includes('morning') ? '<div class="w-1.5 h-1.5 bg-green-500 rounded-full"></div>' : ''}
                    ${completed.includes('evening') ? '<div class="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>' : ''}
                </div>
            </div>
        `;
    }
}

function renderCategoryButtons() {
    const container = document.getElementById('category-buttons');
    container.innerHTML = '';
    Object.keys(staticAdhkarData).forEach((key, index) => {
        const category = staticAdhkarData[key];
        const isActive = index === 0;
        container.innerHTML += `
            <button data-category="${key}" class="category-btn flex-shrink-0 text-sm py-2 px-4 rounded-full font-semibold transition-colors duration-200 ${isActive ? 'bg-emerald-600 text-white shadow active' : 'text-emerald-600'}">
                ${category.title}
            </button>
        `;
    });
    document.querySelectorAll('.category-btn').forEach(btn => btn.addEventListener('click', handleCategoryClick));
}

// --- Initial Load & Event Listeners ---

document.addEventListener('DOMContentLoaded', () => {
    const settingsModal = document.getElementById('settings-modal');
    const settingsBtn = document.getElementById('settings-btn');
    const closeSettingsBtn = document.getElementById('close-settings-btn');
    const progressModal = document.getElementById('progress-modal');
    const progressBtn = document.getElementById('progress-btn');
    const closeProgressBtn = document.getElementById('close-progress-btn');

    loadProgress();
    loadSettings();
    renderCategoryButtons();
    applySettings(false);
    renderAdhkar('morning');
    updateDateTime();
    setInterval(updateDateTime, 1000);

    resetBtn.addEventListener('click', resetProgress);
    
    adhkarContainer.addEventListener('click', e => {
        handleCount(e);
        handleVirtueClick(e);
        handleCopyClick(e);
    });
    
    closeModalBtn.addEventListener('click', () => hideModal('virtue-modal'));
    virtueModal.addEventListener('click', e => { if (e.target === virtueModal) hideModal('virtue-modal'); });

    settingsBtn.addEventListener('click', () => showModal('settings-modal'));
    closeSettingsBtn.addEventListener('click', () => hideModal('settings-modal'));
    settingsModal.addEventListener('click', e => { if (e.target === settingsModal) hideModal('settings-modal'); });

    document.getElementById('font-increase').addEventListener('click', () => {
        settings.fontSize = Math.min(settings.fontSize + 1, fontSizes.length - 1);
        saveSettings(); applySettings();
    });
    document.getElementById('font-decrease').addEventListener('click', () => {
        settings.fontSize = Math.max(settings.fontSize - 1, 0);
        saveSettings(); applySettings();
    });
    document.getElementById('toggle-transliteration').addEventListener('change', e => {
        settings.showTransliteration = e.target.checked;
        saveSettings(); applySettings();
    });
    document.getElementById('toggle-translation').addEventListener('change', e => {
        settings.showTranslation = e.target.checked;
        saveSettings(); applySettings();
    });

    progressBtn.addEventListener('click', () => {
        currentCalendarDate = new Date();
        renderCalendar(currentCalendarDate);
        calculateStreak();
        showModal('progress-modal');
    });
    closeProgressBtn.addEventListener('click', () => hideModal('progress-modal'));
    progressModal.addEventListener('click', e => { if (e.target === progressModal) hideModal('progress-modal'); });

    document.getElementById('prev-month-btn').addEventListener('click', () => {
        currentCalendarDate.setMonth(currentCalendarDate.getMonth() - 1);
        renderCalendar(currentCalendarDate);
    });
    document.getElementById('next-month-btn').addEventListener('click', () => {
        currentCalendarDate.setMonth(currentCalendarDate.getMonth() + 1);
        renderCalendar(currentCalendarDate);
    });
});