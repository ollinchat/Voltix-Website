import type { Translation } from './types';

export const he: Translation = {
  brand: {
    name: 'VOLTIX',
    tagline: 'נג\'אמי · זעתוט — EPC תעשייתי',
  },
  nav: {
    about: 'אודות',
    synergy: 'סינרגיית JV',
    team: 'צוות',
    projects: 'פרויקטים',
    portfolio: 'תיק עבודות',
    credibility: 'אמינות',
    contact: 'צור קשר',
    joinUs: 'הצטרף אלינו',
  },
  hero: {
    slides: [
      {
        tag: 'ברזל · פלדה · צנרת',
        title: 'מומחיות תעשייתית\nכבדה בקנה מידה\nגלובלי',
        subtitle:
          'מיזם משותף שנוצר על ידי סמי נג\'אמי ו-C. זעתוט — מאחד 82,000 מ"ר קיבולת ייצור עם 15,000 טון פלדה שנתי וביצוע EPC מלא.',
        cta: 'גלה כוח משולב',
      },
      {
        tag: 'פיקוד EPC',
        title: 'מונדס.\nנרכש.\nנבנה.',
        subtitle:
          'מהקמת פלדה מבנית ועד התקנת צנרת ארצית — מסירה משולבת תחת מבנה פיקוד תעשייתי אחד ללא פערי ממשק.',
        cta: 'צפה ביכולות',
      },
      {
        tag: 'מיזם משותף',
        title: 'שני מפעלים.\nכוח אחד.',
        subtitle:
          'אימפריית הייצור של סמי נג\'אמי פוגשת את סמכות צנרת וההנדסה האזרחית של C. זעתוט. התוצאה: פלטפורמת EPC לתשתיות לאומיות.',
        cta: 'הכר את השותפים',
      },
    ],
    scroll: 'רד לרצפת הפיקוד',
  },
  about: {
    label: '01 — אודות',
    title: 'בנוי בפלדה.\nמונע בדיוק.',
    description:
      'נג\'אמי · זעתוט הוא מיזם משותף תעשייתי אסטרטגי שנבנה לפרויקטים הדורשים ודאות מבנית בקנה מידה. אנו מספקים ייצור פלדה מהשורה הראשונה וביצוע EPC משולב תחת פיקוד אחד — סיכון מטופל פנימית, איכות מוסמכת, מסירה מובטחת.',
    stats: [
      { value: '82K', label: 'מ"ר שטח מפעל' },
      { value: '15K', label: 'טון פלדה / שנה' },
      { value: '35+', label: 'שנות ניסיון משולבות' },
      { value: 'EPC', label: 'מסירה מלאה' },
    ],
    pillars: [
      {
        title: 'ריבונות ייצור',
        description:
          'גילגול, חיתוך, ריתוך וציפוי פנימיים תחת הסמכת ISO 3834 ו-EN 1090 — ביטול תלות בשרשרת אספקה בנתיבים מבניים קריטיים.',
      },
      {
        title: 'סמכות צנרת',
        description:
          'רשתות צנרת ארציות ובין-מפעליות מקוטר 4" עד 56" — HDD, חיבורי ריתוך, בדיקות הידרוסטטיות ותאימות ASME B31.',
      },
      {
        title: 'אינטגרציית EPC',
        description:
          'אחריות חוזית אחת מ-FEED ועד הפעלה. הנדסה, רכש ובנייה מאוחדים תחת מנהל פרויקט אחד.',
      },
    ],
  },
  synergy: {
    label: '02 — \u05e1\u05d9\u05e0\u05e8\u05d2\u05d9\u05d9\u05ea JV',
    title: '\u05db\u05d5\u05d7 EPC \u05d7\u05e1\u05e8 \u05ea\u05d7\u05e8\u05d5\u05ea',
    subtitle:
      '\u05e1\u05de\u05d9 \u05e0\u05d2\'\u05d0\u05de\u05d9 \u05d5-C. \u05d6\u05e2\u05ea\u05d5\u05d8 \u2014 \u05e9\u05e0\u05d9 \u05d1\u05e2\u05dc\u05d9 \u05ea\u05e4\u05e7\u05d9\u05d3\u05d9\u05dd \u05ea\u05e2\u05e9\u05d9\u05d9\u05d9\u05d9\u05dd \u05e9\u05e0\u05db\u05e1\u05d9\u05d9\u05d4\u05dd \u05d4\u05de\u05e9\u05d5\u05dc\u05d1\u05d9\u05dd \u05d9\u05d5\u05e6\u05e8\u05d9\u05dd \u05e4\u05dc\u05d8\u05e4\u05d5\u05e8\u05de\u05ea EPC \u05dc\u05dc\u05d0 \u05ea\u05d7\u05e8\u05d5\u05ea \u05d1\u05d0\u05d6\u05d5\u05e8.',
    alliance: {
      heading: 'A Unified Industrial Front',
      body:
        'The strategic alliance between Sami Najami and C. Zatout merges world-class fabrication capabilities with massive EPC infrastructure delivery. By combining two industrial powerhouses into one command structure, we eliminate interface gaps and provide a single point of responsibility for the region\'s most complex energy and water projects.',
    },
  },
  team: {
    label: '03 — הנהגה',
    title: 'פיקוד בכיר',
    subtitle: 'בעלי תפקידים בכירים המכוונים כל מנדט מרצפת הפיקוד.',
    members: [
      { name: 'סמי נג\'אמי', role: 'בעל תפקיד מנהל', specialty: 'ייצור פלדה ואסטרטגיית JV' },
      { name: 'C. זעתוט', role: 'בעל תפקיד מנהל', specialty: 'EPC ותפעול צנרת' },
      { name: 'מהנדס ר. מנסור', role: 'מהנדס ראשי', specialty: 'תכנון מבני ומכני' },
      { name: 'מהנדס ת. חורי', role: 'מנהל צנרת', specialty: 'רשתות ארציות' },
      { name: 'א. פרחאת', role: 'מנהל ייצור', specialty: 'תפעול מפעל ובקרת איכות' },
      { name: 'מ. סבאג', role: 'מנהל מסחרי', specialty: 'רכש וחוזים' },
    ],
  },
  projects: {
    label: '04 — פרויקטים',
    title: 'ביצוע תעשייתי מוכח',
    backToProjects: '→ חזרה לפרויקטים',
    detail: {
      datasheet: 'גיליון נתוני פרויקט',
      projectName: 'שם הפרויקט',
      client: 'לקוח מתקשר',
      timeline: 'לוח זמנים מדויק',
      location: 'מיקום ואזור',
      scope: 'היקף הנדסי מלא / תיאור טכני',
    },
  },
  portfolio: {
    label: '05 — תיק עבודות',
    title: 'מנדטים שבוצעו',
    subtitle: 'מסירה מוכחת באנרגיה, פלדה ותשתיות מים.',
    filters: {
      energy: 'אנרגיה',
      steel: 'פלדה',
      water: 'מים',
    },
    coreExpertise: 'מומחיות ליבה',
    sectors: {
      energy: {
        summary:
          'מיזם נג\'אמי · זעתוט מספק ביצוע EPC משולב בתשתיות ייצור חשמל, זיקוק ופטרוכימיה — משלב 82,000 מ"ר ייצור פנימי עם צנרת תהליך תואמת ASME ורקורד מוכח של הפעלה בזמן בקנה מידה לאומי.',
        expertise: [
          'מערכות צנרת קיטור ותהליך בלחץ גבוה',
          'פלדה מבנית לתחנות כוח ורשתות מסילות צנרת',
          'עבודות מכניות לסבבי שיפוץ בבתי זיקוק',
          'אינטגרציית EPC למתקני פטרוכימיה',
        ],
      },
      steel: {
        summary:
          'עם 15,000 טון פלדה מבנית שנתי וקווי ייצור מוסמכי EN 1090, המיזם מספק מסירה מקצה לקצה של חבילות פלדה כבדות — מגילגול וחיתוך CNC ועד הקמה באתר — תוך ביטול סיכון ממשק בנתיבים מבניים קריטיים.',
        expertise: [
          'ייצור פלדה מבנית בקנה מידה תעשייתי',
          'כלי לחץ והרכבות לוחות כבדים',
          'הקמת פלדה לגורדי שחקים וליבות תעשייתיות',
          'ריתוך וציפוי מוסמכי ISO 3834 / EN 1090',
        ],
      },
      water: {
        summary:
          'הולכת מים ארצית, מערכות הזנה להתפלה ורשתות צנרת עירוניות הן תחום ליבה של המיזם — מתוכננות, נרכשות ומותקנות תחת אחריות חוזית אחת עם בדיקות הידרוסטטיות והפעלה מלאות.',
        expertise: [
          'צנרת הולכה למובילי מים ארציים',
          'צנרת ותחנות שאיבה למתקני התפלה RO',
          'התקנת רשתות ריתוך בקוטר גדול',
          'HDD, חיבורים ובדיקות הידרוסטטיות',
        ],
      },
    },
  },
  credibility: {
    label: '06 — אמינות',
    title: 'דירוגי תעשייה מהשורה הראשונה',
    subtitle:
      '\u05e9\u05e0\u05d9 \u05e9\u05d5\u05ea\u05e4\u05d9 \u05d4\u05de\u05d9\u05d6\u05dd \u05de\u05d5\u05db\u05e8\u05d9\u05dd \u05d5\u05de\u05d3\u05d5\u05e8\u05d2\u05d9\u05dd \u05e8\u05e9\u05de\u05d9\u05ea \u05d1\u05d9\u05df \u05de\u05d5\u05d1\u05d9\u05dc\u05d5\u05ea \u05d4\u05d4\u05e0\u05d3\u05e1\u05d4 \u05d5\u05d4\u05ea\u05e2\u05e9\u05d9\u05d9\u05d4 \u05d1\u05d9\u05e9\u05e8\u05d0\u05dc \u05e2\u05dc \u05d9\u05d3\u05d9 DUNS 100 \u05d5-BDi CODE 2026.',
    dunsProfile: 'DUNS 100 Profile',
    bdiProfile: 'BDI CODE Profile',
    partners: {
      najami: {
        name: 'סמי נג\'אמי הנדסה',
        description:
          'מדורגת בין מובילות ההנדסה והייצור בישראל — מוכרת בביצוע פלדה מבנית בקנה מידה, מסירת פרויקטים משולבת וקיבולת ייצור תעשייתית מוכחת.',
      },
      zatout: {
        name: 'קבוצת זעתוט',
        description:
          'מדורגת רשמית למצוינות בצנרת תעשייתית, עבודות מכניות כבדות ותשתיות אנרגיה — מספקת מערכות תהליך תואמות ASME וביצוע EPC.',
      },
    },
  },
  cta: {
    label: '07 — צור קשר',
    title: 'הזמן ביצוע\nתעשייתי',
    subtitle:
      'מבני פלדה, רשתות צנרת או מנדטי EPC מלאים — שלח את תקציר הפרויקט וצוות הפיקוד יגיב תוך יום עסקים.',
    primary: 'שלח תקציר פרויקט',
    secondary: 'הורד תיק יכולות JV',
    wazeNavigate: 'Navigate via Waze',
  },
  footer: {
    brandDescription:
      '\u05de\u05d9\u05d6\u05dd \u05de\u05e9\u05d5\u05ea\u05e3 \u05d0\u05e1\u05d8\u05e8\u05d8\u05d2\u05d9 \u05d4\u05de\u05e9\u05dc\u05d1 \u05d9\u05d9\u05e6\u05d5\u05e8 \u05ea\u05e2\u05e9\u05d9\u05d9\u05ea\u05d9 \u05e2\u05dc \u05e8\u05de\u05ea \u05d4\u05e2\u05d5\u05dc\u05dd \u05d5\u05de\u05e1\u05d9\u05e8\u05ea \u05ea\u05e9\u05ea\u05d9\u05d5\u05ea \u05d0\u05e0\u05e8\u05d2\u05d9\u05d4/\u05de\u05d9\u05dd \u05d1\u05e7\u05e0\u05d1 \u05d4\u05d2\u05d3\u05d5\u05dc.',
    form: {
      title: 'פנייה לפיקוד',
      name: 'שם מלא',
      email: 'כתובת דוא"ל',
      mobilePhone: 'טלפון נייד',
      company: 'ארגון',
      message: 'תקציר פרויקט / פנייה',
      attachment: 'צרף תקציר פרויקט / מפרטים (PDF, DWG, ZIP)',
      attachmentDrop: 'גרור ושחרר קבצים כאן, או לחץ לעיון',
      attachmentSelected: 'קובץ צורף',
      preferredTime: 'זמן מועדף לשיחה / פגישה',
      meetingPlaceholder: 'בחר חלון זמן',
      meetingSlots: [
        '08:00 — 10:00',
        '10:00 — 12:00',
        '12:00 — 14:00',
        '14:00 — 16:00',
        '16:00 — 18:00',
      ],
      submit: 'שלח שידור',
    },
    toast: {
      title: 'שידור אושר',
      message: 'הפנייה שלך נרשמה. מנהל פרויקט יגיב תוך 24 שעות.',
    },
    columns: {
      headquarters: '\u05de\u05d8\u05d4',
      addressLine1: '\u05d0\u05d6\u05d5\u05e8 \u05ea\u05e2\u05e9\u05d9\u05d9\u05d4 4, \u05de\u05d2\u05e8\u05e9 17-A',
      addressLine2: '\u05de\u05e4\u05e8\u05e5 \u05d7\u05d9\u05e4\u05d4, \u05d9\u05e9\u05e8\u05d0\u05dc 3109001',
      address: '\u05d0\u05d6\u05d5\u05e8 \u05ea\u05e2\u05e9\u05d9\u05d9\u05d4 4, \u05de\u05d2\u05e8\u05e9 17-A\n\u05de\u05e4\u05e8\u05e5 \u05d7\u05d9\u05e4\u05d4, \u05d9\u05e9\u05e8\u05d0\u05dc 3109001',
      commercial: '\u05e4\u05e0\u05d9\u05d5\u05ea \u05de\u05e1\u05d7\u05e8\u05d9\u05d5\u05ea',
      telLabel: '\u05d8\u05dc',
      emailLabel: '\u05d3\u05d5\u05d0\u05dc',
      phone: '+972 4 855 2200',
      phoneLabel: '\u05d8\u05dc\u05e4\u05d5\u05df',
      email: 'command@najami-zatout.com',
      navigation: '\u05e0\u05d9\u05d5\u05d8',
      legal: '\u05de\u05e9\u05e4\u05d8\u05d9',
      privacy: '\u05de\u05d3\u05d9\u05e0\u05d9\u05d5\u05ea \u05e4\u05e8\u05d8\u05d9\u05d5\u05ea',
      terms: '\u05ea\u05e0\u05d0\u05d9 \u05d1\u05d9\u05e6\u05d5\u05e2',
    },
    copyright: '\u00a9 2026 Voltix Website. \u05db\u05dc \u05d4\u05d6\u05db\u05d5\u05d9\u05d5\u05ea \u05e9\u05de\u05d5\u05e8\u05d5\u05ea.',
  },
};
