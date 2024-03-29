(function () {
    (function (apiKey) {
        (function (p, e, n, d, o) {
            var v, w, x, y, z;
            o = p[d] = p[d] || {};
            o._q = [];
            v = ['initialize', 'identify', 'updateOptions', 'pageLoad'];
            for (w = 0, x = v.length; w < x; ++w)(function (m) {
                o[m] = o[m] || function () {
                    o._q[m === v[0] ? 'unshift' : 'push']([m].concat([].slice.call(
                        arguments, 0)));
                };
            })(v[w]);
            y = e.createElement(n);
            y.async = !0;
            y.src = 'https://cdn.pendo.io/agent/static/' + apiKey + '/pendo.js';
            z = e.getElementsByTagName(n)[0];
            z.parentNode.insertBefore(y, z);
        })(window, document, 'script', 'pendo');
        // Call this whenever information about your visitors becomes available
        // Please use Strings, Numbers, or Bools for value types.
        pendo.initialize({
            apiKey: apiKey,
            visitor: {
                id: 'VISITOR-UNIQUE-ID' // Required if user is logged in
                // email:        // Optional
                // role:         // Optional
                // You can add any additional visitor level key-values here,
                // as long as it's not one of the above reserved names.
            },
            account: {
                // id:           'ACCOUNT-UNIQUE-ID' // Highly recommended
                // name:         // Optional
                // planLevel:    // Optional
                // planPrice:    // Optional
                // creationDate: // Optional
                // You can add any additional account level key-values here,
                // as long as it's not one of the above reserved names.
            },
            events: {
                guidesLoaded: function () {
                    /*translate(pendo, {
                        language: getCurrentLanguage(),
                        url: 'http://127.0.0.1:3000/demoTransFile.json'
                    });*/
                    window.zE('webWidget', 'updateSettings', {
                        'webWidget': {
                            'helpCenter': {
                                'suppress': false
                            }
                        },
                        'position': {
                            'vertical': 'bottom',
                            'horizontal': 'left'
                        }
                    });
                    window.zE('webWidget:on', 'open', function () { console.log('The widget has been opened!'); });
                    window.zE('webWidget:on', 'close', function () {
                        window.zE('webWidget', 'hide');
                    });
                }
            }
        });
    })('f72d5f01-b371-4cad-7f04-df672c356b81');

    /*function getCurrentLanguage() {
        return prompt('What Lanaguage (en, es, fr, de, jp)');
    }

    function translate(pendo, config) {
        var translation = {};
        var translationPromise = {};

        translateGuides();
        translateLauncher();

        function translateGuides() {
            pendo._.each(pendo.guides, function (guide) {
                pendo._.each(guide.steps, function (step) {
                    loadTranslationBeforeShow(step);
                    translateVariablesBeforeRender(step);
                });
            });
        }

        function translateLauncher() {
            var guidesForLauncher = pendo._.filter(pendo.guides, function (guide) {
                return guide.shouldBeAddedToLauncher();
            });
            pendo._.each(guidesForLauncher, function (guide) {
                loadTranslation(guide.id).then(function () {
                    translateGuideNames(guide.id);
                    pendo.guideWidget.updateLauncherContent(guidesForLauncher);
                });
            });
        }

        function translateGuideNames(guideId) {
            var guide = pendo.findGuideById(guideId);
            var lang = getGuideTranslation(guideId);
            if (!lang) return;
            guide.name = lang.name || guide.name;
        }

        function loadTranslationBeforeShow(step) {
            if (!step.before) return;

            var cancelled = false;
            var done = false;

            step.before('hide', function beforeHide() {
                cancelled = true;
            });

            step.before('show', function beforeShow(reason) {
                cancelled = false;

                if (done) return true;
                if (translation[step.guideId]) return true;

                step.lock();

                loadTranslation(step.guideId).then(function () {
                    step.unlock();
                    if (cancelled) return;
                    done = true;
                    step.show(reason);
                    if (!step.isShown()) {
                        step.hide();
                    }
                }).fail(function () {
                    step.unlock();
                    if (cancelled) return;
                    done = true;
                    step.show(reason);
                    if (!step.isShown()) {
                        step.hide();
                    }
                });

                return false; // Prevent the guide from showing until the translation loads
            });
        }

        function translateVariablesBeforeRender(step) {
            if (!step.before) return;

            step.before('render', function translateGuide() {
                var stepTrans = getStepTranslation(step);
                if (!stepTrans) return;

                pendo._.each(
                    step.attributes.variables,
                    function pendoTranslateVariable(
                        value,
                        key,
                        variables
                    ) {
                        variables[key] =
                            pendoGettext(key, step, stepTrans) || variables[key];
                    }
                );
            });
        }

        function loadTranslation(guideId) {
            if (guideId) {
                var url = 'https://storage.googleapis.com/pro-serv-translations/' + guideId + '.json'
                if (!translationPromise[guideId]) {
                    translationPromise[guideId] = pendo.ajax.get(url).then(function (translationResponse) {
                        translation[guideId] = translationResponse.data;
                        return translation[guideId];
                    });
                }
            }
            return translationPromise[guideId];
        }

        function getGuideTranslation(guideId) {
            if (!translation[guideId]) return;
            return (translation[guideId] || {})[config.language];
        }

        function getStepTranslation(step) {
            return (getGuideTranslation(step.guideId) || {})[step.id];
        }

        function pendoGettext(key, step, stepTranslation) {
            // inspired by http://stackoverflow.com/questions/2400106/translation-in-javascript-like-gettext-in-php
            return (
                stepTranslation[key] ||
                (function () {
                    return false;
                })(this.guide, step, key)
            );
        }
    }*/
})();