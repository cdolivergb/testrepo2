const translations = {
    en: {
        nav_features: 'Features',
        nav_faq: 'FAQ',
        nav_contact: 'Contact',
        nav_login: 'Login',
        hero_title: 'Automated Custom Object Compliance',
        hero_subtitle: 'Prepare your SAP landscape for S/4HANA and maintain a clean core.',
        feature_free_title: 'Free Analysis',
        feature_free_desc: 'Download our tool, analyze your system locally and view compliance results on your dashboard.',
        feature_auto_title: 'Automated Remediation',
        feature_auto_desc: 'Use our AI-driven service to automatically fix custom objects and pay only for successful fixes.',
        feature_global_title: 'Global & Multilingual',
        feature_global_desc: 'Serve your teams worldwide with localized interfaces and documentation.',
        login_title: 'Login',
        login_user: 'Username',
        login_pass: 'Password',
        login_button: 'Sign In',
        login_note: 'Demo login form (no backend).',
        faq_title: 'FAQ',
        faq1_q: 'How does the free analysis work?',
        faq1_a: 'Download the software, run it on your development system, and view your dashboard for results.',
        faq2_q: 'What if I want to fix issues automatically?',
        faq2_a: 'Purchase a remediation plan based on the number and type of issues you want fixed.',
        faq3_q: 'Is my data secure?',
        faq3_a: 'All analysis is performed locally and results are uploaded securely to your account.',
        contact_title: 'Contact Us',
        contact_email: 'Email',
        contact_message: 'Message',
        contact_send: 'Send'
    },
    de: {
        nav_features: 'Funktionen',
        nav_faq: 'FAQ',
        nav_contact: 'Kontakt',
        nav_login: 'Anmeldung',
        hero_title: 'Automatisierte Custom-Object-Compliance',
        hero_subtitle: 'Bereiten Sie Ihre SAP-Landschaft auf S/4HANA vor und halten Sie einen sauberen Kern.',
        feature_free_title: 'Kostenlose Analyse',
        feature_free_desc: 'Laden Sie unser Tool herunter, analysieren Sie Ihr System lokal und sehen Sie die Ergebnisse im Dashboard.',
        feature_auto_title: 'Automatische Behebung',
        feature_auto_desc: 'Nutzen Sie unseren KI-Dienst, um Custom-Objekte automatisch zu korrigieren und bezahlen Sie nur für erfolgreiche Korrekturen.',
        feature_global_title: 'Global & Mehrsprachig',
        feature_global_desc: 'Bedienen Sie Ihre Teams weltweit mit lokalisierter Oberfläche und Dokumentation.',
        login_title: 'Anmeldung',
        login_user: 'Benutzername',
        login_pass: 'Passwort',
        login_button: 'Einloggen',
        login_note: 'Demo-Anmeldeformular (kein Backend).',
        faq_title: 'FAQ',
        faq1_q: 'Wie funktioniert die kostenlose Analyse?',
        faq1_a: 'Laden Sie die Software herunter, führen Sie sie auf Ihrem Entwicklungssystem aus und sehen Sie die Ergebnisse im Dashboard.',
        faq2_q: 'Was, wenn ich Probleme automatisch beheben möchte?',
        faq2_a: 'Kaufen Sie einen Behebungsplan basierend auf Anzahl und Typ der zu behobenden Probleme.',
        faq3_q: 'Sind meine Daten sicher?',
        faq3_a: 'Alle Analysen werden lokal ausgeführt und die Ergebnisse sicher an Ihr Konto gesendet.',
        contact_title: 'Kontakt',
        contact_email: 'E-Mail',
        contact_message: 'Nachricht',
        contact_send: 'Senden'
    },
    es: {
        nav_features: 'Características',
        nav_faq: 'Preguntas',
        nav_contact: 'Contacto',
        nav_login: 'Ingresar',
        hero_title: 'Cumplimiento automatizado de objetos personalizados',
        hero_subtitle: 'Prepare su entorno SAP para S/4HANA y mantenga un núcleo limpio.',
        feature_free_title: 'Análisis gratuito',
        feature_free_desc: 'Descargue nuestra herramienta, analice su sistema localmente y vea los resultados en su panel.',
        feature_auto_title: 'Remediación automática',
        feature_auto_desc: 'Utilice nuestro servicio impulsado por IA para corregir objetos personalizados automáticamente y pague solo por las correcciones exitosas.',
        feature_global_title: 'Global y multilingüe',
        feature_global_desc: 'Sirva a sus equipos en todo el mundo con interfaces y documentación localizadas.',
        login_title: 'Ingresar',
        login_user: 'Usuario',
        login_pass: 'Contraseña',
        login_button: 'Acceder',
        login_note: 'Formulario de inicio de sesión de demostración (sin backend).',
        faq_title: 'FAQ',
        faq1_q: '¿Cómo funciona el análisis gratuito?',
        faq1_a: 'Descargue el software, ejecútelo en su sistema de desarrollo y vea los resultados en su panel.',
        faq2_q: '¿Qué pasa si quiero corregir problemas automáticamente?',
        faq2_a: 'Compre un plan de remediación basado en la cantidad y tipo de problemas que desea corregir.',
        faq3_q: '¿Mis datos están seguros?',
        faq3_a: 'Todo el análisis se realiza localmente y los resultados se cargan de forma segura en su cuenta.',
        contact_title: 'Contáctenos',
        contact_email: 'Correo electrónico',
        contact_message: 'Mensaje',
        contact_send: 'Enviar'
    }
};

function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

document.getElementById('lang-select').addEventListener('change', (e) => {
    setLanguage(e.target.value);
});

document.getElementById('year').textContent = new Date().getFullYear();

// Set default language
setLanguage('en');
