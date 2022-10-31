import { createContext, useEffect, useState } from "react";

const LanguageContext = createContext({});

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("arabic");

  useEffect(() => {
    const language = localStorage.getItem("language");
    if (language) {
      setLanguage(language);
    }
  }, [language]);

  const changeLanguage = () => {
    if (language === "arabic") {
      setLanguage("english");
      localStorage.setItem("language", "english");
      window.location.href = "./";
    } else {
      setLanguage("arabic");
      window.location.href = "./";
      localStorage.setItem("language", "arabic");
    }
  };

  let lang = {};
  if (language === "english") {
    lang = {
      nav: {
        home: "Home",
        about: "About Us",
        ourservices: "Our Services",
        contact: "Contact Us",
        language: "اللغة",
      },
      aboutus: {
        returnArt: "Return Art To",
        leadRole: "Its Leading Role and Societal",
        marketingSystem: "Developing The Marketing System",
        arabWorld: "In The Arab World",
        bestStudios: "The Best International Studios",
        experience: "To Ensure A Unique Experience For The Viewer or Listener",
        aboutUs: "About Us",
        ourCompany: "Our Company",
        aboutCompany:
          "The Diamond Innovation Group is Specialized in Audio-Visual Artistic Production, Discovering, Adopting and Developing Artistic Talents, Marketing and Advertising Services, Creating Business Identity, in Addition to Programming and Web Solutions.",
        ourVision: "Our Vision",
        companyVision:
          " Creating an Advanced Arab Marketing System That Produces Creative Content That Competes With Global Content, Keeps Pace With The Latest Technological Technologies, and Acts as a Powerful Tool to Influence and Push Forward.",
        ourGoal: "Our Goal",
        companyFirstGoal:
          "For Our Sake To Return Art and Creativity To Its Pioneering and Societal Role, We Always Strive To Produce The Best Audio Or Visual Content, Including The Best Ideas and Quality at The Highest International Level, Comparable To The Best International Studios To Ensure a Unique Experience For The Viewer Or Listener.",
        companySecondGoal:
          "Developing The Marketing System In The Arab World by Using The Latest Discovered Methods and Theories To Facilitate The Marketing Process and Ensure Access To The Target Customer With More Flexibility and Offer The Service or Product In an Innovative and Professional Manner To Obtain The Best Result",
        diamondgroup: "Diamond Innovation Group",
      },
      services: {
        services: "Services",
        marketing: "Marketing",
        marketingService: "Develop and plan complete marketing strategies",
        socialMedia: "Social Media",
        socialMediaService: "Social Media Management",
        identities: "Identities",
        identitiesService: "Designing business identities and logos",
        search: "SEO",
        searchService: "Content Writing with Search Engine Optimization",
        development: "Development",
        developmentService: "Website Design and Hosting",
        media: "Media",
        mediaService: "Media Production",
        audio: "Audio",
        audioService: "Audio Output",
        ads: "ADS",
        adsService: "Advertisments",
        apps: "Applications",
        appsService: "Mobile Application Development",
        events: "Events",
        eventsService: "Conference and Event Management",
        video: "Video",
        videoService: "Animation Video Design",
        radio: "Radio",
        radioService: "Radio Advertisments",
      },
      contactus: {
        address: "Address",
        egypt: "Egypt",
        egyptAddressFirstSection: "7A Nile Corniche, Maadi",
        egyptAddressSecondSection: "Dala Tower, Floor 34",
        emirates: "United Arab Emirates",
        emiratesAddressFirstSection: "Dubai World Trade Center",
        emiratesAddressSecondSection: "Central One, The Offices 4",
        saudiArabia: "Saudi Arabia",
        saudiArabiaAddressFirstSection:
          "Jeddah, Hay Al-Nahda, Al-Amir Sultan Street",
        saudiArabiaAddressSecondSection: "Al-Saad Trade Building, Floor 1",
        email: "Email",
        telephone: "Telephone",
        support: "Support Line",
        copyright: "Copyright",
        companyName: "Diamond Innovation",
        year: "@2022",
      },
      error: {
        errormsg: "Something went wrong !",
        errordesc:
          "We are sorry but it appears that the page you are looking for could not be found. We are working on it and we will get it fixed as soon as possible.",
        goBackText: "You can go back to the Main Page by clicking the button.",
        goToHome: "Go To Homepage",
      },
      numbers: {
        num1: "+020225259113",
        num2: "+020225259114",
        num3: "+0201142655491",
        num4: "+0201155559829",
        num5: "+966557711100",
      },
    };
  } else {
    lang = {
      nav: {
        home: "الصفحة الرئيسية",
        about: "من نحن",
        ourservices: "خدماتنا",
        contact: "تواصل معنا",
        language: "Language",
      },
      aboutus: {
        returnArt: "عودة الفن و الابداع الى",
        leadRole: "دوره الريادي و المجتمعي",
        marketingSystem: "تطوير منظومة التسويق",
        arabWorld: "بالوطن العربي",
        bestStudios: "افضل الاستوديوهات العالمية",
        experience: "لضمان تجربة فريدة للمشاهد او المستمع",
        aboutUs: "من نحن",
        ourCompany: "شركتنا",
        aboutCompany:
          "تعد مجموعة شركات الابتكار الماسي متخصصة في الانتاج الفني المرئي و المسموع و اكتشاف المواهب الفنية و تبنيها و تطويرها و خدمات التسويق والاعلان و ابتكار الهوية التجارية بالاضافة الى حلول البرمجة و الويب.",
        ourVision: "رؤيتنا",
        companyVision:
          "خلق منظومة تسويقية عربية متطوره تنتج محتوى مبدع ينافس المحتوى العالمي و تواكب اخر التقنيات التكنولوجية و تعمل كآداه قوية للتأثير و الدفع للامام.",
        ourGoal: "هدفنا",
        companyFirstGoal:
          "حرصاً منا على عودة الفن و الابداع الى دوره الريادي و المجتمعي، نسعى دائماً لانتاج افضل المحتويات المرئية او المسموعة متضمنة الافكار و جوده على اعلى مستوى عالمي تضاهي افضل الاستوديوهات العالمية لضمان تجربة فريدة للمشاهد او المستمع.",
        companySecondGoal:
          "تطوير منظومة التسويق بالوطن العربي عن طريق استخدام احدث الوسائل و النظريات المكتشفة لتسهيل العملية التسويقية و ضمان الوصول الى العميل المستهدف بمرونة اكثر و عرض الخدمة او المنتج بشكل مبتكر و احترافي للحصول على افضل نتيجة.",
        diamondgroup: "مجموعة شركات الابتكار الماسي",
      },
      services: {
        services: "الخدمات",
        marketing: "تسويق",
        marketingService: "تطوير و تخطيط استراتيجيات تسويق كاملة",
        socialMedia: "تواصل اجتماعي",
        socialMediaService: "ادارة وسائل التواصل الاجتماعي",
        identities: "هويات",
        identitiesService: "تصميم الهويات التجارية و الشعارات",
        search: "SEO",
        searchService: "كتابة المحتوى و SEO",
        development: "تصميم",
        developmentService: "تصميم و استضافة المواقع",
        media: "وسائل الإعلام",
        mediaService: "الإنتاج الإعلامي",
        audio: "الصوت",
        audioService: "الانتاج الصوتي",
        ads: "الاعلانات",
        adsService: "الاعلانات",
        apps: "تطبيقات",
        appsService: "تصميم تطبيقات الهاتف",
        events: "مؤتمرات و حفلات",
        eventsService: "ادارة المؤتمرات و الحفلات",
        video: "فيديو",
        videoService: "تصميم فيديوهات متحركة",
        radio: "راديو",
        radioService: "اعلانات الراديو",
      },
      contactus: {
        address: "العنوان",
        egypt: "مصر",
        egyptAddressFirstSection: "٧أ كورنيش النيل - المعادي",
        egyptAddressSecondSection: "برج دالة الدور ال ٣٤",
        emirates: "الإمارات العربية المتحدة",
        emiratesAddressFirstSection: "مركز دبي للتجارة العالمي",
        emiratesAddressSecondSection: "وان سنترال - مكاتب ٤",
        saudiArabia: "المملكة العربية السعودية",
        saudiArabiaAddressFirstSection: "جدة: حي النهضة - شارع الامير سلطان",
        saudiArabiaAddressSecondSection: "مبنى السعد التجاري - الدور ١",
        email: "البريد الالكتروني",
        telephone: "الهواتف",
        support: "خط الدعم",
        copyright: "حقوق نشر",
        companyName: "الابتكار الماسي",
        year: "@٢٠٢٢",
      },
      error: {
        errormsg: "حدث خطأ ما !",
        errordesc:
          "نحن آسفون ولكن يبدو أن الصفحة التي تبحث عنها لا يمكن العثور عليها. نحن نعمل على حلها وسنصلحها في أسرع وقت ممكن.",
        goBackText: "يمكنك العودة إلى الصفحة الرئيسية بالنقر فوق الزر.",
        goToHome: "اذهب الى الصحفية الرئيسية",
      },
      numbers: {
        num1: "+٠٢٠٢٢٥٢٥٩١١٣",
        num2: "+٠٢٠٢٢٥٢٥٩١١٤",
        num3: "+٠٢٠١١٤٢٦٥٥٤٩١",
        num4: "+٠٢٠١١٥٥٥٥٩٨٢٩",
        num5: "+٩٦٦٥٥٧٧١١١٠٠",
      },
    };
  }

  return (
    <LanguageContext.Provider
      value={{
        lang,
        language,
        setLanguage,
        changeLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
const LanguageConsumer = LanguageContext.Consumer;

export { LanguageProvider, LanguageConsumer, LanguageContext };
