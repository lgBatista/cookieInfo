# O componente
O componente foi criado com o intuito de exibir uma mensagem padrão do uso de cookie

# Como utilizar
Para utilizar o componente é necessário primeiramente importar o arquivo JS
```sh
<script src="cookieInfo.js"></script>
```
Após isso, é só utilizar a tag 'cookie-info' para aplicar o componente
```sh
<cookie-info url="http://www.google.com.br" />
```

A tag possibilita a inclusão de parâmetros para maior controle do seu comportamento, sendo a **url** o único parâmetro obrigatório
```sh
<cookie-info url="http://www.google.com.br" fixed session />
```

### Parâmetros

| Nome | Tipo | Descrição | 
| ------ | ------ | ------ |
| url **(Obrigatório)** | string | url da política de privacidade que será inserida no link na mensagem 
| fixed | boolean | Caso presente, a mensagem aparecerá sempre que mudar de página, independente se o usuário aceitar ou não o cookie. Caso ausente, quando o usuário clicar em aceitar o cookie será gerado um localstorage para controlar a exibição ou não da mensagem.
| session | boolean | Caso presente, o controle de exibição da mensagem será feito via sessionstorage ao invés de localstorage, fazendo com que, mesmo se aceitado o uso de cookie, a mensagem seja exibida novamente caso o usuário abra uma nova aba. O parâmetro **fixed** sobrescreve este parâmetro.

