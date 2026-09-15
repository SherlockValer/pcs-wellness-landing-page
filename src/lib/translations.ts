// Site-wide translations. Keys are looked up by the `t()` helper in i18n.tsx
// using dot-notation (e.g. "hero.subtitle").
//
// NOTE: The Hindi and Marathi text below is machine-assisted and should be
// reviewed by a native speaker before launch.

export type Language = "en" | "hi" | "mr";

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      bmi: "BMI Calculator",
      testimonials: "Testimonials",
      gallery: "Gallery",
      contact: "Contact",
      book: "Book Free Consultation",
    },
    hero: {
      title: [
        { text: "Transform Your " },
        { text: "Health", highlight: true },
        { text: ", Transform Your " },
        { text: "Life.", highlight: true },
      ],
      subtitle:
        "Personalized nutrition guidance, healthy lifestyle coaching, and a supportive community to help you achieve lasting results.",
      ctaBook: "Book Free Wellness Evaluation",
      ctaWhatsapp: "WhatsApp Us",
      statMembers: "Happy Members",
      statSessions: "Wellness Sessions",
      statYears: "Years of Experience",
      familyAlt: "Happy healthy family",
    },
    about: {
      eyebrow: "About PC's Wellness Club",
      heading: "Your Partner in Lifelong Wellness",
      p1: "At PC's Wellness Club, we believe that true wellness comes from balanced nutrition, regular activity, positive habits, and a strong mindset. Our mission is to educate, motivate, and support you at every step of your journey.",
      script: "Together Towards Better Health",
      areasEyebrow: "Areas We Support",
      areasHeading: "Your Health Goals, Our Guidance",
      disclaimer:
        "Our programs focus on nutrition, healthy habits, and lifestyle coaching. Individual results vary and our services are not intended to diagnose, treat, cure, or prevent any disease.",
    },
    areas: {
      weight: "Weight Management",
      heart: "Heart Health Support",
      energy: "Energy & Active Lifestyle",
      child: "Child Nutrition Guidance",
      digestive: "Digestive Wellness",
      bone: "Bone & Joint Health",
      stress: "Stress Management & Well-being",
      menWomen: "Men's & Women's Wellness",
    },
    bmi: {
      heading: "BMI Risk Meter",
      subtext:
        "Check your Body Mass Index and understand possible health risk levels with a speedometer-style visual.",
      enterDetails: "Enter Your Details",
      metric: "Metric",
      imperial: "Imperial",
      weight: "Weight",
      heightCm: "Height (cm)",
      heightFt: "Height (ft)",
      heightIn: "Height (in)",
      weightPlaceholderMetric: "e.g. 70",
      weightPlaceholderImperial: "e.g. 154",
      heightCmPlaceholder: "e.g. 170",
      heightFtPlaceholder: "5",
      heightInPlaceholder: "7",
      calculate: "Calculate BMI",
      resultTitle: "Your Speedometer Result",
      bmiLabel: "BMI",
      category: "Category",
      calcCategory: "Calculate to view your category",
      calcRisk: "This meter helps you quickly understand possible lifestyle-related risk levels.",
      disclaimer:
        "BMI is a screening indicator for adults, not a diagnosis. These examples are for general guidance only. Athletes, pregnant women, and individuals with specific medical conditions may need more detailed clinical assessment.",
      errors: {
        weight: "Please enter a valid weight greater than 0.",
        heightCm: "Please enter a valid height in centimeters.",
        heightRange: "Height looks out of expected adult range. Please verify your entry.",
        heightFtIn: "Please enter valid feet and inches values.",
        inchesRange: "Use valid height values. Inches should be between 0 and 11.",
        totalHeight: "Please enter a valid height in feet and inches.",
        generic: "Unable to calculate BMI with these values. Please check your inputs.",
      },
      bands: {
        underweight: {
          label: "Underweight",
          risk: "Possible associated conditions: iron deficiency anemia, vitamin deficiencies, and lower immunity.",
        },
        healthy: {
          label: "Healthy",
          risk: "No specific disease signal from BMI alone; continue regular habits and routine checkups.",
        },
        overweight: {
          label: "Overweight",
          risk: "Possible associated conditions: prediabetes, high blood pressure, high cholesterol, and fatty liver.",
        },
        obesity1: {
          label: "Obesity Class I",
          risk: "Possible associated conditions: type 2 diabetes, sleep apnea, joint pain, and fatty liver.",
        },
        obesity2: {
          label: "Obesity Class II",
          risk: "Possible associated conditions: heart disease, stroke risk, insulin resistance, and osteoarthritis.",
        },
        obesity3: {
          label: "Obesity Class III",
          risk: "Possible associated conditions: severe sleep apnea, cardiovascular disease, metabolic syndrome, and mobility issues.",
        },
      },
    },
    pillars: {
      heading: "Our Five Pillars of Health",
      exercise: {
        title: "Exercise",
        desc: "Stay active daily and build a stronger body.",
      },
      nutrition: {
        title: "Balanced Nutrition",
        desc: "Fuel your body with the right nutrients.",
      },
      hydration: {
        title: "Hydration",
        desc: "Drink water, stay refreshed, stay healthy.",
      },
      sleep: {
        title: "Quality Sleep",
        desc: "Good sleep rejuvenates your body and mind.",
      },
      mindset: {
        title: "Positive Mindset",
        desc: "Think positive, stay motivated, live happy.",
      },
    },
    journey: {
      heading: "Your Wellness Journey",
      subtitle: "Simple Steps to a Healthier You",
      book: {
        title: "Book Your Free Consultation",
        desc: "Choose a time that suits you.",
      },
      eval: {
        title: "Wellness Evaluation",
        desc: "We assess your lifestyle & goals.",
      },
      plan: {
        title: "Personalized Plan",
        desc: "Get a plan made just for you.",
      },
      support: {
        title: "Continuous Support & Tracking",
        desc: "Mon – Sat: motivate & track your progress.",
      },
    },
    whyUs: {
      heading: "Why People Choose Us",
      items: [
        "Personalized Attention",
        "Friendly Community",
        "Practical Daily Habits",
        "Sustainable Lifestyle Changes",
        "Regular Follow-ups",
        "Online & Offline Guidance",
      ],
    },
    testimonials: {
      eyebrow: "Success Stories",
      heading: "Real People, Real Results",
      subtitle: "Real journeys from our members",
      disclaimer: "Individual experiences and results vary.",
      rated: "Rated 5 out of 5",
      imgAlt: "{name} — before and after",
    },
    stories: {
      pushpa: {
        result: "Lost 15 kg in 4 months",
        quote:
          "If this community didn't exist, I wouldn't be here today either. Not only did my body change, my whole life turned around 360°.",
      },
      niraj: {
        result: "Lost 20 kg",
        quote:
          "I didn't realize I was overweight. Joining the community, I changed my lifestyle, and now I'm enjoying my ideal weight and a healthy lifestyle.",
      },
      kaushallya: {
        result: "Fit enough to do all her housework herself",
        quote:
          "My heavy body made it impossible to do housework. Now I've let my maid go and do all the work myself, quickly.",
      },
      ramrao: {
        result: "Lost 24 kg",
        quote:
          "Words cannot describe the happiness this community has brought to my family. My late-night friends are gone, and I've made many more early-morning (good) friends.",
      },
      uttamrao: {
        result: "New mindset & healthier lifestyle",
        quote:
          "I retired after serving in the Health Department, but I never knew the true value of health. When I became a student here, my thinking changed and my life changed.",
      },
      kishan: {
        result: "Lost 10 kg",
        quote:
          "Since joining the community, it feels like I've been given a new life. Every problem of mine was solved here, and I've become completely medicine-free.",
      },
      mahadeo: {
        result: "Piles resolved — surgery avoided",
        quote:
          "I had a piles problem, and the doctors recommended surgery. But when I changed my tea and snacks, my problem was cured and the surgery was avoided too. I'm very happy.",
      },
      santosh: {
        result: "Lost 22 kg",
        quote:
          "I'm retired from the Army. I had the attitude that “I can do everything myself,” but my weight had reached 134 kg. Then I got Sir's number. By calling and joining the community, I lost 22 kg.",
      },
      ganesh: {
        result: "Acidity under control, more confident",
        quote:
          "I used to have terrible acidity, which has now reduced. There's a big change in my personality too.",
      },
      mahesh: {
        result: "Healthy growth & weight gain",
        quote:
          "For my age, my waist and height were small, and I was thin. No matter what I ate, my weight and height wouldn't increase. Now everything has changed and I'm very happy.",
      },
    },
    videoTestimonials: {
      eyebrow: "Watch Their Stories",
      heading: "Real Members, In Their Own Words",
      subtitle: "Hear from our members — what changed for them at PC's Wellness Club",
      disclaimer: "Individual experiences and results vary.",
      watch: "Play video",
    },
    gallery: {
      heading: "Moments That Inspire",
      alt: "Wellness community",
      showMore: "Show more photos",
      showLess: "Show less",
    },
    faq: {
      heading: "Frequently Asked Questions",
      q1: "Who can join PC's Wellness Club?",
      a1: "Anyone above 15 looking to improve their health, energy, nutrition, or lifestyle is welcome — beginners included.",
      q2: "Is this only for weight loss?",
      a2: "No. We support weight loss, weight gain, active lifestyle, child nutrition, stress management, and overall wellness.",
      q3: "Do I need gym experience?",
      a3: "Not at all. Our plans start at your current level and progress gradually with easy daily practices.",
      q4: "Are online sessions available?",
      a4: "Yes. You can join us online, offline, or a mix of both — whatever fits your schedule.",
      q5: "How do I begin?",
      a5: "Book a free wellness evaluation. We'll understand your goals and share a personalized plan.",
    },
    booking: {
      ctaHeading: "Your Healthiest Future Starts Today!",
      ctaSubtitle: "Take the first step. Book your free wellness evaluation now.",
      ctaBook: "Book Free Consultation",
      ctaWhatsapp: "WhatsApp Us",
      heading: "Book Your Free Consultation",
      subtitle: "Fill this in — it opens WhatsApp with your booking details ready to send.",
      form: {
        name: "Name",
        phone: "Phone / WhatsApp number",
        goal: "Goal",
        slot: "Preferred slot",
        message: "Message (optional)",
        selectPlaceholder: "Select…",
        goals: ["Weight Loss", "Weight Gain", "Nutrition", "Fitness", "General Wellness"],
        slots: ["Morning (8:00 – 10:00 AM)", "Evening (5:30 – 7:30 PM)", "Online", "Flexible"],
        submit: "Book via WhatsApp",
        helper: "Opens WhatsApp to 7048378091 with your details pre-filled — just press Send.",
        errors: {
          name: "Please enter your name.",
          phone: "Please enter a valid 10-digit mobile number.",
          goal: "Please select a goal.",
          slot: "Please select a preferred slot.",
        },
      },
    },
    footer: {
      tagline: "Together Towards Better Health",
      quickLinks: "Quick Links",
      locate: "Locate Us",
      findMap: "Find us on Google Maps",
      days: "Mon – Sun",
      morning: "Morning: 8:00 AM – 10:00 AM",
      evening: "Evening: 5:30 PM – 7:30 PM",
      disclaimer:
        "Disclaimer: PC's Wellness Club provides wellness education, nutrition guidance, and lifestyle coaching to support overall well-being. Our programs are not intended to diagnose, treat, cure, or prevent any disease. Individual results vary. Consult your physician for medical advice.",
      copyright: "© 2026 PC's Wellness Club. All Rights Reserved.",
    },
    floating: {
      call: "Call Now",
      whatsapp: "WhatsApp",
      chatTooltip: "Chat with us!",
    },
  },

  hi: {
    nav: {
      home: "होम",
      about: "हमारे बारे में",
      bmi: "BMI कैलकुलेटर",
      testimonials: "सफलता की कहानियाँ",
      gallery: "गैलरी",
      contact: "संपर्क",
      book: "मुफ़्त परामर्श बुक करें",
    },
    hero: {
      title: [
        { text: "अपना " },
        { text: "स्वास्थ्य", highlight: true },
        { text: " बदलें, अपना " },
        { text: "जीवन", highlight: true },
        { text: " बदलें।" },
      ],
      subtitle:
        "व्यक्तिगत पोषण मार्गदर्शन, स्वस्थ जीवनशैली कोचिंग और एक सहयोगी समुदाय जो आपको स्थायी परिणाम पाने में मदद करता है।",
      ctaBook: "मुफ़्त वेलनेस मूल्यांकन बुक करें",
      ctaWhatsapp: "हमें WhatsApp करें",
      statMembers: "संतुष्ट सदस्य",
      statSessions: "वेलनेस सत्र",
      statYears: "वर्षों का अनुभव",
      familyAlt: "खुश स्वस्थ परिवार",
    },
    about: {
      eyebrow: "PC's वेलनेस क्लब के बारे में",
      heading: "आजीवन वेलनेस में आपका साथी",
      p1: "PC's वेलनेस क्लब में हम मानते हैं कि सच्ची सेहत संतुलित पोषण, नियमित गतिविधि, सकारात्मक आदतों और मजबूत मानसिकता से आती है। हमारा मिशन आपके सफर के हर कदम पर आपको शिक्षित, प्रेरित और सहारा देना है।",
      script: "बेहतर स्वास्थ्य की ओर साथ मिलकर",
      areasEyebrow: "हम जिन क्षेत्रों में मदद करते हैं",
      areasHeading: "आपके स्वास्थ्य लक्ष्य, हमारा मार्गदर्शन",
      disclaimer:
        "हमारे कार्यक्रम पोषण, स्वस्थ आदतों और जीवनशैली कोचिंग पर केंद्रित हैं। व्यक्तिगत परिणाम भिन्न होते हैं और हमारी सेवाएँ किसी बीमारी का निदान, उपचार, इलाज या रोकथाम करने के लिए नहीं हैं।",
    },
    areas: {
      weight: "वज़न प्रबंधन",
      heart: "हृदय स्वास्थ्य सहायता",
      energy: "ऊर्जा और सक्रिय जीवनशैली",
      child: "बाल पोषण मार्गदर्शन",
      digestive: "पाचन स्वास्थ्य",
      bone: "हड्डी और जोड़ों का स्वास्थ्य",
      stress: "तनाव प्रबंधन और कल्याण",
      menWomen: "पुरुषों और महिलाओं का वेलनेस",
    },
    bmi: {
      heading: "BMI जोखिम मीटर",
      subtext:
        "अपना बॉडी मास इंडेक्स जांचें और स्पीडोमीटर-शैली दृश्य के साथ संभावित स्वास्थ्य जोखिम स्तर समझें।",
      enterDetails: "अपना विवरण दर्ज करें",
      metric: "मीट्रिक",
      imperial: "इम्पीरियल",
      weight: "वज़न",
      heightCm: "ऊँचाई (सेमी)",
      heightFt: "ऊँचाई (फीट)",
      heightIn: "ऊँचाई (इंच)",
      weightPlaceholderMetric: "जैसे 70",
      weightPlaceholderImperial: "जैसे 154",
      heightCmPlaceholder: "जैसे 170",
      heightFtPlaceholder: "5",
      heightInPlaceholder: "7",
      calculate: "BMI की गणना करें",
      resultTitle: "आपका स्पीडोमीटर परिणाम",
      bmiLabel: "BMI",
      category: "श्रेणी",
      calcCategory: "अपनी श्रेणी देखने के लिए गणना करें",
      calcRisk: "यह मीटर आपको संभावित जीवनशैली-संबंधी जोखिम स्तर समझने में मदद करता है।",
      disclaimer:
        "BMI वयस्कों के लिए एक जांच संकेतक है, निदान नहीं। ये उदाहरण केवल सामान्य मार्गदर्शन के लिए हैं। एथलीटों, गर्भवती महिलाओं और विशेष चिकित्सा स्थितियों वाले व्यक्तियों को अधिक विस्तृत नैदानिक मूल्यांकन की आवश्यकता हो सकती है।",
      errors: {
        weight: "कृपया 0 से अधिक मान्य वज़न दर्ज करें।",
        heightCm: "कृपया सेंटीमीटर में मान्य ऊँचाई दर्ज करें।",
        heightRange: "ऊँचाई अपेक्षित वयस्क सीमा से बाहर लगती है। कृपया अपनी प्रविष्टि जांचें।",
        heightFtIn: "कृपया मान्य फीट और इंच मान दर्ज करें।",
        inchesRange: "मान्य ऊँचाई मान का उपयोग करें। इंच 0 से 11 के बीच होने चाहिए।",
        totalHeight: "कृपया फीट और इंच में मान्य ऊँचाई दर्ज करें।",
        generic: "इन मानों के साथ BMI की गणना नहीं हो सकी। कृपया अपने इनपुट जांचें।",
      },
      bands: {
        underweight: {
          label: "कम वज़न",
          risk: "संभावित संबंधित स्थितियाँ: आयरन की कमी से एनीमिया, विटामिन की कमी और कम प्रतिरोधक क्षमता।",
        },
        healthy: {
          label: "स्वस्थ",
          risk: "BMI से अकेले कोई विशेष रोग संकेत नहीं; नियमित आदतें और नियमित जांच जारी रखें।",
        },
        overweight: {
          label: "अधिक वज़न",
          risk: "संभावित संबंधित स्थितियाँ: प्रीडायबिटीज, उच्च रक्तचाप, उच्च कोलेस्ट्रॉल और फैटी लीवर।",
        },
        obesity1: {
          label: "मोटापा श्रेणी I",
          risk: "संभावित संबंधित स्थितियाँ: टाइप 2 मधुमेह, स्लीप एपनिया, जोड़ों का दर्द और फैटी लीवर।",
        },
        obesity2: {
          label: "मोटापा श्रेणी II",
          risk: "संभावित संबंधित स्थितियाँ: हृदय रोग, स्ट्रोक का जोखिम, इंसुलिन प्रतिरोध और ऑस्टियोआर्थराइटिस।",
        },
        obesity3: {
          label: "मोटापा श्रेणी III",
          risk: "संभावित संबंधित स्थितियाँ: गंभीर स्लीप एपनिया, हृदय रोग, मेटाबोलिक सिंड्रोम और गतिशीलता समस्याएँ।",
        },
      },
    },
    pillars: {
      heading: "स्वास्थ्य के हमारे पाँच स्तंभ",
      exercise: {
        title: "व्यायाम",
        desc: "रोज़ सक्रिय रहें और मजबूत शरीर बनाएं।",
      },
      nutrition: {
        title: "संतुलित पोषण",
        desc: "अपने शरीर को सही पोषक तत्वों से ऊर्जा दें।",
      },
      hydration: {
        title: "जलयोजन",
        desc: "पानी पिएं, तरोताज़ा रहें, स्वस्थ रहें।",
      },
      sleep: {
        title: "गुणवत्तापूर्ण नींद",
        desc: "अच्छी नींद आपके शरीर और मन को तरोताज़ा करती है।",
      },
      mindset: {
        title: "सकारात्मक मानसिकता",
        desc: "सकारात्मक सोचें, प्रेरित रहें, खुश रहें।",
      },
    },
    journey: {
      heading: "आपकी वेलनेस यात्रा",
      subtitle: "स्वस्थ आपके लिए सरल कदम",
      book: {
        title: "अपना मुफ़्त परामर्श बुक करें",
        desc: "अपने लिए उपयुक्त समय चुनें।",
      },
      eval: {
        title: "वेलनेस मूल्यांकन",
        desc: "हम आपकी जीवनशैली और लक्ष्यों का आकलन करते हैं।",
      },
      plan: {
        title: "व्यक्तिगत योजना",
        desc: "सिर्फ आपके लिए बनी योजना पाएं।",
      },
      support: {
        title: "निरंतर सहायता और ट्रैकिंग",
        desc: "सोम – शनि: प्रेरित करें और अपनी प्रगति पर नज़र रखें।",
      },
    },
    whyUs: {
      heading: "लोग हमें क्यों चुनते हैं",
      items: [
        "व्यक्तिगत ध्यान",
        "मैत्रीपूर्ण समुदाय",
        "व्यावहारिक दैनिक आदतें",
        "स्थायी जीवनशैली बदलाव",
        "नियमित अनुवर्तन",
        "ऑनलाइन और ऑफलाइन मार्गदर्शन",
      ],
    },
    testimonials: {
      eyebrow: "सफलता की कहानियाँ",
      heading: "असली लोग, असली परिणाम",
      subtitle: "हमारे सदस्यों की असली यात्राएँ",
      disclaimer: "व्यक्तिगत अनुभव और परिणाम भिन्न होते हैं।",
      rated: "5 में से 5 रेटिंग",
      imgAlt: "{name} — पहले और बाद में",
    },
    stories: {
      pushpa: {
        result: "4 महीनों में 15 किग्रा घटाया",
        quote:
          "अगर यह Community न होती, तो आज मैं भी न होती। न केवल मेरा शारीरिक बदलाव हुआ, बल्कि मेरी जिंदगी भी 360° बदल गई।",
      },
      niraj: {
        result: "20 किग्रा घटाया",
        quote:
          "मुझे Overweight होने का अहसास नहीं था। Community में आकर मैंने अपनी जीवनशैली बदली, और अब मैं आइडियल Weight और Healthy Lifestyle का आनंद ले रहा हूँ।",
      },
      kaushallya: {
        result: "अब सारा घर का काम खुद फुर्ती से करती हैं",
        quote:
          "भारी-भरकम शरीर की वजह से मुझसे घर का काम नहीं होता था। अब मैंने अपनी कामवाली (बाई) को हटा दिया है और सब काम खुद फुर्ती से करती हूँ।",
      },
      ramrao: {
        result: "24 किग्रा घटाया",
        quote:
          "इस Community ने मेरे परिवार में जो खुशियाँ लाई हैं, उन्हें मैं शब्दों में बयान नहीं कर सकता। मेरे रात के (देर तक जागने वाले) दोस्त छूट गए और सुबह वाले (अच्छे) दोस्त ज्यादा बन गए।",
      },
      uttamrao: {
        result: "नई सोच और स्वस्थ जीवनशैली",
        quote:
          "Health Department में सेवा करके रिटायर्ड हुआ था, लेकिन स्वास्थ्य की असली कीमत मुझे नहीं पता थी। यहाँ आकर जब मैं एक Student बना, तो मेरी सोच बदली और मेरी जिंदगी बदल गई।",
      },
      kishan: {
        result: "10 किग्रा घटाया",
        quote:
          "मुझे Community में आकर ऐसा लगता है जैसे नया जीवन मिल गया हो। मेरी हर समस्या यहाँ हल हो गई और मैं बिलकुल Medicine-free हो गया हूँ।",
      },
      mahadeo: {
        result: "बवासीर ठीक — ऑपरेशन टला",
        quote:
          "मुझे Piles की समस्या थी और डॉक्टरों ने ऑपरेशन बताया था। लेकिन जब मैंने अपना चाय-नाश्ता बदला, तो मेरी समस्या खत्म हो गई और ऑपरेशन भी टल गया। मैं बहुत खुश हूँ।",
      },
      santosh: {
        result: "22 किग्रा घटाया",
        quote:
          "मैं आर्मी से रिटायर्ड हूँ। मेरा Attitude था कि “मैं सब अपने आप कर लूँगा,” लेकिन मेरा वजन 134 kg तक पहुँच गया था। फिर मुझे सर का नंबर मिला। कॉल करके Community के माध्यम से मैंने 22 kg वजन कम किया।",
      },
      ganesh: {
        result: "एसिडिटी कम, आत्मविश्वास बढ़ा",
        quote:
          "मुझे बहुत जबरदस्त Acidity की समस्या होती थी, जो अब कम हो गई है। मेरी Personality में भी बहुत बदलाव आया है।",
      },
      mahesh: {
        result: "बेहतर वृद्धि और वजन",
        quote:
          "मेरी उम्र के हिसाब से मेरी कमर और कद छोटा था, और मैं दुबला-पतला था। कुछ भी खाने पर वजन और कद नहीं बढ़ता था। अब सब कुछ बदल गया है और मैं बहुत खुश हूँ।",
      },
    },
    videoTestimonials: {
      eyebrow: "उनकी कहानियाँ देखें",
      heading: "असली सदस्य, उन्हीं की ज़ुबानी",
      subtitle: "हमारे सदस्यों से सुनें — PC's वेलनेस क्लब में उनके लिए क्या बदला",
      disclaimer: "व्यक्तिगत अनुभव और परिणाम भिन्न होते हैं।",
      watch: "वीडियो चलाएं",
    },
    gallery: {
      heading: "प्रेरित करने वाले क्षण",
      alt: "वेलनेस समुदाय",
      showMore: "और तस्वीरें देखें",
      showLess: "कम दिखाएं",
    },
    faq: {
      heading: "अक्सर पूछे जाने वाले प्रश्न",
      q1: "PC's वेलनेस क्लब में कौन शामिल हो सकता है?",
      a1: "15 वर्ष से अधिक उम्र का कोई भी व्यक्ति जो अपने स्वास्थ्य, ऊर्जा, पोषण या जीवनशैली में सुधार चाहता है, उसका स्वागत है — शुरुआती भी शामिल हैं।",
      q2: "क्या यह केवल वज़न घटाने के लिए है?",
      a2: "नहीं। हम वज़न घटाने, वज़न बढ़ाने, सक्रिय जीवनशैली, बाल पोषण, तनाव प्रबंधन और समग्र वेलनेस में सहायता करते हैं।",
      q3: "क्या मुझे जिम अनुभव चाहिए?",
      a3: "बिल्कुल नहीं। हमारी योजनाएँ आपके वर्तमान स्तर से शुरू होती हैं और आसान दैनिक अभ्यासों के साथ धीरे-धीरे आगे बढ़ती हैं।",
      q4: "क्या ऑनलाइन सत्र उपलब्ध हैं?",
      a4: "हाँ। आप ऑनलाइन, ऑफलाइन या दोनों के मिश्रण से भी जुड़ सकते हैं — जो भी आपके कार्यक्रम में फिट बैठे।",
      q5: "मैं कैसे शुरू करूँ?",
      a5: "एक मुफ़्त वेलनेस मूल्यांकन बुक करें। हम आपके लक्ष्य समझेंगे और एक व्यक्तिगत योजना साझा करेंगे।",
    },
    booking: {
      ctaHeading: "आपका सबसे स्वस्थ भविष्य आज से शुरू होता है!",
      ctaSubtitle: "पहला कदम उठाएं। अभी अपना मुफ़्त वेलनेस मूल्यांकन बुक करें।",
      ctaBook: "मुफ़्त परामर्श बुक करें",
      ctaWhatsapp: "हमें WhatsApp करें",
      heading: "अपना मुफ़्त परामर्श बुक करें",
      subtitle: "इसे भरें — यह आपकी बुकिंग जानकारी के साथ WhatsApp खोलेगा।",
      form: {
        name: "नाम",
        phone: "फ़ोन / WhatsApp नंबर",
        goal: "लक्ष्य",
        slot: "पसंदीदा स्लॉट",
        message: "संदेश (वैकल्पिक)",
        selectPlaceholder: "चुनें…",
        goals: ["वज़न घटाना", "वज़न बढ़ाना", "पोषण", "फिटनेस", "सामान्य वेलनेस"],
        slots: ["सुबह (8:00 – 10:00 बजे)", "शाम (5:30 – 7:30 बजे)", "ऑनलाइन", "लचीला"],
        submit: "WhatsApp से बुक करें",
        helper: "आपकी जानकारी के साथ WhatsApp खुलता है — बस भेजें दबाएं।",
        errors: {
          name: "कृपया अपना नाम दर्ज करें।",
          phone: "कृपया मान्य 10-अंकी मोबाइल नंबर दर्ज करें।",
          goal: "कृपया एक लक्ष्य चुनें।",
          slot: "कृपया एक पसंदीदा स्लॉट चुनें।",
        },
      },
    },
    footer: {
      tagline: "बेहतर स्वास्थ्य की ओर साथ मिलकर",
      quickLinks: "त्वरित लिंक",
      locate: "हमें खोजें",
      findMap: "Google Maps पर हमें खोजें",
      days: "सोम – रवि",
      morning: "सुबह: 8:00 – 10:00 बजे",
      evening: "शाम: 5:30 – 7:30 बजे",
      disclaimer:
        "अस्वीकरण: PC's वेलनेस क्लब समग्र कल्याण के लिए वेलनेस शिक्षा, पोषण मार्गदर्शन और जीवनशैली कोचिंग प्रदान करता है। हमारे कार्यक्रम किसी बीमारी का निदान, उपचार, इलाज या रोकथाम करने के लिए नहीं हैं। व्यक्तिगत परिणाम भिन्न होते हैं। चिकित्सीय सलाह के लिए अपने चिकित्सक से परामर्श करें।",
      copyright: "© 2026 PC's वेलनेस क्लब. सर्व अधिकार सुरक्षित।",
    },
    floating: {
      call: "अभी कॉल करें",
      whatsapp: "WhatsApp",
      chatTooltip: "हमसे बात करें!",
    },
  },

  mr: {
    nav: {
      home: "मुख्यपृष्ठ",
      about: "आमच्याबद्दल",
      bmi: "BMI कॅल्क्युलेटर",
      testimonials: "यशोगाथा",
      gallery: "गॅलरी",
      contact: "संपर्क",
      book: "मोफत सल्ला बुक करा",
    },
    hero: {
      title: [
        { text: "आपले " },
        { text: "आरोग्य", highlight: true },
        { text: " बदला, आपले " },
        { text: "जीवन", highlight: true },
        { text: " बदला." },
      ],
      subtitle:
        "वैयक्तिक पोषण मार्गदर्शन, निरोगी जीवनशैली प्रशिक्षण आणि सहकारी समुदाय जो तुम्हाला दीर्घकालीन परिणाम मिळवण्यास मदत करतो.",
      ctaBook: "मोफत वेलनेस मूल्यांकन बुक करा",
      ctaWhatsapp: "आम्हाला WhatsApp करा",
      statMembers: "आनंदी सदस्य",
      statSessions: "वेलनेस सत्रे",
      statYears: "वर्षांचा अनुभव",
      familyAlt: "आनंदी निरोगी कुटुंब",
    },
    about: {
      eyebrow: "PC's वेलनेस क्लबबद्दल",
      heading: "आजीवन वेलनेसमध्ये तुमचा साथीदार",
      p1: "PC's वेलनेस क्लबमध्ये आम्ही मानतो की खरे आरोग्य संतुलित पोषण, नियमित क्रियाकलाप, सकारात्मक सवयी आणि मजबूत मानसिकतेने येते. आमचे ध्येय तुमच्या प्रवासात प्रत्येक टप्प्यावर तुम्हाला शिक्षित, प्रेरित आणि पाठिंबा देणे आहे.",
      script: "चांगल्या आरोग्यासाठी एकत्र",
      areasEyebrow: "आम्ही ज्या क्षेत्रांमध्ये मदत करतो",
      areasHeading: "तुमचे आरोग्य ध्येय, आमचे मार्गदर्शन",
      disclaimer:
        "आमचे कार्यक्रम पोषण, निरोगी सवयी आणि जीवनशैली प्रशिक्षणावर केंद्रित आहेत. वैयक्तिक परिणाम भिन्न असतात आणि आमच्या सेवांचा उद्देश कोणत्याही आजाराचे निदान, उपचार, बरा किंवा प्रतिबंध करणे नाही.",
    },
    areas: {
      weight: "वजन व्यवस्थापन",
      heart: "हृदय आरोग्य समर्थन",
      energy: "ऊर्जा आणि सक्रिय जीवनशैली",
      child: "बाल पोषण मार्गदर्शन",
      digestive: "पचन आरोग्य",
      bone: "हाडे व सांध्यांचे आरोग्य",
      stress: "तणाव व्यवस्थापन आणि कल्याण",
      menWomen: "पुरुष आणि महिलांचे वेलनेस",
    },
    bmi: {
      heading: "BMI जोखीम मीटर",
      subtext:
        "तुमचा बॉडी मास इंडेक्स तपासा आणि स्पीडोमीटर-शैलीच्या दृश्यासह संभाव्य आरोग्य जोखीम पातळी समजून घ्या.",
      enterDetails: "तुमची माहिती प्रविष्ट करा",
      metric: "मेट्रिक",
      imperial: "इम्पीरियल",
      weight: "वजन",
      heightCm: "उंची (सेमी)",
      heightFt: "उंची (फूट)",
      heightIn: "उंची (इंच)",
      weightPlaceholderMetric: "उदा. 70",
      weightPlaceholderImperial: "उदा. 154",
      heightCmPlaceholder: "उदा. 170",
      heightFtPlaceholder: "5",
      heightInPlaceholder: "7",
      calculate: "BMI मोजा",
      resultTitle: "तुमचा स्पीडोमीटर निकाल",
      bmiLabel: "BMI",
      category: "श्रेणी",
      calcCategory: "तुमची श्रेणी पाहण्यासाठी मोजा",
      calcRisk: "हे मीटर संभाव्य जीवनशैली-संबंधित जोखीम पातळी लवकर समजण्यास मदत करते.",
      disclaimer:
        "BMI हे प्रौढांसाठी तपासणी सूचक आहे, निदान नाही. ही उदाहरणे केवळ सामान्य मार्गदर्शनासाठी आहेत. खेळाडू, गर्भवती महिला आणि विशिष्ट वैद्यकीय स्थिती असलेल्या व्यक्तींना अधिक तपशीलवार वैद्यकीय मूल्यांकनाची आवश्यकता असू शकते.",
      errors: {
        weight: "कृपया 0 पेक्षा जास्त वैध वजन प्रविष्ट करा.",
        heightCm: "कृपया सेंटीमीटरमध्ये वैध उंची प्रविष्ट करा.",
        heightRange: "उंची अपेक्षित प्रौढ श्रेणीबाहेर दिसते. कृपया तुमची नोंद तपासा.",
        heightFtIn: "कृपया वैध फूट आणि इंच मूल्ये प्रविष्ट करा.",
        inchesRange: "वैध उंची मूल्ये वापरा. इंच 0 ते 11 दरम्यान असावेत.",
        totalHeight: "कृपया फूट आणि इंचमध्ये वैध उंची प्रविष्ट करा.",
        generic: "या मूल्यांसह BMI मोजता आला नाही. कृपया तुमची नोंद तपासा.",
      },
      bands: {
        underweight: {
          label: "कमी वजन",
          risk: "संभाव्य संबंधित स्थिती: लोहाची कमतरता अॅनिमिया, जीवनसत्त्वांची कमतरता आणि कमी प्रतिकारशक्ती.",
        },
        healthy: {
          label: "निरोगी",
          risk: "एकट्या BMI वरून विशिष्ट आजाराचा संकेत नाही; नियमित सवयी आणि नियमित तपासणी सुरू ठेवा.",
        },
        overweight: {
          label: "जास्त वजन",
          risk: "संभाव्य संबंधित स्थिती: प्रीडायबिटीज, उच्च रक्तदाब, उच्च कोलेस्टेरॉल आणि फॅटी लिव्हर.",
        },
        obesity1: {
          label: "लठ्ठपणा श्रेणी I",
          risk: "संभाव्य संबंधित स्थिती: टाइप 2 मधुमेह, स्लीप एपनिया, सांधेदुखी आणि फॅटी लिव्हर.",
        },
        obesity2: {
          label: "लठ्ठपणा श्रेणी II",
          risk: "संभाव्य संबंधित स्थिती: हृदयरोग, स्ट्रोकचा धोका, इन्सुलिन प्रतिरोध आणि ऑस्टियोआर्थरायटिस.",
        },
        obesity3: {
          label: "लठ्ठपणा श्रेणी III",
          risk: "संभाव्य संबंधित स्थिती: गंभीर स्लीप एपनिया, हृदय व रक्तवाहिनी रोग, चयापचय सिंड्रोम आणि गतिशीलता समस्या.",
        },
      },
    },
    pillars: {
      heading: "आरोग्याचे आमचे पाच स्तंभ",
      exercise: {
        title: "व्यायाम",
        desc: "रोज सक्रिय राहा आणि मजबूत शरीर बनवा.",
      },
      nutrition: {
        title: "संतुलित पोषण",
        desc: "तुमच्या शरीराला योग्य पोषण द्या.",
      },
      hydration: {
        title: "हायड्रेशन",
        desc: "पाणी प्या, ताजे राहा, निरोगी राहा.",
      },
      sleep: {
        title: "दर्जेदार झोप",
        desc: "चांगली झोप शरीर आणि मनाला ताजेतवाने करते.",
      },
      mindset: {
        title: "सकारात्मक मानसिकता",
        desc: "सकारात्मक विचार करा, प्रेरित राहा, आनंदी राहा.",
      },
    },
    journey: {
      heading: "तुमचा वेलनेस प्रवास",
      subtitle: "निरोगी तुमच्यासाठी सोपी पावले",
      book: {
        title: "तुमचा मोफत सल्ला बुक करा",
        desc: "तुम्हाला अनुकूल वेळ निवडा.",
      },
      eval: {
        title: "वेलनेस मूल्यांकन",
        desc: "आम्ही तुमची जीवनशैली आणि ध्येयांचे मूल्यांकन करतो.",
      },
      plan: {
        title: "वैयक्तिक योजना",
        desc: "फक्त तुमच्यासाठी तयार केलेली योजना मिळवा.",
      },
      support: {
        title: "सतत समर्थन आणि ट्रॅकिंग",
        desc: "सोम – शनि: प्रेरित करा आणि तुमच्या प्रगतीचा मागोवा घ्या.",
      },
    },
    whyUs: {
      heading: "लोक आम्हाला का निवडतात",
      items: [
        "वैयक्तिक लक्ष",
        "मैत्रीपूर्ण समुदाय",
        "व्यावहारिक दैनंदिन सवयी",
        "दीर्घकालीन जीवनशैली बदल",
        "नियमित पाठपुरावा",
        "ऑनलाइन आणि ऑफलाइन मार्गदर्शन",
      ],
    },
    testimonials: {
      eyebrow: "यशोगाथा",
      heading: "खरे लोक, खरे परिणाम",
      subtitle: "आमच्या सदस्यांचे खरे प्रवास",
      disclaimer: "वैयक्तिक अनुभव आणि परिणाम भिन्न असतात.",
      rated: "5 पैकी 5 रेटिंग",
      imgAlt: "{name} — आधी आणि नंतर",
    },
    stories: {
      pushpa: {
        result: "4 महिन्यांत 15 किलो कमी",
        quote:
          "ही Community नसती, तर आज मी पण नसते. केवळ माझ्या शरीरातच बदल झाला नाही, तर माझं संपूर्ण आयुष्य 360° बदलले.",
      },
      niraj: {
        result: "20 किलो कमी",
        quote:
          "मला मी Overweight आहे हे कळलंच नव्हतं. Community मध्ये आल्यावर मी माझी जीवनशैली बदलली, आणि आता मी Ideal Weight आणि Healthy Lifestyle चा आनंद घेत आहे.",
      },
      kaushallya: {
        result: "आता सर्व घरकाम स्वतः तडफेने करते",
        quote:
          "पूर्वी वजन जास्त असल्यामुळे घरची कामं करणं मला थोडं अवघड जायचं. आता मात्र मी घरकामासाठी बाई ठेवलेली नाही. स्वतःची कामं स्वतःच आनंदाने आणि फुर्तीने करते.",
      },
      ramrao: {
        result: "24 किलो कमी",
        quote:
          "या Community ने माझ्या कुटुंबात जे आनंद आणले आहेत, ते मी शब्दांत सांगू शकत नाही. माझे रात्रीचे (उशिरा जागरण करणारे) मित्र सुटले आणि सकाळचे (चांगले) मित्र जास्त झाले.",
      },
      uttamrao: {
        result: "नवी विचारसरणी आणि निरोगी जीवनशैली",
        quote:
          "Health Department मध्ये सेवा करून रिटायर्ड झालो होतो, पण आरोग्याची खरी किंमत मला माहीत नव्हती. इथे आल्यावर मी एक विद्यार्थी बनलो, तेव्हा माझी विचारसरणी बदलली आणि माझं आयुष्य बदललं.",
      },
      kishan: {
        result: "10 किलो कमी",
        quote:
          "Community मध्ये आल्यावर मला असं वाटतं की नवं आयुष्य मिळालं आहे. माझी प्रत्येक समस्या इथे सुटली आणि मी पूर्णपणे Medicine-free झालो आहे.",
      },
      mahadeo: {
        result: "मूळव्याध बरा — ऑपरेशन टळलं",
        quote:
          "मला Piles ची समस्या होती आणि डॉक्टरांनी ऑपरेशन सांगितलं होतं. पण जेव्हा मी माझा चहा-नाश्ता बदलला, तेव्हा माझी समस्या संपली आणि ऑपरेशनही टळलं. मी खूप आनंदी आहे.",
      },
      santosh: {
        result: "22 किलो कमी",
        quote:
          "मी आर्मीमधून रिटायर्ड आहे. माझे Attitude होते की “मी सर्व स्वतःच करून घेईन,” पण माझं वजन 134 kg पर्यंत पोहोचलं होतं. नंतर मला सरांचा नंबर मिळाला. कॉल करून Community मार्फत मी 22 kg वजन कमी केलं.",
      },
      ganesh: {
        result: "Acidity नियंत्रित, आत्मविश्वास वाढला",
        quote:
          "मला खूप तीव्र Acidity चा त्रास होत होता, जो आता कमी झाला आहे. माझ्या Personality मध्येही खूप बदल झाला आहे.",
      },
      mahesh: {
        result: "चांगली वाढ आणि वजन",
        quote:
          "माझ्या वयाच्या तुलनेत माझी कंबर आणि उंची कमी होती, आणि मी अगदी बारीक होतो. काहीही खाल्लं तरी वजन आणि उंची वाढत नव्हती. आता सर्व काही बदललं आहे आणि मी खूप आनंदी आहे.",
      },
    },
    videoTestimonials: {
      eyebrow: "त्यांच्या कथा पहा",
      heading: "खरे सदस्य, त्यांच्याच शब्दांत",
      subtitle: "आमच्या सदस्यांकडून ऐका — PC's वेलनेस क्लबमध्ये त्यांच्यासाठी काय बदलले",
      disclaimer: "वैयक्तिक अनुभव आणि परिणाम भिन्न असतात.",
      watch: "व्हिडिओ प्ले करा",
    },
    gallery: {
      heading: "प्रेरणा देणारे क्षण",
      alt: "वेलनेस समुदाय",
      showMore: "आणखी फोटो पहा",
      showLess: "कमी दाखवा",
    },
    faq: {
      heading: "वारंवार विचारले जाणारे प्रश्न",
      q1: "PC's वेलनेस क्लबमध्ये कोण सामील होऊ शकते?",
      a1: "१५ वर्षांपेक्षा जास्त वयाचा, आरोग्य, ऊर्जा, पोषण किंवा जीवनशैली सुधारण्याची इच्छा असणारा कोणीही स्वागत आहे — नवशिकेही सामील होऊ शकतात.",
      q2: "हे फक्त वजन कमी करण्यासाठी आहे का?",
      a2: "नाही. आम्ही वजन कमी, वजन वाढ, सक्रिय जीवनशैली, बाल पोषण, तणाव व्यवस्थापन आणि एकूण वेलनेसमध्ये मदत करतो.",
      q3: "मला जिमचा अनुभव हवा आहे का?",
      a3: "अजिबात नाही. आमच्या योजना तुमच्या सध्याच्या पातळीपासून सुरू होतात आणि सोप्या दैनंदिन सवयींनी हळूहळू पुढे जातात.",
      q4: "ऑनलाइन सत्रे उपलब्ध आहेत का?",
      a4: "होय. तुम्ही ऑनलाइन, ऑफलाइन किंवा दोन्हींच्या मिश्रणातून सामील होऊ शकता — तुमच्या वेळापत्रकाला अनुकूल असे.",
      q5: "मी कसे सुरू करू?",
      a5: "मोफत वेलनेस मूल्यांकन बुक करा. आम्ही तुमची ध्येये समजून घेऊ आणि वैयक्तिक योजना सामायिक करू.",
    },
    booking: {
      ctaHeading: "तुमचे सर्वात निरोगी भविष्य आजपासून सुरू होते!",
      ctaSubtitle: "पहिले पाऊल टाका. आता तुमचे मोफत वेलनेस मूल्यांकन बुक करा.",
      ctaBook: "मोफत सल्ला बुक करा",
      ctaWhatsapp: "आम्हाला WhatsApp करा",
      heading: "तुमचा मोफत सल्ला बुक करा",
      subtitle: "हे भरा — या तुमच्या बुकिंग माहितीसह WhatsApp उघडेल.",
      form: {
        name: "नाव",
        phone: "फोन / WhatsApp क्रमांक",
        goal: "ध्येय",
        slot: "पसंतीचा स्लॉट",
        message: "संदेश (ऐच्छिक)",
        selectPlaceholder: "निवडा…",
        goals: ["वजन कमी", "वजन वाढ", "पोषण", "फिटनेस", "सामान्य वेलनेस"],
        slots: ["सकाळ (8:00 – 10:00 वा.)", "संध्याकाळ (5:30 – 7:30 वा.)", "ऑनलाइन", "लवचिक"],
        submit: "WhatsApp वरून बुक करा",
        helper: "तुमच्या माहितीसह WhatsApp उघडते — फक्त पाठवा दाबा.",
        errors: {
          name: "कृपया तुमचे नाव प्रविष्ट करा.",
          phone: "कृपया वैध 10-अंकी मोबाइल क्रमांक प्रविष्ट करा.",
          goal: "कृपया एक ध्येय निवडा.",
          slot: "कृपया एक पसंतीचा स्लॉट निवडा.",
        },
      },
    },
    footer: {
      tagline: "चांगल्या आरोग्यासाठी एकत्र",
      quickLinks: "द्रुत दुवे",
      locate: "आम्हाला शोधा",
      findMap: "Google Maps वर आम्हाला शोधा",
      days: "सोम – रवि",
      morning: "सकाळ: 8:00 – 10:00 वा.",
      evening: "संध्याकाळ: 5:30 – 7:30 वा.",
      disclaimer:
        "अस्वीकरण: PC's वेलनेस क्लब एकूण कल्याणासाठी वेलनेस शिक्षण, पोषण मार्गदर्शन आणि जीवनशैली प्रशिक्षण प्रदान करते. आमच्या कार्यक्रमांचा उद्देश कोणत्याही आजाराचे निदान, उपचार, बरा किंवा प्रतिबंध करणे नाही. वैयक्तिक परिणाम भिन्न असतात. वैद्यकीय सल्ल्यासाठी तुमच्या डॉक्टरांचा सल्ला घ्या.",
      copyright: "© 2026 PC's वेलनेस क्लब. सर्व हक्क राखीव.",
    },
    floating: {
      call: "आत्ता कॉल करा",
      whatsapp: "WhatsApp",
      chatTooltip: "आमच्याशी बोला!",
    },
  },
} as const;

