var modal_Autumn_2018 = $modal({
    title: 'Сезон Осень-2020',
    content: '<div class="table">\n' +
        '                1ДИВИЗИОН:\n' +
        '                🥇 Либерти\n' +
        '                🥈 Балаган\n' +
        '                🥉 Наша команда\n' +
        '            </div>\n' +
        '            </br>\n' +
        '            <div class="table">\n' +
        '                2ДИВИЗИОН:\n' +
        '                🥇 Авентус\n' +
        '                🥈 GD_Team\n' +
        '                🥉 Прилуки\n' +
        '            </div>\n' +
        '            </br>\n' +
        '            <div class="table">\n' +
        '                3ДИВИЗИОН:\n' +
        '                🥇 Брют\n' +
        '                🥈 АГАТ\n' +
        '                🥉 Belavia\n' +
        '            </div>\n' +
        '            </br>\n' +
        '            <div class="table">\n' +
        '                4ДИВИЗИОН:\n' +
        '                🥇 #ZAV_RAD\n' +
        '                🥈 Рубик\n' +
        '                🥉 UNIQUE\n' +
        '            </div>',
    footerButtons: [
        { class: 'btn btn__cancel', text: 'Отмена', handler: 'modalHandlerCancel' },
        { class: 'btn btn__ok', text: 'ОК', handler: 'modalHandlerOk' }
    ]
});
