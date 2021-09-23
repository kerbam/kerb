// Title: Globally Translate Guide names and variables
// Author: Matthew Kerbawy <matt@pendo.io>

// Will only translate guides which have content stored in template variables

// Defaults to stored values if language requested language not found
// Logs to agent log: pendo.enableLogging()
// Requires:
//  * CSS contains 'visibility: hidden;' in root (syntax will look incorrect)
//  * all text content of step in template variables
//  * Set HTML lang attribute
//     https://www.w3.org/International/questions/qa-html-language-declarations
//  * Templated step (step.attribute.variables in use)
//  * Format of JSON file, see example in repo
var translate = false;
var transFile =
    'https://storage.googleapis.com/pro-serv-translations/demoTranslations/demoTransFile.json';

if (translate) {
    var currentLanguage = getCurrentLanguage();
    if (currentLanguage) {
        pendoLogGuideLogic('Init translation set up');
        pendoLogGuideLogic('Will I see you on soft route changes? Doubt it!');
        pendo.ajax.get(transFile).then(function pendoPutTranslation (
            trans
        ) {
            pendo._.each(pendo.guides, function (guide) {
                var guideTrans = trans.data[guide.id] || null;
                if (guideTrans) {
                    var lang = guideTrans[currentLanguage] || null;
                };
                if (guideTrans && lang) {
                    guide.name = lang['name'] || guide.name;
                    // TODO skip launcher?
                    pendo._.each(guide.steps, function addBeforeMethod (step, guide) {
                        if (step.before) {
                            step.before('render', function translateGuide () {
                                // debugger
                                var stepTrans = lang[step.id] || null;
                                if (stepTrans) {
                                    pendo._.each(
                                        step.attributes.variables,
                                        function pendoTranslateVariable (
                                            value,
                                            key,
                                            variables
                                        ) {
                                            variables[key] =
                                                pendoGettext(key, step, stepTrans) || variables[key];
                                        }
                                    );
                                } else {
                                    pendoLogGuideLogic(
                                        'translations for step ' + step.id + ' not found'
                                    );
                                }
                            });
                        }
                        if (step.after) {
                            step.after('render', function addAfterMethod () {
                                var stepId = this.id;
                                pendoLogGuideLogic('Adding hidden property to ' + stepId);
                                pendo.dom('#_pendo_g_' + stepId).css({visibility: 'hidden'});
                                setTimeout(function (step) {
                                    pendoLogGuideLogic('Removing hidden property from ' + stepId);
                                    pendo.dom('#_pendo_g_' + stepId).css({visibility: 'visible'});
                                }, 500);
                            });
                        }
                    }, guide);
                }
            }, currentLanguage);
            pendo.guideWidget.updateLauncherContent(
                pendo._.filter(pendo.guides, function (guide) {
                    return guide.shouldBeAddedToLauncher();
                })
            );
            // TODO translate launcher text (more than just guide names)
            pendoLogGuideLogic('Setup Complete');
        });
    } else {
        pendoLogGuideLogic('Lang not set');
    }
}

function pendoLogGuideLogic (msg) {
    guideId = 'GlobalJs';
    pendo.log('Guide Logic: ' + guideId + ': ' + msg);
}

function getCurrentLanguage () {
    return prompt('What Lanaguage (en, es, fr, de, jp)');
}

function pendoGettext (key, step, translation) {
    // inspired by http://stackoverflow.com/questions/2400106/translation-in-javascript-like-gettext-in-php
    pendoLogGuideLogic('Translating step ' + step.id + ' in ' + step.guide.id);
    return (
        translation[key] ||
        (function () {
            pendoLogGuideLogic(
                'translation key not found: ' +
                    key
            );
            return false;
        })(this.guide, step, key)
    );
}
