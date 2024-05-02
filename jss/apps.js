let command_list = [
    'Normal commands: (this is not a command)',
    ' > members',
    ' > contact',
    ' > hos',
    ' > niggers',
    'Member links: (this is not a command)',
    ' > iksm',
    ' > miche'
];
function runApp_errorMsg(_0x5d3707) {
    Typer.newLine();
    Typer.write('error: ', 'red');
    Typer.write(_0x5d3707);
}
function sleep(_0x11d8ae) {
    return new Promise(_0x75406 => setTimeout(_0x75406, _0x11d8ae));
}
function runApp_arrows(_0x358f15) {
    numCommands = command_history.length;
    if (command_pos == -1) {
        command_pos = numCommands;
    }
    if (_0x358f15 == 'up') {
        if (command_pos > 0) {
            command_pos = command_pos - 1;
        }
    } else {
        if (command_pos < numCommands) {
            command_pos = command_pos + 1;
        }
    }
    if (command_pos == numCommands) {
        $('#console').find('span.input').last().html(command_curr);
    } else {
        $('#console').find('span.input').last().html(command_history[command_pos]);
    }
}
function runApp_help() {
    newln = 0;
    $('#console').html('');
    Typer.write('MommyDestroyer50: command list');
    let _0x324a5c = command_list.length;
    for (let _0x26db9f = 0; _0x26db9f < _0x324a5c; _0x26db9f++) {
        Typer.newLine();
        Typer.write('' + command_list[_0x26db9f], 'help');
        
    }
}
var blm = 0;
function wtf() {
    blm++;
}
function racism() {
    wtf();
    $('#console').html('');
    if (blm == 2) {
        var _0x4e2cb1 = 'https://forms.fbi.gov/copy_of_tips/thank-you-for-tip';
        window.location.href = _0x4e2cb1;
    } else {
        var _0xe83d35 = 0;
        Typer.write('Woah, hold up buddy what did you just say there?');
        Typer.newLine();
        Typer.write('Due to the nature of the racism on your end.');
        Typer.newLine();
        Typer.write('You have been logged and your information is being sent,');
        Typer.newLine();
        Typer.write('to the appropriate justice department, if this occurs again.');
        Typer.newLine();
        Typer.write('> Do it one more time watch what happens! <');
    }
}



function members() {
    var _0xf0e5a9 = 0;
    Typer.write('unknown');
    Typer.newLine();
    Typer.write('> iksm');
    Typer.newLine();
    Typer.write('> miche')
}

function contact() {
    var _0xf0e5a9 = 0;
    Typer.write('Discord: @iksm');
}


function sen() {
    var _0x42fd2f = 'https://iksm.wtf/iksm';
    window.location.href = _0x42fd2f;
}
function xhvw() {
    var _0x42fd2f = 'https://iksm.wtf/miche';
    window.location.href = _0x42fd2f;

}

function runApp_clear() {
    $('#console').html('');
    newln = 0;
}