export type TranslationKey =
  | "nav.home"
  | "nav.about"
  | "nav.bmi"
  | "nav.testimonials"
  | "nav.gallery"
  | "nav.contact"
  | "nav.book"
  | "hero.subtitle"
  | "hero.ctaBook"
  | "hero.ctaWhatsapp"
  | "hero.statMembers"
  | "hero.statSessions"
  | "hero.statYears"
  | "hero.familyAlt"
  | "about.eyebrow"
  | "about.heading"
  | "about.p1"
  | "about.script"
  | "about.areasEyebrow"
  | "about.areasHeading"
  | "about.disclaimer"
  | "areas.weight"
  | "areas.heart"
  | "areas.energy"
  | "areas.child"
  | "areas.digestive"
  | "areas.bone"
  | "areas.stress"
  | "areas.menWomen"
  | "bmi.heading"
  | "bmi.subtext"
  | "bmi.enterDetails"
  | "bmi.metric"
  | "bmi.imperial"
  | "bmi.weight"
  | "bmi.heightCm"
  | "bmi.heightFt"
  | "bmi.heightIn"
  | "bmi.weightPlaceholderMetric"
  | "bmi.weightPlaceholderImperial"
  | "bmi.heightCmPlaceholder"
  | "bmi.heightFtPlaceholder"
  | "bmi.heightInPlaceholder"
  | "bmi.calculate"
  | "bmi.resultTitle"
  | "bmi.bmiLabel"
  | "bmi.category"
  | "bmi.calcCategory"
  | "bmi.calcRisk"
  | "bmi.disclaimer"
  | "bmi.errors.weight"
  | "bmi.errors.heightCm"
  | "bmi.errors.heightRange"
  | "bmi.errors.heightFtIn"
  | "bmi.errors.inchesRange"
  | "bmi.errors.totalHeight"
  | "bmi.errors.generic"
  | "bmi.bands.underweight.label"
  | "bmi.bands.underweight.risk"
  | "bmi.bands.healthy.label"
  | "bmi.bands.healthy.risk"
  | "bmi.bands.overweight.label"
  | "bmi.bands.overweight.risk"
  | "bmi.bands.obesity1.label"
  | "bmi.bands.obesity1.risk"
  | "bmi.bands.obesity2.label"
  | "bmi.bands.obesity2.risk"
  | "bmi.bands.obesity3.label"
  | "bmi.bands.obesity3.risk"
  | "pillars.heading"
  | "pillars.exercise.title"
  | "pillars.exercise.desc"
  | "pillars.nutrition.title"
  | "pillars.nutrition.desc"
  | "pillars.hydration.title"
  | "pillars.hydration.desc"
  | "pillars.sleep.title"
  | "pillars.sleep.desc"
  | "pillars.mindset.title"
  | "pillars.mindset.desc"
  | "journey.heading"
  | "journey.subtitle"
  | "journey.book.title"
  | "journey.book.desc"
  | "journey.eval.title"
  | "journey.eval.desc"
  | "journey.plan.title"
  | "journey.plan.desc"
  | "journey.support.title"
  | "journey.support.desc"
  | "whyUs.heading"
  | "testimonials.eyebrow"
  | "testimonials.heading"
  | "testimonials.subtitle"
  | "testimonials.disclaimer"
  | "testimonials.rated"
  | "testimonials.imgAlt"
  | "stories.pushpa.result"
  | "stories.pushpa.quote"
  | "stories.niraj.result"
  | "stories.niraj.quote"
  | "stories.kaushallya.result"
  | "stories.kaushallya.quote"
  | "stories.ganesh.result"
  | "stories.ganesh.quote"
  | "stories.ramrao.result"
  | "stories.ramrao.quote"
  | "stories.uttamrao.result"
  | "stories.uttamrao.quote"
  | "stories.santosh.result"
  | "stories.santosh.quote"
  | "stories.kishan.result"
  | "stories.kishan.quote"
  | "stories.mahadeo.result"
  | "stories.mahadeo.quote"
  | "stories.mahesh.result"
  | "stories.mahesh.quote"
  | "videoTestimonials.eyebrow"
  | "videoTestimonials.heading"
  | "videoTestimonials.subtitle"
  | "videoTestimonials.disclaimer"
  | "videoTestimonials.watch"
  | "gallery.heading"
  | "gallery.alt"
  | "gallery.showMore"
  | "gallery.showLess"
  | "faq.heading"
  | "faq.q1"
  | "faq.a1"
  | "faq.q2"
  | "faq.a2"
  | "faq.q3"
  | "faq.a3"
  | "faq.q4"
  | "faq.a4"
  | "faq.q5"
  | "faq.a5"
  | "booking.ctaHeading"
  | "booking.ctaSubtitle"
  | "booking.ctaBook"
  | "booking.ctaWhatsapp"
  | "booking.heading"
  | "booking.subtitle"
  | "booking.form.name"
  | "booking.form.phone"
  | "booking.form.goal"
  | "booking.form.slot"
  | "booking.form.message"
  | "booking.form.selectPlaceholder"
  | "booking.form.submit"
  | "booking.form.helper"
  | "booking.form.errors.name"
  | "booking.form.errors.phone"
  | "booking.form.errors.goal"
  | "booking.form.errors.slot"
  | "footer.tagline"
  | "footer.quickLinks"
  | "footer.locate"
  | "footer.findMap"
  | "footer.days"
  | "footer.morning"
  | "footer.evening"
  | "footer.disclaimer"
  | "footer.copyright"
  | "floating.call"
  | "floating.whatsapp"
  | "floating.chatTooltip";
