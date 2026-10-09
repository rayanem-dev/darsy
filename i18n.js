/* Darsy+ — traduction de l'interface (français → العربية, English).
 * Le site est écrit en français. Ce fichier traduit l'AFFICHAGE : chaque texte (et info-bulle, champ d'aide, message) est remplacé,
 * au moment où il apparaît, par sa traduction. Un texte sans traduction reste en français.
 * - Les expressions avec des nombres s'écrivent avec « # » : « dans # j » → « خلال # يوم ».
 * - Les noms (enfants, matières, profs) ne sont jamais traduits.
 * - La langue est choisie avec le sélecteur du pied de page (brique basdepage) ; les dates suivent la langue (fr-FR / ar-DZ / en-GB).
 */
(function (root) {
  'use strict';
  var LOCALES = { fr: 'fr-FR', ar: 'ar-DZ', en: 'en-GB' };
  var LANG = 'fr';

  // ---------- Dictionnaire : français → [arabe, anglais] ----------
  var D = {
    // menu, en-têtes
    'Accueil': ['الرئيسية', 'Home'], 'Séances': ['الحصص', 'Lessons'], 'Sessions': ['الدورات', 'Sessions'], 'Paiements': ['المدفوعات', 'Payments'],
    'Calendrier': ['التقويم', 'Calendar'], 'Sujets': ['المواضيع', 'Exams'], 'Réglages': ['الإعدادات', 'Settings'], 'Aide': ['مساعدة', 'Help'],
    'Bonjour': ['مرحبا', 'Hello'], 'Confidentialité': ['الخصوصية', 'Privacy'], '↻ Actualiser': ['↻ تحديث', '↻ Refresh'],
    'Tous droits réservés': ['جميع الحقوق محفوظة', 'All rights reserved'], 'nouveautés': ['المستجدات', 'what\'s new'], 'version': ['الإصدار', 'version'],
    // expressions avec nombres (# = nombre)
    'dans # j': ['خلال # يوم', 'in # d'], 'depuis # j': ['منذ # يوم', 'for # d'],
    // jours et unités
    'Dim': ['الأحد', 'Sun'], 'Lun': ['الاثنين', 'Mon'], 'Mar': ['الثلاثاء', 'Tue'], 'Mer': ['الأربعاء', 'Wed'], 'Jeu': ['الخميس', 'Thu'], 'Ven': ['الجمعة', 'Fri'], 'Sam': ['السبت', 'Sat'],
    'Dimanche': ['الأحد', 'Sunday'], 'Lundi': ['الاثنين', 'Monday'], 'Mardi': ['الثلاثاء', 'Tuesday'], 'Mercredi': ['الأربعاء', 'Wednesday'], 'Jeudi': ['الخميس', 'Thursday'], 'Vendredi': ['الجمعة', 'Friday'], 'Samedi': ['السبت', 'Saturday'],
    'DA': ['د.ج', 'DA'], 'aujourd\'hui': ['اليوم', 'today'], 'Aujourd\'hui': ['اليوم', 'Today'],
    // accueil
    'Paiements': ['المدفوعات', 'Payments'], 'en attente': ['في الانتظار', 'pending'], 'En attente': ['في الانتظار', 'Pending'], 'Séances cette semaine': ['حصص هذا الأسبوع', 'Lessons this week'],
    'Payé (session en cours)': ['المدفوع (الدورة الحالية)', 'Paid (current session)'], 'Reste à payer': ['المتبقي للدفع', 'Left to pay'], 'Maintenant': ['الآن', 'Now'],
    'Dépensé ce mois': ['المصروف هذا الشهر', 'Spent this month'], 'voir le détail ›': ['عرض التفاصيل ›', 'see details ›'], 'À prévoir en': ['للتحضير في', 'Coming up in'],
    'Semaine en un coup d\'œil': ['الأسبوع في لمحة', 'Week at a glance'], 'à jour': ['محدّث', 'up to date'],
    'janvier': ['جانفي', 'January'], 'février': ['فيفري', 'February'], 'mars': ['مارس', 'March'], 'avril': ['أفريل', 'April'], 'mai': ['ماي', 'May'], 'juin': ['جوان', 'June'], 'juillet': ['جويلية', 'July'], 'août': ['أوت', 'August'], 'septembre': ['سبتمبر', 'September'], 'octobre': ['أكتوبر', 'October'], 'novembre': ['نوفمبر', 'November'], 'décembre': ['ديسمبر', 'December'],
    'Payé': ['مدفوع', 'Paid'], 'Impayé': ['غير مدفوع', 'Unpaid'], 'Partiel': ['جزئي', 'Partial'], 'Offert': ['مجاني', 'Free'], 'Gratuit': ['مجاني', 'Free'],
    'faites': ['منجزة', 'done'], 'à faire': ['متبقية', 'to do'], '✓ Payé · prochain paiement le': ['✓ مدفوع · الدفعة القادمة في', '✓ Paid · next payment on'],
    'Détails': ['التفاصيل', 'Details'], 'Paiement': ['الدفع', 'Payment'], 'Session en cours': ['الدورة الحالية', 'Current session'], 'Dernier paiement': ['آخر دفعة', 'Last payment'],
    'Prochaine session': ['الدورة القادمة', 'Next session'], 'Paiement prévu': ['الدفع المتوقع', 'Expected payment'], '+ Paiement': ['+ دفعة', '+ Payment'], '+ Séance': ['+ حصة', '+ Lesson'],
    'À payer': ['للدفع', 'To pay'], 'Payer': ['دفع', 'Pay'], 'aucun': ['لا شيء', 'none'], 'session': ['الدورة', 'session'],
    // séances de la semaine
    '✅ Séances de la semaine': ['✅ حصص الأسبوع', '✅ This week\'s lessons'],
    'Coche la case quand la séance a eu lieu. Pour une séance passée non faite, clique sur « Non faite » pour la décaler.': ['ضع علامة عندما تتم الحصة. وإذا مرّت دون أن تُنجز، اضغط «لم تتم» لتأجيلها.', 'Tick the box once the lesson has taken place. For a past lesson that did not happen, tap “Not done” to postpone it.'],
    '↪ Non faite': ['↪ لم تتم', '↪ Not done'], '✕ Ratée': ['✕ فائتة', '✕ Missed'], 'à venir': ['قادمة', 'upcoming'],
    'séances les semaines suivantes (affichées dès dimanche)': ['حصص في الأسابيع التالية (تظهر ابتداءً من الأحد)', 'lessons in the following weeks (shown from Sunday)'],
    'Prévue': ['مبرمجة', 'Planned'], 'Faite': ['منجزة', 'Done'], 'Ratée': ['فائتة', 'Missed'], 'Annulée': ['ملغاة', 'Cancelled'], 'Reportée': ['مؤجلة', 'Postponed'],
    '+ Nouvelle séance': ['+ حصة جديدة', '+ New lesson'], 'Tous les cours': ['كل الدروس', 'All courses'], 'Séance faite': ['حصة منجزة', 'Lesson done'], 'Décaler / reporter': ['تأجيل', 'Postpone'],
    'Ratée : absent·e, non rattrapable': ['فائتة: غياب لا يُعوَّض', 'Missed: absent, cannot be made up'],
    'séance(s) faite(s) sur': ['حصة منجزة من', 'lesson(s) done out of'], 'sur cette période': ['في هذه الفترة', 'in this period'],
    // sessions
    'En cours': ['جارية', 'In progress'], 'Session': ['الدورة', 'Session'], 'démarre le': ['تبدأ في', 'starts on'], 'paiement dû le': ['الدفع مستحق في', 'payment due on'],
    'séances': ['حصص', 'lessons'], 'séance(s)': ['حصة', 'lesson(s)'], 'séance': ['حصة', 'lesson'], 'cours': ['دروس', 'courses'], 'paiement(s)': ['دفعة', 'payment(s)'], 'paiements': ['دفعات', 'payments'], 'paiement': ['دفعة', 'payment'],
    '+ Séance': ['+ حصة', '+ Lesson'],
    // dépenses
    '📊 Dépenses par mois': ['📊 المصاريف الشهرية', '📊 Spending by month'], 'ce que vous avez payé aux profs': ['ما دفعتموه للأساتذة', 'what you paid the teachers'],
    'Mois': ['الشهر', 'Month'], 'Total': ['المجموع', 'Total'], 'Détail par cours': ['التفاصيل حسب الدرس', 'Details by course'], 'Cours': ['الدرس', 'Course'], 'Dernier': ['الأخير', 'Last'],
    'période dès le': ['الفترة ابتداءً من', 'period from'], 'Payé le': ['دُفع في', 'Paid on'], 'Espèces': ['نقدا', 'Cash'], 'Virement': ['تحويل', 'Transfer'], 'Chèque': ['شيك', 'Cheque'], 'Aucun geste': ['بدون مبلغ', 'No gesture'],
    // calendrier
    'Emploi du temps': ['الجدول الزمني', 'Timetable'], 'Lycée + cours particuliers': ['الثانوية + الدروس الخصوصية', 'School + private lessons'],
    '🗓️ Emploi du temps': ['🗓️ الجدول الزمني', '🗓️ Timetable'], '📥 Importer': ['📥 استيراد', '📥 Import'], '🖨️ Imprimer': ['🖨️ طباعة', '🖨️ Print'], '+ Créneau': ['+ فترة', '+ Slot'],
    'Touche un créneau du lycée pour le modifier.': ['المس فترة من الثانوية لتعديلها.', 'Tap a school slot to edit it.'], 'Heure': ['الساعة', 'Time'],
    'Répartition du volume horaire (par semaine)': ['توزيع الحجم الساعي (أسبوعيا)', 'Weekly hours breakdown'], 'Cours particuliers': ['الدروس الخصوصية', 'Private lessons'],
    'Ce dossier est vide.': ['هذا المجلد فارغ.', 'This folder is empty.'], 'Ouvrir ce dossier dans Drive ↗': ['فتح هذا المجلد في Drive ↗', 'Open this folder in Drive ↗'],
    // réglages
    '👶 Enfants et cours': ['👶 الأطفال والدروس', '👶 Children and courses'], 'Enfant': ['الطفل', 'Child'], '📷 Changer la photo': ['📷 تغيير الصورة', '📷 Change photo'],
    'Enregistrer': ['حفظ', 'Save'], '🗑 Supprimer': ['🗑 حذف', '🗑 Delete'], 'Supprimer': ['حذف', 'Delete'], 'Matière': ['المادة', 'Subject'], 'Nom du prof': ['اسم الأستاذ', 'Teacher\'s name'],
    'Prix de la session (DA)': ['سعر الدورة (د.ج)', 'Session price (DA)'], 'Séances par session': ['الحصص في الدورة', 'Lessons per session'],
    'Séances à rattraper': ['حصص للتدارك', 'Lessons to catch up'], '1re session': ['الدورة الأولى', '1st session'], 'Prix du rattrapage (DA)': ['سعر التدارك (د.ج)', 'Catch-up price (DA)'],
    'Frais d\'inscription': ['رسوم التسجيل', 'Registration fee'], '1re fois, DA': ['أول مرة، د.ج', 'first time, DA'],
    'Session unique': ['دورة واحدة', 'Single session'], '(ne se répète pas : aucune session suivante, aucun rappel de paiement suivant)': ['(لا تتكرر: لا دورة تالية ولا تذكير بالدفع)', '(does not repeat: no next session, no further payment reminder)'],
    'Tarif libre': ['سعر حر', 'Free rate'], '(gestes de remerciement, aucun prix fixe : le prix ci-dessus est ignoré)': ['(مبالغ امتنان بلا سعر ثابت: السعر أعلاه يُتجاهل)', '(thank-you gestures, no fixed price: the price above is ignored)'],
    'Jours habituels': ['الأيام المعتادة', 'Usual days'], 'Horaire (ex.': ['التوقيت (مثال:', 'Time (e.g.'], 'Emplacement (adresse, salle ou lien Google Maps)': ['المكان (عنوان أو قاعة أو رابط Google Maps)', 'Location (address, room or Google Maps link)'],
    'Si tu changes les jours habituels, les séances à venir sont reprogrammées automatiquement (les séances faites et passées ne bougent pas).': ['إذا غيّرت الأيام المعتادة تُعاد برمجة الحصص القادمة تلقائيا (الحصص المنجزة والماضية لا تتغير).', 'If you change the usual days, upcoming lessons are rescheduled automatically (past and completed lessons do not move).'],
    'Enregistrer ce cours': ['حفظ هذا الدرس', 'Save this course'], '🗑 Supprimer ce cours': ['🗑 حذف هذا الدرس', '🗑 Delete this course'],
    '+ Ajouter un cours (matière / prof)': ['+ إضافة درس (مادة / أستاذ)', '+ Add a course (subject / teacher)'], '+ Ajouter un enfant': ['+ إضافة طفل', '+ Add a child'],
    'Les séances prévues sont créées automatiquement à la création du cours et à chaque nouveau paiement, selon les jours habituels. Une': ['تُنشأ الحصص المبرمجة تلقائيا عند إنشاء الدرس ومع كل دفعة جديدة حسب الأيام المعتادة.', 'Planned lessons are created automatically when the course is created and at each new payment, based on the usual days. A'],
    '= un paquet de cours payé d\'un coup : elle commence le premier jour de cours, et la session suivante s\'ouvre toute seule dès que la précédente se termine.': ['= حزمة دروس تُدفع دفعة واحدة: تبدأ في أول يوم دراسة وتفتح الدورة التالية تلقائيا بمجرد انتهاء السابقة.', '= a bundle of lessons paid in one go: it starts on the first lesson day, and the next session opens automatically when the previous one ends.'],
    '🔔 Rappels': ['🔔 التذكيرات', '🔔 Reminders'], '🔔 Rappels dans Google Agenda': ['🔔 تذكيرات في Google Agenda', '🔔 Reminders in Google Calendar'],
    'De vrais événements créés dans l\'agenda Google (avec alarme/notification sur le téléphone), pas juste un email.': ['أحداث حقيقية تُنشأ في أجندة Google (مع تنبيه على الهاتف) وليست مجرد بريد.', 'Real events created in Google Calendar (with a phone alarm/notification), not just an email.'],
    'Email du père': ['بريد الأب', 'Father\'s email'], 'Email de la mère': ['بريد الأم', 'Mother\'s email'], '— toujours ajoutés à l\'agenda Famille.': ['— تُضاف دائما إلى أجندة العائلة.', '— always added to the Family calendar.'],
    'La veille': ['في اليوم السابق', 'The day before'], 'jour avant': ['يوم قبل', 'day before'], 'Le matin même': ['صباح اليوم نفسه', 'The same morning'],
    'avant un cours particulier': ['قبل درس خصوصي', 'before a private lesson'], 'payant': ['مدفوع', 'paid'], '💳 Rappel de': ['💳 تذكير', '💳 Reminder for'], 'dans l\'agenda': ['في الأجندة', 'in the calendar'],
    '🚗 Récupération :': ['🚗 الاسترجاع:', '🚗 Pick-up:'], 'avant la': ['قبل', 'before the'], 'fin': ['نهاية', 'end'], 'du cours': ['الدرس', 'of the lesson'],
    'Lycée': ['الثانوية', 'School'], 'lycée': ['الثانوية', 'school'], '🔄 Synchroniser maintenant': ['🔄 مزامنة الآن', '🔄 Sync now'], '♻️ Tout resynchroniser': ['♻️ إعادة مزامنة الكل', '♻️ Resync everything'],
    '🧹 Supprimer les doublons': ['🧹 حذف المكررات', '🧹 Remove duplicates'], '🗑 Supprimer toutes les alertes': ['🗑 حذف كل التنبيهات', '🗑 Delete all alerts'], '🔔 Tester une alerte maintenant': ['🔔 تجربة تنبيه الآن', '🔔 Test an alert now'],
    '⚙️ Application': ['⚙️ التطبيق', '⚙️ Application'], 'Installer sur l\'écran d\'accueil': ['التثبيت على الشاشة الرئيسية', 'Install on your home screen'], 'Accès rapide, en plein écran, comme une vraie appli.': ['وصول سريع بملء الشاشة كتطبيق حقيقي.', 'Quick access, full screen, like a real app.'],
    'Installer': ['تثبيت', 'Install'], 'Modifier': ['تعديل', 'Edit'], '💾 Sauvegarde': ['💾 النسخ الاحتياطي', '💾 Backup'], '⬇️ Exporter la base': ['⬇️ تصدير البيانات', '⬇️ Export data'],
    '⬆️ Importer une sauvegarde': ['⬆️ استيراد نسخة احتياطية', '⬆️ Import a backup'], '🗑 Vider la base': ['🗑 مسح كل البيانات', '🗑 Clear all data'],
    'Exporte toute la base (enfants, cours, séances, paiements, lycée, réglages) dans un fichier, pour la restaurer ou repartir de zéro à tout moment. Actuellement :': ['صدّر كل البيانات (الأطفال والدروس والحصص والمدفوعات والثانوية والإعدادات) إلى ملف لاستعادتها أو للبدء من جديد في أي وقت. حاليا:', 'Export all your data (children, courses, lessons, payments, school, settings) to a file to restore it or start from scratch at any time. Currently:'],
    'L\'import remplace tout le contenu actuel. Avant un import ou un vidage, une copie de sécurité est téléchargée automatiquement.': ['الاستيراد يستبدل كل المحتوى الحالي. قبل أي استيراد أو مسح تُنزَّل نسخة أمان تلقائيا.', 'Importing replaces all current content. Before any import or clearing, a safety copy is downloaded automatically.'],
    'Les événements déjà créés dans Google Agenda ne sont pas touchés : après une restauration, utilise « Tout resynchroniser ».': ['الأحداث المنشأة في Google Agenda لا تُمسّ: بعد الاستعادة استعمل «إعادة مزامنة الكل».', 'Events already created in Google Calendar are untouched: after a restore, use “Resync everything”.'],
    'enfant(s)': ['طفل', 'child(ren)'], 'Mode clair / sombre': ['الوضع الفاتح / الداكن', 'Light / dark mode'], 'Langue': ['اللغة', 'Language'], 'Mot de passe': ['كلمة المرور', 'Password'], 'Déconnexion': ['تسجيل الخروج', 'Log out'],
    'Email de l\'enfant (pour ses rappels': ['بريد الطفل (لتذكيراته', 'Child\'s email (for their reminders'], 'avant)': ['قبل)', 'before)'],
    'Sans le déclencheur automatique installé une fois dans Apps Script (voir dernier message), il faut cliquer "Synchroniser" pour créer les événements.': ['بدون المشغّل التلقائي المثبّت مرة واحدة يجب الضغط على «مزامنة» لإنشاء الأحداث.', 'Without the automatic trigger installed once, you must tap “Sync” to create the events.'],
    // paiement / séance / geste
    'Nouveau paiement': ['دفعة جديدة', 'New payment'], 'Modifier paiement': ['تعديل الدفعة', 'Edit payment'], 'Date du paiement': ['تاريخ الدفع', 'Payment date'], 'Début de la période payée': ['بداية الفترة المدفوعة', 'Start of the paid period'],
    'Le paiement est dû le': ['الدفع مستحق في', 'The payment is due on'], 'jour de cours de la session (proposé automatiquement).': ['يوم دراسة من الدورة (مقترح تلقائيا).', 'lesson day of the session (suggested automatically).'],
    'Montant (DA)': ['المبلغ (د.ج)', 'Amount (DA)'], '🎁 Session': ['🎁 دورة', '🎁 Session'], 'offerte': ['مجانية', 'free'], '(0 DA, ex. offert par le prof)': ['(0 د.ج، مثلا هدية من الأستاذ)', '(0 DA, e.g. offered by the teacher)'],
    'Mode': ['الطريقة', 'Method'], 'Note': ['ملاحظة', 'Note'], '📅 Les séances prévues de la période seront créées automatiquement.': ['📅 ستُنشأ تلقائيا الحصص المبرمجة لهذه الفترة.', '📅 The planned lessons for the period will be created automatically.'],
    'Annuler': ['إلغاء', 'Cancel'], 'Modifier séance': ['تعديل الحصة', 'Edit lesson'], 'Date': ['التاريخ', 'Date'], 'Horaire de cette séance': ['توقيت هذه الحصة', 'Time of this lesson'],
    '(laisser tel quel = horaire habituel du cours)': ['(اتركه كما هو = التوقيت المعتاد للدرس)', '(leave as is = the course\'s usual time)'], 'Statut': ['الحالة', 'Status'], 'Note (ex. séance déplacée)': ['ملاحظة (مثلا: حصة منقولة)', 'Note (e.g. lesson moved)'],
    '💝 Un geste pour': ['💝 مبلغ امتنان لـ', '💝 A gesture for'], 'Tarif libre : aucun montant fixe, et rien n\'est dû. Notez ce que vous donnez, ou « Pas cette fois ».': ['سعر حر: لا مبلغ ثابت ولا شيء مستحق. سجّلوا ما تعطونه أو «ليس هذه المرة».', 'Free rate: no fixed amount and nothing is due. Note what you give, or “Not this time”.'],
    'Date du geste': ['تاريخ المبلغ', 'Gesture date'], 'Montant du geste (DA)': ['مبلغ الامتنان (د.ج)', 'Gesture amount (DA)'], 'Enregistrer le geste': ['حفظ المبلغ', 'Save the gesture'], 'Pas cette fois': ['ليس هذه المرة', 'Not this time'], 'Plus tard': ['لاحقا', 'Later'],
    '💝 Geste': ['💝 مبلغ امتنان', '💝 Gesture'], 'session du': ['دورة', 'session of'], 'Fermer': ['إغلاق', 'Close'], 'Dépensé en': ['المصروف في', 'Spent in'], 'Aucune dépense ce mois-ci': ['لا مصاريف هذا الشهر', 'No spending this month'],
    'Tout voir dans Paiements': ['عرض الكل في المدفوعات', 'See all in Payments'], '(déjà versé déduit)': ['(بعد خصم ما دُفع)', '(already paid deducted)'],
    'Nouveau cours —': ['درس جديد —', 'New course —'], 'Séances à rattraper (optionnel)': ['حصص للتدارك (اختياري)', 'Lessons to catch up (optional)'], 'Frais d\'inscription (DA,': ['رسوم التسجيل (د.ج،', 'Registration fee (DA,'],
    'Les frais d\'inscription s\'ajoutent au': ['تُضاف رسوم التسجيل إلى', 'The registration fee is added to the'], 'premier paiement uniquement': ['أول دفعة فقط', 'first payment only'], '(jamais récurrents).': ['(ولا تتكرر أبدا).', '(never recurring).'],
    ': ne se répète pas (aucune session suivante n\'est prévue)': [': لا تتكرر (لا دورة تالية مبرمجة)', ': does not repeat (no next session planned)'], ': pas de prix fixe, seulement des gestes de remerciement': [': بلا سعر ثابت، فقط مبالغ امتنان', ': no fixed price, only thank-you gestures'],
    'Tu rejoins en cours de session ? Indique le nombre de séances à rattraper : elles forment une 1re session courte, puis la session normale démarre juste après.': ['هل التحقت أثناء الدورة؟ اكتب عدد الحصص للتدارك: تشكّل دورة أولى قصيرة ثم تبدأ الدورة العادية مباشرة بعدها.', 'Joining mid-session? Enter the number of lessons to catch up: they form a short first session, then the normal session starts right after.'],
    'Première séance à partir du': ['أول حصة ابتداءً من', 'First lesson from'], 'Les séances de la première session sont créées automatiquement. Tu les valides ensuite avec une case à cocher.': ['تُنشأ حصص الدورة الأولى تلقائيا ثم تؤكدها بوضع علامة.', 'The first session\'s lessons are created automatically. You then validate them with a checkbox.'], 'Créer le cours': ['إنشاء الدرس', 'Create the course'],
    // aide, nouveautés, mot de passe
    '🔑 Changer le mot de passe': ['🔑 تغيير كلمة المرور', '🔑 Change password'], 'Mot de passe actuel': ['كلمة المرور الحالية', 'Current password'], 'Nouveau mot de passe': ['كلمة مرور جديدة', 'New password'], 'caractères minimum': ['أحرف على الأقل', 'characters minimum'], 'Confirmer': ['تأكيد', 'Confirm'],
    '🆕 Nouveautés': ['🆕 المستجدات', '🆕 What\'s new'], '🔒 Confidentialité': ['🔒 الخصوصية', '🔒 Privacy'], 'Compris': ['مفهوم', 'Got it'],
    // connexion
    'Se connecter': ['تسجيل الدخول', 'Log in'], 'Créer un compte': ['إنشاء حساب', 'Create an account'], 'E-mail': ['البريد الإلكتروني', 'Email'], 'Nom (ou famille)': ['الاسم (أو العائلة)', 'Name (or family)'],
    'Mot de passe (8 caractères minimum)': ['كلمة المرور (8 أحرف على الأقل)', 'Password (8 characters minimum)'], 'Confirmer le mot de passe': ['تأكيد كلمة المرور', 'Confirm password'], 'Créer mon compte': ['إنشاء حسابي', 'Create my account'], 'Envoyer ma demande': ['إرسال طلبي', 'Send my request'],
    'Inscription gratuite : ton espace est créé tout de suite.': ['تسجيل مجاني: يُنشأ فضاؤك فورا.', 'Free sign-up: your space is created right away.'],
    'Ta demande sera examinée avant l\'activation de ton compte. Tu pourras te connecter dès qu\'elle sera acceptée.': ['سيُنظر في طلبك قبل تفعيل حسابك. يمكنك الدخول بمجرد قبوله.', 'Your request will be reviewed before your account is activated. You can log in as soon as it is accepted.'],
    'Les inscriptions sont fermées pour le moment.': ['التسجيل مغلق حاليا.', 'Sign-ups are closed for now.'], '✅ Demande envoyée. Tu pourras te connecter dès qu\'elle sera acceptée.': ['✅ تم إرسال الطلب. يمكنك الدخول بمجرد قبوله.', '✅ Request sent. You can log in as soon as it is accepted.'],
    'Les deux mots de passe ne sont pas identiques.': ['كلمتا المرور غير متطابقتين.', 'The two passwords do not match.'], 'Session expirée : reconnecte-toi.': ['انتهت الجلسة: سجّل الدخول من جديد.', 'Session expired: please log in again.'],
    'E-mail ou mot de passe incorrect.': ['البريد الإلكتروني أو كلمة المرور غير صحيحة.', 'Incorrect email or password.'], 'Trop d\'essais : réessaie dans 15 minutes.': ['محاولات كثيرة: أعد المحاولة بعد 15 دقيقة.', 'Too many attempts: try again in 15 minutes.'],
    'Un compte existe déjà avec cet e-mail.': ['يوجد حساب بهذا البريد.', 'An account already exists with this email.'], 'E-mail invalide.': ['بريد إلكتروني غير صالح.', 'Invalid email.'], 'Mot de passe trop court (8 caractères minimum).': ['كلمة المرور قصيرة (8 أحرف على الأقل).', 'Password too short (8 characters minimum).'],
    'Mot de passe actuel incorrect.': ['كلمة المرور الحالية غير صحيحة.', 'Current password is incorrect.'], 'Mot de passe changé.': ['تم تغيير كلمة المرور.', 'Password changed.'],
    '⏳ Demande en cours': ['⏳ الطلب قيد المعالجة', '⏳ Request pending'], '⏸ Abonnement suspendu': ['⏸ الاشتراك موقوف', '⏸ Subscription suspended'], '⌛ Abonnement expiré': ['⌛ الاشتراك منتهٍ', '⌛ Subscription expired'], 'Demande refusée': ['الطلب مرفوض', 'Request declined'],
    'Ta demande de compte est en cours de validation. Tu seras prévenu dès qu\'elle sera acceptée.': ['طلب حسابك قيد المراجعة. سيتم إعلامك بمجرد قبوله.', 'Your account request is being reviewed. You will be notified as soon as it is accepted.'],
    'Ton abonnement est suspendu. Contacte ton fournisseur Darsy+. Tu peux exporter tes données.': ['اشتراكك موقوف. اتصل بمزوّد Darsy+. يمكنك تصدير بياناتك.', 'Your subscription is suspended. Contact your Darsy+ provider. You can export your data.'],
    'Ton abonnement a expiré': ['انتهى اشتراكك', 'Your subscription has expired'], 'Contacte ton fournisseur Darsy+. Tu peux exporter tes données.': ['اتصل بمزوّد Darsy+. يمكنك تصدير بياناتك.', 'Contact your Darsy+ provider. You can export your data.'],
    'Ta demande de compte a été refusée.': ['تم رفض طلب حسابك.', 'Your account request was declined.'], '⬇️ Exporter mes données': ['⬇️ تصدير بياناتي', '⬇️ Export my data'], 'Actualiser': ['تحديث', 'Refresh'], 'Se déconnecter': ['تسجيل الخروج', 'Log out'],
    'Chargement…': ['جارٍ التحميل…', 'Loading…'], 'Erreur :': ['خطأ:', 'Error:'], 'Réessayer': ['إعادة المحاولة', 'Retry'],
    // messages d'alerte
    'Ajoute d\'abord un cours dans Réglages.': ['أضف درسا أولا من الإعدادات.', 'First add a course in Settings.'], 'Ajoute d\'abord un enfant dans Réglages.': ['أضف طفلا أولا من الإعدادات.', 'First add a child in Settings.'],
    'Choisis une date.': ['اختر تاريخا.', 'Pick a date.'], 'Indique la matière.': ['اكتب المادة.', 'Enter the subject.'], 'Prénom ?': ['الاسم الأول؟', 'First name?'], 'Supprimer ce paiement ?': ['حذف هذه الدفعة؟', 'Delete this payment?'], 'Supprimer ce créneau ?': ['حذف هذه الفترة؟', 'Delete this slot?'],
    'Indique le montant du geste, ou choisis « Pas cette fois ».': ['اكتب مبلغ الامتنان أو اختر «ليس هذه المرة».', 'Enter the gesture amount, or choose “Not this time”.'], 'L\'heure de fin doit être après l\'heure de début.': ['يجب أن يكون وقت النهاية بعد وقت البداية.', 'The end time must be after the start time.'],
    'Ce cours n\'a pas de jours habituels : aucune séance ne sera générée. Renseigne-les dans Réglages.': ['هذا الدرس بلا أيام معتادة: لن تُنشأ حصص. أدخلها في الإعدادات.', 'This course has no usual days: no lessons will be generated. Enter them in Settings.'],
    'Aucun jour habituel choisi : les séances ne seront pas générées automatiquement. Continuer ?': ['لم تُختر أيام معتادة: لن تُنشأ الحصص تلقائيا. المتابعة؟', 'No usual day chosen: lessons will not be generated automatically. Continue?'],
    'Cette action est définitive.': ['هذا الإجراء نهائي.', 'This action is permanent.'], 'Continuer ?': ['المتابعة؟', 'Continue?'], 'Lecture du fichier impossible.': ['تعذّرت قراءة الملف.', 'Could not read the file.'],
    'Sauvegarde téléchargée :': ['تم تنزيل النسخة الاحتياطية:', 'Backup downloaded:'], 'Pour confirmer, tape VIDER en majuscules :': ['للتأكيد اكتب VIDER بأحرف كبيرة:', 'To confirm, type VIDER in capital letters:'], 'Annulé : mot de confirmation incorrect.': ['أُلغي: كلمة التأكيد غير صحيحة.', 'Cancelled: wrong confirmation word.'],
    'Vider TOUTE la base (enfants, cours, séances, paiements, lycée) ? Une copie de sécurité sera téléchargée avant.': ['مسح كل البيانات (الأطفال والدروس والحصص والمدفوعات والثانوية)؟ ستُنزَّل نسخة أمان قبل ذلك.', 'Clear ALL data (children, courses, lessons, payments, school)? A safety copy will be downloaded first.'],
    'Fichier illisible : ce n\'est pas une sauvegarde Darsy+.': ['ملف غير مقروء: ليس نسخة احتياطية لـ Darsy+.', 'Unreadable file: not a Darsy+ backup.'], 'Ce fichier n\'est pas une sauvegarde Darsy+ valide.': ['هذا الملف ليس نسخة احتياطية صالحة لـ Darsy+.', 'This file is not a valid Darsy+ backup.'],
    'Restauration en cours…': ['جارٍ الاستعادة…', 'Restoring…'], 'Vidage en cours…': ['جارٍ المسح…', 'Clearing…'],
    'Séance restaurée ✓': ['تمت استعادة الحصة ✓', 'Lesson restored ✓'], 'Annuler ': ['تراجع ', 'Undo '], 'supprimée': ['محذوفة', 'deleted'], 'Jours modifiés : séances à venir reprogrammées': ['تم تغيير الأيام: أُعيدت برمجة الحصص القادمة', 'Days changed: upcoming lessons rescheduled'],
    '🗑 Corbeille': ['🗑 سلة المحذوفات', '🗑 Bin'], 'séances supprimées': ['حصص محذوفة', 'deleted lessons'], 'Restaurer': ['استعادة', 'Restore'], 'Enregistrer ': ['حفظ ', 'Save '],
    // aide
    '❓ Aide': ['❓ المساعدة', '❓ Help'], 'Fermer ✕': ['إغلاق ✕', 'Close ✕'], 'Utiliser Darsy+': ['استعمال Darsy+', 'Using Darsy+'], 'Administrateur': ['المسؤول', 'Administrator'], 'Questions fréquentes': ['أسئلة شائعة', 'FAQ'],
    // pied de page
    'Tes données (enfants, cours, séances, paiements) sont enregistrées dans': ['بياناتك (الأطفال والدروس والحصص والمدفوعات) محفوظة في', 'Your data (children, courses, lessons, payments) is stored in'],
    'un fichier Google Sheets à toi': ['ملف Google Sheets خاص بك', 'your own Google Sheets file'], ', séparé de ceux des autres familles.': ['، منفصل عن ملفات العائلات الأخرى.', ', separate from other families\' files.'],
    'Elles sont hébergées dans le compte Google de ton fournisseur Darsy+, qui s\'engage à ne les utiliser que pour faire fonctionner le service. Ton mot de passe est stocké chiffré (jamais en clair).': ['تُستضاف في حساب Google لمزوّد Darsy+ الذي يلتزم باستعمالها فقط لتشغيل الخدمة. كلمة مرورك مخزّنة مشفّرة (لا تُحفظ نصا واضحا).', 'It is hosted in your Darsy+ provider\'s Google account, who commits to using it only to run the service. Your password is stored encrypted (never in clear).'],
    // ---- compléments (fragments, infobulles, nouveautés) ----
    'à payer': ['للدفع', 'to pay'], '^le #': ['في #', 'on #'], '1er': ['الأول', '1st'], '1re': ['الأولى', '1st'], '(1er jour de la session)': ['(أول يوم من الدورة)', '(1st day of the session)'],
    '✓ Tout est à jour': ['✓ كل شيء محدّث', '✓ Everything is up to date'], '⚠ Le serveur est en retard : à déployer': ['⚠ الخادم متأخر: يجب نشره', '⚠ The server is behind: to be deployed'],
    '⚠ Le site est en retard : à publier (patienter 1 à 2 minutes)': ['⚠ الموقع متأخر: يجب نشره (انتظر دقيقة إلى دقيقتين)', '⚠ The site is behind: to be published (wait 1 to 2 minutes)'],
    '? Version du site illisible (fichier version.json absent ou hors ligne)': ['؟ تعذّرت قراءة إصدار الموقع (ملف version.json غائب أو لا اتصال)', '? Site version unreadable (version.json missing or offline)'],
    'Relire les données depuis le serveur': ['إعادة قراءة البيانات من الخادم', 'Reload the data from the server'], 'Voir le détail des dépenses du mois': ['عرض تفاصيل مصاريف الشهر', 'See the month\'s spending details'], 'Mode sombre': ['الوضع الداكن', 'Dark mode'],
    'Tous les événements sont créés directement sur l\'agenda partagé': ['تُنشأ كل الأحداث مباشرة في الأجندة المشتركة', 'All events are created directly in the shared calendar'], 'Famille': ['العائلة', 'Family'],
    ': ils apparaissent chez toute personne abonnée à cet agenda, sans invitation à accepter. Si une alarme ne sonne pas chez quelqu\'un malgré tout, il doit vérifier, dans': [': تظهر عند كل من اشترك في هذه الأجندة دون دعوة للقبول. وإذا لم يرنّ منبّه عند أحدهم رغم ذلك فعليه التحقق في', ': they appear for everyone subscribed to this calendar, with no invitation to accept. If an alarm still does not ring for someone, they should check, in'],
    'ses propres': ['إعداداته الخاصة', 'their own'], 'réglages Google Agenda (Paramètres de mes agendas > Famille > Notifications des événements), qu\'il n\'a pas lui-même désactivé les rappels pour cet agenda.': ['إعدادات Google Agenda (إعدادات أجنداتي > العائلة > إشعارات الأحداث) أنه لم يعطّل بنفسه التذكيرات لهذه الأجندة.', 'Google Calendar settings (Settings for my calendars > Family > Event notifications) that they have not turned off reminders for this calendar themselves.'],
    '— par défaut, RIEN n\'est ajouté à l\'agenda pour le': ['— افتراضيا لا يُضاف أي شيء إلى الأجندة بخصوص', '— by default NOTHING is added to the calendar for'], 'Ajouter les cours du': ['إضافة دروس', 'Add the'], 'à l\'agenda de l\'enfant': ['إلى أجندة الطفل', 'to the child\'s calendar'],
    'Aussi y mettre un rappel (veille / matin, comme ci-dessus)': ['إضافة تذكير أيضا (اليوم السابق / الصباح كما سبق)', 'Also add a reminder (day before / morning, as above)'], 'Après un changement de préférences, utilise "Tout resynchroniser" pour que ça s\'applique aux événements déjà créés.': ['بعد تغيير التفضيلات استعمل «إعادة مزامنة الكل» لتُطبَّق على الأحداث المنشأة سابقا.', 'After changing preferences, use “Resync everything” so it applies to events already created.'],
    'URL de l\'API (Apps Script)': ['عنوان API (Apps Script)', 'API URL (Apps Script)'],
    'Tu rejoins en cours de session ? Indique le nombre de séances à rattraper : elles forment un 1re session courte, puis la session normale démarre juste après. Prix « auto » = proportionnel.': ['هل التحقت أثناء الدورة؟ اكتب عدد الحصص للتدارك: تشكّل دورة أولى قصيرة ثم تبدأ الدورة العادية مباشرة بعدها. السعر «تلقائي» = بالتناسب.', 'Joining mid-session? Enter the number of lessons to catch up: they form a short 1st session, then the normal session starts right after. “auto” price = proportional.'],
    'Nouveau logo argenté « درسي » et sélecteur de thème de couleurs 🎨 ; plus aucune photo par défaut.': ['شعار جديد بلون فضي «درسي» واختيار ألوان التطبيق 🎨؛ ولا صور افتراضية بعد الآن.', 'New silver logo “درسي” and colour theme selector 🎨; no default photos any more.'],
    '🎨 Thème de couleurs': ['🎨 ألوان التطبيق', '🎨 Colour theme'], 'Thème de couleurs': ['ألوان التطبيق', 'Colour theme'],
    'Choisis la couleur de l\'appli. Le mode clair / sombre se règle avec l\'interrupteur en bas à droite.': ['اختر لون التطبيق. الوضع الفاتح / الداكن يُضبط بالمفتاح أسفل اليمين.', 'Choose the app colour. Light / dark mode is set with the switch at the bottom right.'],
    'Choisis la couleur de l\'appli (le mode clair / sombre se règle en bas à droite).': ['اختر لون التطبيق (الوضع الفاتح / الداكن يُضبط أسفل اليمين).', 'Choose the app colour (light / dark mode is set at the bottom right).'],
    'Rester connecté sur cet appareil': ['البقاء متصلا على هذا الجهاز', 'Stay logged in on this device'], 'Se déconnecter ?': ['تسجيل الخروج؟', 'Log out?'],
    'Case « Rester connecté sur cet appareil » à la connexion et bouton de déconnexion 🚪 dans l\'en-tête.': ['خانة «البقاء متصلا على هذا الجهاز» عند الدخول وزر تسجيل الخروج 🚪 في الأعلى.', 'Stay-logged-in checkbox at login and a log-out button 🚪 in the header.'],
    '👨‍👩‍👧 Inviter ma famille': ['👨‍👩‍👧 دعوة عائلتي', '👨‍👩‍👧 Invite my family'], 'Compte familial': ['حساب عائلي', 'Family account'],
    'Jusqu\'à 5 personnes (conjoint(e), grands-parents…). Chacune reçoit un e-mail d\'invitation avec un lien pour choisir son mot de passe, puis voit les mêmes séances et paiements que toi.': ['حتى 5 أشخاص (الزوج أو الزوجة، الجدّان…). يتلقى كل واحد بريد دعوة فيه رابط لاختيار كلمة المرور، ثم يرى نفس الحصص والمدفوعات.', 'Up to 5 people (spouse, grandparents…). Each receives an invitation email with a link to choose a password, then sees the same lessons and payments as you.'],
    'Invitation envoyée, en attente': ['تم إرسال الدعوة، في الانتظار', 'Invitation sent, waiting'], 'Accès actif': ['وصول مفعّل', 'Access active'], 'Renvoyer': ['إعادة الإرسال', 'Resend'], 'Retirer': ['سحب', 'Remove'],
    'Envoyer l\'invitation': ['إرسال الدعوة', 'Send the invitation'], 'Tu as atteint le maximum de 5 invitations.': ['بلغتَ الحد الأقصى: 5 دعوات.', 'You have reached the maximum of 5 invitations.'],
    'Invitation envoyée à': ['تم إرسال الدعوة إلى', 'Invitation sent to'], 'Invitation renvoyée': ['أُعيد إرسال الدعوة', 'Invitation resent'],
    'Retirer cette personne ? Elle n\'aura plus accès à vos données.': ['سحب هذا الشخص؟ لن يعود يصل إلى بياناتكم.', 'Remove this person? They will no longer have access to your data.'],
    'Tu as été invité(e) par': ['دعاك', 'You were invited by'], ': tu vois les mêmes séances et paiements.': ['، وترى نفس الحصص والمدفوعات.', ': you see the same lessons and payments.'],
     'Mot de passe oublié ?': ['نسيت كلمة المرور؟', 'Forgot your password?'], 'Entre ton e-mail : tu recevras un lien pour choisir un nouveau mot de passe.': ['أدخل بريدك الإلكتروني: ستصلك رسالة برابط لاختيار كلمة مرور جديدة.', 'Enter your email: you will receive a link to choose a new password.'], 'Envoyer le lien': ['إرسال الرابط', 'Send the link'], '← Retour à la connexion': ['→ العودة إلى تسجيل الدخول', '← Back to log in'],
    '✅ Si un compte existe pour cet e-mail, un lien vient d\'être envoyé (valable 1 heure). Pense à regarder les courriers indésirables.': ['✅ إذا كان هناك حساب بهذا البريد فقد أُرسل إليه رابط (صالح لمدة ساعة). تحقق أيضًا من البريد غير المرغوب فيه.', '✅ If an account exists for this email, a link has just been sent (valid for 1 hour). Check your spam folder too.'],
     'Lien « Mot de passe oublié ? » à la connexion : un e-mail permet de choisir un nouveau mot de passe (lien valable 1 heure).': ['رابط «نسيت كلمة المرور؟» عند تسجيل الدخول: رسالة بريدية تتيح اختيار كلمة مرور جديدة (الرابط صالح لمدة ساعة).', 'Link “Forgot your password?” at login: an email lets you choose a new password (link valid for 1 hour).'],
 '🚕 E-mail du chauffeur (facultatif)': ['🚕 بريد السائق (اختياري)', '🚕 Driver\'s email (optional)'],
 'Il reçoit seulement une invitation Google Agenda par séance : <b>prénom, heure et lieu</b>. Aucun accès à l\'appli ni à votre agenda. À activer cours par cours (case « 🚕 Prévenir le chauffeur » sur la fiche du cours).': ['يصله فقط دعوة Google Calendar لكل حصة: <b>الاسم والوقت والمكان</b>. دون أي وصول إلى التطبيق أو إلى تقويمكم. يُفعَّل درسًا درسًا (خانة «🚕 إعلام السائق» في بطاقة الدرس).', 'He only receives one Google Calendar invitation per lesson: <b>first name, time and place</b>. No access to the app or to your calendar. Enable it course by course (« 🚕 Notify the driver » box on the course card).'],
 '🚕 <b>Prévenir le chauffeur</b> (invitation Google Agenda : prénom, heure, lieu)': ['🚕 <b>إعلام السائق</b> (دعوة Google Calendar: الاسم والوقت والمكان)', '🚕 <b>Notify the driver</b> (Google Calendar invitation: first name, time, place)'],
 'Chauffeur de taxi : ajoute son e-mail dans les Réglages et coche « Prévenir le chauffeur » sur les cours concernés ; il reçoit seulement le prénom, l\'heure et le lieu dans son Google Agenda.': ['سائق التاكسي: أضف بريده في الإعدادات وفعّل «إعلام السائق» في الدروس المعنية؛ يصله في Google Calendar الاسم والوقت والمكان فقط.', 'Taxi driver: add their email in Settings and tick “Notify the driver” on the relevant courses; they only get the first name, time and place in their Google Calendar.'],
 '⚡ Réglage rapide': ['⚡ إعداد سريع', '⚡ Quick setup'],
 '· un seul geste pour plusieurs enfants': ['· حركة واحدة لعدة أطفال', '· one tap for several children'],
 'Les cours identiques (même matière, même prof, mêmes jours, même horaire) sont regroupés : une coche ou un lieu s\'applique à tous les enfants concernés, et une seule alarme est créée pour eux dans l\'agenda.': ['الدروس المتطابقة (نفس المادة والأستاذ والأيام والوقت) مجمّعة: تنطبق الخانة أو المكان على كل الأطفال المعنيين، ويُنشأ تنبيه واحد لهم في التقويم.', 'Identical courses (same subject, teacher, days and time) are grouped: a tick or a place applies to all the children concerned, and a single alarm is created for them in the calendar.'],
 '🚕 Prévenir le chauffeur': ['🚕 إعلام السائق', '🚕 Notify the driver'],
 'Lieux différents : écris-en un pour tous': ['أماكن مختلفة: اكتب مكانًا واحدًا للجميع', 'Different places: type one for all'],
 'Emplacement (adresse, salle ou lien Maps)': ['المكان (عنوان أو قاعة أو رابط الخرائط)', 'Place (address, room or Maps link)'],
 'Réglages plus courts : enfants et cours se déplient à la demande, et un « Réglage rapide » applique le chauffeur ou le lieu à plusieurs enfants d\'un coup. Même matière, même prof, même heure : une seule alarme pour tous.': ['إعدادات أقصر: يُفتح الأطفال والدروس عند الحاجة، و«إعداد سريع» يطبّق السائق أو المكان على عدة أطفال دفعة واحدة. نفس المادة والأستاذ والوقت: تنبيه واحد للجميع.', 'Shorter Settings: children and courses unfold on demand, and a “Quick setup” applies the driver or place to several children at once. Same subject, teacher and time: a single alarm for all.'],
 '· # cours': ['· # دروس', '· # courses'],
 'ℹ️ Où vont les événements, et si une alarme ne sonne pas': ['ℹ️ أين تذهب الأحداث، وإن لم يرن التنبيه', 'ℹ️ Where events go, and if an alarm does not ring'],
 'Le suivi des cours particuliers de tes enfants : séances, paiements et rappels, au même endroit.': ['متابعة الدروس الخصوصية لأطفالك: الحصص والمدفوعات والتذكيرات في مكان واحد.', 'Keep track of your children\'s private lessons: sessions, payments and reminders, all in one place.'],
 '🛟 Mode support : tu es dans le compte de': ['🛟 وضع الدعم: أنت داخل حساب', '🛟 Support mode: you are in the account of'],
 'Quitter le mode support': ['إنهاء وضع الدعم', 'Leave support mode'],
 'Administrateur : bouton 👁 pour ouvrir n\'importe quel compte client en mode support, sans restriction ni limite de durée (ouverture journalisée). La page de connexion présente maintenant l\'application en une phrase.': ['المسؤول: زر 👁 لفتح أي حساب عميل في وضع الدعم، دون قيود ودون حد زمني (يُسجَّل الفتح). صفحة الدخول تقدّم التطبيق الآن في جملة واحدة.', 'Administrator: 👁 button to open any client account in support mode, with no restriction or time limit (opening is logged). The login page now introduces the app in one sentence.'],
 'Bon après-midi': ['طاب يومك', 'Good afternoon'], 'Bonsoir': ['مساء الخير', 'Good evening'],
    'Accueil : le message de bienvenue affiche maintenant ton nom (avec le moment de la journée) et la date dans un petit repère à droite.': ['الرئيسية: رسالة الترحيب تعرض الآن اسمك (حسب وقت اليوم) والتاريخ في شارة صغيرة على الجانب.', 'Home: the welcome message now shows your name (with the time of day) and the date in a small badge on the side.'],
 '🚕 Tester l\'envoi au chauffeur': ['🚕 اختبار الإرسال إلى السائق', '🚕 Test sending to the driver'],
 'Chauffeur : bouton « Tester l\'envoi au chauffeur » (envoie une invitation de test et indique ce qui manque) ; les erreurs d\'invitation s\'affichent après la synchronisation.': ['السائق: زر «اختبار الإرسال إلى السائق» (يرسل دعوة تجريبية ويبيّن ما ينقص)؛ وتظهر أخطاء الدعوات بعد المزامنة.', 'Driver: “Test sending to the driver” button (sends a test invitation and shows what is missing); invitation errors now appear after syncing.'],
 'Quand tu changes les jours ou l\'horaire d\'un cours, l\'agenda Google est maintenant mis à jour tout seul : anciens événements et alertes de paiement retirés, nouveaux créés.': ['عند تغيير أيام الدرس أو توقيته يُحدَّث تقويم Google تلقائيًا: تُحذف الأحداث القديمة وتنبيهات الدفع وتُنشأ الجديدة.', 'When you change a course\'s days or time, Google Calendar is now updated automatically: old events and payment alerts removed, new ones created.'],
    'Agenda mis à jour': ['تم تحديث التقويم', 'Calendar updated'],
 '« Reste à payer » : un paiement en trop sur une session n\'efface plus la dette d\'une autre session ; le total correspond maintenant aux pastilles de paiement.': ['«المتبقي للدفع»: لم يعد الدفع الزائد في دورة يمحو دينًا في دورة أخرى؛ والمجموع يطابق الآن شارات الدفع.', '“Left to pay”: an overpayment on one session no longer cancels the debt of another; the total now matches the payment chips.'],
 'Assistant de configuration': ['مساعد الإعداد', 'Setup assistant'],
 '🧙 Assistant de configuration': ['🧙 مساعد الإعداد', '🧙 Setup assistant'],
 'Crée tes enfants puis règle leurs cours un par un. Un cours déjà suivi par un autre enfant est repris tout seul, tu ajustes seulement ce qui change (le prix par exemple).': ['أنشئ أطفالك ثم اضبط دروسهم واحدًا واحدًا. الدرس الذي يتابعه طفل آخر يُؤخذ تلقائيًا، وتعدّل فقط ما يختلف (كالسعر مثلًا).', 'Create your children, then set up their courses one by one. A course already followed by another child is reused automatically; you only adjust what differs (the price, for example).'],
 'Lancer l\'assistant': ['ابدأ المساعد', 'Start the assistant'],
 'Étape 1 · Les enfants': ['الخطوة 1 · الأطفال', 'Step 1 · The children'],
 'Étape 2 · Les cours de': ['الخطوة 2 · دروس', 'Step 2 · Courses of'],
 'Enfants déjà créés': ['أطفال تم إنشاؤهم', 'Children already created'],
 'Prénom de l\'enfant': ['اسم الطفل', 'Child\'s first name'],
 'Prénom': ['الاسم', 'First name'],
 '+ Ajouter': ['+ إضافة', '+ Add'],
 'Suivant →': ['التالي ←', 'Next →'],
 '← Précédent': ['→ السابق', '← Previous'],
 'Terminer ✓': ['إنهاء ✓', 'Finish ✓'],
 'Cours déjà configurés pour cet enfant': ['دروس مُعدّة لهذا الطفل', 'Courses already set up for this child'],
 'Même cours qu\'un autre enfant : coche pour l\'ajouter avec les mêmes réglages (change le prix si besoin)': ['نفس درس طفل آخر: حدّد لإضافته بنفس الإعدادات (غيّر السعر عند الحاجة)', 'Same course as another child: tick to add it with the same settings (change the price if needed)'],
 'Ajouter un autre cours': ['إضافة درس آخر', 'Add another course'],
 'Reprendre les réglages d\'un cours existant': ['أخذ إعدادات درس موجود', 'Reuse the settings of an existing course'],
 '— Reprendre les réglages de… —': ['— أخذ إعدادات … —', '— Reuse the settings of… —'],
 'Configuration enregistrée': ['تم حفظ الإعداد', 'Setup saved'],
 'Assistant de configuration dans les Réglages : crée tes enfants puis leurs cours un par un ; un cours déjà suivi par un autre enfant est repris avec les mêmes réglages (prix modifiable). Le formulaire « Nouveau cours » peut aussi reprendre les réglages d\'un cours existant.': ['مساعد الإعداد في الإعدادات: أنشئ أطفالك ثم دروسهم واحدًا واحدًا؛ والدرس الذي يتابعه طفل آخر يُؤخذ بنفس الإعدادات (السعر قابل للتعديل). نموذج «درس جديد» يمكنه أيضًا أخذ إعدادات درس موجود.', 'Setup assistant in Settings: create your children, then their courses one by one; a course already followed by another child is reused with the same settings (price editable). The “New course” form can also reuse the settings of an existing course.'],
 '🚕 Chauffeur': ['🚕 السائق', '🚕 Driver'],
 'Chauffeur': ['السائق', 'Driver'],
 'Il reçoit chaque trajet dans Google Agenda (prénom, heure, lieu) et peut avoir son propre espace : trajets de la semaine, ce qu\'il gagne, payé ou non. À activer cours par cours : case « 🚕 Prévenir le chauffeur » sur la fiche du cours, ou dans le Réglage rapide.': ['يصله كل رحلة في Google Calendar (الاسم والوقت والمكان) ويمكن أن يكون له فضاؤه الخاص: رحلات الأسبوع وما يكسبه وهل دُفع له. يُفعَّل درسًا درسًا: خانة «🚕 إعلام السائق» في بطاقة الدرس أو في الإعداد السريع.', 'He receives each trip in Google Calendar (first name, time, place) and can have his own space: this week\'s trips, what he earns, paid or not. Enable it course by course: “🚕 Notify the driver” box on the course card, or in the Quick setup.'],
 'Il reçoit chaque trajet dans Google Agenda (prénom, heure, lieu). À activer cours par cours : case « 🚕 Prévenir le chauffeur » sur la fiche du cours, ou dans le Réglage rapide.': ['يصله كل رحلة في Google Calendar (الاسم والوقت والمكان). يُفعَّل درسًا درسًا: خانة «🚕 إعلام السائق» في بطاقة الدرس أو في الإعداد السريع.', 'He receives each trip in Google Calendar (first name, time, place). Enable it course by course: “🚕 Notify the driver” box on the course card, or in the Quick setup.'],
 'E-mail du chauffeur': ['بريد السائق', 'Driver\'s email'],
 'Rémunération par trajet (DA)': ['أجر الرحلة الواحدة (دج)', 'Pay per trip (DA)'],
 'Un seul montant par trajet. Deux enfants au même cours, même heure : un seul trajet.': ['مبلغ واحد لكل رحلة. طفلان في نفس الدرس ونفس الوقت: رحلة واحدة.', 'One amount per trip. Two children in the same course at the same time: a single trip.'],
 '📧 Donner un accès à son espace': ['📧 منحه الوصول إلى فضائه', '📧 Give access to his space'],
 'Paiements au chauffeur': ['مدفوعات السائق', 'Payments to the driver'],
 'À payer :': ['للدفع:', 'To pay:'],
 'Cette semaine :': ['هذا الأسبوع:', 'This week:'],
 'Payé ce mois :': ['المدفوع هذا الشهر:', 'Paid this month:'],
 'Tout est payé ✓': ['تم دفع كل شيء ✓', 'All paid ✓'],
 '# trajet(s)': ['# رحلة', '# trip(s)'],
 '# trajet(s) · # DA': ['# رحلة · # دج', '# trip(s) · # DA'],
 '# trajet(s) × # DA = # DA': ['# رحلة × # دج = # دج', '# trip(s) × # DA = # DA'],
 '# trajet(s) fait(s), pas encore payé(s)': ['# رحلة منجزة لم تُدفع بعد', '# completed trip(s), not yet paid'],
 '💳 Payer le chauffeur': ['💳 دفع أجر السائق', '💳 Pay the driver'],
 'Règle d\'un coup les trajets faits et pas encore payés de la période choisie. Le montant s\'ajoute aux dépenses du mois.': ['يسدّد دفعة واحدة الرحلات المنجزة وغير المدفوعة في الفترة المختارة. يُضاف المبلغ إلى مصاريف الشهر.', 'Settles in one go the completed, unpaid trips of the chosen period. The amount is added to the month\'s spending.'],
 'Période': ['الفترة', 'Period'],
 'Cette semaine': ['هذا الأسبوع', 'This week'],
 'Semaine dernière': ['الأسبوع الماضي', 'Last week'],
 'Ce mois': ['هذا الشهر', 'This month'],
 'Mois dernier': ['الشهر الماضي', 'Last month'],
 'Tout ce qui reste (90 derniers jours)': ['كل ما تبقى (آخر 90 يومًا)', 'Everything left (last 90 days)'],
 'Indique d\'abord la rémunération par trajet (Réglages).': ['حدّد أولًا أجر الرحلة (في الإعدادات).', 'First enter the pay per trip (Settings).'],
 'Aucun trajet à payer sur cette période.': ['لا توجد رحلات للدفع في هذه الفترة.', 'No trips to pay in this period.'],
 'Chauffeur payé': ['تم دفع السائق', 'Driver paid'],
 'Espace chauffeur de': ['فضاء السائق لدى', 'Driver space of'],
 'À recevoir': ['مستحق القبض', 'To receive'],
 'Reçu ce mois': ['المقبوض هذا الشهر', 'Received this month'],
 'Reçu au total': ['المقبوض إجمالًا', 'Received in total'],
 'Trajets de cette semaine': ['رحلات هذا الأسبوع', 'This week\'s trips'],
 'À venir': ['القادمة', 'Upcoming'],
 'Trajets récents': ['الرحلات الأخيرة', 'Recent trips'],
 'Paiements reçus': ['المدفوعات المقبوضة', 'Payments received'],
 'Aucun trajet cette semaine.': ['لا رحلات هذا الأسبوع.', 'No trips this week.'],
 'Rien de prévu pour le moment.': ['لا شيء مبرمج حاليًا.', 'Nothing planned for now.'],
 'Aucun trajet récent.': ['لا رحلات حديثة.', 'No recent trips.'],
 '✅ Payé': ['✅ مدفوع', '✅ Paid'],
 '⏳ À recevoir': ['⏳ مستحق', '⏳ To receive'],
 'À confirmer': ['للتأكيد', 'To confirm'],
 'À faire': ['للإنجاز', 'To do'],
 'La famille n\'a pas encore indiqué la rémunération par trajet : les montants s\'afficheront dès qu\'elle sera réglée.': ['لم تحدد العائلة بعد أجر الرحلة: ستظهر المبالغ بمجرد تحديده.', 'The family has not set the pay per trip yet: amounts will appear once it is set.'],
 'Ton espace chauffeur — ': ['فضاء السائق الخاص بك — ', 'Your driver space — '],
 'Accéder à mon espace': ['الدخول إلى فضائي', 'Go to my space'],
 'Chauffeur : rémunération par trajet, espace dédié (trajets de la semaine, gains, payé ou non) via invitation, bouton « Payer le chauffeur » et suivi dans le tableau de bord et les dépenses du mois.': ['السائق: أجر لكل رحلة، وفضاء خاص به (رحلات الأسبوع والمكاسب والمدفوع من عدمه) عبر دعوة، وزر «دفع أجر السائق» ومتابعة في لوحة القيادة ومصاريف الشهر.', 'Driver: pay per trip, a dedicated space (this week\'s trips, earnings, paid or not) via invitation, a “Pay the driver” button and tracking in the dashboard and the month\'s spending.'],
 'La veille au soir (20h00)': ['في المساء السابق (الساعة 20:00)', 'The evening before (8:00 pm)'],
 'Alerte « la veille » : elle sonne maintenant la veille à 20h00 (et non 24 h avant le cours). Pour l\'appliquer aux séances déjà dans l\'agenda : Réglages → « Tout resynchroniser ».': ['تنبيه «اليوم السابق»: يرنّ الآن مساء اليوم السابق عند 20:00 (وليس قبل 24 ساعة من الدرس). لتطبيقه على الحصص الموجودة في التقويم: الإعدادات ← «إعادة مزامنة الكل».', '“The day before” alert: it now rings the evening before at 8:00 pm (not 24 h before the lesson). To apply it to sessions already in the calendar: Settings → “Resync everything”.'],
 '✏️ Nom': ['✏️ الاسم', '✏️ Name'],
 '✏️ Comment s\'appelle ta famille ?': ['✏️ ما اسم عائلتك؟', '✏️ What is your family called?'],
 '✏️ Nom du compte': ['✏️ اسم الحساب', '✏️ Account name'],
 'Ce nom s\'affiche en haut de l\'accueil. Tu pourras le changer plus tard dans Réglages.': ['يظهر هذا الاسم أعلى الصفحة الرئيسية. يمكنك تغييره لاحقًا في الإعدادات.', 'This name is shown at the top of the home page. You can change it later in Settings.'],
 'Il s\'affiche en haut de l\'accueil.': ['يظهر أعلى الصفحة الرئيسية.', 'It is shown at the top of the home page.'],
 'Nom enregistré': ['تم حفظ الاسم', 'Name saved'],
 'Le nom de la famille se choisit à l\'inscription et se modifie dans Réglages (bouton « ✏️ Nom ») ; si ton compte porte encore un nom par défaut, l\'appli te le demande à la connexion.': ['يُختار اسم العائلة عند التسجيل ويمكن تعديله في الإعدادات (زر «✏️ الاسم»)؛ وإذا كان حسابك يحمل اسمًا افتراضيًا يسألك التطبيق عنه عند الدخول.', 'The family name is chosen at sign-up and can be changed in Settings (“✏️ Name” button); if your account still has a default name, the app asks for it at login.'],
 '✅ Payé le': ['✅ دُفع في', '✅ Paid on'],
 'Ce mois-ci': ['هذا الشهر', 'This month'],
 'Effectués': ['المنجزة', 'Completed'],
 'Déjà payés': ['المدفوعة', 'Already paid'],
 'Total prévu': ['المجموع المتوقع', 'Expected total'],
 'Trajets faits, pas encore payés': ['رحلات منجزة لم تُدفع بعد', 'Completed trips, not yet paid'],
 'Trajets à venir ce mois-ci': ['رحلات قادمة هذا الشهر', 'Trips coming this month'],
 'Chauffeur : l\'espace du chauffeur affiche maintenant la date de paiement de chaque trajet et un bilan du mois (effectués, déjà payés, reste à payer, à venir, total prévu) ; le « À prévoir » de la famille inclut le chauffeur.': ['السائق: يعرض فضاء السائق الآن تاريخ دفع كل رحلة وحصيلة الشهر (المنجزة، المدفوعة، المتبقي للدفع، القادمة، المجموع المتوقع)؛ و«المتوقع» لدى العائلة يشمل السائق.', 'Driver: the driver\'s space now shows each trip\'s payment date and a month summary (completed, already paid, left to pay, upcoming, expected total); the family\'s “To plan” includes the driver.'],
 'Agenda : les événements passés (alertes mortes) sont retirés de Google Agenda à chaque synchronisation ; l\'historique des séances reste dans l\'appli.': ['التقويم: تُحذف الأحداث المنتهية (التنبيهات الميتة) من Google Calendar عند كل مزامنة؛ ويبقى سجل الحصص في التطبيق.', 'Calendar: past events (dead alerts) are removed from Google Calendar at each sync; the sessions history stays in the app.'],
 '🚕 Le chauffeur a-t-il ramené les enfants ?': ['🚕 هل أعاد السائق الأطفال؟', '🚕 Did the driver bring the children back?'],
 'Si ce n\'est pas lui, aucun trajet n\'est compté pour le chauffeur.': ['إن لم يكن هو، لا تُحتسب أي رحلة للسائق.', 'If it was not him, no trip is counted for the driver.'],
 'Oui, le chauffeur': ['نعم، السائق', 'Yes, the driver'],
 'Non, ce n\'était pas lui': ['لا، لم يكن هو', 'No, it was not him'],
 'Pas ramené par le chauffeur': ['لم يُعدهم السائق', 'Not brought back by the driver'],
 'Ramené par le chauffeur': ['أعادهم السائق', 'Brought back by the driver'],
 'changer': ['تغيير', 'change'],
 'Séances : quand tu valides une séance d\'un cours avec chauffeur, l\'appli demande si c\'est bien le chauffeur qui a ramené les enfants (sinon aucun trajet n\'est compté). Et les séances prévues suivent le programme du cours : si un jour est retiré, l\'appli propose de supprimer les séances prévues ce jour-là.': ['الحصص: عند تأكيد حصة في درس به سائق يسأل التطبيق هل أعاد السائق الأطفال فعلًا (وإلا لا تُحتسب أي رحلة). والحصص المبرمجة تتبع برنامج الدرس: عند حذف يوم يقترح التطبيق حذف الحصص المبرمجة في ذلك اليوم.', 'Sessions: when you validate a session of a course with a driver, the app asks whether the driver really brought the children back (otherwise no trip is counted). And planned sessions follow the course\'s schedule: if a day is removed, the app offers to delete the sessions planned that day.'],
 'Ce mois-ci : vert = trajet fait, barré = pas fait par toi, clair = à faire.': ['هذا الشهر: أخضر = رحلة منجزة، مشطوب = لم تنجزها أنت، فاتح = للإنجاز.', 'This month: green = trip done, crossed = not done by you, light = to do.'],
 'Non effectué': ['غير منجزة', 'Not done'],
 'Non effectués': ['غير منجزة', 'Not done'],
 'Chauffeur : des pastilles montrent les trajets du mois (vert = fait par le chauffeur, cerclé d\'orange tant qu\'il n\'est pas payé, barré = pas fait par lui, clair = à faire), sur l\'accueil de la famille et dans l\'espace du chauffeur, qui voit aussi les trajets non effectués.': ['السائق: تُظهر نقاط صغيرة رحلات الشهر (أخضر = أنجزها السائق، بحلقة برتقالية ما دامت غير مدفوعة، مشطوب = لم ينجزها، فاتح = للإنجاز) في الصفحة الرئيسية للعائلة وفي فضاء السائق، الذي يرى أيضًا الرحلات غير المنجزة.', 'Driver: small dots show the month\'s trips (green = done by the driver, orange-ringed until paid, crossed = not done by him, light = to do), on the family home and in the driver\'s space, which also shows the trips not done.'],
 'La veille au soir, à': ['في المساء السابق، عند', 'The evening before, at'],
 'Heure de la veille changée : pour les séances déjà dans l\'agenda, touche « Tout resynchroniser »': ['تغيّرت ساعة اليوم السابق: للحصص الموجودة في التقويم اضغط «إعادة مزامنة الكل»', 'The evening-before time changed: for sessions already in the calendar, tap “Resync everything”'],
 'Alerte « la veille » : l\'heure se choisit dans les Réglages (20h00 par défaut). Pour les séances déjà dans l\'agenda : « Tout resynchroniser ».': ['تنبيه «اليوم السابق»: تُختار الساعة من الإعدادات (20:00 افتراضيًا). للحصص الموجودة في التقويم: «إعادة مزامنة الكل».', '“The day before” alert: the time is chosen in Settings (8:00 pm by default). For sessions already in the calendar: “Resync everything”.'],
 'Aucun cours n\'utilise le chauffeur. Coche « 🚕 Prévenir le chauffeur » sur la fiche d\'un cours (Réglages).': ['لا يستخدم أي درس السائق. فعّل «🚕 إعلام السائق» في بطاقة الدرس (الإعدادات).', 'No course uses the driver. Tick “🚕 Notify the driver” on a course card (Settings).'],
 'Trajets du chauffeur': ['رحلات السائق', 'Driver\'s trips'],
 'Trajets du mois': ['رحلات الشهر', 'This month\'s trips'],
 '🚕 Fait par le chauffeur': ['🚕 أنجزها السائق', '🚕 Done by the driver'],
 'Pas le chauffeur': ['ليس السائق', 'Not the driver'],
 '🚫 Pas le chauffeur': ['🚫 ليس السائق', '🚫 Not the driver'],
 '❓ À confirmer': ['❓ للتأكيد', '❓ To confirm'],
 'Aucun trajet ce mois-ci.': ['لا رحلات هذا الشهر.', 'No trips this month.'],
 'Voir et confirmer': ['عرض وتأكيد', 'View and confirm'],
 'Tout confirmer comme fait par lui': ['تأكيد الكل كمنجز من طرفه', 'Confirm all as done by him'],
 '⏳ En attente de confirmation': ['⏳ في انتظار التأكيد', '⏳ Awaiting confirmation'],
 'En attente de confirmation': ['في انتظار التأكيد', 'Awaiting confirmation'],
 'Chauffeur : nouvelle page « Chauffeur » pour relire l\'historique des trajets et les corriger. Seuls les trajets que tu confirmes comme faits par le chauffeur sont payables : les séances déjà cochées avant sont « à confirmer » (bouton « Tout confirmer » ou un par un).': ['السائق: صفحة جديدة «السائق» لمراجعة سجل الرحلات وتصحيحها. لا تُدفع إلا الرحلات التي تؤكد أن السائق أنجزها: الحصص المؤشّر عليها سابقًا تصبح «للتأكيد» (زر «تأكيد الكل» أو واحدة واحدة).', 'Driver: new “Driver” page to review the trips history and correct it. Only the trips you confirm as done by the driver are payable: sessions ticked earlier become “to confirm” (“Confirm all” button or one by one).'],
    'Rejoindre la famille de': ['الانضمام إلى عائلة', 'Join the family of'], 'Ton nom': ['اسمك', 'Your name'], 'Choisis ton mot de passe (8 caractères minimum)': ['اختر كلمة المرور (8 أحرف على الأقل)', 'Choose your password (8 characters minimum)'], 'Rejoindre la famille': ['الانضمام إلى العائلة', 'Join the family'],
    'Invitation invalide ou expirée.': ['دعوة غير صالحة أو منتهية.', 'Invalid or expired invitation.'], 'Seul le titulaire du compte peut inviter.': ['صاحب الحساب وحده يستطيع الدعوة.', 'Only the account holder can invite.'],
    'Tu as atteint le maximum de 5 invitations.': ['بلغتَ الحد الأقصى: 5 دعوات.', 'You have reached the maximum of 5 invitations.'], 'C\'est déjà ton adresse.': ['هذا بريدك أصلا.', 'That is already your address.'],
    'Invitation de la famille par e-mail (jusqu\'à 5 personnes) depuis les Réglages, et bouton « Inviter » sur la fiche de chaque enfant.': ['دعوة العائلة بالبريد الإلكتروني (حتى 5 أشخاص) من الإعدادات، وزر «دعوة» في بطاقة كل طفل.', 'Family invitations by email (up to 5 people) from Settings, and an “Invite” button on each child\'s card.'],
    '📧 Inviter': ['📧 دعوة', '📧 Invite'], 'Il reçoit un e-mail avec son accès.': ['يصله بريد فيه رابط الدخول.', 'They receive an email with their access.'],
    'Ajoute son e-mail ci-dessus (puis « Enregistrer ») pour pouvoir l\'inviter.': ['أضف بريده أعلاه (ثم «حفظ») لتتمكن من دعوته.', 'Add their email above (then “Save”) to be able to invite them.'],
    'Maximum d\'invitations atteint.': ['بلغتَ الحد الأقصى للدعوات.', 'Maximum number of invitations reached.'], '✉️ Invitation envoyée, en attente': ['✉️ تم إرسال الدعوة، في الانتظار', '✉️ Invitation sent, waiting'], '✅ Accès actif': ['✅ وصول مفعّل', '✅ Access active'],
    'Indigo': ['نيلي', 'Indigo'], 'Océan': ['محيط', 'Ocean'], 'Forêt': ['غابة', 'Forest'], 'Rose': ['وردي', 'Pink'], 'Ardoise': ['أردوازي', 'Slate'],
    'Choix de la langue (français, arabe, anglais), menu du haut réorganisé (Réglages = engrenage), carte Version retirée des Réglages.': ['اختيار اللغة (الفرنسية والعربية والإنجليزية)، وإعادة ترتيب القائمة العلوية (الإعدادات = عجلة)، وحذف بطاقة الإصدار من الإعدادات.', 'Language choice (French, Arabic, English), reorganised top menu (Settings = gear), Version card removed from Settings.'],
    'Nouveau logo, aide intégrée (bouton ?), thème clair / sombre, pied de page.': ['شعار جديد، مساعدة مدمجة (زر ؟)، مظهر فاتح / داكن، وتذييل الصفحة.', 'New logo, built-in help (? button), light / dark theme, footer.'],
    'Un seul site pour tous : connexion, inscription, comptes séparés, administration.': ['موقع واحد للجميع: تسجيل الدخول والتسجيل وحسابات منفصلة وإدارة.', 'One site for everyone: login, sign-up, separate accounts, administration.'],
    'Export, import et vidage de la base ; horaire modifiable par séance.': ['تصدير البيانات واستيرادها ومسحها؛ توقيت قابل للتعديل لكل حصة.', 'Export, import and clearing of data; editable time per lesson.'],
    'Sessions comptées en séances, tarif libre, session unique, corbeille des séances.': ['الدورات تُحسب بعدد الحصص، سعر حر، دورة واحدة، وسلة محذوفات للحصص.', 'Sessions counted in lessons, free rate, single session, bin for lessons.'],
    '🆕 Nouveautés': ['🆕 المستجدات', '🆕 What\'s new'],
    'ex. offert par le prof': ['مثلا هدية من الأستاذ', 'e.g. offered by the teacher'], 'Prix « auto » = proportionnel.': ['السعر «تلقائي» = بالتناسب.', '“auto” price = proportional.'],

    '(1 semaine avant et à l\'avant-dernière séance)': ['(قبل أسبوع وعند الحصة ما قبل الأخيرة)', '(1 week before and at the second-to-last lesson)'],
    'Chez le prof, centre X, salle 3…': ['عند الأستاذ، المركز X، القاعة 3…', 'At the teacher\'s, centre X, room 3…'],
    'Tu peux à tout moment': ['يمكنك في أي وقت', 'You can at any time'], 'exporter': ['تصدير', 'export'], 'toutes tes données (Réglages → Sauvegarde) ou demander la fermeture de ton compte.': ['كل بياناتك (الإعدادات ← النسخ الاحتياطي) أو طلب إغلاق حسابك.', 'all your data (Settings → Backup) or ask for your account to be closed.']
  };
  var NOMBRE = '(\\d+(?:[  \\u202f]\\d{3})*)';
  var PAT = []; // expressions avec # → { re, cible:[ar,en] }
  var simple = {};
  function echapper(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  Object.keys(D).forEach(function (k) {
    if (k.indexOf('#') >= 0) PAT.push({ cle: k, re: new RegExp((k.charAt(0) === '^' ? '^' + echapper(k.slice(1)) : echapper(k)).replace(/#/g, NOMBRE), 'g'), n: (k.match(/#/g) || []).length });
    else simple[k] = D[k];
  });
  var RE = {}; // regex d'expressions simples, par langue (0 = ar, 1 = en)
  var cles = Object.keys(simple).sort(function (a, b) { return b.length - a.length; });
  var alternance = cles.map(echapper).join('|');
  var LETTRE = '[\\p{L}\\p{N}_]';
  try { RE.simple = new RegExp('(?<!' + LETTRE + ')(?:' + alternance + ')(?!' + LETTRE + ')', 'gu'); } catch (e) { RE.simple = null; }
  function idx() { return LANG === 'ar' ? 0 : 1; }
  function tr(s) {
    if (LANG === 'fr' || !s || typeof s !== 'string') return s;
    var i = idx(), r = s, cibles = [];
    PAT.forEach(function (p) {
      if (!p.re.test(r)) { p.re.lastIndex = 0; return; }
      p.re.lastIndex = 0;
      var cible = D[p.cle][i];
      r = r.replace(p.re, function () { var nums = [].slice.call(arguments, 1, 1 + p.n); var c = cible, k = 0; return c.replace(/#/g, function () { return nums[k++]; }); });
    });
    if (RE.simple) r = r.replace(RE.simple, function (m) { var e = simple[m]; return e ? e[i] : m; });
    if (LANG === 'ar') { // isole le nom de marque et les plages d'heures (sinon « 16:00-17:30 » s'affiche à l'envers en écriture de droite à gauche)
      r = r.replace(/(?<!\u2066)Darsy\+/g, '\u2066Darsy+\u2069').replace(/(?<!\u2066)\d{1,2}:\d{2}\s?-\s?\d{1,2}:\d{2}/g, function (m) { return '\u2066' + m + '\u2069'; });
    }
    return r;
  }
  // ---------- Dates, nombres ----------
  function locale() { return LOCALES[LANG] || 'fr-FR'; }

  // ---------- Application au DOM ----------
  var ATTRS = ['placeholder', 'title', 'aria-label', 'alt'];
  var PASSER = { SCRIPT: 1, STYLE: 1, TEXTAREA: 1, CODE: 1 };
  var observateur = null, occupe = false;
  function traduireNoeud(n) {
    if (LANG === 'fr' || !n) return;
    if (n.nodeType === 3) {
      var p = n.parentNode; if (p && PASSER[p.nodeName]) return;
      var v = n.nodeValue; if (!v || !v.trim()) return;
      var t = tr(v); if (t !== v) n.nodeValue = t;
    } else if (n.nodeType === 1) {
      if (PASSER[n.nodeName] || n.hasAttribute('data-notr')) return;
      ATTRS.forEach(function (a) { var v = n.getAttribute(a); if (v) { var t = tr(v); if (t !== v) n.setAttribute(a, t); } });
      for (var c = n.firstChild; c; c = c.nextSibling) traduireNoeud(c);
    }
  }
  function demarrer() {
    if (observateur || LANG === 'fr' || typeof MutationObserver === 'undefined') return;
    observateur = new MutationObserver(function (muts) {
      if (occupe) return; occupe = true;
      try {
        muts.forEach(function (m) {
          if (m.type === 'childList') [].forEach.call(m.addedNodes, traduireNoeud);
          else if (m.type === 'characterData') traduireNoeud(m.target);
          else if (m.type === 'attributes') traduireNoeud(m.target);
        });
      } finally { observateur.takeRecords(); occupe = false; }
    });
    observateur.observe(document.documentElement, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS });
    traduireNoeud(document.body);
  }
  function langue(l) {
    LANG = LOCALES[l] ? l : 'fr';
    if (LANG !== 'fr') demarrer();
    return LANG;
  }
  // Messages natifs (alert / confirm / prompt) traduits eux aussi
  ['alert', 'confirm', 'prompt'].forEach(function (nom) {
    var orig = root[nom]; if (typeof orig !== 'function') return;
    root[nom] = function (m, d) { return nom === 'prompt' ? orig.call(root, tr(String(m)), d) : orig.call(root, tr(String(m))); };
  });
  root.I18N = { tr: tr, langue: langue, locale: locale, traduireNoeud: traduireNoeud, dico: D, get lang() { return LANG; } };
})(typeof self !== 'undefined' ? self : this);
