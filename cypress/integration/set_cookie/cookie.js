it.only('test', () => {
    
})



it('autorizacia', () => {
crypto.request({
    method: 'GET',
    url: 'https://www.demoblaze.com/config.json',
    accept: 'application/json, text/plain, */*',
    authorization: '',
    headers: {
        'Content-Type': 'text/html',
        'aut': 'BeUser1'
    }
})

});

//vlastné príkazy