import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img usemap="#logomap" src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <font color="red">*</font>
                <label for="customerId">
                    Customer
                </label>
                <select id="customerId" name="customerId" className="search-input" onchange="jspChangeCurrentCustomer()"
                    ng-non-bindable="true">
                    <option value="">Choose...</option>
                    <option ng-non-bindable="true" value="ALL_CUSTOMERS">All</option>
                    <option ng-non-bindable="true" value="6398">IOSApp</option>
                    <option ng-non-bindable="true" value="7718">Pendo Test</option>
                    <option ng-non-bindable="true" value="2051">TestCustomer</option>
                </select>
                <font color="red">*</font>
                <label for="sourceLanguage">
                    Source language
                </label>
                <select name="sourceLanguage" id="sourceLanguage" className="search-input search-input-id"
                    onchange="jspSrcLanguageChanged(event);" disabled="">
                    <option value="All">Choose...</option>
                </select>
                <font color="red">*</font>
                <label for="targetLanguage">
                    Target language
                </label>
                <span id="targetLanguages" className="edit icon disabled">✎</span>
                <select name="targetLanguage" id="targetLanguage" class="search-input search-input-id"
                    onchange="jspTgtLanguageChanged(event);" disabled="">
                    <option value="">Choose...</option>
                </select>
                <label for="projectName">
                    Project
                </label>
                <select name="projectName" id="projectName" className="search-input" onchange="jspProjectNameChanged(event);" disabled="">
                    <option value="All" selected="selected">All</option>
                </select>
                <br />
                <input type="text" id="searchValue" className="form-control ng-pristine ng-valid ng-empty ng-touched" ng-model="simpleSearchInput" ng-keypress="pSCtrl.toggleProjectFilterOff('key', $event)" ng-keydown="pSCtrl.toggleProjectFilterOff('key', $event)" name="projectFilter.simpleSearch" placeholder="What are you looking for?" autofocus=""></input>
                <br />
                <section id="tabBasic" aria-labelledby="ui-id-1" role="tabpanel"
                    className="ui-tabs-panel ui-corner-bottom ui-widget-content ui-xtm-tabs ui-tabs ui-corner-all ui-widget ui-tabs-collapsible ui-tabs-horizontal"
                    aria-hidden="false">
                    <ul role="tablist" className="ui-tabs-nav ui-corner-all ui-helper-reset ui-helper-clearfix ui-widget-header">
                        <li role="tab" tabindex="0"
                            className="ui-tabs-tab ui-corner-top ui-state-default ui-tab ui-tabs-active ui-state-active"
                            aria-controls="basic-tab" aria-labelledby="ui-id-12" aria-selected="true" aria-expanded="true"><a
                                href="#basic-tab" role="presentation" tabindex="-1" className="ui-tabs-anchor" id="ui-id-12">General</a>
                        </li>
                    </ul>
                    <section id="basic-tab" aria-labelledby="ui-id-12" role="tabpanel"
                        className="ui-tabs-panel ui-corner-bottom ui-widget-content" aria-hidden="false">
                        <div id="basic-tab" className="tab-content generic-config-container">
                            <div className="config-group group-BASIC">
                                <h1>System<span className="indicator active" id="tooltip_BASIC"></span></h1>
                                <table cellspacing="0" cellpadding="0">
                                    <tbody>
                                        <tr>
                                            <td className="label"> Home page URL </td>
                                            <td className="input" colspan="2"> <input type="text" size="20" value="https://xtm-intl.com"
                                                name="homePageURL"/>
                                                <div className="error-container"></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="label"> Application name </td>
                                            <td className="input" colspan="2"> <input type="text" size="20" value="XTM"
                                                name="aplicationName"/>
                                                <div className="error-container"></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="label"> Enable subcontracting </td>
                                            <td className="input" colspan="2"> <input type="checkbox" size="20" checked="checked"
                                                name="useSubcontracting" id="useSubcontracting"/>
                                                <div className="error-container"></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="label"> Enable TIPP </td>
                                            <td className="input" colspan="2"> <input type="checkbox" size="20" name="tipp.useTipp"
                                                id="tipp.useTipp"/>
                                                <div className="error-container"></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="label"> Enable TM and term tags </td>
                                            <td className="input" colspan="2"> <input type="checkbox" size="20" checked="checked"
                                                name="tags.useTagGroups" id="tags.useTagGroups"/>
                                                <div className="error-container"></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="label"> Enable XTM Chat </td>
                                            <td className="input" colspan="2"> <input type="checkbox" size="20" checked="checked"
                                                name="chat.chatEnable" id="chat.chatEnable"/>
                                                <div className="error-container"></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="label"> Company logo </td>
                                            <td className="input"> <input type="file" id="uploadBigLogo" name="uploadBigLogo" size="25"/>
                                                <div className="error-container"></div>
                                            </td>
                                            <td className="row_to_right" id="logoRow"> <span id="smallLogo"><img
                                                id="smallLogoImg" alt="" className="logo_small_upload"/></span><span
                                                    id="trashContainer"><img
                                                        src="themes/_default/1/images/pages/buttons/trash.png"
                                                        className="icon-container delete-tag" id="trash"/></span> </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="tooltips-container" id="tooltip_BASIC_content"> <span className="convert-to-html break"
                                name="SYSTEM_TOOLTIP">
                                <ul>
                                    <li> - Home page URL - Set links in XTM to connect to your website home page</li>
                                    <li> - Application name - Set the application name in email messages</li>
                                    <li> - Enable subcontracting - Enable the subcontracting feature</li>
                                    <li> - Enable TIPP - Switch on the ability to download and upload TIPP files</li>
                                    <li> - Enable XTM Xchange - Use and register in XTM Xchange</li>
                                    <li> - Enable TM and term tags - Use TM and term tags</li>
                                    <li> - Enable XTM Messenger - turns on and off the chat functionality for project managers and
                                        linguists</li>
                                    <li> - Company logo - Replace the XTM logo with your company logo on the login page and in the
                                        top left hand corner of all pages. Your logo should be in .png, .gif, .jpeg or .jpg format
                                        and will be automatically resized to 120 x 50 pixels</li>
                                </ul>
                            </span> </div>
                            <div className="button-message">
                                <div id="message-container"></div> <span id="save-button">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td id="button-save" className="js_button">
                                                    <div className="button-blue btn btn-xtm btn-primary" tabindex="0">
                                                        <div className="tl">
                                                            <div className="tr"></div>
                                                        </div>
                                                        <div className="processing"><img
                                                            src="themes/_default/1/images/pages/concrete_mixer_small.gif"
                                                            alt="processing..." title="processing..."/></div>
                                                        <div className="button-center">Save</div>
                                                        <div className="bl">
                                                            <div classNameName="br"></div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </span>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        );
    }
}

export default App;
