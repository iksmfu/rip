let command_history = [], command_pos = 0, command_curr = '', appString = '', appStringArray = [], appName = '';
function runApp(_0x4f2b0f) {
    if (_0x4f2b0f.includes('<') || _0x4f2b0f.includes('>')) {
        return false;
    }
    if (_0x4f2b0f.substring(0, 2) == '  ') {
        appName = _0x4f2b0f;
    } else {
        let _0x3b9905 = 0;
        _0x4f2b0f = _0x4f2b0f.trim();
        appStringArray = _0x4f2b0f.split(' ');
        appName = appStringArray[0];
        command_history.push(_0x4f2b0f);
        command_pos = command_history.length;
    }
    if (appName == '') {
        command_history.pop();
    } else {
        if (appName == 'help') {
            $('#console').html('');
            runApp_help();
        } else {
            if (appName == '?') {
                $('#console').html('');
                runApp_help();
            } else {
                if (appName == 'clear') {
                    runApp_clear();
                } else {
                    if (appName == 'c') {
                        runApp_clear();
                    } else {
                        if (appName == 'cls') {
                            runApp_clear();
                        } else {
                            if (appName == 'nigga') {
                                runApp_clear();
                                racism();
                            } else {
                                if (appName == 'nigger') {
                                    runApp_clear();
                                    racism();
                                } else {
                                    if (appName == 'cotton') {
                                        runApp_clear();
                                        racism();
                                    } else {
                                        if (appName == 'cotton picker') {
                                            runApp_clear();
                                            racism();
                                        } else {
                                            if (appName == 'iksm') {
                                                runApp_clear();
                                                iksm();
                                            } else {
                                                if (appName == 'ak') {
                                                    runApp_clear();
                                                    iksm();
                                                } else {
                                                    if (appName == 'AyyKayyZee') {
                                                        runApp_clear();
                                                        iksm();
                                                    } else {
                                                        if (appName == 'ayykayyzee') {
                                                            runApp_clear();
                                                            iksm();
                                                        } else {
                                                            if (appName == 'contact') {
                                                                runApp_clear();
                                                                contact();
                                                            } else {
                                                                if (appName == 'CONTACT') {
                                                                    runApp_clear();
                                                                    contact();
                                                                } else {
                                                                    if (appName == 'members') {
                                                                        runApp_clear();
                                                                        members();
                                                                    } else {
                                                                        if (appName == 'member') {
                                                                            runApp_clear();
                                                                            members();
                                                                        } else {
                                                                            if (appName == 'PRICES') {
                                                                                runApp_clear();
                                                                                prices();
                                                                            } else {
                                                                                if (appName == 'duxi0r') {
                                                                                    runApp_clear();
                                                                                    duxi0r();
                                                                                } else {
                                                                                    if (appName == 'duxi0') {
                                                                                        runApp_clear();
                                                                                        duxi0r();
                                                                                    } else {
                                                                                        if (appName == 'PURCHASE') {
                                                                                            runApp_clear();
                                                                                            purchase();
                                                                                        } else {
                                                                                            if (appName == 'waddsadwadsadwasd') {
                                                                                                runApp_clear();
                                                                                                purchase();
                                                                                            } else {
                                                                                                if (appName == 'wadsadassadasgdsaudgusa') {
                                                                                                    runApp_clear();
                                                                                                    purchase();
                                                                                                } else {
                                                                                                    if (appName == 'niggers') {
                                                                                                        runApp_clear();
                                                                                                        racism();
                                                                                                    } else
                                                                                                        if (appName == 'sen') {
                                                                                                            runApp_clear();
                                                                                                            sen(); 
                                                                                                        } else
                                                                                                            if (appName == 'zmap') {
                                                                                                                runApp_clear();
                                                                                                                zmap(); 
                                                                                                            } else
                                                                                                                if (appName == 'breached') {
                                                                                                                    runApp_clear();
                                                                                                                    
                                       breached(); 
                                                                                                                } else
                                                                                                                    if (appName == 'xhvw') {
                                                                                                                        runApp_clear();
                                                                                                                        xhvw(); 
                                                                                                                    } else
                                                                                                                        if (appName == 'hos') {
                                                                                                                            runApp_clear();
                                                                                                                            hos(); 
                                                                                                                        } else {
                                                                                                                                if (appName == 'niggerz') {
                                                                                                                                    runApp_clear();
                                                                                                                                    racism();
                                                                                                                                } else {
                                                                                                                                    runApp_errorMsg('command \'' + appName + '\' does not exist, try using the help arg.');
                                                                                                                                }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    Typer.awaitInput();
}
(function () {
    const _0x1c9594 = function () {
        let _0x2c1108;
        try {
            _0x2c1108 = Function('return (function() {}.constructor("return this")( ));')();
        } catch (_0x54d00c) {
            _0x2c1108 = window;
        }
        return _0x2c1108;
    };
    const _0x78eb78 = _0x1c9594();
    _0x78eb78.setInterval(_0x10128a, 4000);
}());