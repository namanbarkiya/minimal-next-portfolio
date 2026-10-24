import { Lang } from "./languages";

// Keys are the exact English texts used across the site. Each entry holds the
// translations for the other languages listed in config/languages.ts.
// Texts without an entry are shown in English.
export const dictionary: Record<string, Partial<Record<Lang, string>>> = {
  // Navigation
  Home: { hi: "होम" },
  Projects: { hi: "परियोजनाएँ" },
  Experience: { hi: "अनुभव" },
  Contributions: { hi: "योगदान" },
  Skills: { hi: "कौशल" },
  Blogs: { hi: "ब्लॉग" },
  Community: { hi: "समुदाय" },
  Contact: { hi: "संपर्क" },
  Resume: { hi: "रिज़्यूमे" },
  Menu: { hi: "मेनू" },

  // Page descriptions (config/pages.ts)
  "Key skills that define my professional identity.": {
    hi: "मुख्य कौशल जो मेरी पेशेवर पहचान को परिभाषित करते हैं।",
  },
  "Showcasing impactful projects and technical achievements.": {
    hi: "प्रभावशाली परियोजनाएँ और तकनीकी उपलब्धियाँ।",
  },
  "Let's connect and explore collaborations.": {
    hi: "आइए जुड़ें और साथ मिलकर काम करने के अवसर तलाशें।",
  },
  "Open-source contributions and community involvement.": {
    hi: "ओपन-सोर्स योगदान और समुदाय में भागीदारी।",
  },
  "Thoughts on AI, software engineering, and building in public.": {
    hi: "AI, सॉफ़्टवेयर इंजीनियरिंग और बिल्डिंग इन पब्लिक पर विचार।",
  },
  "Professional journey and career timeline.": {
    hi: "पेशेवर यात्रा और करियर टाइमलाइन।",
  },

  // Home page
  "Applied AI Engineer": { hi: "एप्लाइड AI इंजीनियर" },
  "Software engineer working at the intersection of AI, data, and scalable software systems.":
    {
      hi: "AI, डेटा और स्केलेबल सॉफ़्टवेयर सिस्टम के संगम पर काम करने वाला सॉफ़्टवेयर इंजीनियर।",
    },
  "View All": { hi: "सभी देखें" },

  // Projects
  All: { hi: "सभी" },
  Personal: { hi: "व्यक्तिगत" },
  Professional: { hi: "पेशेवर" },
  "Read more": { hi: "और पढ़ें" },
  "All Projects": { hi: "सभी परियोजनाएँ" },
  "Tech Stack": { hi: "टेक स्टैक" },
  Description: { hi: "विवरण" },
  "Page Info": { hi: "पेज जानकारी" },
  "Link to the source code.": { hi: "सोर्स कोड का लिंक।" },
  "Please note that some project links may be temporarily unavailable.": {
    hi: "कृपया ध्यान दें कि कुछ प्रोजेक्ट लिंक अस्थायी रूप से उपलब्ध नहीं हो सकते।",
  },

  // Project short descriptions (config/projects.ts)
  "Open-source Next.js portfolio template recognized and forked by developers worldwide, optimized for SEO/AEO and performance.":
    {
      hi: "दुनिया भर के डेवलपर्स द्वारा सराहा और फ़ोर्क किया गया ओपन-सोर्स Next.js पोर्टफोलियो टेम्पलेट, जो SEO/AEO और परफ़ॉर्मेंस के लिए ऑप्टिमाइज़ किया गया है।",
    },
  "Production-ready AI chatbot platform that crawls, indexes, and embeds knowledge from PDFs/URLs/text to deliver source-grounded answers via a one-line widget.":
    {
      hi: "प्रोडक्शन-रेडी AI चैटबॉट प्लेटफ़ॉर्म, जो PDF/URL/टेक्स्ट से जानकारी को क्रॉल, इंडेक्स और एम्बेड करता है और एक-लाइन विजेट के ज़रिए स्रोत-आधारित उत्तर देता है।",
    },
  "Production-ready Next.js 15 template for developers and AI startups. Includes authentication, state management, beautiful UI components, and everything needed to build scalable SaaS applications.":
    {
      hi: "डेवलपर्स और AI स्टार्टअप्स के लिए प्रोडक्शन-रेडी Next.js 15 टेम्पलेट। इसमें ऑथेंटिकेशन, स्टेट मैनेजमेंट, सुंदर UI कंपोनेंट्स और स्केलेबल SaaS एप्लिकेशन बनाने के लिए ज़रूरी सब कुछ शामिल है।",
    },
  "Forged an immersive 3D Portfolio Card utilizing the prowess of Three.js and Blender, where art and technology converge in an interactive masterpiece.":
    {
      hi: "Three.js और Blender की मदद से एक इमर्सिव 3D पोर्टफोलियो कार्ड बनाया, जहाँ कला और तकनीक एक इंटरैक्टिव कृति में मिलती हैं।",
    },
  "Pomodoro-inspired productivity web app with real-time sessions and recurring payments.":
    {
      hi: "पोमोडोरो से प्रेरित प्रोडक्टिविटी वेब ऐप, रियल-टाइम सेशन और रिकरिंग पेमेंट्स के साथ।",
    },
  "Developed and optimized a high-performing website catering to over 4000 users, emphasizing efficiency and maintainability.":
    {
      hi: "4000 से अधिक उपयोगकर्ताओं के लिए एक हाई-परफ़ॉर्मिंग वेबसाइट विकसित और ऑप्टिमाइज़ की, जिसमें दक्षता और मेंटेनेबिलिटी पर ज़ोर दिया गया।",
    },
  "Elevated The Super Quotes app with JavaScript, React Native, APIs, Redux magic, and Google Play Store debut.":
    {
      hi: "JavaScript, React Native, APIs और Redux की मदद से The Super Quotes ऐप को बेहतर बनाया और Google Play Store पर लॉन्च किया।",
    },
  "Developed a feature-rich mobile shopping application with admin panel, user authentication, and seamless product management using React Native and Firebase.":
    {
      hi: "React Native और Firebase का उपयोग करके एडमिन पैनल, यूज़र ऑथेंटिकेशन और आसान प्रोडक्ट मैनेजमेंट वाला फ़ीचर-रिच मोबाइल शॉपिंग ऐप विकसित किया।",
    },
  "Crafted Builtdesign's vibrant Blogs Website using Netlify CMS and React for engaging content experiences.":
    {
      hi: "Netlify CMS और React का उपयोग करके Builtdesign की आकर्षक ब्लॉग वेबसाइट बनाई।",
    },
  "Created a dashboard project using React and Tailwind CSS, focusing on UI design and routing implementation.":
    {
      hi: "React और Tailwind CSS से एक डैशबोर्ड प्रोजेक्ट बनाया, जिसमें UI डिज़ाइन और रूटिंग पर ध्यान दिया गया।",
    },
  "Developed a user-friendly website for Inscript Hindi typing, addressing the need for a simple tool for Hindi writers to convey data digitally.":
    {
      hi: "Inscript हिंदी टाइपिंग के लिए एक यूज़र-फ़्रेंडली वेबसाइट विकसित की, ताकि हिंदी लेखकों को डिजिटल रूप से लिखने के लिए एक आसान टूल मिल सके।",
    },

  // Experience
  Present: { hi: "वर्तमान" },
  "View Details": { hi: "विवरण देखें" },
  "+{count} more": { hi: "+{count} और" },
  Summary: { hi: "सारांश" },
  Achievements: { hi: "उपलब्धियाँ" },
  "Role Summary": { hi: "भूमिका का सारांश" },
  "Key Achievements": { hi: "मुख्य उपलब्धियाँ" },
  "Technologies & Skills": { hi: "तकनीकें और कौशल" },
  "These are the primary technologies and skills utilized during my time at {company}.":
    {
      hi: "ये वे मुख्य तकनीकें और कौशल हैं जिनका उपयोग मैंने {company} में अपने कार्यकाल के दौरान किया।",
    },
  "Back to Experience": { hi: "अनुभव पर वापस जाएँ" },
  "View All Experience": { hi: "सारा अनुभव देखें" },

  // Experience positions and locations (config/experience.ts)
  "Software Development Engineer": { hi: "सॉफ़्टवेयर डेवलपमेंट इंजीनियर" },
  "Founding Engineer": { hi: "फ़ाउंडिंग इंजीनियर" },
  "Web Developer Intern": { hi: "वेब डेवलपर इंटर्न" },
  "Mumbai, India": { hi: "मुंबई, भारत" },
  "Bengaluru, India": { hi: "बेंगलुरु, भारत" },
  "Nagpur, India": { hi: "नागपुर, भारत" },

  // Contact
  Name: { hi: "नाम" },
  Email: { hi: "ईमेल" },
  Message: { hi: "संदेश" },
  "Social (optional)": { hi: "सोशल (वैकल्पिक)" },
  "Enter your name": { hi: "अपना नाम दर्ज करें" },
  "Enter your email": { hi: "अपना ईमेल दर्ज करें" },
  "Enter your message": { hi: "अपना संदेश लिखें" },
  "Link for social account": { hi: "सोशल अकाउंट का लिंक" },
  Submit: { hi: "भेजें" },
  "Thankyou!": { hi: "धन्यवाद!" },
  "Your message has been received! I appreciate your contact and will get back to you shortly.":
    {
      hi: "आपका संदेश मिल गया है! संपर्क करने के लिए धन्यवाद, मैं जल्द ही आपसे संपर्क करूँगा।",
    },
  "Like this template?": { hi: "यह टेम्पलेट पसंद आया?" },
  "It's open source. Explore and contribute on GitHub.": {
    hi: "यह ओपन सोर्स है। GitHub पर देखें और योगदान दें।",
  },
  "Source Code": { hi: "सोर्स कोड" },

  // Blogs
  "{minutes} min read": { hi: "{minutes} मिनट का पाठ" },
  Read: { hi: "पढ़ें" },
  "No posts yet": { hi: "अभी कोई पोस्ट नहीं" },
  "Check back soon — posts are coming.": {
    hi: "जल्द ही वापस आएँ — पोस्ट आ रही हैं।",
  },
  "All posts": { hi: "सभी पोस्ट" },
  "Written by": { hi: "लेखक" },
};
