$(function () {
    //var nome = '';
    $nome = '';

    $.ajax({
        url:'https://viacep.com.br/ws/01001000/json/',
        method: 'get',
        success: function (data) { 
            $Localidade = data.localidade;
            $Logradouro = data.logradouro;

            $('#Localidade').val($localidade);
            $('#Logradouro').val($logradouro);
        },
        error: function (err) { }
    })

});