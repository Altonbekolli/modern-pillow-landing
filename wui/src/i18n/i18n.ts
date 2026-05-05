import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import {initReactI18next} from 'react-i18next'

function detectLanguageDetector() {
    const host = window.location.hostname

    if (import.meta.env.DEV) {
        const params = new URLSearchParams(window.location.search)
        const forced = params.get('lang')
        if (forced === 'de' || forced === 'en' || forced === 'sq') {
            return forced
        }
    }
    if (host.endsWith('.com')) {
        return 'en'
    } else if (host.endsWith('.de')) {
        return 'de'
    } else {
        return 'de'
    }
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: detectLanguageDetector(),
        fallbackLng: 'de',
        supportedLngs: ['de', 'en', 'sq'],
        interpolation: {escapeValue: false},
        detection: {caches: []},
        resources: {
            de: {
                translation: {
                    hero: {
                        badge: 'New Release • Premium Komfort',
                        title: 'Schlaf wie im <1>Boutique-Hotel</1>, jeden Tag.',
                        subtitle:
                            'Minimalistisches Design, premium Materialien, und ein Gefühl von Ruhe. Für Menschen, die Qualität merken.',
                        preorder: 'Bestellen',
                        viewBenefits: 'Produktbilder ansehen',
                        trust: {
                            nights: {number: '30', label: 'Nächte testen'},
                            premium: {number: 'Premium', label: 'Material & Verarbeitung'},
                            clean: {number: 'Clean', label: 'Modernes Design'},
                        },
                        chips: {
                            hybrid: 'Hybrid Pillow',
                            seasons: 'Sommer • Winter • Höhenverstellbar',
                            productTitle: 'Kissen “Signature”',
                            productMeta: 'Memory Foam Core • Daune • Cooling Side',
                        },
                        floating: {
                            a: 'Höhenverstellbar · Nackenstütze',
                            b: '2 Seiten · Sommer/Winter',
                        },
                    },
                    faq: {
                        title: 'FAQ',
                        subtitle: 'Häufige Fragen zum SLEEM® Hybrid Kissen',
                        cta: 'Jetzt auf Amazon ansehen',
                        items: [
                            {
                                id: 'hybrid-what',
                                question: 'Was ist ein Hybrid Kissen – und warum ist es besser als ein normales Kopfkissen?',
                                answer:
                                    'Ein Hybrid Kissen kombiniert unterschiedliche Materialien, um das Beste aus zwei Schlafwelten zu vereinen. Das SLEEM® Hybrid Kissen verbindet die weiche, luxuriöse Haptik eines hochwertigen Daunenkissens mit der stabilisierenden Wirkung eines ergonomischen Memory-Foam-Kerns.\n\nWährend klassische Daunenkissen oft zu stark einsinken und reine Memory-Foam-Kissen als zu fest empfunden werden, schafft SLEEM® ein ausgewogenes Schlafgefühl: weich an der Oberfläche – stabil im Nackenbereich.\n\nFür Menschen, die nicht zwischen Komfort und Unterstützung wählen möchten.',
                            },
                            {
                                id: 'sleepers',
                                question: 'Ist das SLEEM® Hybrid Kissen für Seitenschläfer und Rückenschläfer geeignet?',
                                answer:
                                    'Ja. Das Kissen wurde speziell für Seiten- und Rückenschläfer entwickelt. Die integrierte Nackenstütze unterstützt die natürliche Ausrichtung von Kopf und Wirbelsäule, während die weiche Außenkammer Druckpunkte reduziert.\n\nGerade Seitenschläfer profitieren von der stabilen Höhe, die verhindert, dass der Kopf absinkt oder unnatürlich abknickt.\n\nEin ergonomisches Nackenkissen, das sich nicht technisch anfühlt, sondern natürlich.',
                            },
                            {
                                id: 'neck-pain',
                                question: 'Kann das Kissen bei Nackenschmerzen oder Verspannungen helfen?',
                                answer:
                                    'Das SLEEM® Hybrid Kissen wurde ergonomisch konzipiert, um den Nackenbereich gezielt zu stabilisieren. Durch die Kombination aus Memory-Foam-Stütze und weicher Komfortschicht kann eine entspanntere Schlafhaltung gefördert werden. Viele Nutzer empfinden das Liegegefühl als deutlich stabiler im Vergleich zu klassischen Kopfkissen.\n\nWichtig: Das Kissen ist kein medizinisches Produkt, sondern ein hochwertiges Komfortkissen mit ergonomischer Unterstützung.',
                            },
                            {
                                id: 'feel-vs',
                                question: 'Wie fühlt sich das SLEEM® Hybrid Kissen im Vergleich zu einem Daunenkissen oder Memory-Foam-Kissen an?',
                                answer:
                                    'Beim ersten Kontakt erinnert es an ein luxuriöses Hotel-Daunenkissen, weich, anschmiegsam und einladend. Sobald Sie sich ablegen, entfaltet sich die innere Stabilität des Memory-Kerns: Der Kopf sinkt sanft ein, bleibt aber kontrolliert gestützt.\n\nKein Durchsacken. Kein hartes Brettgefühl. Sondern ein harmonisches Gleichgewicht aus Komfort und Sicherheit.',
                            },
                            {
                                id: 'two-sides',
                                question: 'Warum besitzt das Kissen zwei unterschiedliche Liegeflächen?',
                                answer:
                                    'Das SLEEM® Hybrid Kissen verfügt über zwei funktionale Seiten für unterschiedliche Schlafpräferenzen. Eine Seite bietet ein etwas stabileres, strukturierteres Liegegefühl. Die andere Seite wirkt weicher und klassischer.\n\nSo können Sie Ihr persönliches Schlafgefühl anpassen, je nach Vorliebe oder Jahreszeit.',
                            },
                            {
                                id: 'height-adjustable',
                                question: 'Ist das Hybrid Kissen höhenverstellbar?',
                                answer:
                                    'Die Konstruktion des Kissens ist so abgestimmt, dass eine optimale Höhe für die meisten Seiten- und Rückenschläfer entsteht. Zusätzlich kann die Höhe individuell angepasst werden, indem die integrierten Elemente entnommen oder eingesetzt werden.\n\nSo entsteht ein maßgeschneidertes Liegegefühl – ohne komplizierte Technik.',
                            },
                            {
                                id: 'orthopedic',
                                question: 'Ist das SLEEM® Kissen eine Alternative zu einem orthopädischen Kissen?',
                                answer:
                                    'Ja, für alle, die ergonomische Unterstützung wünschen, ohne auf Komfort zu verzichten. Viele klassische orthopädische Kissen fühlen sich sehr technisch oder hart an. SLEEM® verbindet Stabilität mit Weichheit – und schafft damit eine elegante Alternative für anspruchsvolle Schläfer.\n\nErgonomisch gedacht. Luxuriös umgesetzt.',
                            },
                            {
                                id: 'breathable',
                                question: 'Ist das Kissen atmungsaktiv und für warme Nächte geeignet?',
                                answer:
                                    'Ja. Die Materialkombination wurde so gewählt, dass Luft zirkulieren kann und ein angenehmes Schlafklima entsteht. Die kühlere Seite eignet sich besonders für wärmere Nächte, während die weichere Seite in der kälteren Jahreszeit ein gemütliches Gefühl vermittelt.\n\nEin Kissen für jede Saison.',
                            },
                            {
                                id: 'materials',
                                question: 'Welche Materialien und Qualitätsstandards werden verwendet?',
                                answer:
                                    'Das SLEEM® Hybrid Kissen wird aus sorgfältig ausgewählten Materialien gefertigt:\n\n• OEKO-TEX® geprüfte Textilien\n• CertiPUR® zertifizierter Memory-Schaum\n• Downpass® zertifizierte Daunen und Federn\n• hochwertige, geprüfte Füllmaterialien\n\nQualität, die nicht nur sichtbar ist, sondern spürbar wird.',
                            },
                            {
                                id: 'who-for',
                                question: 'Für wen ist das SLEEM® Hybrid Kissen besonders geeignet?',
                                answer:
                                    'Dieses Premium-Hybrid-Kissen eignet sich ideal für:\n\n• Seiten- und Rückenschläfer\n• Menschen, die ein ergonomisches Nackenkissen mit Hotel-Komfort suchen\n• Personen, die weder extrem weich noch extrem hart schlafen möchten\n• Schläfer mit gelegentlichen Nackenverspannungen\n\nNicht geeignet ist es für Personen, die sehr flache Spezialkissen bevorzugen.',
                            },
                            {
                                id: 'adaptation',
                                question: 'Wie lange dauert die Eingewöhnung an ein Hybrid-Kissen?',
                                answer:
                                    'Da das SLEEM® Hybrid Kissen ein neues Schlafgefühl vereint, kann die Umstellung einige Nächte dauern. Viele Nutzer berichten jedoch bereits nach kurzer Zeit von einem stabileren, ruhigeren Liegegefühl und einem insgesamt entspannteren Schlaf.\n\nGuter Schlaf ist kein Zufall, sondern das Ergebnis der richtigen Unterstützung.',
                            },
                        ],
                    },
                    footer: {
                        tagline: 'Premium Komfort, minimalistisches Design, entwickelt für echte Erholung.',
                        navigation: 'Navigation',
                        legal: 'Rechtliches',
                        imprint: 'Impressum',
                        privacy: 'Datenschutzerklärung',
                        cookies: 'Cookie-Richtlinie',
                        term:'AGB',
                        newsTitle: 'Stay informed',
                        newsText: 'Melde dich an und erfahre als Erstes von Aktionen und Updates.',
                        emailPlaceholder: 'E-Mail',
                        newsNote: 'Kein Spam. Abmeldung jederzeit möglich.',
                        vat: 'Alle Preise inkl. MwSt.',
                        newsSuccess: 'Danke! Du bist auf der Warteliste.',
                        newsError: 'Leider hat es nicht geklappt. Bitte versuche es später erneut.',
                        close: 'Schließen',
                        submit: 'Absenden',
                    },
                    nav: {
                        home: 'Startseite',
                        product: 'Produkt',
                        contact: 'Kontakt',
                        certificates: 'Zertifikate',
                        faq: 'FAQ',
                    },
                    contact: {
                        title: 'Kontakt',
                        subtitle:
                            'Du hast eine Frage, ein Anliegen oder Feedback? Schreib uns gerne – wir melden uns so schnell wie möglich.',
                        infoTitle: 'Direkter Kontakt',
                        infoText: 'Alternativ erreichst du uns auch direkt über E-Mail.',
                        emailLabel: 'E-Mail',
                        formTitle: 'Nachricht senden',
                        name: 'Name',
                        email: 'E-Mail',
                        message: 'Nachricht',
                        send: 'Senden',
                        note:
                            'Wir behandeln Ihre Anfrage vertraulich und melden uns schnellstmöglich bei Ihnen. Ihre Zufriedenheit steht bei uns an erster Stelle.',
                        placeholderName: 'Max Mustermann',
                        placeholderEmail: 'max.mustermann@gmail.de',
                        placeholderMessage: 'Ich habe eine Frage bezüglich...',
                        successTitle: 'Nachricht angekommen!',
                        successText: 'Danke dir. Wir melden uns so schnell wie möglich.',
                        errorGeneric: 'Etwas ist fehl gelaufen. Bitte versuchen sie es erneut.',
                    },
                    legal: {
                        imprint: {
                            title: 'Impressum',
                            subtitle: 'Angaben gemäß § 5 DDG',

                            sections: {
                                provider: {title: 'Angaben gemäß § 5 DDG'},
                                contact: {title: 'Kontakt'},
                                vat: {title: 'Umsatzsteuer'},
                                euDispute: {title: 'EU-Streitschlichtung'},
                                consumerDispute: {title: 'Verbraucherstreitbeilegung / Universalschlichtungsstelle'},
                            },

                            provider: {
                                name: 'Ilir Hasanaj',
                                brandLine: 'handelnd unter der Marke „SLEEM“',
                                street: 'Augsburger Straße 31',
                                zipCity: '82256 Fürstenfeldbruck',
                                country: 'Deutschland',
                            },

                            contact: {
                                emailLabel: 'E-Mail:',
                                email: 'info@sleemhome.de',
                                formLabel: 'Kontaktformular:',
                                formUrl: 'https://sleemhome.de/contact',
                                responseTime: 'Antwortzeit in der Regel innerhalb von 24 Stunden.',
                            },

                            vat: {
                                text: 'Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:',
                                number: 'DE815899196',
                            },

                            euDispute: {
                                text: 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:',
                                url: 'https://ec.europa.eu/consumers/odr/',
                                note: 'Unsere E-Mail-Adresse finden Sie oben im Impressum.',
                            },

                            consumerDispute: {
                                text:
                                    'Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
                            },
                        },
                        privacy: {
                            title: 'Datenschutzerklärung',
                            subtitle: '',

                            general: {
                                title: '1. Allgemeine Hinweise',
                                p1:
                                    'Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. Nachfolgend informieren wir Sie darüber, welche Daten beim Besuch dieser Website erhoben und wie sie verwendet werden.',
                                p2:
                                    'Diese Website dient ausschließlich der Präsentation der Marke SLEEM sowie der Weiterleitung zu externen Verkaufsplattformen (z. B. Amazon). Über diese Website werden keine Bestellungen abgewickelt.',
                            },

                            controller: {
                                title: '2. Verantwortliche Stelle',
                                name: 'Ilir Hasanaj',
                                brandLine: 'handelnd unter der Marke „SLEEM“',
                                street: 'Augsburger Straße 31',
                                zipCity: '82256 Fürstenfeldbruck',
                                country: 'Deutschland',
                                emailLabel: 'E-Mail:',
                                email: 'info@sleemhome.de',
                            },

                            hosting: {
                                title: '3. Hosting',
                                p1: 'Diese Website wird bei folgendem Anbieter gehostet:',
                                provider: {
                                    name: 'Strato AG',
                                    street: 'Otto-Ostrowski-Straße 7',
                                    zipCity: '10249 Berlin',
                                },
                                p2:
                                    'Beim Besuch dieser Website erfasst der Hosting-Anbieter automatisch sogenannte Server-Log-Dateien. Diese enthalten insbesondere:',
                                logItems: [
                                    'Browsertyp und Browserversion',
                                    'verwendetes Betriebssystem',
                                    'Referrer-URL',
                                    'Hostname des zugreifenden Rechners',
                                    'Uhrzeit der Serveranfrage',
                                    'IP-Adresse',
                                ],
                                p3: 'Diese Daten werden nicht mit anderen Datenquellen zusammengeführt.',
                                legal:
                                    'Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der technisch fehlerfreien Darstellung, Stabilität und Sicherheit der Website.',
                            },

                            contactForm: {
                                title: '4. Kontaktformular',
                                p1:
                                    'Wenn Sie uns über das Kontaktformular kontaktieren, werden Ihre Angaben aus dem Formular inklusive der von Ihnen angegebenen Kontaktdaten zum Zweck der Bearbeitung Ihrer Anfrage gespeichert.',
                                p2: 'Die Verarbeitung erfolgt auf Grundlage von:',
                                legalBases: [
                                    'Art. 6 Abs. 1 lit. b DSGVO (Durchführung vorvertraglicher Maßnahmen), sofern Ihre Anfrage hiermit zusammenhängt, oder',
                                    'Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der effektiven Bearbeitung von Anfragen).',
                                ],
                                p3: 'Ihre Daten werden nicht ohne Ihre Einwilligung weitergegeben.',
                                p4:
                                    'Die Daten verbleiben bei uns, bis der Zweck der Speicherung entfällt oder gesetzliche Aufbewahrungsfristen entgegenstehen.',
                            },

                            amazon: {
                                title: '5. Weiterleitung zu Amazon',
                                p1: 'Unsere Website enthält Links zur Verkaufsplattform Amazon.',
                                p2:
                                    'Wenn Sie auf einen entsprechenden Link klicken, verlassen Sie unsere Website. Für die Datenverarbeitung auf der Amazon-Plattform ist ausschließlich Amazon verantwortlich.',
                                p3:
                                    'Informationen zur Datenverarbeitung durch Amazon finden Sie in der Datenschutzerklärung von Amazon unter:',
                                url: 'https://www.amazon.de/gp/help/customer/display.html?nodeId=GX7NJQ4ZB8MHFRNJ',
                            },

                            cookies: {
                                title: '6. Cookies',
                                p1: 'Diese Website verwendet ausschließlich technisch notwendige Cookies.',
                                p2:
                                    'Technisch notwendige Cookies sind erforderlich, um die grundlegenden Funktionen der Website zu gewährleisten (z. B. Navigation oder Formularübermittlung).',
                                p3: 'Eine Einwilligung ist hierfür nicht erforderlich.',
                                legal: 'Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.',
                            },

                            retention: {
                                title: '7. Speicherdauer',
                                p1:
                                    'Personenbezogene Daten werden nur so lange gespeichert, wie dies zur Erfüllung des jeweiligen Zwecks erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.',
                            },

                            rights: {
                                title: '8. Ihre Rechte',
                                p1: 'Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen folgende Rechte:',
                                items: [
                                    'Recht auf Auskunft (Art. 15 DSGVO)',
                                    'Recht auf Berichtigung (Art. 16 DSGVO)',
                                    'Recht auf Löschung (Art. 17 DSGVO)',
                                    'Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)',
                                    'Recht auf Datenübertragbarkeit (Art. 20 DSGVO)',
                                    'Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)',
                                    'Recht auf Widerruf einer erteilten Einwilligung',
                                ],
                                p2: 'Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.',
                                p3:
                                    'Bei Fragen zur Verarbeitung Ihrer personenbezogenen Daten können Sie sich jederzeit an uns wenden:',
                                email: 'info@sleemhome.de',
                            },
                        },
                        terms: {
                            title: 'Allgemeine Geschäftsbedingungen (AGB)',
                            subtitle: '',

                            sections: {
                                s1: {
                                    title: '1. Geltungsbereich',
                                    paras: [
                                        'Diese Website wird von Ilir Hasanaj unter der Marke „SLEEM“ betrieben.',
                                        'Diese Allgemeinen Geschäftsbedingungen regeln die Nutzung der Website sleemhome.de.',
                                        'Die Website dient ausschließlich der Präsentation der Marke SLEEM sowie der Weiterleitung zu externen Verkaufsplattformen (z. B. Amazon).',
                                    ],
                                },
                                s2: {
                                    title: '2. Kein Vertragsschluss über diese Website',
                                    paras: [
                                        'Über diese Website werden keine Kaufverträge abgeschlossen.',
                                        'Der Erwerb von Produkten erfolgt ausschließlich über externe Verkaufsplattformen. Für dort abgeschlossene Verträge gelten ausschließlich die jeweiligen Geschäftsbedingungen des Plattformbetreibers.',
                                    ],
                                },
                                s3: {
                                    title: '3. Inhalte der Website',
                                    paras: [
                                        'Die auf dieser Website bereitgestellten Inhalte dienen ausschließlich allgemeinen Informationszwecken.',
                                        'Wir übernehmen keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Informationen.',
                                        'Produktdarstellungen können technisch bedingt von der tatsächlichen Produktbeschaffenheit abweichen.',
                                    ],
                                },
                                s4: {
                                    title: '4. Externe Links',
                                    paras: [
                                        'Diese Website enthält Links zu externen Websites Dritter.',
                                        'Auf deren Inhalte haben wir keinen Einfluss. Für die Inhalte externer Seiten ist ausschließlich der jeweilige Anbieter oder Betreiber verantwortlich.',
                                    ],
                                },
                                s5: {
                                    title: '5. Urheberrecht',
                                    paras: [
                                        'Die Inhalte dieser Website (Texte, Bilder, Logos, Designs) unterliegen dem deutschen Urheberrecht.',
                                        'Eine Vervielfältigung, Bearbeitung oder Verbreitung ist ohne ausdrückliche schriftliche Zustimmung nicht gestattet.',
                                    ],
                                },
                                s6: {
                                    title: '6. Haftung',
                                    paras: [
                                        'Wir haften uneingeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit, die auf einer vorsätzlichen oder fahrlässigen Pflichtverletzung beruhen.',
                                        'Für sonstige Schäden haften wir nur bei Vorsatz oder grober Fahrlässigkeit.',
                                        'Bei leichter Fahrlässigkeit haften wir nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten) und beschränkt auf den vorhersehbaren, typischerweise eintretenden Schaden.',
                                    ],
                                },
                                s7: {
                                    title: '7. Änderungen der Website',
                                    paras: ['Wir behalten uns das Recht vor, Inhalte dieser Website jederzeit ohne gesonderte Ankündigung zu ändern oder zu entfernen.'],
                                },
                                s8: {
                                    title: '8. Anwendbares Recht',
                                    paras: ['Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.'],
                                },
                                s9: {
                                    title: '9. Kontakt',
                                    paras: [
                                        'Fragen zu diesen Allgemeinen Geschäftsbedingungen richten Sie bitte an:',
                                        'Ilir Hasanaj',
                                        'E-Mail: info@sleemhome.de',
                                    ],
                                },
                            },
                        },
                    },
                },
            },
            en: {
                translation: {
                    hero: {
                        badge: 'New Release • Premium Comfort',
                        title: 'Sleep like in a <1>boutique hotel</1>, every day.',
                        subtitle:
                            'Minimal design, premium materials, and a feeling of calm. For people who notice quality.',
                        preorder: 'Order',
                        viewBenefits: 'View product images',
                        trust: {
                            nights: {number: '30', label: 'Nights trial'},
                            premium: {number: 'Premium', label: 'Materials & build'},
                            clean: {number: 'Clean', label: 'Modern design'},
                        },
                        chips: {
                            hybrid: 'Hybrid Pillow',
                            seasons: 'Summer • Winter • Adjustable height',
                            productTitle: 'Pillow “Signature”',
                            productMeta: 'Memory Foam Core • Down • Cooling Side',
                        },
                        floating: {
                            a: 'Adjustable height · Neck support',
                            b: '2 sides · Summer/Winter',
                        },
                    },
                    faq: {
                        title: 'FAQ',
                        subtitle: 'Frequently asked questions about the SLEEM® Hybrid Pillow',
                        cta: 'View on Amazon',
                        items: [
                            {
                                id: 'hybrid-what',
                                question: 'What is a hybrid pillow, and why is it better than a regular pillow?',
                                answer:
                                    'A hybrid pillow combines different materials to bring together the best of two sleep experiences. The SLEEM® Hybrid Pillow merges the soft, luxurious feel of a high-quality down pillow with the stabilizing support of an ergonomic memory-foam core.\n\nTraditional down pillows can sink too much, while pure memory-foam pillows may feel too firm. SLEEM® creates a balanced sleep feel: soft on the surface, stable in the neck area.\n\nFor people who don’t want to choose between comfort and support.',
                            },
                            {
                                id: 'sleepers',
                                question: 'Is the SLEEM® Hybrid Pillow suitable for side and back sleepers?',
                                answer:
                                    'Yes. The pillow was designed specifically for side and back sleepers. The integrated neck support helps maintain a natural alignment of head and spine, while the soft outer chamber reduces pressure points.\n\nSide sleepers especially benefit from the stable height that helps prevent the head from sinking or bending unnaturally.\n\nErgonomic support that doesn’t feel “technical”. It feels natural.',
                            },
                            {
                                id: 'neck-pain',
                                question: 'Can the pillow help with neck pain or tension?',
                                answer:
                                    'The SLEEM® Hybrid Pillow is ergonomically designed to stabilize the neck area. Thanks to the combination of memory-foam support and a soft comfort layer, it can encourage a more relaxed sleeping posture. Many users experience a noticeably more stable feel compared to classic pillows.\n\nImportant: This is not a medical product. It’s a premium comfort pillow with ergonomic support.',
                            },
                            {
                                id: 'feel-vs',
                                question: 'How does the SLEEM® Hybrid Pillow feel compared to a down pillow or a memory-foam pillow?',
                                answer:
                                    'At first touch, it feels like a luxurious hotel down pillow: soft, cozy, and inviting. As soon as you lie down, the inner stability of the memory core kicks in. Your head sinks in gently, but remains supported and controlled.\n\nNo collapsing. No “hard board” feeling. Just a harmonious balance of comfort and security.',
                            },
                            {
                                id: 'two-sides',
                                question: 'Why does the pillow have two different sleeping sides?',
                                answer:
                                    'The SLEEM® Hybrid Pillow features two functional sides for different preferences. One side offers a slightly firmer, more structured feel. The other side feels softer and more classic.\n\nThis lets you tailor your sleep feel, depending on preference or season.',
                            },
                            {
                                id: 'height-adjustable',
                                question: 'Is the hybrid pillow height adjustable?',
                                answer:
                                    'The pillow’s construction is designed to provide an optimal height for most side and back sleepers. On top of that, you can adjust the height by removing or inserting the integrated elements.\n\nA personalized sleep feel, without complicated tech.',
                            },
                            {
                                id: 'orthopedic',
                                question: 'Is the SLEEM® pillow an alternative to an orthopedic pillow?',
                                answer:
                                    'Yes, for anyone who wants ergonomic support without giving up comfort. Many classic orthopedic pillows feel very “technical” or hard. SLEEM® combines stability with softness, offering an elegant alternative for demanding sleepers.\n\nErgonomically designed. Luxuriously executed.',
                            },
                            {
                                id: 'breathable',
                                question: 'Is the pillow breathable and suitable for warm nights?',
                                answer:
                                    'Yes. The material combination was chosen to allow air circulation and create a pleasant sleep climate. The cooler side is ideal for warmer nights, while the softer side feels extra cozy during colder seasons.\n\nOne pillow for every season.',
                            },
                            {
                                id: 'materials',
                                question: 'Which materials and quality standards are used?',
                                answer:
                                    'The SLEEM® Hybrid Pillow is made from carefully selected materials:\n\n• OEKO-TEX® tested textiles\n• CertiPUR® certified memory foam\n• Downpass® certified down and feathers\n• High-quality, tested filling materials\n\nQuality you don’t just see. You feel it.',
                            },
                            {
                                id: 'who-for',
                                question: 'Who is the SLEEM® Hybrid Pillow especially suitable for?',
                                answer:
                                    'This premium hybrid pillow is ideal for:\n\n• Side and back sleepers\n• People who want ergonomic neck support with “hotel comfort”\n• Anyone who doesn’t want to sleep extremely soft or extremely firm\n• Sleepers with occasional neck tension\n\nNot ideal for people who prefer very flat specialty pillows.',
                            },
                            {
                                id: 'adaptation',
                                question: 'How long does it take to get used to a hybrid pillow?',
                                answer:
                                    'Because the SLEEM® Hybrid Pillow combines a new kind of sleep feel, it may take a few nights to adjust. Many users report a calmer, more stable feel after a short time and overall more relaxed sleep.\n\nGreat sleep isn’t luck. It’s the result of the right support.',
                            },
                        ],
                    },
                    footer: {
                        tagline: 'Premium comfort, minimalist design built for real rest.',
                        navigation: 'Navigation',
                        legal: 'Legal',
                        imprint: 'Imprint',
                        privacy: 'Privacy Policy',
                        cookies: 'Cookies Policy',
                        newsTitle: 'Stay informed',
                        newsText: 'Sign up to be the first to hear about deals and updates.',
                        emailPlaceholder: 'Email',
                        newsNote: 'No spam. Unsubscribe anytime.',
                        vat: 'All prices include VAT.',
                        newsSuccess: "Thanks! You're on the waitlist.",
                        newsError: 'Something went wrong. Please try again later.',
                        close: 'Close',
                        submit: 'Submit',
                        term:'Terms',
                    },
                    nav: {
                        home: 'Home',
                        product: 'Product',
                        contact: 'Contact',
                        certificates: 'Certificates',
                        faq: 'FAQ',
                    },
                    contact: {
                        title: 'Contact',
                        subtitle:
                            'Questions, requests or feedback? Send us a message, we’ll get back to you as soon as possible.',
                        infoTitle: 'Direct contact',
                        infoText: 'You can also reach us directly via email.',
                        emailLabel: 'Email',
                        formTitle: 'Send a message',
                        name: 'Name',
                        email: 'Email',
                        message: 'Message',
                        send: 'Send',
                        note:
                            'We treat your request confidentially and will get back to you as soon as possible. Your satisfaction is our top priority.',
                        placeholderName: 'John Smith',
                        placeholderEmail: 'john.smith@gmail.de',
                        placeholderMessage: 'I have a question regarding...',
                        successTitle: 'Message received!',
                        successText: 'Thanks. We’ll get back to you as soon as possible.',
                        errorGeneric: 'Something went wrong. Please try again.',
                    },
                    legal: {
                        imprint: {
                            title: 'Imprint',
                            subtitle: 'Information according to § 5 DDG (Germany)',

                            sections: {
                                provider: {title: 'Provider information'},
                                contact: {title: 'Contact'},
                                vat: {title: 'VAT ID'},
                                euDispute: {title: 'EU dispute resolution'},
                                consumerDispute: {title: 'Consumer dispute resolution'},
                            },

                            provider: {
                                name: 'Ilir Hasanaj',
                                brandLine: 'acting under the brand “SLEEM”',
                                street: 'Augsburger Straße 31',
                                zipCity: '82256 Fürstenfeldbruck',
                                country: 'Germany',
                            },

                            contact: {
                                emailLabel: 'Email:',
                                email: 'info@sleemhome.de',
                                formLabel: 'Contact form:',
                                formUrl: 'https://sleemhome.de/contact',
                                responseTime: 'We usually respond within 24 hours.',
                            },

                            vat: {
                                text: 'VAT identification number according to § 27a German VAT Act:',
                                number: 'DE815899196',
                            },

                            euDispute: {
                                text: 'The European Commission provides a platform for online dispute resolution (ODR):',
                                url: 'https://ec.europa.eu/consumers/odr/',
                                note: 'You can find our email address above in this imprint.',
                            },

                            consumerDispute: {
                                text:
                                    'We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.',
                            },
                        },
                        privacy: {
                            title: 'Privacy Policy',
                            subtitle: '',

                            general: {
                                title: '1. General information',
                                p1:
                                    'Protecting your personal data is important to us. Below we explain which data is collected when you visit this website and how it is used.',
                                p2:
                                    'This website is used solely to present the SLEEM brand and to redirect visitors to external sales platforms (e.g. Amazon). No orders are processed on this website.',
                            },

                            controller: {
                                title: '2. Controller',
                                name: 'Ilir Hasanaj',
                                brandLine: 'acting under the brand “SLEEM”',
                                street: 'Augsburger Straße 31',
                                zipCity: '82256 Fürstenfeldbruck',
                                country: 'Germany',
                                emailLabel: 'Email:',
                                email: 'info@sleemhome.de',
                            },

                            hosting: {
                                title: '3. Hosting',
                                p1: 'This website is hosted by the following provider:',
                                provider: {
                                    name: 'Strato AG',
                                    street: 'Otto-Ostrowski-Straße 7',
                                    zipCity: '10249 Berlin',
                                },
                                p2:
                                    'When you visit this website, the hosting provider automatically collects so-called server log files. These may include:',
                                logItems: [
                                    'browser type and browser version',
                                    'operating system used',
                                    'referrer URL',
                                    'host name of the accessing device',
                                    'time of the server request',
                                    'IP address',
                                ],
                                p3: 'This data is not merged with other data sources.',
                                legal:
                                    'Processing is based on Art. 6(1)(f) GDPR. Our legitimate interest is the error-free presentation, stability, and security of the website.',
                            },

                            contactForm: {
                                title: '4. Contact form',
                                p1:
                                    'If you contact us via the contact form, your details from the form, including the contact data you provide, will be stored for the purpose of processing your request.',
                                p2: 'Processing is based on:',
                                legalBases: [
                                    'Art. 6(1)(b) GDPR (pre-contractual measures), if your request is related to such measures, or',
                                    'Art. 6(1)(f) GDPR (legitimate interest in efficiently handling inquiries).',
                                ],
                                p3: 'Your data will not be shared without your consent.',
                                p4:
                                    'Your data will remain with us until the purpose of storage no longer applies or legal retention obligations require otherwise.',
                            },

                            amazon: {
                                title: '5. Links to Amazon',
                                p1: 'Our website contains links to the sales platform Amazon.',
                                p2:
                                    'If you click such a link, you will leave our website. Amazon is solely responsible for data processing on the Amazon platform.',
                                p3: 'Information about Amazon’s data processing can be found here:',
                                url: 'https://www.amazon.de/gp/help/customer/display.html?nodeId=GX7NJQ4ZB8MHFRNJ',
                            },

                            cookies: {
                                title: '6. Cookies',
                                p1: 'This website uses only technically necessary cookies.',
                                p2:
                                    'Technically necessary cookies are required to ensure basic website functions (e.g. navigation or form submission).',
                                p3: 'No consent is required for these cookies.',
                                legal: 'Legal basis is Art. 6(1)(f) GDPR.',
                            },

                            retention: {
                                title: '7. Storage period',
                                p1:
                                    'Personal data is stored only as long as necessary to fulfill the respective purpose or as required by legal retention periods.',
                            },

                            rights: {
                                title: '8. Your rights',
                                p1: 'Under applicable law, you have the following rights:',
                                items: [
                                    'Right of access (Art. 15 GDPR)',
                                    'Right to rectification (Art. 16 GDPR)',
                                    'Right to erasure (Art. 17 GDPR)',
                                    'Right to restriction of processing (Art. 18 GDPR)',
                                    'Right to data portability (Art. 20 GDPR)',
                                    'Right to object (Art. 21 GDPR)',
                                    'Right to withdraw consent at any time',
                                ],
                                p2: 'You also have the right to lodge a complaint with a data protection supervisory authority.',
                                p3: 'If you have questions about the processing of your personal data, you can contact us at:',
                                email: 'info@sleemhome.de',
                            },
                        },
                        terms: {
                            title: 'Terms and Conditions (T&C)',
                            subtitle: '',

                            sections: {
                                s1: {
                                    title: '1. Scope',
                                    paras: [
                                        'This website is operated by Ilir Hasanaj under the brand “SLEEM”.',
                                        'These Terms and Conditions govern the use of the website sleemhome.de.',
                                        'This website is used solely to present the SLEEM brand and to redirect visitors to external sales platforms (e.g. Amazon).',
                                    ],
                                },
                                s2: {
                                    title: '2. No contract conclusion via this website',
                                    paras: [
                                        'No purchase contracts are concluded via this website.',
                                        'Products are purchased exclusively via external sales platforms. The terms and conditions of the respective platform operator apply to contracts concluded there.',
                                    ],
                                },
                                s3: {
                                    title: '3. Website content',
                                    paras: [
                                        'The content provided on this website is for general information purposes only.',
                                        'We make no warranties regarding the accuracy, completeness, or timeliness of the information provided.',
                                        'Product representations may differ from the actual product due to technical reasons.',
                                    ],
                                },
                                s4: {
                                    title: '4. External links',
                                    paras: [
                                        'This website contains links to external third-party websites.',
                                        'We have no influence over their content. The respective provider or operator is solely responsible for the content of external pages.',
                                    ],
                                },
                                s5: {
                                    title: '5. Copyright',
                                    paras: [
                                        'The contents of this website (texts, images, logos, designs) are subject to German copyright law.',
                                        'Reproduction, editing, or distribution is not permitted without explicit written consent.',
                                    ],
                                },
                                s6: {
                                    title: '6. Liability',
                                    paras: [
                                        'We are fully liable for damages resulting from injury to life, body, or health caused by an intentional or negligent breach of duty.',
                                        'For other damages, we are liable only in cases of intent or gross negligence.',
                                        'In cases of slight negligence, we are liable only for breaches of essential contractual obligations and limited to foreseeable damages typical for such cases.',
                                    ],
                                },
                                s7: {
                                    title: '7. Changes to the website',
                                    paras: ['We reserve the right to change or remove content on this website at any time without prior notice.'],
                                },
                                s8: {
                                    title: '8. Governing law',
                                    paras: ['The law of the Federal Republic of Germany applies, excluding the UN Convention on Contracts for the International Sale of Goods (CISG).'],
                                },
                                s9: {
                                    title: '9. Contact',
                                    paras: ['If you have questions about these Terms and Conditions, please contact:', 'Ilir Hasanaj', 'Email: info@sleemhome.de'],
                                },
                            },
                        },
                    },
                },
            },
            sq: {
                translation: {
                    hero: {
                        badge: 'E re • Komfort Premium',
                        title: 'Fli si në një <1>hotel butik</1>, çdo ditë.',
                        subtitle:
                            'Dizajn minimalist, materiale premium dhe një ndjesi qetësie. Për njerëz që e ndjejnë cilësinë.',
                        preorder: 'Porosit',
                        viewBenefits: 'Shiko fotot e produktit',
                        trust: {
                            nights: {number: '30', label: 'Netë provë'},
                            premium: {number: 'Premium', label: 'Materiale & punim'},
                            clean: {number: 'Clean', label: 'Dizajn modern'},
                        },
                        chips: {
                            hybrid: 'Jastëk Hybrid',
                            seasons: 'Verë • Dimër • I rregullueshëm',
                            productTitle: 'Jastëk “Signature”',
                            productMeta: 'Memory Foam • Pupla • Anë ftohëse',
                        },
                        floating: {
                            a: 'I rregullueshëm · Mbështetje qafe',
                            b: '2 anë · Verë/Dimër',
                        },
                    },
                    faq: {
                        title: 'FAQ',
                        subtitle: 'Pyetje të shpeshta rreth jastëkut SLEEM® Hybrid',
                        cta: 'Shiko në Amazon',
                        items: [
                            {
                                id: 'hybrid-what',
                                question: 'Çfarë është një jastëk hybrid, dhe pse është më i mirë se një jastëk i zakonshëm?',
                                answer:
                                    'Një jastëk hybrid kombinon materiale të ndryshme për të bashkuar më të mirën nga dy përvoja gjumi. Jastëku SLEEM® Hybrid bashkon butësinë luksoze të një jastëku cilësor me pupla me mbështetjen stabilizuese të një bërthame ergonomike memory-foam.\n\nJastëkët klasikë me pupla shpesh zhyten shumë, ndërsa jastëkët vetëm me memory-foam mund të duken tepër të fortë. SLEEM® krijon një ndjesi të balancuar: i butë në sipërfaqe, i qëndrueshëm në zonën e qafës.\n\nPër njerëz që nuk duan të zgjedhin mes komoditetit dhe mbështetjes.',
                            },
                            {
                                id: 'sleepers',
                                question: 'A është jastëku SLEEM® Hybrid i përshtatshëm për ata që flenë anash dhe në shpinë?',
                                answer:
                                    'Po. Jastëku është zhvilluar posaçërisht për gjumë anash dhe në shpinë. Mbështetja e integruar e qafës ndihmon që koka dhe shtylla kurrizore të qëndrojnë më natyrshëm, ndërsa shtresa e jashtme e butë redukton pikat e presionit.\n\nAta që flenë anash përfitojnë veçanërisht nga lartësia e qëndrueshme, që parandalon rënien e kokës ose kthesën jo natyrale.\n\nMbështetje ergonomike që nuk ndihet “teknike”. Ndihet e natyrshme.',
                            },
                            {
                                id: 'neck-pain',
                                question: 'A mund të ndihmojë jastëku për dhimbje qafe ose tension?',
                                answer:
                                    'Jastëku SLEEM® Hybrid është konceptuar ergonomikisht për të stabilizuar zonën e qafës. Kombinimi i mbështetjes memory-foam me një shtresë të butë komoditeti mund të nxisë një pozicion gjumi më të relaksuar. Shumë përdorues e ndjejnë më të qëndrueshëm krahasuar me jastëkët klasikë.\n\nE rëndësishme: Nuk është produkt mjekësor. Është një jastëk premium komoditeti me mbështetje ergonomike.',
                            },
                            {
                                id: 'feel-vs',
                                question: 'Si ndihet jastëku SLEEM® Hybrid krahasuar me një jastëk me pupla ose me memory-foam?',
                                answer:
                                    'Në kontaktin e parë, të kujton një jastëk luksoz hoteli me pupla: i butë, i këndshëm dhe të fton të shtrihesh. Sapo shtrihesh, aktivizohet stabiliteti i brendshëm i bërthamës. Koka zhytet lehtë, por mbetet e mbështetur në mënyrë të kontrolluar.\n\nPa “fundosje”. Pa ndjesi si “dërrasë e fortë”. Vetëm një ekuilibër harmonik mes komoditetit dhe sigurisë.',
                            },
                            {
                                id: 'two-sides',
                                question: 'Pse jastëku ka dy anë të ndryshme për të fjetur?',
                                answer:
                                    'Jastëku SLEEM® Hybrid ka dy anë funksionale për preferenca të ndryshme. Njëra anë jep ndjesi pak më të fortë dhe më të strukturuar. Ana tjetër është më e butë dhe më “klasike”.\n\nKështu e përshtat ndjesinë e gjumit sipas qejfit ose stinës.',
                            },
                            {
                                id: 'height-adjustable',
                                question: 'A është jastëku hybrid i rregullueshëm në lartësi?',
                                answer:
                                    'Ndërtimi i jastëkut është i balancuar që të krijojë lartësi optimale për shumicën e atyre që flenë anash ose në shpinë. Për më tepër, lartësia mund të personalizohet duke hequr ose vendosur elementët e integruar.\n\nNdjesi e personalizuar, pa teknologji të komplikuar.',
                            },
                            {
                                id: 'orthopedic',
                                question: 'A është jastëku SLEEM® një alternativë ndaj një jastëku ortopedik?',
                                answer:
                                    'Po, për këdo që do mbështetje ergonomike pa hequr dorë nga komoditeti. Shumë jastëkë ortopedikë klasikë ndihen shumë “teknikë” ose të fortë. SLEEM® kombinon qëndrueshmëri me butësi, duke krijuar një alternativë elegante për gjumëtarë kërkues.\n\nErgonomik në ide. Luksoz në realizim.',
                            },
                            {
                                id: 'breathable',
                                question: 'A është jastëku i ajrosshëm dhe i përshtatshëm për net të ngrohta?',
                                answer:
                                    'Po. Materialet janë zgjedhur që ajri të qarkullojë dhe të krijohet një klimë e këndshme gjumi. Ana më e freskët është ideale për netët e ngrohta, ndërsa ana më e butë jep ndjesi më “cozy” në stinët e ftohta.\n\nNjë jastëk për çdo sezon.',
                            },
                            {
                                id: 'materials',
                                question: 'Cilat materiale dhe standarde cilësie përdoren?',
                                answer:
                                    'Jastëku SLEEM® Hybrid prodhohet me materiale të përzgjedhura me kujdes:\n\n• Tekstile të testuara OEKO-TEX®\n• Memory-foam i certifikuar CertiPUR®\n• Pupla dhe pendë të certifikuara Downpass®\n• Materiale mbushëse cilësore dhe të testuara\n\nCilësi që nuk shihet vetëm. Por ndihet.',
                            },
                            {
                                id: 'who-for',
                                question: 'Për kë është veçanërisht i përshtatshëm jastëku SLEEM® Hybrid?',
                                answer:
                                    'Ky jastëk premium hybrid është ideal për:\n\n• Ata që flenë anash dhe në shpinë\n• Njerëz që duan mbështetje ergonomike të qafës me komoditet “si hotel”\n• Ata që nuk duan gjumë as shumë të butë, as shumë të fortë\n• Persona me tension të herëpashershëm në qafë\n\nNuk rekomandohet për ata që preferojnë jastëkë shumë të sheshtë specialë.',
                            },
                            {
                                id: 'adaptation',
                                question: 'Sa kohë duhet për t’u mësuar me një jastëk hybrid?',
                                answer:
                                    'Meqë jastëku SLEEM® Hybrid bashkon një ndjesi të re gjumi, adaptimi mund të zgjasë disa net. Megjithatë, shumë përdorues raportojnë pas pak kohe një ndjesi më të qëndrueshme, më të qetë dhe gjumë më të relaksuar.\n\nGjumë i mirë nuk është rastësi. Është rezultat i mbështetjes së duhur.',
                            },
                        ],
                    },
                    footer: {
                        tagline: 'Komfort premium, dizajn minimalist, për pushim të vërtetë.',
                        navigation: 'Navigim',
                        legal: 'Ligjore',
                        imprint: 'Imprint',
                        privacy: 'Privatësia',
                        cookies: 'Cookie Policy',
                        newsTitle: 'Qëndro i/e informuar',
                        newsText: 'Regjistrohu për të marrë njoftime për ofertat dhe përditësimet.',
                        emailPlaceholder: 'Email',
                        newsNote: 'Pa spam. Çregjistrohu kur të duash.',
                        vat: 'Të gjitha çmimet përfshijnë TVSH.',
                        newsSuccess: 'Faleminderit! Tani je në listën e pritjes.',
                        newsError: 'Diçka shkoi keq. Ju lutemi provoni përsëri më vonë.',
                        close: 'Mbyll',
                        submit: 'Dërgo',
                        term: 'Kushtet',
                    },
                    nav: {
                        home: 'Kreu',
                        product: 'Produkti',
                        contact: 'Kontakt',
                        certificates: 'Certifikata',
                        faq: 'FAQ',
                    },
                    contact: {
                        title: 'Kontakt',
                        subtitle: 'Ke pyetje, kërkesë ose feedback? Na shkruaj, do të përgjigjemi sa më shpejt.',
                        infoTitle: 'Kontakt direkt',
                        infoText: 'Mund të na kontaktosh edhe direkt me email.',
                        emailLabel: 'Email',
                        formTitle: 'Dërgo mesazh',
                        name: 'Emri',
                        email: 'Email',
                        message: 'Mesazhi',
                        send: 'Dërgo',
                        note:
                            'Ne e trajtojmë kërkesën tuaj me konfidencialitet dhe do t’ju kontaktojmë sa më shpejt të jetë e mundur. Kënaqësia juaj është prioriteti ynë kryesor.',
                        placeholderName: 'Arben Krasniqi',
                        placeholderEmail: 'arben.krasniqi@gmail.de',
                        placeholderMessage: 'Kam një pyetje në lidhje me...',
                        successTitle: 'Mesazhi u pranua!',
                        successText: 'Faleminderit. Do t’ju kontaktojmë sa më shpejt të jetë e mundur.',
                        errorGeneric: 'Diçka shkoi keq. Ju lutem provoni përsëri.',
                    },
                    legal: {
                        imprint: {
                            title: 'Impressum',
                            subtitle: 'Të dhëna sipas § 5 DDG (Gjermani)',

                            sections: {
                                provider: {title: 'Të dhëna të ofruesit'},
                                contact: {title: 'Kontakt'},
                                vat: {title: 'Numri i TVSH-së'},
                                euDispute: {title: 'Zgjidhja e mosmarrëveshjeve në BE'},
                                consumerDispute: {title: 'Zgjidhja e mosmarrëveshjeve me konsumatorët'},
                            },

                            provider: {
                                name: 'Ilir Hasanaj',
                                brandLine: 'vepron nën markën “SLEEM”',
                                street: 'Augsburger Straße 31',
                                zipCity: '82256 Fürstenfeldbruck',
                                country: 'Gjermani',
                            },

                            contact: {
                                emailLabel: 'Email:',
                                email: 'info@sleemhome.de',
                                formLabel: 'Formular kontakti:',
                                formUrl: 'https://sleemhome.de/contact',
                                responseTime: 'Zakonisht përgjigjemi brenda 24 orëve.',
                            },

                            vat: {
                                text: 'Numri i identifikimit të TVSH-së sipas § 27a të ligjit gjerman të TVSH-së:',
                                number: 'DE815899196',
                            },

                            euDispute: {
                                text: 'Komisioni Evropian ofron një platformë për zgjidhjen online të mosmarrëveshjeve (ODR):',
                                url: 'https://ec.europa.eu/consumers/odr/',
                                note: 'Adresën tonë të emailit e gjeni më sipër në këtë faqe.',
                            },

                            consumerDispute: {
                                text:
                                    'Ne nuk jemi të gatshëm dhe as të detyruar të marrim pjesë në procedurat e zgjidhjes së mosmarrëveshjeve pranë një organi arbitrazhi për konsumatorët.',
                            },
                        },
                        privacy: {
                            title: 'Politika e Privatësisë',
                            subtitle: '',

                            general: {
                                title: '1. Informacione të përgjithshme',
                                p1:
                                    'Mbrojtja e të dhënave tuaja personale është e rëndësishme për ne. Më poshtë shpjegojmë se cilat të dhëna mblidhen kur vizitoni këtë faqe dhe si përdoren.',
                                p2:
                                    'Kjo faqe shërben vetëm për prezantimin e markës SLEEM dhe për ridrejtim në platforma të jashtme të shitjes (p.sh. Amazon). Në këtë faqe nuk kryhen porosi.',
                            },

                            controller: {
                                title: '2. Përgjegjësi për përpunimin e të dhënave',
                                name: 'Ilir Hasanaj',
                                brandLine: 'vepron nën markën “SLEEM”',
                                street: 'Augsburger Straße 31',
                                zipCity: '82256 Fürstenfeldbruck',
                                country: 'Gjermani',
                                emailLabel: 'Email:',
                                email: 'info@sleemhome.de',
                            },

                            hosting: {
                                title: '3. Hosting',
                                p1: 'Kjo faqe hostohet te ofruesi i mëposhtëm:',
                                provider: {
                                    name: 'Strato AG',
                                    street: 'Otto-Ostrowski-Straße 7',
                                    zipCity: '10249 Berlin',
                                },
                                p2:
                                    'Kur vizitoni këtë faqe, ofruesi i hostimit mbledh automatikisht të ashtuquajturat server log files. Këto mund të përmbajnë:',
                                logItems: [
                                    'lloji i shfletuesit dhe versioni',
                                    'sistemi operativ i përdorur',
                                    'referrer URL',
                                    'emri i hostit të pajisjes që qaset',
                                    'koha e kërkesës në server',
                                    'adresa IP',
                                ],
                                p3: 'Këto të dhëna nuk bashkohen me burime të tjera të dhënash.',
                                legal:
                                    'Përpunimi bazohet në Nenin 6(1)(f) të GDPR. Interesi ynë i ligjshëm është paraqitja pa gabime, stabiliteti dhe siguria e faqes.',
                            },

                            contactForm: {
                                title: '4. Formulari i kontaktit',
                                p1:
                                    'Nëse na kontaktoni përmes formularit të kontaktit, të dhënat që plotësoni, përfshirë të dhënat e kontaktit, ruhen për qëllimin e trajtimit të kërkesës suaj.',
                                p2: 'Përpunimi bazohet në:',
                                legalBases: [
                                    'Neni 6(1)(b) GDPR (masa para-kontraktuale), nëse kërkesa juaj lidhet me këtë, ose',
                                    'Neni 6(1)(f) GDPR (interes i ligjshëm për trajtimin efektiv të kërkesave).',
                                ],
                                p3: 'Të dhënat tuaja nuk shpërndahen pa pëlqimin tuaj.',
                                p4:
                                    'Të dhënat ruhen derisa të mos jetë më i nevojshëm qëllimi i ruajtjes ose nëse ligji kërkon periudha të caktuara ruajtjeje.',
                            },

                            amazon: {
                                title: '5. Ridrejtim në Amazon',
                                p1: 'Faqja jonë përmban linke drejt platformës Amazon.',
                                p2:
                                    'Nëse klikoni një link të tillë, ju largoheni nga faqja jonë. Amazon është përgjegjëse për përpunimin e të dhënave në platformën e saj.',
                                p3: 'Më shumë informacion për përpunimin e të dhënave nga Amazon gjendet këtu:',
                                url: 'https://www.amazon.de/gp/help/customer/display.html?nodeId=GX7NJQ4ZB8MHFRNJ',
                            },

                            cookies: {
                                title: '6. Cookies',
                                p1: 'Kjo faqe përdor vetëm cookies teknikisht të domosdoshme.',
                                p2:
                                    'Cookies të domosdoshme janë të nevojshme për funksionet bazë të faqes (p.sh. navigimi ose dërgimi i formularit).',
                                p3: 'Për këto cookies nuk kërkohet pëlqim.',
                                legal: 'Baza ligjore është Neni 6(1)(f) GDPR.',
                            },

                            retention: {
                                title: '7. Kohëzgjatja e ruajtjes',
                                p1:
                                    'Të dhënat personale ruhen vetëm aq sa është e nevojshme për qëllimin përkatës ose sa kërkohet nga afatet ligjore të ruajtjes.',
                            },

                            rights: {
                                title: '8. Të drejtat tuaja',
                                p1: 'Sipas ligjeve në fuqi, ju keni këto të drejta:',
                                items: [
                                    'E drejta për informim (Neni 15 GDPR)',
                                    'E drejta për korrigjim (Neni 16 GDPR)',
                                    'E drejta për fshirje (Neni 17 GDPR)',
                                    'E drejta për kufizim të përpunimit (Neni 18 GDPR)',
                                    'E drejta për transferim të të dhënave (Neni 20 GDPR)',
                                    'E drejta për kundërshtim (Neni 21 GDPR)',
                                    'E drejta për tërheqje të pëlqimit të dhënë',
                                ],
                                p2: 'Ju keni gjithashtu të drejtën të ankoheni pranë një autoriteti mbikëqyrës për mbrojtjen e të dhënave.',
                                p3: 'Nëse keni pyetje për përpunimin e të dhënave tuaja personale, na kontaktoni në:',
                                email: 'info@sleemhome.de',
                            },
                        },
                        terms: {
                            title: 'Kushtet e Përgjithshme (AGB)',
                            subtitle: '',

                            sections: {
                                s1: {
                                    title: '1. Fusha e zbatimit',
                                    paras: [
                                        'Kjo faqe menaxhohet nga Ilir Hasanaj nën markën “SLEEM”.',
                                        'Këto kushte të përgjithshme rregullojnë përdorimin e faqes sleemhome.de.',
                                        'Faqja shërben vetëm për prezantimin e markës SLEEM dhe për ridrejtim në platforma të jashtme shitjeje (p.sh. Amazon).',
                                    ],
                                },
                                s2: {
                                    title: '2. Asnjë lidhje kontrate përmes kësaj faqeje',
                                    paras: [
                                        'Përmes kësaj faqeje nuk lidhen kontrata blerjeje.',
                                        'Blerja e produkteve bëhet vetëm përmes platformave të jashtme. Për kontratat e lidhura atje vlejnë kushtet e platformës përkatëse.',
                                    ],
                                },
                                s3: {
                                    title: '3. Përmbajtja e faqes',
                                    paras: [
                                        'Përmbajtja e ofruar në këtë faqe shërben vetëm për informim të përgjithshëm.',
                                        'Ne nuk garantojmë saktësinë, plotësinë dhe aktualitetin e informacionit të dhënë.',
                                        'Paraqitjet e produktit mund të ndryshojnë nga produkti real për arsye teknike.',
                                    ],
                                },
                                s4: {
                                    title: '4. Linke të jashtme',
                                    paras: [
                                        'Kjo faqe përmban linke drejt faqeve të jashtme të palëve të treta.',
                                        'Ne nuk kemi ndikim mbi përmbajtjen e tyre. Për përmbajtjen e faqeve të jashtme përgjegjës është vetëm ofruesi/operuesi përkatës.',
                                    ],
                                },
                                s5: {
                                    title: '5. E drejta e autorit',
                                    paras: [
                                        'Përmbajtjet e kësaj faqeje (tekste, imazhe, logo, dizajn) mbrohen nga e drejta gjermane e autorit.',
                                        'Riprodhimi, përpunimi ose shpërndarja nuk lejohet pa pëlqim të shprehur me shkrim.',
                                    ],
                                },
                                s6: {
                                    title: '6. Përgjegjësia',
                                    paras: [
                                        'Ne mbajmë përgjegjësi të plotë për dëme që rrjedhin nga cenimi i jetës, trupit ose shëndetit, nëse këto bazohen në shkelje të qëllimshme ose nga pakujdesia.',
                                        'Për dëme të tjera, mbajmë përgjegjësi vetëm në rast të qëllimit ose pakujdesisë së rëndë.',
                                        'Në rast të pakujdesisë së lehtë, mbajmë përgjegjësi vetëm për shkeljen e detyrimeve thelbësore dhe vetëm deri në dëmin e parashikueshëm tipik.',
                                    ],
                                },
                                s7: {
                                    title: '7. Ndryshime në faqe',
                                    paras: ['Ne rezervojmë të drejtën të ndryshojmë ose të heqim përmbajtje të kësaj faqeje në çdo kohë pa njoftim të veçantë.'],
                                },
                                s8: {
                                    title: '8. E drejta e zbatueshme',
                                    paras: ['Zbatohet e drejta e Republikës Federale të Gjermanisë, duke përjashtuar CISG (UN-Kaufrecht).'],
                                },
                                s9: {
                                    title: '9. Kontakt',
                                    paras: ['Për pyetje rreth këtyre kushteve, ju lutemi na kontaktoni:', 'Ilir Hasanaj', 'Email: info@sleemhome.de'],
                                },
                            },
                        },
                    },
                },
            },
        },
    })

export default i18n